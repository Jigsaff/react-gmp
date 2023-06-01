import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Dialog from '../../Dialog';
import MovieForm from '../MovieForm';
import { API_EDIT_URL } from '../../../constants';
import useFetch from '../../../hooks/useFetch';

const EditMovieForm = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [setErrorDialogOpen] = useState(false);
  const [setErrorMessage] = useState('');
  const {
    data,
    loading,
    error,
    getData,
    putData: put,
  } = useFetch(setErrorDialogOpen, setErrorMessage);

  useEffect(() => {
    if (movieId) {
      const abortController = new AbortController();

      const fetchData = () => {
        getData(`${API_EDIT_URL}/movies/${movieId}`, abortController.signal);
      };
      fetchData();

      return () => {
        abortController.abort();
      };
    }
  }, [movieId, getData]);

  const onSubmit = data => {
    const genres = data.genres && data.genres.length > 0 ? data.genres[0] : [];

    const updatedData = {
      ...data,
      genres: genres,
    };

    put(`${API_EDIT_URL}/movies`, movieId, updatedData);
    navigate('/');
  };

  const handleClose = () => {
    navigate('/');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const movie = data && !Array.isArray(data) ? data : {};

  return (
      <Dialog title="Edit Movie" onClose={handleClose}>
        <MovieForm onSubmit={onSubmit} movie={movie}/>
      </Dialog>
  );
};

export default EditMovieForm;