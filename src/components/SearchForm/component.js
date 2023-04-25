import { useState } from 'react';

export const SearchForm = ({ initialQuery, onSearch }) => {
  const [query, setQuery] = useState(initialQuery);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(query);
    }
  };

  return (
      <>
        <input
            className="w-[713px] h-[57px] bg-[#323232] rounded ml-[150px] text-xl pl-5 text-white opacity-70"
            type="text"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            data-testid="search-input"
        />
        <button
            className="bg-[#F65261] rounded w-[223px] h-[57px] uppercase text-white ml-[14px] font-medium text-xl"
            onClick={handleSearch}>Search
        </button>
      </>
  );
};
