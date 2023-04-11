import { render, fireEvent } from '@testing-library/react';
import MovieForm from './index';

describe('MovieForm', () => {
  const onSubmit = jest.fn();
  const initialMovieInfo = {
    title: 'Test Movie',
    releaseDate: '2022-01-01',
    movieUrl: 'https://example.com/movie.mp4',
    rating: '8.5',
    genre: 'Action',
    duration: '2h 30min',
    overview: 'This is a test movie',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders all form inputs', () => {
    const { getByLabelText } = render(<MovieForm onSubmit={onSubmit}/>);
    expect(getByLabelText('Title')).toBeInTheDocument();
    expect(getByLabelText('Release Date')).toBeInTheDocument();
    expect(getByLabelText('Movie URL')).toBeInTheDocument();
    expect(getByLabelText('Rating')).toBeInTheDocument();
    expect(getByLabelText('Genre')).toBeInTheDocument();
    expect(getByLabelText('Duration')).toBeInTheDocument();
    expect(getByLabelText('Overview')).toBeInTheDocument();
  });

  it('calls onSubmit when form is submitted', () => {
    const { getByLabelText, getByText } = render(<MovieForm
        initialMovieInfo={initialMovieInfo} onSubmit={onSubmit}/>);
    fireEvent.change(getByLabelText('Title'),
        { target: { value: 'Updated Title' } });
    fireEvent.submit(getByText('Submit'));
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit)
        .toHaveBeenCalledWith({ ...initialMovieInfo, title: 'Updated Title' });
  });

  it('resets form when Reset button is clicked', () => {
    const { getByLabelText, getByText } = render(<MovieForm
        initialMovieInfo={initialMovieInfo} onSubmit={onSubmit}/>);
    fireEvent.change(getByLabelText('Title'),
        { target: { value: 'Updated Title' } });
    fireEvent.reset(getByText('Reset'));
    expect(getByLabelText('Title')).toHaveValue(initialMovieInfo.title);
  });
});
