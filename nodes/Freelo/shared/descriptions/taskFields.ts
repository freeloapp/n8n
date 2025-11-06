import type { INodeProperties } from 'n8n-workflow';

export const dueDateFieldBase: Omit<INodeProperties, 'displayOptions'> = {
	displayName: 'Due Date',
	name: 'dueDate',
	type: 'dateTime',
	default: '',
	description: 'The due date for the task',
	hint: 'Leave empty to skip',
	routing: {
		send: {
			type: 'body',
			property: 'due_date',
		},
	},
};

export const dueDateEndFieldBase: Omit<INodeProperties, 'displayOptions'> = {
	displayName: 'Due Date End',
	name: 'dueDateEnd',
	type: 'dateTime',
	default: '',
	description: 'The end date for the task date range',
	hint: 'Creates a date range when combined with Due Date',
	routing: {
		send: {
			type: 'body',
			property: 'due_date_end',
		},
	},
};

export const priorityFieldBase: Omit<INodeProperties, 'displayOptions'> = {
	displayName: 'Priority',
	name: 'priority',
	type: 'options',
	options: [
		{ name: '— None —', value: '' },
		{ name: 'High', value: 'h' },
		{ name: 'Medium', value: 'm' },
		{ name: 'Low', value: 'l' },
	],
	default: '',
	description: 'The priority level of the task',
	routing: {
		send: {
			type: 'body',
			property: 'priority_enum',
			value: '={{ $value || undefined }}',
		},
	},
};

export const commentFieldBase: Omit<INodeProperties, 'displayOptions'> = {
	displayName: 'Comment',
	name: 'comment',
	type: 'string',
	default: '',
	description: 'An initial comment to add to the task',
	routing: {
		send: {
			type: 'body',
			property: 'comment.content',
		},
	},
};

export const trackingUsersFieldBase: Omit<INodeProperties, 'displayOptions'> = {
	displayName: 'Tracking User Names or IDs',
	name: 'trackingUsers',
	type: 'multiOptions',
	default: [],
	description:
		'Select users or enter custom user IDs. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	typeOptions: {
		loadOptionsMethod: 'getUsers',
		allowCustomValue: true,
	},
	routing: {
		send: {
			type: 'body',
			property: 'tracking_users_ids',
		},
	},
};
