import { argTypes } from './sharedConfig.js';
import './theme.css';
import '../element.js';

export default {
	title: 'Web Components/Status Badge',
	argTypes
};

const Template = ({ label, status }) => `<nl-status-badge status="${status}">${label || '-'}</nl-status-badge>`;

export const Success = Template.bind({});
Success.args = {
  status: 'success',
  label: 'Online',
};

export const Warning = Template.bind({});
Warning.args = {
  status: 'warning',
  label: 'Connecting...',
};

export const Error = Template.bind({});
Error.args = {
  status: 'error',
  label: 'Offline',
};

export const Undefined = Template.bind({});
