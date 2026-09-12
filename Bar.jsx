export default function Bar({ label, value, max = 100, suffix = '%' }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100))
  return (
    <div className="bar-row">
      <div className="bar-row-top">
        <span>{label}</span>
        <span style={{ fontFamily: 'var(--font-mono)' }}>{value}{suffix}</span>
      </div>
      <div className="bar-track">
        <div className="bar-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
