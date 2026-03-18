import type { INodeProperties } from 'n8n-workflow';
import { TaskSelectDescription, WorkReportSelectDescription } from '../../shared/descriptions';
import { workReportCreateDescription } from './createWorkReport';
import { workReportEditDescription } from './editWorkReport';
import { queryParamDescription } from './queryParam';
import { paginator } from '../../shared/paginator';
import { limiter, returnAll} from '../../shared/limiter';
import { makeListOutput } from '../../shared/listOutput';

const showOnlyForWorkReports = {
	resource: ['WorkReport'],
};
export const freeloWorkReports: INodeProperties[] = [
	{
		displayName: 'Work Report',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForWorkReports,
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get a work report',
				description: 'Get a single work report by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/work-reports/{{$parameter["workReportId"]}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many work reports',
				description: 'Get many work reports',
				routing: {
					request: {
						method: 'GET',
						url: '=/work-reports',
					},
					...paginator,
					output: makeListOutput('data.reports'),
				},
			},
			{
				name: 'Create',
				value: 'createWorkReport',
				action: 'Create work report',
				description: 'Create work report',
				routing: {
					request: {
						method: 'POST',
						url: '=/task/{{$parameter["TaskId"]}}/work-reports',
					},
				},
			},
			{
				name: 'Edit',
				value: 'editWorkReport',
				action: 'Edit work report',
				description: 'Edit work report',
				routing: {
					request: {
						method: 'POST',
						url: '=/work-reports/{{$parameter["WorkReportId"]}}',
					},
				},
			},
			{
				name: 'Delete',
				value: 'deleteWorkReport',
				action: 'Delete work report',
				description: 'Delete work report',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/work-reports/{{$parameter["WorkReportId"]}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	{
		...returnAll,
		displayOptions: {
			show: {
				operation: ['getAll'],
				resource: ['WorkReport'],

			},
		},
	},
	{
		...limiter,
		displayOptions: {
			show: {
				operation: ['getAll'],
				resource: ['WorkReport'],
				returnAll: [false],

			},
		},
	},
	{
		...TaskSelectDescription,
		displayOptions: {
			show: {
				operation: ['createWorkReport'],
				resource: ['WorkReport'],
			},
		},
	},
	{
		...WorkReportSelectDescription,
		displayOptions: {
			show: {
				operation: ['get', 'editWorkReport', 'deleteWorkReport'],
				resource: ['WorkReport'],
			},
		},
	},
	...workReportEditDescription,
	...workReportCreateDescription,
	...queryParamDescription,
];
