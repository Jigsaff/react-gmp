import SortControl from '../components/SortControl';

export default {
  title: 'SortControl',
  component: SortControl,
  argTypes: {
    currentSelection: {
      control: {
        type: 'select',
        options: ['releaseDate', 'title'],
      },
    },
    onSelectionChange: { action: 'onSelectionChange' },
  },
};

const Template = (args) => <SortControl {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentSelection: 'releaseDate',
  onSelectionChange: (value) => console.log(`Selected ${value}`),
};
