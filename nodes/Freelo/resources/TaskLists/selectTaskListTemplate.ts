import type { INodeProperties } from 'n8n-workflow';

const showForCreateTaskListFromTemplate = {
	operation: ['createTaskListFromTemplate'],
	resource: ['TaskList'],
};

export const taskListTemplateSelectDescription: INodeProperties[] = [
	{
		displayName: 'Template Project Name or ID',
		name: 'TemplateId',
		type: 'options',
		required: true,
		default: '',
		typeOptions: {
			loadOptionsMethod: 'getTemplateProjects',
		},
		displayOptions: {
			show: showForCreateTaskListFromTemplate,
		},
		description:
			'Select a template project or enter an ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Template Task List Name or ID',
		name: 'TaskListTemplateId',
		description:
			'Select a task list from the template project. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		type: 'options',
		required: true,
		default: '',
		typeOptions: {
			loadOptionsMethod: 'getTemplateTaskListsForProject',
			loadOptionsDependsOn: ['TemplateId'],
		},
		displayOptions: {
			show: showForCreateTaskListFromTemplate,
		},
		routing: {
			send: {
				type: 'body',
				property: 'tasklist_id',
			},
		},
	},
];
