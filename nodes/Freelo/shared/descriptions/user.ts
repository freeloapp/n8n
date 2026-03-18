import type { INodeProperties } from 'n8n-workflow';

export const userSelectDescription: INodeProperties = {
	displayName: 'User Name or ID',
	name: 'userId',
	type: 'options',
	required: true,
	default: '',
	description:
		'Select a user or enter a custom user ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	typeOptions: {
		loadOptionsMethod: 'getUsers',
		allowCustomValue: true,
	},
	routing: {
		send: {
			type: 'body',
			property: 'worker',
		},
	},
};

export const usersSelectDescription: INodeProperties = {
	displayName: 'User Names or IDs',
	name: 'userIds',
	type: 'multiOptions',
	required: true,
	default: [],
	description:
		'Select users or enter custom user IDs. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	typeOptions: {
		loadOptionsMethod: 'getProjectWorkers',
		loadOptionsDependsOn: ['projectId'],
		allowCustomValue: true,
	},
	routing: {
		send: {
			type: 'body',
			property: 'users_ids',
			value: '={{ $value }}',
		},
	},
};
