module.exports = {
  stories: ['../**/*.stories.@(js|mdx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
      },
    },
    'storybook-addon-designs',
    '@etchteam/storybook-addon-status/register',
    'storybook-addon-mdx-embed',
    '@storybook/addon-notes/register',
    'storybook-design-token',
  ],
};
