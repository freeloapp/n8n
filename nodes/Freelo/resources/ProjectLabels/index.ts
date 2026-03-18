import type { INodeProperties } from 'n8n-workflow';
import { addLabelDescription } from './addLabel';
import { labelSelectDescription, projectSelectDescription } from '../../shared/descriptions';

const showOnlyForFreeloProjects = {
	resource: ['ProjectLabel'],
};
export const freeloProjectLabels: INodeProperties[] = [
	{
		displayName: 'Project Label',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForFreeloProjects,
		},
		options: [
			{
				name: 'Add Label',
				value: 'addLabelToProject',
				action: 'Add label to project',
				description: 'Add label to project',
				routing: {
					request: {
						method: 'POST',
						url: '=/project-labels/add-to-project/{{$parameter["projectId"]}}',
					},
				},
			},
			{
				name: 'Delete',
				value: 'deleteLabel',
				action: 'Delete label',
				description: 'Delete label',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/project-labels/{{$parameter["labelId"]}}',
					},
				},
			},
			{
				name: 'Edit',
				value: 'editLabel',
				action: 'Edit label',
				description: 'Edit label',
				routing: {
					request: {
						method: 'POST',
						url: '=/project-labels/{{$parameter["labelId"]}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAvailableLabels',
				action: 'Get all available labels',
				description: 'Get all available labels',
				routing: {
					request: {
						method: 'GET',
						url: '=/project-labels/find-available',
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'labels',
								},
							},
						],
					},
				},
			},

			{
				name: 'Remove',
				value: 'removeLabel',
				action: 'Remove label from project',
				description: 'Remove Label From Projects',
				routing: {
					request: {
						method: 'POST',
						url: '=/project-labels/remove-from-project/{{$parameter["projectId"]}}',
					},
					send: {
						type: 'body',
						property: 'id',
						value: '={{$parameter["labelId"]}}',
					},
				},
			},
		],
		default: 'getAvailableLabels',
	},
	{
		...projectSelectDescription,
		displayOptions: {
			show: {
				operation: ['addLabelToProject', 'removeLabel'],
				resource: ['ProjectLabel'],
			},
		},
	},
	{
		...labelSelectDescription,
		displayOptions: {
			show: {
				operation: ['editLabel', 'deleteLabel', 'removeLabel'],
				resource: ['ProjectLabel'],
			},
		},
	},
	...addLabelDescription,
];
