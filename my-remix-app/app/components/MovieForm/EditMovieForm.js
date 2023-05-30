import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Dialog from '../Dialog/Dialog';
import MovieForm from './MovieForm';
import { API_EDIT_URL } from '../../constants';
import useFetch from '../../Hooks/useFetch';

const EditMovieForm = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
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
    put(`${API_EDIT_URL}/movies`, movieId, data);
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
      <MovieForm onSubmit={onSubmit} movie={movie} />
    </Dialog>
  );
};

export default EditMovieForm;
