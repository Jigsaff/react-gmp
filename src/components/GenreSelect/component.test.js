import { render, fireEvent, screen } from '@testing-library/react';
import GenreSelect from './component';

describe('GenreSelect', () => {
  const genres = ['Documentary', 'Comedy', 'Horror', 'Crime'];
  const selectedGenre = 'Comedy';
  const onSelectMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all genres passed in props', () => {
    render(<GenreSelect genres={genres} selectedGenre={selectedGenre}
                        onSelect={onSelectMock}/>);

    genres.forEach(genre => {
      const genreButton = screen.getByText(genre);
      expect(genreButton).toBeInTheDocument();
    });
  });

  it('highlights a selected genre passed in props', () => {
    render(<GenreSelect genres={genres} selectedGenre={selectedGenre}
                        onSelect={onSelectMock}/>);

    const selectedGenreButton = screen.getByText(selectedGenre);
    expect(selectedGenreButton).toHaveClass('font-semibold');
  });

  it('calls "onSelect" callback with correct genre after a click event on a genre button',
      () => {
        render(<GenreSelect genres={genres} selectedGenre={selectedGenre}
                            onSelect={onSelectMock}/>);

        const genreButton = screen.getByText(genres[0]);
        fireEvent.click(genreButton);

        expect(onSelectMock).toHaveBeenCalledTimes(1);
        expect(onSelectMock).toHaveBeenCalledWith(genres[0]);
      });
});
