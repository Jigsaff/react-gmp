import { render, screen } from '@testing-library/react';
import MovieTile from './component';

const mockMovie = {
  id: 1,
  poster_path: 'https://example.com/poster.jpg',
  title: 'Example Movie',
  release_date: '2021-05-01',
  genres: ['Action', 'Adventure'],
};

describe('MovieTile', () => {
  it('renders movie poster', () => {
    render(<MovieTile movie={mockMovie}/>);
    const poster = screen.getByAltText(mockMovie.title);
    expect(poster).toHaveAttribute('src', mockMovie.poster_path);
  });

  it('renders movie title', () => {
    render(<MovieTile movie={mockMovie}/>);
    const title = screen.getByText(mockMovie.title);
    expect(title).toBeInTheDocument();
  });

  it('renders movie release year', () => {
    render(<MovieTile movie={mockMovie}/>);
    const releaseYear = screen.getByText('2021');
    expect(releaseYear).toBeInTheDocument();
  });

  it('renders movie genres', () => {
    render(<MovieTile movie={mockMovie}/>);
    const genres = screen.getByText('Action, Adventure');
    expect(genres).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<MovieTile movie={mockMovie} onClick={handleClick}/>);
    const tile = screen.getByTestId('movie-tile');
    tile.click();
    expect(handleClick).toHaveBeenCalledWith(mockMovie);
  });
});