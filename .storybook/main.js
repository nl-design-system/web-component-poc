module.exports = {
  stories: ['../**/*.stories.@(js|mdx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
      },
    },
    '@storybook/addon-cssresources',
    'storybook-addon-designs',
    '@etchteam/storybook-addon-status/register',
    'storybook-addon-mdx-embed',
  ],
};
