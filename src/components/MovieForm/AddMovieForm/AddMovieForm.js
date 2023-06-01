
import React, { useState } from 'react';
import Dialog from '../../Dialog';
import MovieForm from '../MovieForm';
import { API_POST_URL } from '../../../constants';
import useFetch from '../../../hooks/useFetch';
import { formatMovieData } from '../../../helpers';
import { useNavigate } from 'react-router-dom';

const AddMovieForm = () => {
  const navigate = useNavigate();
  const [errorDialogOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { postData } = useFetch(API_POST_URL);

  const handleClose = () => {
    navigate('/');
  };

  const handleErrorDialogClose = () => {
    setErrorMessage('');
  };

  const onSubmit = data => {
    console.log('Submitting:', data);
    const formattedData = formatMovieData(data);
    console.log('Formatted data:', formattedData);

    const response = postData(`${API_POST_URL}/movies`, formattedData);
    console.log('Movie added:', response.data);
    navigate('/');
  };

  return (
      <>
        <Dialog title="Add Movie" onClose={handleClose}>
          <MovieForm
              onSubmit={onSubmit}
              onReset={() => {
                console.log('Resetting');
              }}
          />
        </Dialog>
        {errorDialogOpen && (
            <Dialog title="Error" onClose={handleErrorDialogClose}>
              <p>
                An error occurred while adding the movie. Please check the input
                values and try again.
              </p>
            </Dialog>
        )}
        {errorMessage && (
            <Dialog title="Error" onClose={handleErrorDialogClose}>
              <p>{errorMessage}</p>
            </Dialog>
        )}
      </>
  );
};

export default AddMovieForm;