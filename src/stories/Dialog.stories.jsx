import Dialog from '../components/Dialog';

export default {
  title: 'Dialog',
  component: Dialog,
};

const Template = (args) => <Dialog {...args} />;
export const Default = Template.bind({});
Default.args = {
  title: 'Dialog Title',
  onClose: () => console.log('Dialog closed'),
};
