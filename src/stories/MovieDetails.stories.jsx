import MovieDetails from '../components/MovieDetails';

export default {
  title: 'MovieDetails',
  component: MovieDetails,
};

const Template = (args) => <MovieDetails {...args} />;
export const Default = Template.bind({});

Default.args = {
  movie: {
    imageUrl: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
    name: 'Avengers: Infinity War',
    releaseYear: '2018',
    rating: 8.7,
    duration: '2h 29min',
    description: 'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment, the fate of Earth and existence has never been more uncertain.—Marvel Studios',
  },
};
