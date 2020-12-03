import { withCssResources } from '@storybook/addon-cssresources';
import { defaultTheme, exampleDarkMode, exampleLightMode } from './themes.js';
import '../style.css';
import './defaultTheme.css';
import '../element.js';

export const argTypes = {
  status: {
    description: 'Set the state attribute of the status badge',
    table: { category: 'colors' },
    control: { type: 'select', options: ['success', 'warning', 'error'] },
  },
  label: {
    description: 'Set the inner text of the badge, normally one word',
    table: { category: 'text' },
    control: 'text',
  },
};

export const getParameters = (Template) => {
  return {
    docs: {
      transformSource: (_src, context) => {
        return Template(context.args);
      },
    },
    cssresources: [
      {
        id: 'Example Status Badge Default Styles',
        code: `<style>:root ${defaultTheme}</style>`,
        picked: true,
        hideCode: false,
      },
      {
        id: 'Example Status Badge Light Mode',
        code: `<style>:root ${exampleLightMode}</style>`,
        picked: true,
        hideCode: false, // Defaults to false, this enables you to hide the code snippet and only displays the style selector
      },
      {
        id: 'Example Status Badge Dark Mode',
        code: `<style>:root ${exampleDarkMode};</style>`,
        picked: false,
        hideCode: false, // Defaults to false, this enables you to hide the code snippet and only displays the style selector
      },
    ],
  };
};
export const decorators = [withCssResources];
