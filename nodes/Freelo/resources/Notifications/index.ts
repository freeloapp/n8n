import type { INodeProperties } from 'n8n-workflow';
import { notificationSelectDescription } from '../../shared/descriptions';
import { queryParamDescription } from './queryParam';
import { paginator } from '../../shared/paginator';
import { limiter, returnAll} from '../../shared/limiter';
import { makeListOutput } from '../../shared/listOutput';

const showOnlyForNotifications = {
	resource: ['Notification'],
};
export const freeloNotifications: INodeProperties[] = [
	{
		displayName: 'Notification',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForNotifications,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many notifications',
				description: 'Get many notifications',
				routing: {
					request: {
						method: 'GET',
						url: '=/all-notifications',

					},
					...paginator,
					output: makeListOutput('data.notifications'),
				},
			},
			{
				name: 'Mark As Read',
				value: 'markAsRead',
				action: 'Mark as read',
				description: 'Mark notification as read',
				routing: {
					request: {
						method: 'POST',
						url: '=/notification/{{$parameter["notificationId"]}}/mark-as-read',
					},
				},
			},
			{
				name: 'Mark As Unread',
				value: 'markAsUnread',
				action: 'Mark as unread',
				description: 'Mark notification as unread',
				routing: {
					request: {
						method: 'POST',
						url: '=/notification/{{$parameter["notificationId"]}}/mark-as-unread',
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
				resource: ['Notification'],

			},
		},
	},
	{
		...limiter,
		displayOptions: {
			show: {
				operation: ['getAll'],
				resource: ['Notification'],
				returnAll: [false],
			},
		},
	},
	{
		...notificationSelectDescription,
		displayOptions: {
			show: {
				operation: ['markAsRead', 'markAsUnread'],
				resource: ['Notification'],
			},
		},
	},
	...queryParamDescription,
];
