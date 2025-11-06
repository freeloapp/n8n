import type { INodeProperties } from 'n8n-workflow';

const showForStartEditTimeTracking = {
	operation: ['start', 'edit'],
	resource: ['TimeTracking'],
};

export const timeTrackingCreateDescription: INodeProperties[] = [
	{
		displayName: 'Note',
		name: 'note',
		type: 'string',
		default: '',
		displayOptions: {
			show: showForStartEditTimeTracking,
		},
		routing: {
			send: {
				type: 'body',
				property: 'note',
				value: '={{ $value || undefined }}',

			},
		},
	},
];
