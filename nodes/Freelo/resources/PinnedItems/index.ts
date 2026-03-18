import type { INodeProperties } from 'n8n-workflow';
import { projectSelectDescription } from '../../shared/descriptions';
import { pinItemDescription } from './pinItem';
import { pinItemSelectDescription } from './pinItemSelect';

const showOnlyForPinnedItems = {
	resource: ['PinnedItem'],
};
export const freeloPinnedItems: INodeProperties[] = [
	{
		displayName: 'Pinned Item',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForPinnedItems,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many pinned items',
				description: 'Get many pinned items',
				routing: {
					request: {
						method: 'GET',
						url: '=/project/{{$parameter["projectId"]}}/pinned-items',
					},
				},
			},

			{
				name: 'Delete',
				value: 'deletePin',
				action: 'Delete pin from project',
				description: 'Delete pin from project',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/pinned-item/{{$parameter["pinItemId"]}}',
					},
				},
			},

			{
				name: 'Pin',
				value: 'pinItem',
				action: 'Pin item into project',
				description: 'Pin item into project',
				routing: {
					request: {
						method: 'POST',
						url: '=/project/{{$parameter["projectId"]}}/pinned-items',
					},
				},
			},
		],
		default: 'getAll',
	},
	{
		...projectSelectDescription,
		displayOptions: {
			show: {
				operation: ['getAll', 'pinItem'],
				resource: ['PinnedItem'],
			},
		},
	},
	...pinItemDescription,
	...pinItemSelectDescription,
];
