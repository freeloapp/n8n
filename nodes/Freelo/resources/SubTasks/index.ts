import type { INodeProperties } from 'n8n-workflow';
import { TaskSelectDescription } from '../../shared/descriptions';
import { subTaskCreateDescription } from './createSubTask';
import { paginator } from '../../shared/paginator';
import { limiter, returnAll} from '../../shared/limiter';
import { makeListOutput } from '../../shared/listOutput';

const showOnlyForFreeloSubtasks = {
	resource: ['SubTask'],
};
export const freeloSubTask: INodeProperties[] = [
	{
		displayName: 'Sub Task',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForFreeloSubtasks,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many sub tasks',
				description: 'Get many sub tasks',
				routing: {
					request: {
						method: 'GET',
						url: '=/task/{{$parameter["TaskId"]}}/subtasks',
					},
					...paginator,
					output: makeListOutput('data.subtasks'),
				},
			},
			{
				name: 'Create',
				value: 'createSubTask',
				action: 'Create sub task',
				description: 'Create SubTask',
				routing: {
					request: {
						method: 'POST',
						url: '=/task/{{$parameter["TaskId"]}}/subtasks',
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
				resource: ['SubTask'],

			},
		},
	},
	{
		...limiter,
		displayOptions: {
			show: {
				operation: ['getAll'],
				resource: ['SubTask'],
				returnAll: [false],
			},
		},
	},
	{
		...TaskSelectDescription,
		displayOptions: {
			show: {
				operation: ['getAll', 'createSubTask'],
				resource: ['SubTask'],
			},
		},
	},
	...subTaskCreateDescription,
];
