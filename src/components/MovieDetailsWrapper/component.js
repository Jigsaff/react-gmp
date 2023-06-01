import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import MovieDetails from '../MovieDetails';
import { API_URL } from '../../constants';

export const MovieDetailsWrapper = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const url = `${API_URL}/${movieId}`;
  const { loading, error, data: movieData, getData } = useFetch();
  const movie = Array.isArray(movieData) ? movieData[0] : movieData;

  useEffect(() => {
    const abortController = new AbortController();

    getData(url, abortController.signal);
    return () => {
      abortController.abort();
    };
  }, [url, getData]);

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
      <div className="bg-light-black text-white" onClick={handleMovieDetailsClose}>
        <MovieDetails movie={movie} onClose={handleMovieDetailsClose}/>
      </div>
  );
};