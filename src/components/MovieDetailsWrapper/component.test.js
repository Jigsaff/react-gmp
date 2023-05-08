import { render, screen, waitFor } from '@testing-library/react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { MovieDetailsWrapper } from './component';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

jest.mock('../../hooks/useFetch', () => jest.fn());

const mockMovie = {
  id: 1,
  title: 'The Shawshank Redemption',
  poster_path: 'https://www.example.com/shawshank-redemption.jpg',
  release_date: '1994-09-14',
  genres: ['Drama'],
  overview: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
};

describe('MovieDetailsWrapper', () => {
  beforeEach(() => {
    useParams.mockReturnValue({ movieId: '1' });
    useNavigate.mockReturnValue(jest.fn());
    useFetch.mockReturnValue({
      loading: false,
      error: null,
      data: mockMovie,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders movie details when loaded', async () => {
    render(<MovieDetailsWrapper/>);

    await waitFor(() => {
      expect(screen.getByText(mockMovie.title)).toBeInTheDocument();
      expect(screen.getByText(mockMovie.release_date.slice(0, 4)))
          .toBeInTheDocument();
      expect(screen.getByText(mockMovie.overview)).toBeInTheDocument();
    });
  });

  it('renders loading state while loading', async () => {
    useFetch.mockReturnValueOnce({
      loading: true,
      error: null,
      data: null,
    });

    render(<MovieDetailsWrapper/>);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(useFetch).toHaveBeenCalledTimes(1);
    });
  });

  it('renders error state when error occurs', async () => {
    const errorMessage = 'Error fetching movie data';
    useFetch.mockReturnValueOnce({
      loading: false,
      error: errorMessage,
      data: null,
    });

    render(<MovieDetailsWrapper/>);

    expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();

    await waitFor(() => {
      expect(useFetch).toHaveBeenCalledTimes(1);
    });
  });

  it('renders "Movie not found" state when movie is not found', async () => {
    useFetch.mockReturnValueOnce({
      loading: false,
      error: null,
      data: [],
    });

    render(<MovieDetailsWrapper/>);

    expect(screen.getByText('Movie not found')).toBeInTheDocument();

    await waitFor(() => {
      expect(useFetch).toHaveBeenCalledTimes(1);
    });
  });

  it('calls navigate function when closing movie details', async () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValueOnce(mockNavigate);

    render(<MovieDetailsWrapper/>);

    await waitFor(() => {
      expect(screen.getByTestId('movie-details')).toBeInTheDocument();
    });

    screen.getByTestId('movie-details').click();

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
