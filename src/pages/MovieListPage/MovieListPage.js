import { useState, useEffect, useCallback } from 'react';

import MovieDetails from '../../components/MovieDetails';
import GenreSelect from '../../components/GenreSelect';
import SortControl from '../../components/SortControl';
import MovieTile from '../../components/MovieTile';
import useFetch from '../../hooks/useFetch';
import Header from '../../components/Header';

const MovieListPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortCriterion, setSortCriterion] = useState('');
  const [activeGenre, setActiveGenre] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const url = 'http://localhost:4000/movies';
  const params = {
    sortBy: sortCriterion,
    sortOrder: 'desc',
    search: searchQuery,
    searchBy: 'title',
    filter: activeGenre,
  };

  const { loading, error, data: fetchedMovies } = useFetch(url, params);

  useEffect(() => {
    setMovies(fetchedMovies);
  }, [fetchedMovies]);

  const handleMovieClick = useCallback(movie => {
    setSelectedMovie(prevSelectedMovie => {
      if (prevSelectedMovie && prevSelectedMovie.id === movie.id) {
        return null;
      } else {
        return movie;
      }
    });
  }, []);

  const handleBackClick = () => {
    setSelectedMovie(null);
  };

  const toggleModal = () => {
    console.log('This should open the modal to add a movie');
  };

  const handleSearchQueryChange = value => {
    setSearchQuery(value);
  };

  return (
      <div className="bg-light-black">

        {selectedMovie ? (
            <MovieDetails movie={selectedMovie} onBackClick={handleBackClick}/>
        ) : (
            <div>
              <Header
                  onAddMovie={toggleModal}
                  initialSearchQuery={searchQuery}
                  onSearch={handleSearchQueryChange}
              >
              </Header>
              <div className="flex justify-between">
                <GenreSelect
                    selectedGenre={activeGenre}
                    onSelect={setActiveGenre}
                />
                <SortControl
                    sortCriterion={sortCriterion}
                    onSortCriterion={setSortCriterion}
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
  );
};

export default MovieListPage;
