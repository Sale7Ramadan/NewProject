import { statusTone } from '../utils/status';

function StatusBadge({ label }) {
  const tone = statusTone[label] || 'neutral';
  return <span className={`badge badge--${tone}`}>{label}</span>;
}

export default StatusBadge;
