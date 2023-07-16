import React, { useState } from 'react';

const Search = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Implement search functionality
    console.log('Searching:', searchText);
  };

  return (
    <div className="search">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
