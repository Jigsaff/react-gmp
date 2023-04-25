import { useState, useCallback } from 'react';
import SearchForm from '../SearchForm';
import logo from '../../assets/images/logo.png';

export const Header = ({
  children,
  onAddMovie,
  initialSearchQuery,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const handleSearchQueryChange = useCallback(value => {
    setSearchQuery(value);
    onSearch(value);
  }, [onSearch]);
  return (
      <header
          className="w-full relative bg-header h-[396px] flex flex-row items-center justify-center bg-cover bg-center">
        <div className="absolute top-4 left-10">
          <a href={'/'}><img src={logo} alt="netflixroulette"/></a>
        </div>
        <SearchForm initialQuery={searchQuery}
                    onSearch={handleSearchQueryChange}/>
        <div className="absolute top-4 right-10">
          <button
              className="uppercase text-pink-red text-xl font-semibold rounded bg-light-gray/[.7] py-3 px-10"
              onClick={onAddMovie}>
            + Add Movie
          </button>
        </div>
        {children}
      </header>
  );
};
