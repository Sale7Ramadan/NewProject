function EmptyState({ title, message, actionText = 'إضافة جديد' }) {
  return (
    <section className="state-card empty">
      <h3>{title}</h3>
      <p>{message}</p>
      <button>{actionText}</button>
    </section>
  );
}

export default EmptyState;
