import type { INodeProperties } from 'n8n-workflow';
import {
	dueDateFieldBase,
	dueDateEndFieldBase,
	priorityFieldBase,
	commentFieldBase,
	trackingUsersFieldBase,
} from '../../shared/descriptions';

const showForCreateSubTask = {
	operation: ['createSubTask'],
	resource: ['SubTask'],
};

export const subTaskCreateDescription: INodeProperties[] = [
	{
		displayName: 'Task Name',
		name: 'taskName',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showForCreateSubTask,
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
			show: showForCreateSubTask,
		},
		options: [
			{ ...dueDateFieldBase } as INodeProperties,
			{ ...dueDateEndFieldBase } as INodeProperties,
			{ ...priorityFieldBase } as INodeProperties,
			{ ...commentFieldBase } as INodeProperties,
			{ ...trackingUsersFieldBase } as INodeProperties,
		],
	},
];
