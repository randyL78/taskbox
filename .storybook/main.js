module.exports = {
  stories: ['../src/components/**/*.js'],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  docs: {
    autodocs: 'tag'
  },
  features: {
    interactionsDebugger: true,
  },
};
