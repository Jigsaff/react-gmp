import { useState, useEffect, useCallback, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import MovieDetails from '../../components/MovieDetails';
import GenreSelect from '../../components/GenreSelect';
import SortControl from '../../components/SortControl';
import MovieTile from '../../components/MovieTile';
import useFetch from '../../hooks/useFetch';
import Header from '../../components/Header';
import SearchContext from './SearchContext';

const MovieListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query') || '';
  const sortCriterion = searchParams.get('sortBy') || '';
  const activeGenre = searchParams.get('genre') || '';

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const sortOrder = sortCriterion === 'title' ? 'asc' : 'desc';

  const url = 'http://localhost:4000/movies';
  const params = useMemo(() => {
    return {
      sortBy: sortCriterion,
      sortOrder: sortOrder,
      search: searchQuery,
      searchBy: 'title',
      filter: activeGenre,
    };
  }, [
    sortCriterion,
    sortOrder,
    searchQuery,
    activeGenre,
  ]);

  const navigate = useNavigate();
  const { loading, error, data: fetchedMovies } = useFetch(url, params);

  useEffect(() => {
    setMovies(fetchedMovies);
  }, [fetchedMovies]);

  const handleMovieClick = movie => {
    navigate(`/movies/${movie.id}`, {
      state: { searchParams: searchParams.toString() },
    });
  };

  const handleBackClick = () => {
    setSelectedMovie(null);
  };

  const toggleModal = () => {
    console.log('This should open the modal to add a movie');
  };

  const handleSearchQueryChange = value => {
    setSearchParams(new URLSearchParams({ ...searchParams, query: value }));
  };

  const handleSortCriterionChange = value => {
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      newParams.set('sortBy', value);
      return newParams;
    });
  };

  const handleActiveGenreChange = value => {
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
        <div className="bg-light-black">

          {selectedMovie ? (
              <MovieDetails movie={selectedMovie}
                            onBackClick={handleBackClick}/>
          ) : (
              <div>
                <Header
                    onAddMovie={toggleModal}
                    initialSearchQuery={searchQuery}
                >
                </Header>
                <div className="flex justify-between">
                  <GenreSelect
                      selectedGenre={activeGenre}
                      onSelect={handleActiveGenreChange}
                  />
                  <SortControl
                      sortCriterion={sortCriterion}
                      onSortCriterion={handleSortCriterionChange}
                  />
                </div>
              </div>

          )}
          <div className="flex flex-wrap mt-5">
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {movies
                .map(movie => (
                    <MovieTile
                        key={movie.id}
                        movie={movie}
                        onClick={handleMovieClick}
                    />
                ))}
          </div>
        </div>
      </SearchContext.Provider>
  );
};

export default MovieListPage;
