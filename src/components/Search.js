import React from "react";

function Search({searchTerm, onUpdateSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => onUpdateSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
