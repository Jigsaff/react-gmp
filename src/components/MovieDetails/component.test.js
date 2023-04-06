import { render } from '@testing-library/react';
import MovieDetails from './component';

const mockMovie = {
  imageUrl: 'https://example.com/image.jpg',
  name: 'Test Movie',
  releaseYear: '2022',
  rating: 8.5,
  duration: '2h 30m',
  description: 'A test movie description',
};

describe('MovieDetails', () => {
  it('renders movie details correctly', () => {
    const { getByAltText, getByText } = render(<MovieDetails
        movie={mockMovie}/>);

    expect(getByAltText(`${mockMovie.name} poster`))
        .toHaveAttribute('src', mockMovie.imageUrl);
    expect(getByText(mockMovie.name)).toBeInTheDocument();
    expect(getByText(mockMovie.rating)).toBeInTheDocument();
    expect(getByText(mockMovie.releaseYear)).toBeInTheDocument();
    expect(getByText(mockMovie.duration)).toBeInTheDocument();
    expect(getByText(mockMovie.description)).toBeInTheDocument();
  });
});
