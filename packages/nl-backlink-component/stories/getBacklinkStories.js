import mdx from './nl-backlink.mdx';
import { defaultTheme, exampleLightMode, exampleDarkMode } from './themes';

export const getBacklinkStories = ({ prefix, Template }) => {
  const config = {
    title: `${prefix}/Backlink`,
    argTypes: {
      href: {
        description: 'Set the href attribute of the backlink',
        control: 'text',
      },
      content: {
        description: 'Set the content of the badge, normally a string',
        control: 'text',
      },
    },
    parameters: {
      docs: {
        page: mdx,
        transformSource: (_src, { args }) => Template(args),
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
  };

  const Simple = Template.bind({});
  Simple.args = {
    href: '#',
    content: 'Back',
  };

  const Complex = Template.bind({});
  Complex.args = {
    href: 'http://example.com',
    content: 'Back to <strong>example.com</strong>',
  };

  return { config, Simple, Complex };
};
