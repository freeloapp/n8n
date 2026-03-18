import type { INodeProperties } from 'n8n-workflow';

const showForCreateTemplateProject = {
	operation: ['createTemplateProject'],
	resource: ['Project'],
};

export const projectTemplateCreateDescription: INodeProperties[] = [
	{
		displayName: 'Template Project Name or ID',
		name: 'projectId',
		type: 'options',
		required: true,
		default: '',
		typeOptions: {
			loadOptionsMethod: 'getTemplateProjects',
		},
		displayOptions: {
			show: showForCreateTemplateProject,
		},
		description:
			'Select a template project or enter an ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Project Name',
		name: 'projectName',
		type: 'string',
		default: '',
		displayOptions: {
			show: showForCreateTemplateProject,
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
		displayName: 'Project Owner Name or ID',
		name: 'projectOwner',
		type: 'options',
		default: '',
		displayOptions: {
			show: showForCreateTemplateProject,
		},
		description:
			'Select a user or enter a user ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'getUsers',
			allowCustomValue: true,
		},
		routing: {
			send: {
				type: 'body',
				property: 'project_owner_id',
			},
		},
	},

	{
		displayName: 'Currency',
		name: 'currency',
		type: 'options',
		required: true,
		displayOptions: {
			show: showForCreateTemplateProject,
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
	{
		displayName: 'Layout',
		name: 'layout',
		type: 'options',
		required: true,
		displayOptions: {
			show: showForCreateTemplateProject,
		},
		options: [
			{ name: 'ROWS', value: 'rows' },
			{ name: 'KANBAN', value: 'kanban' },
		],
		default: 'rows',
		routing: {
			send: {
				type: 'body',
				property: 'general_settings',
				value: '={{ { layout: $value } }}',
			},
		},
	},
];
