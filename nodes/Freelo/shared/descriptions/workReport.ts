import type { INodeProperties } from 'n8n-workflow';

export const WorkReportSelectDescription: INodeProperties = {
	displayName: 'Work Report ID',
	name: 'WorkReportId',
	type: 'number',
	required: true,
	default: 0,
	description: 'The ID of the work report',
	typeOptions: {
		minValue: 1,
	},
};
