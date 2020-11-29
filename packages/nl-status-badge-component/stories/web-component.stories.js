import mdx from './nl-status-badge.mdx';
import './theme.css';
import '../style.css';
import '../element.js';

export default {
  title: 'Web Components/Status Badge',
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
  },
};

const Template = ({ textContent, status }) =>
  `<nl-status-badge status="${status}">${textContent || '-'}</nl-status-badge>`;

export const Success = Template.bind({});
Success.args = { status: 'success', textContent: 'Online' };

export const Warning = Template.bind({});
Warning.args = { status: 'warning', textContent: 'Connecting...' };

export const Error = Template.bind({});
Error.args = { status: 'error', textContent: 'Offline' };
