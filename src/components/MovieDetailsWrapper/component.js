import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import MovieDetails from '../MovieDetails';

export const MovieDetailsWrapper = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const url = `http://localhost:4000/movies/${movieId}`;
  const { loading, error, data: movieData } = useFetch(url);
  const movie = Array.isArray(movieData) ? movieData[0] : movieData;

  const handleMovieDetailsClose = () => {
    navigate('/');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
      <div className="bg-light-black text-white w-full z-50" onClick={handleMovieDetailsClose}>
        <MovieDetails movie={movie}/>
      </div>
  );
};