import type { INodeProperties } from 'n8n-workflow';
import { emailsSelectDescription } from './selectEmails';
import {
	projectsSelectDescription,
	userSelectDescription,
	usersSelectDescription,
} from '../../shared/descriptions';
import { outOfOfficeEnableDescription } from './enableOutOfOffice';
import { paginator } from '../../shared/paginator';
import { limiter, returnAll} from '../../shared/limiter';
import { makeListOutput } from '../../shared/listOutput';


const showOnlyForUsers = {
	resource: ['User'],
};
export const freeloUsers: INodeProperties[] = [
	{
		displayName: 'User',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForUsers,
		},
		options: [
			{
				name: 'Disable Out Of Office',
				value: 'disableOutOfOffice',
				action: 'Disable out of office',
				description: 'Disable when user is out of office',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/user/{{$parameter["userId"]}}/out-of-office',
					},
				},
			},
			{
				name: 'Enable Out Of Office',
				value: 'enableOutOfOffice',
				action: 'Enable out of office',
				description: 'Set when user is out of office',
				routing: {
					request: {
						method: 'POST',
						url: '=/user/{{$parameter["userId"]}}/out-of-office',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many users',
				description: 'Get users (Coworkers)',
				routing: {
					request: {
						method: 'GET',
						url: '=/users',
					},
					...paginator,
					output: makeListOutput('data.users'),
				},
			},
			{
				name: 'Get Many Who Promoted Me',
				value: 'getAllWhoPromotedMe',
				action: 'Get users who promoted me as project manager',
				description: 'Get users who promoted me as project manager',
				routing: {
					request: {
						method: 'GET',
						url: '=/users/project-manager-of',
					},
				},
			},
			{
				name: 'Get Out Of Office',
				value: 'getOutOfOffice',
				action: 'Get out of office',
				description: 'Get when user is out of office',
				routing: {
					request: {
						method: 'GET',
						url: '=/user/{{$parameter["userId"]}}/out-of-office',
					},
				},
			},
			{
				name: 'Invite Users By Emails or IDs',
				value: 'inviteByEmailsIds',
				action: 'Invite users by emails or ids',
				description: 'Invite users to the project by emails or IDs',
				routing: {
					request: {
						method: 'POST',
						url: '=/users/manage-workers',
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
				resource: ['User'],
			},
		},
	},
	{
		...limiter,
		displayOptions: {
			show: {
				operation: ['getAll'],
				resource: ['User'],
				returnAll: [false],


			},
		},
	},
	{
		...projectsSelectDescription,
		displayOptions: {
			show: {
				operation: ['inviteByEmailsIds'],
				resource: ['User'],
			},
		},
	},
	{
		...usersSelectDescription,
		required: false,
		displayOptions: {
			show: {
				operation: ['inviteByEmailsIds'],
				resource: ['User'],
			},
		},
	},
	{
		...userSelectDescription,
		displayOptions: {
			show: {
				operation: ['getOutOfOffice', 'enableOutOfOffice', 'disableOutOfOffice'],
				resource: ['User'],
			},
		},
	},
	...emailsSelectDescription,
	...outOfOfficeEnableDescription,
];
