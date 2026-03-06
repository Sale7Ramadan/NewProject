import { statusMap } from '../utils/status';

function StatusBadge({ label }) {
  const tone = statusMap[label] || 'neutral';
  return <span className={`status-badge ${tone}`}>{label}</span>;
}

export default StatusBadge;
