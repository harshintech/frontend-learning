import React from "react";

export default function Search({ search, setSearch, handleSearch }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="search-engine">
      <input
        type="text"
        className="city-search"
        placeholder="Enter City Name"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Search Wheather</button>
    </div>
  );
}
