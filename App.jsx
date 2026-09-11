import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Dashboard from './pages/Dashboard.jsx'

import CareerReadinessPrediction from './pages/student-intelligence/CareerReadinessPrediction.jsx'
import ResumeAnalysis from './pages/student-intelligence/ResumeAnalysis.jsx'
import SkillGapAnalysis from './pages/student-intelligence/SkillGapAnalysis.jsx'
import LearningRecommendations from './pages/student-intelligence/LearningRecommendations.jsx'

import ProgrammingLanguageRecommendation from './pages/skill-intelligence/ProgrammingLanguageRecommendation.jsx'
import DomainRecommendation from './pages/skill-intelligence/DomainRecommendation.jsx'
import TechnologyTrendAnalysis from './pages/skill-intelligence/TechnologyTrendAnalysis.jsx'

import SyllabusRelevanceAnalysis from './pages/curriculum-intelligence/SyllabusRelevanceAnalysis.jsx'
import OutdatedTopicDetection from './pages/curriculum-intelligence/OutdatedTopicDetection.jsx'
import IndustryAlignment from './pages/curriculum-intelligence/IndustryAlignment.jsx'
import CurriculumModernityScore from './pages/curriculum-intelligence/CurriculumModernityScore.jsx'

import StudentSkillAnalytics from './pages/faculty-intelligence/StudentSkillAnalytics.jsx'
import CourseOutcomeAnalysis from './pages/faculty-intelligence/CourseOutcomeAnalysis.jsx'

import CurriculumComparison from './pages/education-intelligence/CurriculumComparison.jsx'
import SkillDemandAnalysis from './pages/education-intelligence/SkillDemandAnalysis.jsx'
import EducationalDecisionSupport from './pages/education-intelligence/EducationalDecisionSupport.jsx'
import Profile from './pages/platform/Profile.jsx'
import Progress from './pages/platform/Progress.jsx'
import Activity from './pages/platform/Activity.jsx'
import Preferences from './pages/platform/Preferences.jsx'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/preferences" element={<Preferences />} />

        <Route path="/student-intelligence/career-readiness-prediction" element={<CareerReadinessPrediction />} />
        <Route path="/student-intelligence/resume-analysis" element={<ResumeAnalysis />} />
        <Route path="/student-intelligence/skill-gap-analysis" element={<SkillGapAnalysis />} />
        <Route path="/student-intelligence/learning-recommendations" element={<LearningRecommendations />} />

        <Route path="/skill-intelligence/programming-language-recommendation" element={<ProgrammingLanguageRecommendation />} />
        <Route path="/skill-intelligence/domain-recommendation" element={<DomainRecommendation />} />
        <Route path="/skill-intelligence/technology-trend-analysis" element={<TechnologyTrendAnalysis />} />

        <Route path="/curriculum-intelligence/syllabus-relevance-analysis" element={<SyllabusRelevanceAnalysis />} />
        <Route path="/curriculum-intelligence/outdated-topic-detection" element={<OutdatedTopicDetection />} />
        <Route path="/curriculum-intelligence/industry-alignment" element={<IndustryAlignment />} />
        <Route path="/curriculum-intelligence/curriculum-modernity-score" element={<CurriculumModernityScore />} />

        <Route path="/faculty-intelligence/student-skill-analytics" element={<StudentSkillAnalytics />} />
        <Route path="/faculty-intelligence/course-outcome-analysis" element={<CourseOutcomeAnalysis />} />

        <Route path="/education-intelligence/curriculum-comparison" element={<CurriculumComparison />} />
        <Route path="/education-intelligence/skill-demand-analysis" element={<SkillDemandAnalysis />} />
        <Route path="/education-intelligence/educational-decision-support" element={<EducationalDecisionSupport />} />

        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Layout>
  )
}
