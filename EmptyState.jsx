export default function EmptyState({ children }) {
  return (
    <div className="card" style={{ borderLeftColor: 'var(--line)' }}>
      <p style={{ margin: 0 }}>{children}</p>
    </div>
  )
}
