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
      <div
          className="bg-[url('/img/header.png')] h-[396px] flex flex-row items-center">
        <input
            className="w-[713px] h-[57px] bg-[#323232] opacity-70 rounded ml-[150px] text-xl pl-5 text-white opacity-30"
            type="text"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
        />
        <button
            className="bg-[#F65261] rounded w-[223px] h-[57px] uppercase text-white ml-[14px] font-medium text-xl"
            onClick={handleSearch}>Search
        </button>
      </div>
  );
};
