import type { INodeProperties } from 'n8n-workflow';
import { queryParamDescription } from './queryParam';
import { paginator } from '../../shared/paginator';
import { limiter, returnAll} from '../../shared/limiter';
import { makeListOutput } from '../../shared/listOutput';

const showOnlyForEvents = {
	resource: ['Event'],
};
export const freeloEvents: INodeProperties[] = [
	{
		displayName: 'Event',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForEvents,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many events',
				description: 'Get many events',
				routing: {
					request: {
						method: 'GET',
						url: '=/events',
					},
					...paginator,
					output: makeListOutput('data.events'),
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
				resource: ['Event'],
			},
		},
	},
	{
		...limiter,
		displayOptions: {
			show: {
				operation: ['getAll'],
				resource: ['Event'],
				returnAll: [false],
			},
		},
	},
	...queryParamDescription,
];
