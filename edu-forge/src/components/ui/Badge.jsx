export default function Badge({ children, tone }) {
  const cls = tone ? `badge badge-${tone}` : 'badge'
  return <span className={cls}>{children}</span>
}
