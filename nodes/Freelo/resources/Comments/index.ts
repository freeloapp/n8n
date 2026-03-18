import type { INodeProperties } from 'n8n-workflow';
import { CommentCreateDescription } from './createCommentDescription';
import { commentSelectDescription, TaskSelectDescription } from '../../shared/descriptions';
import { queryParamDescription } from './queryParam';
import { paginator } from '../../shared/paginator';
import { limiter, returnAll} from '../../shared/limiter';
import { makeListOutput } from '../../shared/listOutput';

const showOnlyForComments = {
	resource: ['Comment'],
};
export const freeloComments: INodeProperties[] = [
	{
		displayName: 'Comment',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForComments,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many comments',
				routing: {
					request: {
						method: 'GET',
							url: '=/all-comments',
					},
					...paginator,
					output: makeListOutput('data.comments'),
				},
			},
			{
				name: 'Create',
				value: 'createComment',
				description: 'Create comment',
				action: 'Create comment',
				routing: {
					request: {
						method: 'POST',
						url: '=/task/{{$parameter["TaskId"]}}/comments',
					},
				},
			},
			{
				name: 'Edit',
				value: 'editComment',
				description: 'Edit comment',
				action: 'Edit comment',
				routing: {
					request: {
						method: 'POST',
						url: '=/comment/{{$parameter["commentId"]}}',
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
				resource: ['Comment'],

			},
		},
	},
	{
		...limiter,
		displayOptions: {
			show: {
				operation: ['getAll'],
				resource: ['Comment'],
				returnAll: [false],

			},
		},
	},
	{
		...TaskSelectDescription,
		displayOptions: {
			show: {
				operation: ['createComment'],
				resource: ['Comment'],
			},
		},
	},
	{
		...commentSelectDescription,
		displayOptions: {
			show: {
				operation: ['editComment'],
				resource: ['Comment'],
			},
		},
	},
	...CommentCreateDescription,
	...queryParamDescription,
];
