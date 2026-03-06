function SearchBar({ placeholder = 'ابحث...' }) {
  return (
    <div className="search-bar">
      <input type="search" placeholder={placeholder} />
    </div>
  );
}

export default SearchBar;
