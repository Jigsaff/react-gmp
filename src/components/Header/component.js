import { useContext } from 'react';
import SearchContext from '../../pages/MovieListPage/SearchContext';
import logo from '../../assets/images/logo.png';
import { Outlet } from 'react-router';

export const Header = ({ selectedMovie, onAddMovie, children }) => {
  const { searchQuery, handleSearchQueryChange } = useContext(SearchContext);

  const handleAddMovieClick = () => {
    if (typeof onAddMovie === 'function') {
      onAddMovie();
    }
  };
  return (
      <header
          className="w-full relative bg-header h-[396px] flex flex-row items-center justify-center bg-cover bg-center">
        <div className="absolute top-4 left-10">
          <a href={'/'}><img src={logo} alt="netflixroulette"/></a>
        </div>
        <Outlet context={[searchQuery, handleSearchQueryChange]}/>
        <div className="absolute top-4 right-10">
          <button
              className="uppercase text-pink-red text-xl font-semibold rounded bg-light-gray/[.7] py-3 px-10"
              onClick={handleAddMovieClick}>
            + Add Movie
          </button>
        </div>
        {children}
      </header>
  );
};
