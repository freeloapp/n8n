import type { INodeProperties } from 'n8n-workflow';

const showForCreateProject = {
	operation: ['createProject'],
	resource: ['Project'],
};

export const projectCreateDescription: INodeProperties[] = [
	{
		displayName: 'Project Name',
		name: 'projectName',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showForCreateProject,
		},
		description: 'Name of the project',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Currency',
		name: 'currency',
		type: 'options',
		required: true,
		displayOptions: {
			show: showForCreateProject,
		},
		options: [
			{ name: 'CZK', value: 'CZK' },
			{ name: 'EUR', value: 'EUR' },
			{ name: 'USD', value: 'USD' },
		],
		default: 'CZK',
		routing: {
			send: {
				type: 'body',
				property: 'currency_iso',
				value: '={{$value}}',
			},
		},
	},
];
