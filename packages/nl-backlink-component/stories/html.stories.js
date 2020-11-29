import DOMPurify from 'dompurify';
import mdx from './nl-backlink.mdx';

import '../style.css';
import '../extend.js';

export default {
  title: 'HTML/Backlink',
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
  },
};

const Template = ({ href, content }) => `<a is="nl-html-backlink" href="${href}">${DOMPurify.sanitize(content)}</a>`;

export const Simple = Template.bind({});
Simple.args = {
  href: '#',
  content: 'Back',
};

export const Complex = Template.bind({});
Complex.args = {
  href: 'http://example.com',
  content: 'Back to <strong>example.com</strong>',
};
