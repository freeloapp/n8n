import type { INodeProperties } from 'n8n-workflow';

const showForCreateTaskListFromTemplate = {
	operation: ['createTaskListFromTemplate'],
	resource: ['TaskList'],
};

export const taskListFromTemplateCreateDescription: INodeProperties[] = [
	{
		displayName: 'Target Project Name or ID',
		name: 'projectId',
		type: 'options',
		description:
			'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
		default: '',
		displayOptions: {
			show: showForCreateTaskListFromTemplate,
		},
		typeOptions: {
			loadOptionsMethod: 'getProjects',
			allowCustomValue: true,
		},
		routing: {
			send: {
				type: 'body',
				property: 'target_project_id',
			},
		},
	},
	{
		displayName: 'Target Task List Name or ID',
		name: 'targetTasklistID',
		type: 'options',
		description:
			'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
		default: '',
		displayOptions: {
			show: showForCreateTaskListFromTemplate,
		},
		typeOptions: {
			loadOptionsMethod: 'getTaskLists',
			allowCustomValue: true,
		},

		routing: {
			send: {
				type: 'body',
				property: 'target_tasklist_id',
			},
		},
	},
];
