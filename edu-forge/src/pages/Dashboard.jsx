import { Link } from 'react-router-dom'
import { NAV } from '../constants/navigation.js'
import PageHeader from '../components/ui/PageHeader.jsx'
import Bar from '../components/ui/Bar.jsx'
import { useAuth } from '../context/AuthContext.jsx'

const quickActions = [
  ['/student-intelligence/career-readiness-prediction', 'Run career assessment'],
  ['/student-intelligence/resume-analysis', 'Analyze resume'],
  ['/student-intelligence/skill-gap-analysis', 'Check skill gaps'],
  ['/curriculum-intelligence/syllabus-relevance-analysis', 'Review a syllabus']
]

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <>
      <PageHeader
        eyebrow="Smart overview"
        title="EduForge AI"
        description="One education intelligence workspace connecting career readiness, skills, curriculum quality, faculty analytics and institutional decisions."
      />

      <section className="hero-grid">
        <div className="panel hero-panel">
          <div className="eyebrow">
            {user ? `Workspace: ${user.name} (${user.role})` : 'Personalized workspace'}
          </div>
          <h2>{user ? `Welcome back, ${user.name.split(' ')[0]}.` : 'Turn education data into better decisions.'}</h2>
          <p>
            {user
              ? `Logged in under ${user.institution || 'EduForge Network'}. Maintain your profile and run intelligence modules to generate actionable academic & career insights.`
              : 'Complete your profile, run an analysis, and use progress insights to track improvement instead of treating every prediction as a one-time result.'}
          </p>
          <div className="action-row">
            <Link className="btn" to="/profile">Manage Profile</Link>
            <Link className="btn btn-secondary" to={user ? '/progress' : '/login'}>
              {user ? 'View Progress' : 'Sign In / Switch'}
            </Link>
          </div>
        </div>
        <div className="panel snapshot-panel">
          <h3>Readiness snapshot</h3>
          <Bar label="Career readiness" value={76} />
          <Bar label="Skill coverage" value={68} />
          <Bar label="Resume strength" value={82} />
          <Bar label="Learning progress" value={61} />
        </div>
      </section>

      <div className="module-heading">Quick actions</div>
      <div className="quick-grid">
        {quickActions.map(([path, label]) => <Link key={path} to={path} className="dash-card"><h4>{label}</h4><p>Start this intelligence workflow.</p></Link>)}
      </div>

      <div className="module-heading">Intelligence modules</div>
      {NAV.map((mod) => (
        <div key={mod.id}>
          <div className="module-heading" style={{ color: mod.accent }}>{mod.label}</div>
          <div className="dash-grid">
            {mod.features.map((f) => (
              <Link key={f.id} to={f.path} className="dash-card" style={{ '--card-accent': mod.accent }}>
                <h4>{f.label}</h4>
                <p>Open the {f.label.toLowerCase()} tool.</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
