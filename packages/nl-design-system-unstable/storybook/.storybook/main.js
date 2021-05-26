module.exports = {
  stories: ['../__stories__/**/*.stories.mdx', '../../!(storybook)/**/*.stories.mdx'],
  addons: [
    '@storybook/addon-notes/register',
    '@etchteam/storybook-addon-status/register',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
        controls: false,
        backgrounds: false,
        viewport: false,
      },
    },
    'storybook-addon-mdx-embed',
    'storybook-design-token',
  ],
  core: {
    builder: 'webpack5',
  }
}
