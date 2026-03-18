import type { INodeProperties } from 'n8n-workflow';

const showForSetTimeEstimateTask = {
	operation: ['setTotalTimeEstimate', 'setUserTimeEstimate'],
	resource: ['Task'],
};

export const TotalTimeSelectDescription: INodeProperties[] = [
	{
		displayName: 'Total Time Estimate',
		name: 'totalTime',
		type: 'number',
		required: true,
		default: 0,
		description: 'The time estimate in minutes',
		placeholder: 'e.g., 120',
		typeOptions: {
			minValue: 1,
		},
		displayOptions: {
			show: showForSetTimeEstimateTask,
		},
		routing: {
			send: {
				type: 'body',
				property: 'minutes',
			},
		},
	},
];
