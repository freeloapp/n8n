import type { INodeProperties } from 'n8n-workflow';

const showForCreateTaskReminder = {
	operation: ['createTaskReminder'],
	resource: ['Task'],
};

export const dateSelectDescription: INodeProperties[] = [
	{
		displayName: 'Remind Me At',
		name: 'remindMeAt',
		type: 'dateTime',
		required: true,
		default: '',
		displayOptions: {
			show: showForCreateTaskReminder,
		},
		routing: {
			send: {
				type: 'body',
				property: 'remind_at',
			},
		},
	},
];
