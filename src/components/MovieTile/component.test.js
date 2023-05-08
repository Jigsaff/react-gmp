import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import MovieTile from './component';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('MovieTile component', () => {
  let navigateMock;

  beforeEach(() => {
    navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders movie tile correctly', () => {
    const movie = {
      id: 1,
      title: 'The Godfather',
      poster_path: 'godfather.jpg',
      release_date: '1972-03-24',
      genres: ['Crime', 'Drama'],
    };

    render(<MovieTile movie={movie}/>);
    const movieTile = screen.getByTestId('movie-tile');

    expect(movieTile).toBeInTheDocument();
    expect(movieTile).toHaveClass('basis-1/3 my-4 flex justify-center');

    fireEvent.click(movieTile);

    expect(navigateMock).toHaveBeenCalledWith('movies/1');
  });
});