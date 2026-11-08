
function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="my-8">
      <input
        type="text"
        placeholder="Search your projects..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-700 shadow-sm outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
      />
    </div>
  );
}

export default SearchBar;
