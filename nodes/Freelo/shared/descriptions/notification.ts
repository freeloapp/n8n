import type { INodeProperties } from 'n8n-workflow';

export const notificationSelectDescription: INodeProperties = {
	displayName: 'Notification Name or ID',
	name: 'notificationId',
	type: 'options',
	required: true,
	default: '',
	description:
		'Select a notification or enter a custom notification ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	typeOptions: {
		loadOptionsMethod: 'getNotifications',
		allowCustomValue: true,
	},
};
