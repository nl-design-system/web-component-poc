import { withCssResources } from '@storybook/addon-cssresources';
import { exampleBrandStyles, exampleDarkMode, exampleLightMode, defaultTheme } from './themes.js';
import '../style.css';
import './defaultTheme.css';
import '../element.js';
import { withDesign } from 'storybook-addon-designs';
import README from '../README.md';
import contentGuidelines from '../docs/content-guidelines.md';

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
        id: 'Default Component Styles without Theme',
        code: `<style>:root ${defaultTheme}</style>`,
        picked: true,
      },
      {
        id: 'Example Status Badge Root Styles',
        code: `<style>:root ${exampleBrandStyles}</style>`,
        picked: true,
      },
      {
        id: 'Example Status Badge Light Mode',
        code: `<style>:root ${exampleLightMode}</style>`,
        picked: true,
      },
      {
        id: 'Example Status Badge Dark Mode',
        code: `<style>:root ${exampleDarkMode};</style>`,
        picked: false,
      },
    ],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/thNg88CEm4XU4Pm9K2V0m2/component-badge-status-badge',
    },
    status: 'IN DEVELOPMENT',
    notes: { UX: README, Content: contentGuidelines },
  };
};
export const decorators = [withCssResources, withDesign];
