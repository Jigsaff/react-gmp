import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AddMovieForm } from './component';

jest.mock('../../../hooks/useFetch', () => ({
  __esModule: true,
  default: () => ({
    postData: jest.fn()
  })
}));

describe('AddMovieForm', () => {
  test('renders the form correctly', () => {
    render(
        <MemoryRouter>
          <AddMovieForm />
        </MemoryRouter>
    );

    expect(screen.getByLabelText('Title')).toBeInTheDocument();
    expect(screen.getByLabelText('Release Date')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  test('submits the form data', () => {
    render(
        <MemoryRouter>
          <AddMovieForm />
        </MemoryRouter>
    );

    const mockPostData = jest.fn();
    jest.mock('../../../hooks/useFetch', () => ({
      __esModule: true,
      default: () => ({
        postData: mockPostData
      })
    }));

    fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'New Movie Title' } });
    fireEvent.change(screen.getByLabelText('Release Date'), { target: { value: '2023-05-21' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(mockPostData).toHaveBeenCalledWith(`${API_POST_URL}/movies`, {
      id: '',
      title: 'New Movie Title',
    });
  });
});
