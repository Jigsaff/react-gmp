import GenreSelect from '../components/GenreSelect';

export default {
  title: 'GenreSelect',
  component: GenreSelect,
  argTypes: {
    genres: {
      control: {
        type: 'array',
        options: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy'],
      },
    },
    selectedGenre: {
      control: {
        type: 'text',
      },
    },
    onSelect: {
      action: 'selected',
    },
  },
};

const Template = (args) => <GenreSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  genres: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy'],
  selectedGenre: 'Comedy',
  onSelect: (genre) => console.log(`Selected genre: ${genre}`),
};
