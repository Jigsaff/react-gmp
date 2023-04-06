import SearchForm from '../components/SearchForm';

export default {
  title: 'SearchForm',
  component: SearchForm,
};

const Template = (args) => <SearchForm {...args} />;
export const Default = Template.bind({});

Default.args = {
  initialQuery: 'What do you want to watch?',
  onSearch: (query) => console.log(query),
};
