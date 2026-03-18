import type { INodeProperties } from 'n8n-workflow';

const showForCreateTaskList = {
	operation: ['createTaskList'],
	resource: ['TaskList'],
};

export const taskListCreateDescription: INodeProperties[] = [
	{
		displayName: 'Tasks List Name',
		name: 'taskListName',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showForCreateTaskList,
		},
		description: 'Name of the Tasks list',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Budget',
		name: 'budget',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: showForCreateTaskList,
		},
		description: 'The budget for the task list in minutes',
		hint: 'Set to 0 for unlimited',
		typeOptions: {
			minValue: 0,
		},
		routing: {
			send: {
				type: 'body',
				property: 'budget',
			},
		},
	},
];
