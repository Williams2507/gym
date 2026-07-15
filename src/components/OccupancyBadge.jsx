export function getOccupancyMeta(value) {
  if (value < 40) return { label: 'Tranquila', className: 'low' }
  if (value < 70) return { label: 'Moderada', className: 'medium' }
  if (value < 88) return { label: 'Cheia', className: 'high' }
  return { label: 'Muito cheia', className: 'critical' }
}

export default function OccupancyBadge({ value, compact = false }) {
  const meta = getOccupancyMeta(value)
  return (
    <span className={`occupancy-badge ${meta.className} ${compact ? 'compact' : ''}`}>
      <span className="status-dot" />
      {meta.label} · {value}%
    </span>
  )
}
