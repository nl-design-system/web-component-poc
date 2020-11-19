import './theme.css';
import '../style.css';

export default {
  title: 'HTML/Status Badge',
  argTypes: {
	status: { control: { type: 'select', options: ['success', 'warning', 'error']}},
	label: { control: 'text'},
	darkmode: {control: 'boolean'}
  }
};

const Template = ({ label, status }) => `<span class="nl-status-badge nl-status-badge--${status}">${label}</span>`;

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
Undefined.args = {
	label: 'Oops, forgot to specify status'
}
