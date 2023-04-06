import '../src/index.css';

export const parameters = {
  backgrounds: {
    default: 'Dark',
    values: [
      {
        name: 'Dark',
        value: '#232323',
      },
      {
        name: 'White',
        value: '#ffffff',
      },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
