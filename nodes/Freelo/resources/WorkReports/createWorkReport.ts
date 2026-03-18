import type { INodeProperties } from 'n8n-workflow';
import { dateReportedFieldBase, minutesFieldBase, costFieldBase, noteFieldBase } from './workReportFields';

const showForCreateWorkReport = {
	operation: ['createWorkReport'],
	resource: ['WorkReport'],
};

export const workReportCreateDescription: INodeProperties[] = [
	{
		...dateReportedFieldBase,
		displayOptions: {
			show: showForCreateWorkReport,
		},
	} as INodeProperties,
	{
		displayName: 'Worker Name or ID',
		name: 'worker',
		type: 'options',
		description:
			'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
		default: '',
		displayOptions: {
			show: showForCreateWorkReport,
		},
		typeOptions: {
			loadOptionsMethod: 'getUsers',
			allowCustomValue: true,
		},
		routing: {
			send: {
				type: 'body',
				property: 'worker_id',
			},
		},
	},
	{
		...minutesFieldBase,
		displayOptions: {
			show: showForCreateWorkReport,
		},
	} as INodeProperties,
	{
		...costFieldBase,
		displayOptions: {
			show: showForCreateWorkReport,
		},
	} as INodeProperties,
	{
		...noteFieldBase,
		displayOptions: {
			show: showForCreateWorkReport,
		},
	} as INodeProperties,
];
