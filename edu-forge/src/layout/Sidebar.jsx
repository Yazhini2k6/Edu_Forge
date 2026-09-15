import { NavLink, Link, useNavigate } from 'react-router-dom'
import { NAV, PLATFORM_NAV, AUTH_NAV } from '../constants/navigation.js'
import { useAuth } from '../context/AuthContext.jsx'

export default function Sidebar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>EduForge AI</Link>
      </div>
      <div className="sidebar-tag">education intelligence platform</div>

      {/* User Session Profile Widget */}
      <div className="sidebar-user-card">
        {user ? (
          <>
            <div className="sidebar-user-info">
              <div className="sidebar-avatar">{user.avatar || user.name.slice(0, 2).toUpperCase()}</div>
              <div className="sidebar-user-details">
                <div className="sidebar-user-name" title={user.name}>{user.name}</div>
                <div className="sidebar-user-role-badge">{user.role}</div>
              </div>
            </div>
            <div className="sidebar-user-actions">
              <Link to="/profile" className="sidebar-user-action-btn" title="View & Edit Profile">
                Profile
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="sidebar-user-action-btn logout"
                title="Sign out of current account"
              >
                Sign out
              </button>
            </div>
          </>
        ) : (
          <div className="sidebar-guest-box">
            <div className="sidebar-guest-text">Guest Mode</div>
            <Link to="/login" className="sidebar-guest-btn">
              Sign In / Login →
            </Link>
          </div>
        )}
      </div>

      <div className="sidebar-group">
        <NavLink
          to="/"
          className={({ isActive }) => 'sidebar-link' + (isActive ? ' active' : '')}
          style={{ marginBottom: 4 }}
        >
          Dashboard
        </NavLink>
      </div>

      <div className="sidebar-group">
        <div className="sidebar-group-label">My EduForge</div>
        {PLATFORM_NAV.map((item) => (
          <NavLink key={item.id} to={item.path} className={({ isActive }) => 'sidebar-link' + (isActive ? ' active' : '')}>
            {item.label}
          </NavLink>
        ))}
      </div>

      <div className="sidebar-group">
        <div className="sidebar-group-label">Account & Auth</div>
        {AUTH_NAV.map((item) => (
          <NavLink key={item.id} to={item.path} className={({ isActive }) => 'sidebar-link' + (isActive ? ' active' : '')}>
            {item.label}
          </NavLink>
        ))}
      </div>

      {NAV.map((mod) => (
        <div className="sidebar-group" key={mod.id} style={{ '--accent': mod.accent }}>
          <div className="sidebar-group-label">{mod.label}</div>
          {mod.features.map((f) => (
            <NavLink
              key={f.id}
              to={f.path}
              className={({ isActive }) => 'sidebar-link' + (isActive ? ' active' : '')}
              style={{ '--accent': mod.accent }}
            >
              {f.label}
            </NavLink>
          ))}
        </div>
      ))}
    </aside>
  )
}

