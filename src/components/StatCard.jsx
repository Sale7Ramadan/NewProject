function StatCard({ label, value, hint, tone = 'neutral' }) {
  return (
    <article className={`stat-card ${tone}`}>
      <p>{label}</p>
      <h3>{value}</h3>
      <small>{hint}</small>
    </article>
  );
}

export default StatCard;
