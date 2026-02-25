function FilterBar({
  selectedGroup,
  setSelectedGroup,
  searchCity,
  setSearchCity,
  sortAvailable,
  setSortAvailable
}) {
  return (
    <div className="filters">
      <select
        value={selectedGroup}
        onChange={(e) => setSelectedGroup(e.target.value)}
      >
        <option value="All">All Groups</option>
        <option>A+</option>
        <option>A-</option>
        <option>B+</option>
        <option>B-</option>
        <option>O+</option>
        <option>O-</option>
        <option>AB+</option>
        <option>AB-</option>
      </select>

      <input
        type="text"
        placeholder="Search by city..."
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={sortAvailable}
          onChange={() => setSortAvailable(!sortAvailable)}
        />
        Sort by Availability
      </label>
    </div>
  );
}

export default FilterBar;