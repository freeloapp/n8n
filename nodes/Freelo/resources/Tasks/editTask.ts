import type { INodeProperties } from 'n8n-workflow';
import {
	dueDateFieldBase,
	dueDateEndFieldBase,
	priorityFieldBase,
	trackingUsersFieldBase,
} from '../../shared/descriptions';

const showForEditTask = {
	operation: ['editTask'],
	resource: ['Task'],
};

export const taskEditDescription: INodeProperties[] = [
	{
		displayName: 'Task Name',
		name: 'taskName',
		type: 'string',
		default: '',
		displayOptions: {
			show: showForEditTask,
		},
		description: 'Name of the task',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showForEditTask,
		},
		options: [
			{ ...dueDateFieldBase } as INodeProperties,
			{ ...dueDateEndFieldBase } as INodeProperties,
			{ ...priorityFieldBase } as INodeProperties,
			{ ...trackingUsersFieldBase } as INodeProperties,
		],
	},
];
