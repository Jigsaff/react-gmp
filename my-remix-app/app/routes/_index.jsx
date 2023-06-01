import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useLoaderData } from '@remix-run/react';
import axios from 'axios';
import GenreSelect from '../components/GenreSelect/GenreSelect';
import SortControl from '../components/SortControl/SortControl';
import MovieTile from '../components/MovieTile/MovieTile';
import Header from '../components/Header/Header.jsx';
import Dialog from '../components/Dialog/Dialog';
import MovieForm from '../components/MovieForm/MovieForm';
import usePagination from '../Hooks/usePagination';
import SearchContext from './SearchContext';
import { API_URL } from '../constants';

export async function loader({ request }) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);

  const sortCriterion = searchParams.get('sortBy') || '';
  const sortOrder = sortCriterion === 'title' ? 'asc' : 'desc';
  const searchQuery = searchParams.get('query') || '';
  const activeGenre = searchParams.get('genre') || '';
  const itemsPerPage = 6;

  const params = {
    sortBy: sortCriterion,
    sortOrder: sortOrder,
    search: searchQuery,
    searchBy: 'title',
    filter: activeGenre,
    limit: itemsPerPage + 100,
  };

  const response = await axios.get(API_URL, {
    params,
  });

  return response.data.data || response.data;
}

const MovieListPage = () => {
  const fetchedMovies = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query') || '';
  const sortCriterion = searchParams.get('sortBy') || '';
  const activeGenre = searchParams.get('genre') || '';

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const sortOrder = sortCriterion === 'title' ? 'asc' : 'desc';

  const itemsPerPage = 9;
  const url = API_URL;
  const navigate = useNavigate();

  const {
    currentData,
    nextPage,
    prevPage,
    currentPage,
    maxPages,
    resetPagination,
  } = usePagination(fetchedMovies, itemsPerPage);

  const params = {
    sortBy: sortCriterion,
    sortOrder: sortOrder,
    search: searchQuery,
    searchBy: 'title',
    filter: activeGenre,
    offset: (currentPage - 1) * itemsPerPage,
    limit: itemsPerPage + 100,
  };

  const handleMovieClick = movie => {
    navigate(`/movies/${movie.id}`, {
      state: { searchParams: searchParams.toString() },
    });
  };

  const toggleModal = () => {
    setIsDialogOpen(prev => !prev);
  };

  const handleSubmit = movie => {
    console.log('Submitted movie:', movie);
    setIsDialogOpen(false);
  };

  const handleSearchQueryChange = value => {
    setSearchParams(new URLSearchParams({ ...searchParams, query: value }));
    resetPagination();
  };

  const handleSortCriterionChange = value => {
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      newParams.set('sortBy', value);
      return newParams;
    });
  };

  const handleActiveGenreChange = ({ target: { value } }) => {
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      newParams.set('genre', value);
      return newParams;
    });
  };

  return (
      <SearchContext.Provider
          value={{
            searchQuery,
            handleSearchQueryChange,
          }}
      >
        <>
          <Header onAddMovie={toggleModal} initialSearchQuery={searchQuery}>
            <div className="flex justify-between px-4 pb-4">
              <GenreSelect
                  selectedGenre={activeGenre}
                  onSelect={handleActiveGenreChange}
              />
              <SortControl
                  sortCriterion={sortCriterion}
                  onSortCriterion={handleSortCriterionChange}
              />
            </div>
          </Header>

          <main>
            <div className="grid grid-cols-3 gap-8 mt-8">
              {fetchedMovies.slice(0, itemsPerPage).map(movie => (
                  <MovieTile
                      key={movie.id}
                      movie={movie}
                      onClick={handleMovieClick}
                  />
              ))}
            </div>
            <div className="flex justify-center items-center p-4">
              <button onClick={prevPage} disabled={currentPage === 1}
                      className="bg-dark-gray border-0 cursor-pointer text-white px-2 py-3 rounded mr-5">
                Prev
              </button>
              <span className="text-white">
              Page {currentPage} of {maxPages}
            </span>
              <button onClick={nextPage} disabled={currentPage === maxPages}
                      className="bg-dark-gray border-0 cursor-pointer text-white px-2 py-3 rounded ml-5">
                Next
              </button>
            </div>
          </main>
          {isDialogOpen && (
              <Dialog title="Add Movie" onClose={toggleModal}>
                <MovieForm onSubmit={handleSubmit}/>
              </Dialog>
          )}
        </>
      </SearchContext.Provider>
  );
};

export default MovieListPage;
