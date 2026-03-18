import type { INodeProperties } from 'n8n-workflow';
import { timeTrackingCreateDescription } from './createTimeTracking';
import { TaskSelectDescription } from './selectTask';

const showOnlyForTimeTracking = {
	resource: ['TimeTracking'],
};
export const freeloTimeTracking: INodeProperties[] = [
	{
		displayName: 'Time Tracking',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForTimeTracking,
		},
		options: [
			{
				name: 'Start',
				value: 'start',
				action: 'Start time tracking',
				description: 'Start time tracking',
				routing: {
					request: {
						method: 'POST',
						url: '=/timetracking/start',
					},
				},
			},
			{
				name: 'Stop',
				value: 'stop',
				action: 'Stop time tracking',
				description: 'Stop time tracking',
				routing: {
					request: {
						method: 'POST',
						url: '=/timetracking/stop',
					},
				},
			},
			{
				name: 'Edit',
				value: 'edit',
				action: 'Edit time tracking',
				description: 'Edit time tracking',
				routing: {
					request: {
						method: 'POST',
						url: '=/timetracking/edit',
					},
				},
			},
		],
		default: 'start',
	},
	...timeTrackingCreateDescription,
	...TaskSelectDescription,
];
