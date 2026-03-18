import type { INodeProperties } from 'n8n-workflow';
import { dateReportedFieldBase, minutesFieldBase, costFieldBase, noteFieldBase } from './workReportFields';

const showForEditWorkReport = {
	operation: ['editWorkReport'],
	resource: ['WorkReport'],
};

export const workReportEditDescription: INodeProperties[] = [
	{
		...dateReportedFieldBase,
		required: false,
		displayOptions: {
			show: showForEditWorkReport,
		},
	} as INodeProperties,
	{
		...minutesFieldBase,
		required: false,
		displayOptions: {
			show: showForEditWorkReport,
		},
	} as INodeProperties,
	{
		...costFieldBase,
		displayOptions: {
			show: showForEditWorkReport,
		},
	} as INodeProperties,
	{
		...noteFieldBase,
		displayOptions: {
			show: showForEditWorkReport,
		},
	} as INodeProperties,
];
