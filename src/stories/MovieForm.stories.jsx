import MovieForm from '../components/MovieForm';

export default {
  title: 'MovieForm',
  component: MovieForm,
};

const Template = (args) => <MovieForm {...args} />;
export const Default = Template.bind({});
Default.args = {
  initialMovieInfo: {},
  onSubmit: (formData) => {
    console.log(formData);
  },
};
