import { useState, useContext } from 'react';
import SearchContext from '../../pages/MovieListPage/SearchContext';

export const SearchForm = ({ initialSearchQuery }) => {
  const [value, setValue] = useState(initialSearchQuery);
  const { searchQuery, handleSearchQueryChange } = useContext(SearchContext);

  const handleForm = event => {
    event.preventDefault();
    handleSearchQueryChange(value);
  };

  return (
      <form onSubmit={handleForm}>
        <input
            className="w-[713px] h-[57px] bg-[#323232] rounded ml-[150px] text-xl pl-5 text-white opacity-70"
            type="text"
            value={value}
            onChange={({ target: { value } }) => setValue(value)}
            placeholder="What do you want to watch?"
            data-testid="search-input"
        />
        <button
            className="bg-[#F65261] rounded w-[223px] h-[57px] uppercase text-white ml-[14px] font-medium text-xl"
            type="submit"
            data-testid="search-submit-button"
        >Search
        </button>
      </form>
  );
};
