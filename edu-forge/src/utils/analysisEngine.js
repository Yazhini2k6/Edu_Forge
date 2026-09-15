// Heuristic analysis engine for EduForge AI.
//
// Every function here is a pure, deterministic stand-in for a model call.
// Each one is written so a single call site (fetch to an LLM or a scoring
// service) can be dropped in later without changing what the page does
// with the return value \u2014 the shape of the output is the contract.

import {
  ROLE_REQUIREMENTS, LANGUAGES, DOMAINS, TECH_TRENDS,
  INDUSTRY_KEYWORDS, OUTDATED_KEYWORDS, INDUSTRY_SKILL_SETS,
  DEMAND_SKILLS, LEARNING_RESOURCES
} from './mockData.js'

export function parseList(text) {
  return text
    .split(/[,\n]/)
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean)
}

// ---------- Student Intelligence ----------

export function predictCareerReadiness(skillsText, targetRole) {
  const skills = new Set(parseList(skillsText))
  const required = ROLE_REQUIREMENTS[targetRole] || []
  const matched = required.filter((r) => skills.has(r))
  const missing = required.filter((r) => !skills.has(r))
  const score = required.length ? Math.round((matched.length / required.length) * 100) : 0
  let verdict = 'Not yet ready'
  if (score >= 80) verdict = 'Interview ready'
  else if (score >= 55) verdict = 'Close \u2014 a few gaps remain'
  else if (score >= 30) verdict = 'Foundational stage'
  return { score, matched, missing, verdict, required }
}

export function analyzeResume(resumeText) {
  const text = resumeText.toLowerCase()
  const words = resumeText.trim().split(/\s+/).filter(Boolean)
  const wordCount = words.length
  const knownSkills = Object.keys(ROLE_REQUIREMENTS).flatMap((r) => ROLE_REQUIREMENTS[r])
  const uniqueSkills = [...new Set(knownSkills)]
  const foundSkills = uniqueSkills.filter((s) => text.includes(s))
  const actionVerbs = ['built', 'led', 'designed', 'developed', 'implemented', 'improved', 'launched', 'optimized', 'created', 'managed']
  const verbHits = actionVerbs.filter((v) => text.includes(v))
  const sections = ['education', 'experience', 'projects', 'skills'].filter((s) => text.includes(s))
  const hasNumbers = /\d/.test(resumeText)

  const suggestions = []
  if (wordCount < 150) suggestions.push('The resume reads as thin \u2014 add specific project or work detail.')
  if (verbHits.length < 3) suggestions.push('Lead more bullet points with a strong action verb (built, led, designed).')
  if (!hasNumbers) suggestions.push('Quantify impact where possible (%, time saved, users reached).')
  if (!sections.includes('projects')) suggestions.push('Add a Projects section \u2014 it carries the most weight for early-career candidates.')
  if (foundSkills.length < 4) suggestions.push('List concrete tools and technologies, not just soft skills.')
  if (suggestions.length === 0) suggestions.push('Solid structure \u2014 focus next on tailoring skills to each target role.')

  return { wordCount, foundSkills, verbHits, sections, suggestions }
}

export function analyzeSkillGap(currentSkillsText, targetRole) {
  const { matched, missing, required, score } = predictCareerReadiness(currentSkillsText, targetRole)
  const prioritized = missing.map((skill, i) => ({
    skill,
    priority: i < Math.ceil(missing.length / 2) ? 'High' : 'Medium'
  }))
  return { matched, missing: prioritized, required, readiness: score }
}

export function recommendLearningPath(weakSkillsText) {
  const skills = parseList(weakSkillsText)
  return skills.map((skill) => ({
    skill,
    resources: LEARNING_RESOURCES[skill] || LEARNING_RESOURCES.default
  }))
}

// ---------- Skill Intelligence ----------

export function recommendProgrammingLanguages(interestTags) {
  const scored = LANGUAGES.map((lang) => {
    const overlap = lang.tags.filter((t) => interestTags.includes(t)).length
    return { ...lang, score: overlap }
  })
  return scored.sort((a, b) => b.score - a.score).slice(0, 5)
}

export function recommendDomains(interestTags) {
  const scored = DOMAINS.map((d) => {
    const overlap = d.tags.filter((t) => interestTags.includes(t)).length
    return { ...d, score: overlap }
  })
  return scored.sort((a, b) => b.score - a.score)
}

export function getTechTrends(category) {
  const list = category && category !== 'All'
    ? TECH_TRENDS.filter((t) => t.category === category)
    : TECH_TRENDS
  return [...list].sort((a, b) => b.growth - a.growth)
}

// ---------- Curriculum Intelligence ----------

export function analyzeSyllabusRelevance(topicsText) {
  const topics = parseList(topicsText)
  const results = topics.map((topic) => {
    const hit = INDUSTRY_KEYWORDS.some((kw) => topic.includes(kw))
    return { topic, relevant: hit }
  })
  const relevantCount = results.filter((r) => r.relevant).length
  const score = topics.length ? Math.round((relevantCount / topics.length) * 100) : 0
  return { results, score }
}

export function detectOutdatedTopics(topicsText) {
  const topics = parseList(topicsText)
  const flagged = topics.filter((topic) =>
    OUTDATED_KEYWORDS.some((kw) => topic.includes(kw))
  )
  return { flagged, total: topics.length, cleanRatio: topics.length ? Math.round(((topics.length - flagged.length) / topics.length) * 100) : 100 }
}

export function analyzeIndustryAlignment(topicsText, industry) {
  const topics = new Set(parseList(topicsText))
  const required = INDUSTRY_SKILL_SETS[industry] || []
  const covered = required.filter((r) => [...topics].some((t) => t.includes(r) || r.includes(t)))
  const missing = required.filter((r) => !covered.includes(r))
  const score = required.length ? Math.round((covered.length / required.length) * 100) : 0
  return { covered, missing, score, required }
}

export function computeCurriculumModernity(topicsText) {
  const relevance = analyzeSyllabusRelevance(topicsText)
  const outdated = detectOutdatedTopics(topicsText)
  const composite = Math.round(relevance.score * 0.6 + outdated.cleanRatio * 0.4)
  let label = 'Needs revision'
  if (composite >= 80) label = 'Highly modern'
  else if (composite >= 60) label = 'Reasonably current'
  else if (composite >= 40) label = 'Aging'
  return {
    composite,
    label,
    breakdown: [
      { label: 'Industry relevance', value: relevance.score },
      { label: 'Free of outdated topics', value: outdated.cleanRatio }
    ]
  }
}

// ---------- Faculty Intelligence ----------

export function analyzeStudentSkills(rosterText) {
  // Each line: "Student Name: skill1, skill2, skill3"
  const lines = rosterText.split('\n').map((l) => l.trim()).filter(Boolean)
  const students = lines.map((line) => {
    const [name, skillsPart] = line.split(':')
    const skills = skillsPart ? parseList(skillsPart) : []
    return { name: (name || 'Unnamed').trim(), skills }
  })
  const freq = {}
  students.forEach((s) => s.skills.forEach((sk) => { freq[sk] = (freq[sk] || 0) + 1 }))
  const ranked = Object.entries(freq)
    .map(([skill, count]) => ({ skill, count, coverage: Math.round((count / (students.length || 1)) * 100) }))
    .sort((a, b) => b.count - a.count)
  const avgSkillsPerStudent = students.length
    ? Math.round((students.reduce((sum, s) => sum + s.skills.length, 0) / students.length) * 10) / 10
    : 0
  return { students, ranked, avgSkillsPerStudent }
}

export function analyzeCourseOutcomes(outcomesText) {
  // Each line: "Outcome name: score1 score2 score3" (assessment scores out of 100)
  const lines = outcomesText.split('\n').map((l) => l.trim()).filter(Boolean)
  return lines.map((line) => {
    const [name, scoresPart] = line.split(':')
    const scores = (scoresPart || '').trim().split(/\s+/).map(Number).filter((n) => !Number.isNaN(n))
    const avg = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0
    let status = 'Not attained'
    if (avg >= 70) status = 'Attained'
    else if (avg >= 50) status = 'Partially attained'
    return { outcome: (name || 'Unnamed outcome').trim(), avg, status, sampleSize: scores.length }
  })
}

// ---------- Education Intelligence ----------

export function compareCurricula(curriculumAText, curriculumBText) {
  const a = new Set(parseList(curriculumAText))
  const b = new Set(parseList(curriculumBText))
  const shared = [...a].filter((t) => b.has(t))
  const onlyA = [...a].filter((t) => !b.has(t))
  const onlyB = [...b].filter((t) => !a.has(t))
  const union = new Set([...a, ...b])
  const overlapScore = union.size ? Math.round((shared.length / union.size) * 100) : 0
  return { shared, onlyA, onlyB, overlapScore }
}

export function analyzeSkillDemand(domainFilter) {
  const list = domainFilter && domainFilter !== 'All'
    ? DEMAND_SKILLS.filter((d) => d.domain === domainFilter)
    : DEMAND_SKILLS
  return [...list].sort((a, b) => b.demand - a.demand)
}

export function supportEducationalDecision(options) {
  // options: [{ name, cost, facultyReadiness, studentDemand, industryAlignment }] each 0-100 except cost (0-100, lower better)
  return options
    .map((o) => {
      const weighted =
        o.industryAlignment * 0.35 +
        o.studentDemand * 0.25 +
        o.facultyReadiness * 0.25 +
        (100 - o.cost) * 0.15
      return { ...o, weightedScore: Math.round(weighted) }
    })
    .sort((a, b) => b.weightedScore - a.weightedScore)
}
