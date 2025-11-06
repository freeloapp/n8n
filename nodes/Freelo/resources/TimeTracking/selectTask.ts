import type { INodeProperties } from 'n8n-workflow';

const showForStartEditTimeTracking = {
	operation: ['start', 'edit'],
	resource: ['TimeTracking'],
};

export const TaskSelectDescription: INodeProperties[] = [
	{
		displayName: 'Task Name or ID',
		name: 'TaskId',
		type: 'options',
		default: '',
		displayOptions: {
			show: showForStartEditTimeTracking,
		},
		description:
			'Select a Task or enter a custom Task ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'getTasks',
			allowCustomValue: true,
		},
		routing: {
			send: {
				type: 'body',
				property: 'task_id',
				value: '={{ $value || undefined }}',
			},
		},
	},
];
