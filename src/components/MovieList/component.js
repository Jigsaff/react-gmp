import MovieTile from '../MovieTile';

export const MovieList = ({ movies, onMovieClick }) => {
  return (
      <div
          className="grid grid-cols-1 gap-8 mt-6">
        {movies.map(movie => (
            <MovieTile key={movie.id} movie={movie} onClick={onMovieClick}/>
        ))}
      </div>
  );
};