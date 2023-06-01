import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import GenreSelect from '../../components/GenreSelect';
import SortControl from '../../components/SortControl';
import MovieTile from '../../components/MovieTile';
import Header from '../../components/Header';
import Dialog from '../../components/Dialog';
import MovieForm from '../../components/MovieForm/MovieForm';
import usePagination from '../../hooks/usePagination';
import useFetch from '../../hooks/useFetch';
import SearchContext from './SearchContext';
import { API_URL } from '../../constants';

const MovieListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query') || '';
  const sortCriterion = searchParams.get('sortBy') || '';
  const activeGenre = searchParams.get('genre') || '';

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const sortOrder = sortCriterion === 'title' ? 'asc' : 'desc';

  const itemsPerPage = 6;
  const url = API_URL;
  const navigate = useNavigate();

  const { loading, error, data: fetchedMovies, getData } = useFetch();

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

  useEffect(() => {
    const abortController = new AbortController();

    getData(url, abortController.signal, params);
    return () => {
      abortController.abort();
    };

  }, [sortCriterion, searchQuery, activeGenre]);

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
    /* eslint-disable react/jsx-no-constructed-context-values */
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
              {loading && <div>Loading...</div>}
              {error && <div>Error: {error}</div>}
              {currentData()
                  .slice(0, itemsPerPage)
                  .map(movie => (
                      <MovieTile
                          key={movie.id}
                          movie={movie}
                          onClick={handleMovieClick}
                      />
                  ))}
            </div>
            <div className="flex justify-center items-center p-4">
              <button onClick={prevPage} disabled={currentPage === 1} className="bg-dark-gray border-0 cursor-pointer text-white px-2 py-3 rounded mr-5">
                Prev
              </button>
              <span className="text-white">
              Page {currentPage} of {maxPages}
            </span>
              <button onClick={nextPage} disabled={currentPage === maxPages} className="bg-dark-gray border-0 cursor-pointer text-white px-2 py-3 rounded ml-5">
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