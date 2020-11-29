import { withCssResources } from '@storybook/addon-cssresources';
import mdx from './nl-status-badge.mdx';
import { defaultTheme, exampleDarkMode, exampleLightMode } from './themes.js';

export const getStatusBadgeStories = ({ prefix, Template }) => {
  const config = {
    title: `${prefix}/Status Badge`,
    argTypes: {
      status: {
        description: 'Set the state attribute of the status badge',
        control: { type: 'select', options: ['success', 'warning', 'error'] },
      },
      textContent: {
        description: 'Set the content of the badge, normally one word',
        control: 'text',
      },
    },
    parameters: {
      docs: {
        page: mdx,
        transformSource: (_src, context) => {
          return Template(context.args);
        },
      },
      cssresources: [
        {
          id: 'Example Default Theme',
          code: `<style>:root ${defaultTheme}</style>`,
          picked: true,
          hideCode: false,
        },
        {
          id: 'Example Light Mode',
          code: `<style>:root ${exampleLightMode}</style>`,
          picked: true,
          hideCode: false, // Defaults to false, this enables you to hide the code snippet and only displays the style selector
        },
        {
          id: 'Example Dark Mode',
          code: `<style>:root ${exampleDarkMode};</style>`,
          picked: false,
          hideCode: false, // Defaults to false, this enables you to hide the code snippet and only displays the style selector
        },
      ],
    },
    decorators: [withCssResources],
  };

  const Success = Template.bind({});
  Success.args = { status: 'success', textContent: 'Online' };

  const Warning = Template.bind({});
  Warning.args = { status: 'warning', textContent: 'Connecting...' };

  const Error = Template.bind({});
  Error.args = { status: 'error', textContent: 'Offline' };

  return { config, Success, Warning, Error };
};
