export const argTypes = {
	status: {
		description: 'Set the state attribute of the status badge',
		control: { type: 'select', options: ['success', 'warning', 'error']}
	},
	label: {
		description: 'Set the inner text of the badge, normally one word',
		control: 'text'
	}
}
