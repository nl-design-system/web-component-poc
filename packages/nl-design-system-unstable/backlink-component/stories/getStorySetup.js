import { defaultTheme, exampleDarkMode, exampleLightMode } from './themes.js';
import '../style.css';
import './defaultTheme.css';
import README from '../README.md';
import contentGuidelines from '../docs/content-guidelines.md';

export default (Template) => {
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
    notes: { UX: README, Content: contentGuidelines },
  };
};
