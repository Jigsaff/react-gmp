import { render, fireEvent } from '@testing-library/react';
import MovieTile from './component';

const mockMovie = {
  imageUrl: 'https://example.com/image.jpg',
  movieName: 'Test Movie',
  releaseYear: '2022',
  genres: ['Action', 'Adventure'],
};

describe('MovieTile', () => {
  it('renders movie tile correctly', () => {
    const { getByAltText, getByText } = render(<MovieTile movie={mockMovie}
                                                          onClick={() => {}}/>);

    expect(getByAltText(mockMovie.movieName))
        .toHaveAttribute('src', mockMovie.imageUrl);
    expect(getByText(mockMovie.movieName)).toBeInTheDocument();
    expect(getByText(mockMovie.releaseYear)).toBeInTheDocument();
    expect(getByText(mockMovie.genres.join(', '))).toBeInTheDocument();
  });

  it('calls onClick function when tile is clicked', () => {
    const mockOnClick = jest.fn();
    const { getByTestId } = render(<MovieTile movie={mockMovie}
                                              onClick={mockOnClick}/>);

    fireEvent.click(getByTestId('movie-tile'));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
