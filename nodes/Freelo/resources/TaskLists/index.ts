import type { INodeProperties } from 'n8n-workflow';
import {
	projectSelectDescription,
	TaskListSelectDescription,
	usersSelectDescription,
} from '../../shared/descriptions';
import { taskListCreateDescription } from './createTaskList';
import { taskListTemplateSelectDescription } from './selectTaskListTemplate';
import { taskListFromTemplateCreateDescription } from './createTaskListFromTemplate';
import { queryParamDescription } from './queryParam';
import { limiter, returnAll} from '../../shared/limiter';
import { paginator } from '../../shared/paginator';
import { makeListOutput } from '../../shared/listOutput';
const showOnlyForTaskList = {
	resource: ['TaskList'],
};

export const freeloTaskList: INodeProperties[] = [
	{
		displayName: 'Task List',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForTaskList,
		},
		options: [
			{
				name: 'Create',
				value: 'createTaskList',
				action: 'Create task list',
				description: 'Create task list',
				routing: {
					request: {
						method: 'POST',
						url: '=/project/{{$parameter["projectId"]}}/tasklists',
					},
				},
			},
			{
				name: 'Create From Template',
				value: 'createTaskListFromTemplate',
				action: 'Create task list from template',
				description: 'Create task list from template',
				routing: {
					request: {
						method: 'POST',
							url: '=/tasklist/create-from-template/{{$parameter["TemplateId"]}}',
					},
				},
			},

			{
				name: 'Get All TaskLists Workers',
				value: 'getTaskListWorkers',
				action: 'Get all task list workers',
				routing: {
					request: {
						method: 'GET',
						url: '=/project/{{$parameter["projectId"]}}/tasklist/{{$parameter["TaskListId"]}}/assignable-workers',
					},
				},
			},

			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many task lists',
				description: 'Get many task lists',
				routing: {
					request: {
						method: 'GET',
						url: '=/all-tasklists',
					},
					...paginator,
					output: makeListOutput('data.tasklists'),
				},
			},

			{
				name: 'Get TaskLists Details',
				value: 'getTaskListDetails',
				action: 'Get details for task list',
				routing: {
					request: {
						method: 'GET',
						url: '=/tasklist/{{$parameter["TaskListId"]}}',
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
				resource: ['TaskList'],

			},
		},
	},
	{
		...limiter,
		displayOptions: {
			show: {
				operation: ['getAll'],
				resource: ['TaskList'],
				returnAll: [false],
			},
		},
	},
	...taskListTemplateSelectDescription,
	{
		...projectSelectDescription,
		displayOptions: {
			show: {
				operation: ['getTaskListWorkers', 'createTaskList'],
				resource: ['TaskList'],
			},
		},
	},
	{
		...TaskListSelectDescription,
		modes: [
			{
				displayName: 'From List',
				name: 'list',
				type: 'list' as const,
				typeOptions: {
					searchListMethod: 'searchTaskListsForProject',
					searchable: true,
				},
			},
			{
				displayName: 'By ID',
				name: 'id',
				type: 'string' as const,
				placeholder: 'e.g., 12345',
				validation: [
					{
						type: 'regex' as const,
						properties: {
							regex: '^[0-9]+$',
							errorMessage: 'Not a valid numeric ID',
						},
					},
				],
			},
		],
		displayOptions: {
			show: {
				operation: ['getTaskListWorkers'],
				resource: ['TaskList'],
			},
		},
	},
	{
		...TaskListSelectDescription,
		displayOptions: {
			show: {
				operation: ['getTaskListDetails'],
				resource: ['TaskList'],
			},
		},
	},
	...taskListFromTemplateCreateDescription,
	{
		...usersSelectDescription,
		required: false,
		description: 'Users from template to invite.',
		displayOptions: {
			show: {
				operation: ['createTaskListFromTemplate'],
				resource: ['TaskList'],
			},
		},
	},
	...taskListCreateDescription,
	...queryParamDescription,
];
