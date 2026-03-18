import type { INodeProperties } from 'n8n-workflow';
import {
	projectSelectDescription,
	TaskSelectDescription,
	userSelectDescription,
	TaskListSelectDescription,
} from '../../shared/descriptions';
import { taskCreateDescription } from './createTask';
import { taskEditDescription } from './editTask';
import { taskDescriptionCreateDescription } from './createTaskDescription';
import { dateSelectDescription } from './selectDate';
import { TotalTimeSelectDescription } from './selectTotalTime';
import { queryParamDescription } from './queryParam';
import { paginator } from '../../shared/paginator';
import { limiter, returnAll} from '../../shared/limiter';
import { makeListOutput } from '../../shared/listOutput';

const showOnlyForFreeloTasks = {
	resource: ['Task'],
};

export const freeloTasks: INodeProperties[] = [
	{
		displayName: 'Task',
		default: 'getAll',
		displayOptions: {
			show: showOnlyForFreeloTasks,
		},
		name: 'operation',
		noDataExpression: true,

		options: [
			{
				name: 'Activate',
				value: 'activateTask',
				action: 'Activate task',
				description: 'Activate task',
				routing: {
					request: {
						method: 'POST',
						url: '=/task/{{$parameter["TaskId"]}}/activate',
					},
				},
			},
			{
				name: 'Create',
				value: 'createTask',
				action: 'Create task',
				description: 'Create Task',
				routing: {
					request: {
						method: 'POST',
						url: '=/project/{{$parameter["projectId"]}}/tasklist/{{$parameter["TaskListId"]}}/tasks',
					},
				},
			},
			{
				name: 'Create Public Link',
				value: 'createPublicLink',
				action: 'Create public link',
				description: 'Create public link for task',
				routing: {
					request: {
						method: 'GET',
						url: '=/public-link/task/{{$parameter["TaskId"]}}',
					},
				},
			},
			{
				name: 'Create Task Description',
				value: 'createTaskDescription',
				action: 'Create task description',
				routing: {
					request: {
						method: 'POST',
						url: '=/task/{{$parameter["TaskId"]}}/description',
					},
				},
			},
			{
				name: 'Create Task Reminder',
				value: 'createTaskReminder',
				action: 'Create task reminder',
				routing: {
					request: {
						method: 'POST',
						url: '=/task/{{$parameter["TaskId"]}}/reminder',
					},
				},
			},
			{
				name: 'Delete',
				value: 'deleteTask',
				action: 'Delete task',
				description: 'Delete task',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/task/{{$parameter["TaskId"]}}',
					},
				},
			},
			{
				name: 'Delete Public Link',
				value: 'deletePublicLink',
				action: 'Delete public link',
				description: 'Delete public link for task',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/public-link/task/{{$parameter["TaskId"]}}',
					},
				},
			},
			{
				name: 'Delete Task Reminder',
				value: 'deleteTaskReminder',
				action: 'Delete task reminder',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/task/{{$parameter["TaskId"]}}/reminder',
					},
				},
			},
			{
				name: 'Delete Total Time Estimate',
				value: 'deleteTotalTimeEstimate',
				action: 'Delete total time estimate',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/task/{{$parameter["TaskId"]}}/total-time-estimate',
					},
				},
			},
			{
				name: 'Delete User Time Estimate',
				value: 'deleteUserTimeEstimate',
				action: 'Delete user time estimate',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/task/{{$parameter["TaskId"]}}/users-time-estimates/{{$parameter["userId"]}}',
					},
				},
			},
			{
				name: 'Edit',
				value: 'editTask',
				action: 'Edit task',
				description: 'Edit task',
				routing: {
					request: {
						method: 'POST',
						url: '=/task/{{$parameter["TaskId"]}}',
					},
				},
			},
			{
				name: 'Finish',
				value: 'finishTask',
				action: 'Finish task',
				description: 'Finish task',
				routing: {
					request: {
						method: 'POST',
						url: '=/task/{{$parameter["TaskId"]}}/finish',
					},
				},
			},
			{
				name: 'Get Finished Tasks',
				value: 'finishedTasks',
				action: 'Finished tasks in task list',
				routing: {
					request: {
						method: 'GET',
						url: '=/tasklist/{{$parameter["TaskListId"]}}/finished-tasks',
					},
					...paginator,
					output: makeListOutput('data.finished_tasks'),
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get freelo tasks',
				description: 'Get freelo tasks',
				routing: {
					request: {
						method: 'GET',
						url: '=/all-tasks',
					},
					...paginator,

					output: makeListOutput('data.tasks'),
				},
			},
			{
				name: 'Get Task',
				value: 'getTask',
				action: 'Get task detail info',
				routing: {
					request: {
						method: 'GET',
						url: '=/task/{{$parameter["TaskId"]}}',
					},
				},
			},
			{
				name: 'Get Task Description',
				value: 'getTaskDescription',
				action: 'Get task description',
				routing: {
					request: {
						method: 'GET',
						url: '=/task/{{$parameter["TaskId"]}}/description',
					},
				},
			},
			{
				name: 'Move Task',
				value: 'moveTask',
				action: 'Move task to task list',
				routing: {
					request: {
						method: 'POST',
						url: '=/task/{{$parameter["TaskId"]}}/move/{{$parameter["TaskListId"]}}',
					},
				},
			},
			{
				name: 'Set Total Time Estimate',
				value: 'setTotalTimeEstimate',
				action: 'Set total time estimate',
				routing: {
					request: {
						method: 'POST',
						url: '=/task/{{$parameter["TaskId"]}}/total-time-estimate',
					},
				},
			},
			{
				name: 'Set User Time Estimate',
				value: 'setUserTimeEstimate',
				action: 'Set user time estimate',
				routing: {
					request: {
						method: 'POST',
						url: '=/task/{{$parameter["TaskId"]}}/users-time-estimates/{{$parameter["userId"]}}',
					},
				},
			},
			{
				name: 'Tasks In Task List',
				value: 'tasksInTaskList',
				action: 'Tasks in task list',
				routing: {
					request: {
						method: 'GET',
						url: '=/project/{{$parameter["projectId"]}}/tasklist/{{$parameter["TaskListId"]}}/tasks',
					},
					...paginator,
					output: makeListOutput('data.tasks'),
				},
			},
		],
		type: 'options',
	},
	{
		...returnAll,
		displayOptions: {
			show: {
				operation: ['getAll', 'finishedTasks', 'tasksInTaskList'],
				resource: ['Task'],

			},
		},
	},
	{
		...limiter,
		displayOptions: {
			show: {
				operation: ['getAll', 'finishedTasks', 'tasksInTaskList'],
				resource: ['Task'],
				returnAll: [false],

			},
		},
	},
	{
		...projectSelectDescription,
		displayOptions: {
			show: {
				operation: ['createTask', 'tasksInTaskList'],
				resource: ['Task'],
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
				operation: ['createTask','tasksInTaskList'],
				resource: ['Task'],
			},
		},
	},
	{
		...TaskListSelectDescription,
		displayOptions: {
			show: {
				operation: ['finishedTasks', 'moveTask'],
				resource: ['Task'],
			},
		},
	},
	{
		...TaskSelectDescription,
		displayOptions: {
			show: {
				operation: [
					'activateTask',
					'finishTask',
					'moveTask',
					'getTask',
					'editTask',
					'deleteTask',
					'getTaskDescription',
					'createTaskDescription',
					'createTaskReminder',
					'deleteTaskReminder',
					'createPublicLink',
					'deletePublicLink',
					'setTotalTimeEstimate',
					'deleteTotalTimeEstimate',
					'setUserTimeEstimate',
					'deleteUserTimeEstimate',
				],
				resource: ['Task'],
			},
		},
	},
	{
		...userSelectDescription,
		displayOptions: {
			show: {
				operation: [ 'setUserTimeEstimate', 'deleteUserTimeEstimate'],
				resource: ['Task'],
			},
		},
	},
	{
		...userSelectDescription,
		required: false,
		displayOptions: {
			show: {
				operation: ['createTask', 'editTask'],
				resource: ['Task'],
			},
		},
	},

	...taskCreateDescription,
	...taskEditDescription,
	...taskDescriptionCreateDescription,
	...dateSelectDescription,
	...TotalTimeSelectDescription,
	...queryParamDescription
];
