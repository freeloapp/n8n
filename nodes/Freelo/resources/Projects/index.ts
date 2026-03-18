import type { INodeProperties } from 'n8n-workflow';
import { projectCreateDescription } from './createProject';
import {
	projectSelectDescription,
	userSelectDescription,
	usersSelectDescription,
} from '../../shared/descriptions';
import { projectTemplateCreateDescription } from './createTemplateProject';
import { emailsSelectDescription } from './selectEmails';
import { queryParamOwnerDescription } from './queryParamOwned';
import { queryParamOwnedInvitedDescription } from './queryParamOwnedInvited';
import { queryParamTemplatesDescription } from './queryParamTemplates';
import { queryParamUsersProjectsDescription } from './queryParamUsersProjects';
import { paginator } from '../../shared/paginator';
import { limiter, returnAll} from '../../shared/limiter';
import { makeListOutput } from '../../shared/listOutput';


const showOnlyForFreeloProjects = {
	resource: ['Project'],
};
export const freeloProjects: INodeProperties[] = [
	{
		displayName: 'Project',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForFreeloProjects,
		},
		options: [
			{
				name: 'Activate',
				value: 'activateProject',
				action: 'Activate project',
				description: 'Activate project',
				routing: {
					request: {
						method: 'POST',
						url: '=/project/{{$parameter["projectId"]}}/activate',
					},
				},
			},
			{
				name: 'Archive',
				value: 'archiveProject',
				action: 'Archive project',
				description: 'Archive project',
				routing: {
					request: {
						method: 'POST',
						url: '=/project/{{$parameter["projectId"]}}/archive',
					},
				},
			},
			{
				name: 'Create',
				value: 'createProject',
				action: 'Create project',
				description: 'Create project',
				routing: {
					request: {
						method: 'POST',
						url: '=/projects',
					},
				},
			},
			{
				name: 'Create From Template',
				value: 'createTemplateProject',
				action: 'Create project from template',
				description: 'Create project from template',
				routing: {
					request: {
						method: 'POST',
						url: '=/project/create-from-template/{{$parameter["projectId"]}}',
					},
				},
			},
			{
				name: 'Delete',
				value: 'deleteProject',
				action: 'Delete project',
				description: 'Delete project',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/project/{{$parameter["projectId"]}}',
					},
				},
			},

			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many projects owned and invited',
				description: 'Get many projects (owned and invited)',
				routing: {
					request: {
						method: 'GET',
						url: '=/all-projects',
					},
					...paginator,
					output: makeListOutput('data.projects'),
				},
			},

			{
				name: 'Get Many Archived',
				value: 'getAllArchived',
				action: 'Get many archived projects',
				description: 'Get many archived projects',
				routing: {
					request: {
						method: 'GET',
						url: '=/archived-projects',
					},
					...paginator,
					output: makeListOutput('data.archived_projects'),
				},
			},

			{
				name: 'Get Many Invited',
				value: 'getAllInvited',
				action: 'Get many invited projects',
				description: 'Get many invited projects',
				routing: {
					request: {
						method: 'GET',
						url: '=/invited-projects',
					},
					...paginator,
					output: makeListOutput('data.invited_projects'),
				},
			},
			{
				name: 'Get Many Owned',
				value: 'getAllOwned',
				action: 'Get many owned projects',
				description: 'Get many owned projects',
				routing: {
					request: {
						method: 'GET',
						url: '=/projects',
					},
					...paginator,
					output: makeListOutput('data.projects'),
				},
			},
			{
				name: 'Get Many Projects Workers',
				value: 'getAllProjectWorkers',
				action: 'Get many project workers',
				routing: {
					request: {
						method: 'GET',
						url: '=/project/{{$parameter["projectId"]}}/workers',
					},
					...paginator,
					output: makeListOutput('data.workers'),
				},
			},
			{
				name: 'Get Many Template',
				value: 'getAllTemplate',
				action: 'Get many template projects',
				description: 'Get many template projects',
				routing: {
					request: {
						method: 'GET',
						url: '=/template-projects',
					},
					...paginator,
					output: makeListOutput('data.template_projects'),
				},
			},
			{
				name: 'Get Users Projects',
				value: 'getUsersProjects',
				action: 'Get all users projects',
				description: 'Get all users projects',
				routing: {
					request: {
						method: 'GET',
						url: '=/user/{{$parameter["userId"]}}/all-projects',
					},
					...paginator,
					output: makeListOutput('data.projects'),
				},
			},
			{
				name: 'Get Details',
				value: 'getProject',
				action: 'Get project details',
				routing: {
					request: {
						method: 'GET',
						url: '=/project/{{$parameter["projectId"]}}',
					},
				},
			},
			{
				name: 'Remove Workers',
				value: 'removeWorkers',
				action: 'Remove workers from project',
				description: 'Remove workers from project',
				routing: {
					request: {
						method: 'POST',
						url: '=/project/{{$parameter["projectId"]}}/remove-workers/by-ids',
					},
				},
			},
			{
				name: 'Remove Workers By Email',
				value: 'removeWorkersByEmail',
				action: 'Remove workers from project by email',
				description: 'Remove workers from project by email',
				routing: {
					request: {
						method: 'POST',
						url: '=/project/{{$parameter["projectId"]}}/remove-workers/by-emails',
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
				operation: ['getAll','getAllOwned','getAllTemplate','getAllArchived','getAllInvited','getAllProjectWorkers','getUsersProjects'],
				resource: ['Project'],

			},
		},
	},
	{
		...limiter,
		displayOptions: {
			show: {
				operation: ['getAll','getAllOwned','getAllTemplate','getAllArchived','getAllInvited','getAllProjectWorkers','getUsersProjects'],
				resource: ['Project'],
				returnAll: [false],

			},
		},
	},
	...projectCreateDescription,
	{
		...projectSelectDescription,
		displayOptions: {
			show: {
				operation: [
					'activateProject',
					'archiveProject',
					'deleteProject',
					'getProject',
					'getAllProjectWorkers',
					'removeWorkersByEmail',
				],
				resource: ['Project'],
			},
		},
	},
	{
		displayName: 'Project Name or ID',
		name: 'projectId',
		type: 'options',
		default: '',
		required: true,
		description:
			'Select a project or enter a custom project ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'getProjects',
		},
		displayOptions: {
			show: {
				operation: ['removeWorkers'],
				resource: ['Project'],
			},
		},
	},
	{
		...userSelectDescription,
		displayOptions: {
			show: {
				operation: ['getUsersProjects'],
				resource: ['Project'],
			},
		},
	},
	...projectTemplateCreateDescription,

	{
		...usersSelectDescription,
		required: false,
		displayOptions: {
			show: {
				operation: ['removeWorkers', 'createTemplateProject'],
				resource: ['Project'],
			},
		},
	},
	...emailsSelectDescription,
	...queryParamOwnerDescription,
	...queryParamOwnedInvitedDescription,
	...queryParamTemplatesDescription,
	...queryParamUsersProjectsDescription,
];
