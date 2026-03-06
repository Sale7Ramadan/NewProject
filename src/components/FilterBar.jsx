function FilterBar() {
  return (
    <div className="filter-bar">
      <input placeholder="بحث سريع..." />
      <select defaultValue="all">
        <option value="all">كل الحالات</option>
        <option value="active">نشط</option>
        <option value="pending">قيد الانتظار</option>
      </select>
      <button>تصفية</button>
    </div>
  );
}

export default FilterBar;
