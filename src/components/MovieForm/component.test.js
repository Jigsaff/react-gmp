import { render, screen, fireEvent } from '@testing-library/react';
import { MovieForm } from './component';

describe('MovieForm', () => {
  test('renders form with input fields and selects', () => {
    const onSubmit = jest.fn();
    const movie = { id: '123', title: 'Movie Title' };

    render(<MovieForm onSubmit={onSubmit} movie={movie} />);

    const titleInput = screen.getByLabelText('Title');
    const releaseDateInput = screen.getByLabelText('Release Date');
    const posterPathInput = screen.getByLabelText('Movie URL');
    const ratingInput = screen.getByLabelText('Rating');
    const genreSelect = screen.getByLabelText('Genre');
    const runtimeInput = screen.getByLabelText('Runtime');
    const overviewTextarea = screen.getByLabelText('Overview');
    const resetButton = screen.getByRole('button', { name: 'Reset' });
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    expect(titleInput).toBeInTheDocument();
    expect(releaseDateInput).toBeInTheDocument();
    expect(posterPathInput).toBeInTheDocument();
    expect(ratingInput).toBeInTheDocument();
    expect(genreSelect).toBeInTheDocument();
    expect(runtimeInput).toBeInTheDocument();
    expect(overviewTextarea).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('calls onReset and resets form data when reset button is clicked', () => {
    const onSubmit = jest.fn();
    const onReset = jest.fn();
    const movie = { id: '123', title: 'Movie Title' };

    render(<MovieForm onSubmit={onSubmit} movie={movie} onReset={onReset} />);

    const titleInput = screen.getByLabelText('Title');
    const resetButton = screen.getByRole('button', { name: 'Reset' });

    const newTitle = 'New Movie Title';
    fireEvent.change(titleInput, { target: { value: newTitle } });

    fireEvent.click(resetButton);

    expect(titleInput.value).toBe('');
    expect(onReset).toHaveBeenCalled();
  });
});
