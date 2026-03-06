function FilterPanel({ children }) {
  return (
    <section className="filter-panel">
      {children || (
        <>
          <select defaultValue="all">
            <option value="all">كل الحالات</option>
            <option value="active">نشط</option>
            <option value="low">منخفض</option>
          </select>
          <input type="date" />
          <button>تطبيق</button>
        </>
      )}
    </section>
  );
}

export default FilterPanel;
