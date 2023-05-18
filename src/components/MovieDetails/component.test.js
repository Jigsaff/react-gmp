import { render } from '@testing-library/react';
import MovieDetails, { formatTime } from './component';

describe('MovieDetails', () => {
  const movie = {
    poster_path: 'https://example.com/image.png',
    title: 'Test Movie',
    release_date: '2022-01-01',
    vote_average: 7.5,
    runtime: 125,
    overview: 'This is a test movie',
  };

  it('renders movie details correctly', () => {
    const { getByTestId, getByText, getByAltText } = render(
        <MovieDetails movie={movie} />
    );

    expect(getByAltText(`${movie.title} poster`)).toBeInTheDocument();
    expect(getByTestId('movie-details')).toHaveTextContent(movie.title);
    expect(getByText(movie.vote_average)).toBeInTheDocument();
    expect(getByText(movie.release_date.slice(0, 4))).toBeInTheDocument();
    expect(getByText(formatTime(movie.runtime))).toBeInTheDocument();
    expect(getByText(movie.overview)).toBeInTheDocument();
  });
});

describe('formatTime', () => {
  it('formats time correctly', () => {
    expect(formatTime(90)).toEqual('1h 30m');
    expect(formatTime(60)).toEqual('1h');
    expect(formatTime(30)).toEqual('30m');
    expect(formatTime(0)).toEqual('');
  });
});
