import type { INodeProperties } from 'n8n-workflow';

export const TaskListSelectDescription: INodeProperties = {
	displayName: 'Task List Name or ID',
	name: 'TaskListId',
	type: 'resourceLocator',
	required: true,
	default: { mode: 'list', value: '' },
	description:
		'Select a Tasks list or enter a custom Tasks list ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	modes: [
		{
			displayName: 'From List',
			name: 'list',
			type: 'list',
			typeOptions: {
				searchListMethod: 'searchTaskLists',
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
