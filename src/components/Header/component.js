import React from "react";
import { useContext } from 'react';
import Logo from '../Header/Logo';
import SearchContext from '../../pages/MovieListPage/SearchContext';
import { Outlet } from 'react-router';
import { useNavigate } from 'react-router-dom';

export const Header = ({ selectedMovie, onAddMovie, children }) => {
  const { searchQuery, handleSearchQueryChange } = useContext(SearchContext);
  const navigate = useNavigate();

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
