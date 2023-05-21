import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { EditMovieForm } from './component';

jest.mock('../../../hooks/useFetch', () => ({
  __esModule: true,
  default: () => ({
    data: {},
    loading: false,
    error: null,
    getData: jest.fn(),
    putData: jest.fn(),
  }),
}));

describe('EditMovieForm', () => {
  test('renders loading state when loading is true', () => {
    render(
        <MemoryRouter initialEntries={['/edit/123']}>
          <Route path="/edit/:movieId">
            <EditMovieForm />
          </Route>
        </MemoryRouter>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders error state when error is present', () => {
    const errorMessage = 'Failed to load data';

    render(
        <MemoryRouter initialEntries={['/edit/123']}>
          <Route path="/edit/:movieId">
            <EditMovieForm />
          </Route>
        </MemoryRouter>
    );

    expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
  });

  test('renders edit movie form', () => {
    const movieId = '123';
    const mockNavigate = jest.fn();

    render(
        <MemoryRouter initialEntries={[`/edit/${movieId}`]}>
          <Route path="/edit/:movieId">
            <EditMovieForm />
          </Route>
          <Route path="/">
            <div>Home Page</div>
          </Route>
        </MemoryRouter>
    );

    expect(screen.getByText('Edit Movie')).toBeInTheDocument();
    expect(screen.getByLabelText('Title')).toBeInTheDocument();
    expect(screen.getByLabelText('Genre')).toBeInTheDocument();
    fireEvent.submit(screen.getByTestId('movie-form'));

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
