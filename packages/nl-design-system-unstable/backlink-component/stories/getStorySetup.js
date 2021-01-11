import { withCssResources } from '@storybook/addon-cssresources';
import { defaultTheme, exampleDarkMode, exampleLightMode } from './themes.js';
import '../style.css';
import './defaultTheme.css';
import { withDesign } from 'storybook-addon-designs';
import intro from '../README.md';
import contentGuidelines from '../docs/content-guidelines.md';

export const argTypes = {
  href: {
    description: 'Set the href attribute of the backlink',
    control: 'text',
  },
  content: {
    description: 'Set the content of the badge, normally a string',
    control: 'text',
  },
};

export const getParameters = (Template) => {
  return {
    docs: {
      transformSource: (_src, { args }) => Template(args),
    },
    cssresources: [
      {
        id: 'Example Backlink Default Styles',
        code: `<style>:root ${defaultTheme}</style>`,
        picked: true,
        hideCode: false,
      },
      {
        id: 'Example Backlink Light Mode',
        code: `<style>:root ${exampleLightMode}</style>`,
        picked: true,
        hideCode: false, // Defaults to false, this enables you to hide the code snippet and only displays the style selector
      },
      {
        id: 'Example Backlink Dark Mode',
        code: `<style>:root ${exampleDarkMode};</style>`,
        picked: false,
        hideCode: false, // Defaults to false, this enables you to hide the code snippet and only displays the style selector
      },
    ],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/BBZBJdbdVnvHwhcBoKsczw/components-backlink',
    },
    status: 'IN DEVELOPMENT',
    notes: { Introduction: intro, 'Content Richtlijnen': contentGuidelines },
  };
};

export const decorators = [withCssResources, withDesign];
