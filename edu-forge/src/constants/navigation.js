// Single source of truth for the app's information architecture.
// Mirrors the EduForge AI module tree: each top-level module owns an
// accent color (used for the sidebar rail, card borders and stat values)
// and a list of features with their route path and component key.

export const NAV = [
  {
    id: 'student-intelligence',
    label: 'Student Intelligence',
    accent: 'var(--ember)',
    features: [
      { id: 'career-readiness-prediction', label: 'Career Readiness Prediction', path: '/student-intelligence/career-readiness-prediction' },
      { id: 'resume-analysis', label: 'Resume Analysis', path: '/student-intelligence/resume-analysis' },
      { id: 'skill-gap-analysis', label: 'Skill Gap Analysis', path: '/student-intelligence/skill-gap-analysis' },
      { id: 'learning-recommendations', label: 'Learning Recommendations', path: '/student-intelligence/learning-recommendations' }
    ]
  },
  {
    id: 'skill-intelligence',
    label: 'Skill Intelligence',
    accent: 'var(--steel)',
    features: [
      { id: 'programming-language-recommendation', label: 'Programming Language Recommendation', path: '/skill-intelligence/programming-language-recommendation' },
      { id: 'domain-recommendation', label: 'Domain Recommendation', path: '/skill-intelligence/domain-recommendation' },
      { id: 'technology-trend-analysis', label: 'Technology Trend Analysis', path: '/skill-intelligence/technology-trend-analysis' }
    ]
  },
  {
    id: 'curriculum-intelligence',
    label: 'Curriculum Intelligence',
    accent: 'var(--moss)',
    features: [
      { id: 'syllabus-relevance-analysis', label: 'Syllabus Relevance Analysis', path: '/curriculum-intelligence/syllabus-relevance-analysis' },
      { id: 'outdated-topic-detection', label: 'Outdated Topic Detection', path: '/curriculum-intelligence/outdated-topic-detection' },
      { id: 'industry-alignment', label: 'Industry Alignment', path: '/curriculum-intelligence/industry-alignment' },
      { id: 'curriculum-modernity-score', label: 'Curriculum Modernity Score', path: '/curriculum-intelligence/curriculum-modernity-score' }
    ]
  },
  {
    id: 'faculty-intelligence',
    label: 'Faculty Intelligence',
    accent: 'var(--plum)',
    features: [
      { id: 'student-skill-analytics', label: 'Student Skill Analytics', path: '/faculty-intelligence/student-skill-analytics' },
      { id: 'course-outcome-analysis', label: 'Course Outcome Analysis', path: '/faculty-intelligence/course-outcome-analysis' }
    ]
  },
  {
    id: 'education-intelligence',
    label: 'Education Intelligence',
    accent: 'var(--ochre)',
    features: [
      { id: 'curriculum-comparison', label: 'Curriculum Comparison', path: '/education-intelligence/curriculum-comparison' },
      { id: 'skill-demand-analysis', label: 'Skill Demand Analysis', path: '/education-intelligence/skill-demand-analysis' },
      { id: 'educational-decision-support', label: 'Educational Decision Support', path: '/education-intelligence/educational-decision-support' }
    ]
  }
]

export function findFeature(path) {
  for (const mod of NAV) {
    const f = mod.features.find((x) => x.path === path)
    if (f) return { module: mod, feature: f }
  }
  return null
}


export const PLATFORM_NAV = [
  { id: 'profile', label: 'My Profile', path: '/profile' },
  { id: 'progress', label: 'Progress & Insights', path: '/progress' },
  { id: 'activity', label: 'Activity Center', path: '/activity' },
  { id: 'preferences', label: 'Preferences', path: '/preferences' }
]

export const AUTH_NAV = [
  { id: 'login', label: 'Sign In / Login', path: '/login' },
  { id: 'signup', label: 'Create Account', path: '/signup' }
]

