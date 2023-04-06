import MovieTile from '../components/MovieTile';

export default {
  title: 'MovieTile',
  component: MovieTile,
};

const Template = (args) => <MovieTile {...args} />;
export const Default = Template.bind({});

Default.args = {
  movie: {
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UY698_.jpg',
    movieName: 'Pulp Fiction',
    releaseYear: 1994,
    genres: ['Crime', 'Drama'],
  },
  onClick: () => console.log('onClick'),
};
