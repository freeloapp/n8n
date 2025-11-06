import type { INodeProperties } from 'n8n-workflow';

export const projectsSelectDescription: INodeProperties = {
	displayName: 'Project Names or IDs',
	name: 'projectsId',
	type: 'multiOptions',
	default: [],
	required: true,
	description:
		'Select a project or enter a custom project ID. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	typeOptions: {
		loadOptionsMethod: 'getProjects',
		allowCustomValue: true,
	},
	routing: {
		send: {
			type: 'body',
			property: 'projects_ids',
		},
	},
};

export const projectSelectDescription: INodeProperties = {
	displayName: 'Project Name or ID',
	name: 'projectId',
	type: 'resourceLocator',
	required: true,
	default: { mode: 'list', value: '' },
	description:
		'Select a project or enter a custom project ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	modes: [
		{
			displayName: 'From List',
			name: 'list',
			type: 'list',
			typeOptions: {
				searchListMethod: 'searchProjects',
				searchable: true,
			},
		},
		{
			displayName: 'By ID',
			name: 'id',
			type: 'string',
			placeholder: 'e.g., 12345',
			validation: [
				{
					type: 'regex',
					properties: {
						regex: '^[0-9]+$',
						errorMessage: 'Not a valid numeric ID',
					},
				},
			],
		},
	],
};
