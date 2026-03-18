import type { INodeProperties } from 'n8n-workflow';
import { paginator } from '../../shared/paginator';
import { limiter, returnAll} from '../../shared/limiter';
import { makeListOutput } from '../../shared/listOutput';

const showOnlyForFiles = {
	resource: ['File'],
};
export const freeloFiles: INodeProperties[] = [
	{
		displayName: 'File',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForFiles,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many',
				description: 'Get many directory, link, file, or document',
				routing: {
					request: {
						method: 'GET',
						url: '=/all-docs-and-files',
					},
					...paginator,
					output: makeListOutput('data.items'),
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
				resource: ['File'],

			},
		},
	},
	{
		...limiter,
		displayOptions: {
			show: {
				operation: ['getAll'],
				resource: ['File'],
				returnAll: [false],
			},
		},
	},
];
