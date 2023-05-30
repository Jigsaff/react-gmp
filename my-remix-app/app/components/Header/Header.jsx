import { useContext } from 'react';
import NetflixLogo from './Logo/NetflixLogo.jsx';
import SearchContext from '../../routes/SearchContext';
import { useNavigate, useParams } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm.jsx';
import Logo from '../../../../src/components/Header/Logo';
import { Outlet } from 'react-router';

const Header = ({ selectedMovie, onAddMovie, children }) => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const { searchQuery, handleSearchQueryChange } = useContext(SearchContext);

  const handleAddMovieClick = () => {
    navigate('/new');
  };

  return (
      <header
          className="bg-header relative text-center bg-cover bg-no-repeat"
      >
        <div
            className="flex items-start justify-between py-8 px-4">
          <Logo/>
          <Outlet context={[searchQuery, handleSearchQueryChange]}/>
          <button
              className="uppercase text-pink-red text-xl font-semibold rounded bg-light-gray/[.7] py-3 px-10"
              onClick={handleAddMovieClick}>
            + Add movie
          </button>
        </div>
        {children}
      </header>
  );
};

export default Header;