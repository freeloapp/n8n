import type { INodeProperties } from 'n8n-workflow';
import { addLabelDescription } from './addLabel';
import { TaskSelectDescription } from '../../shared/descriptions';
import {createLabelDescription} from "./createLabel";

const showOnlyForTaskLabels = {
	resource: ['TaskLabel'],
};
export const freeloTaskLabels: INodeProperties[] = [
	{
		displayName: 'Task Label',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForTaskLabels,
		},
		options: [
			{
				name: 'Create',
				value: 'createTaskLabel',
				action: 'Create task label',
				description: 'Create label',
				routing: {
					request: {
						method: 'POST',
						url: '=/task-labels',
					},
				},
			},
			{
				name: 'Add',
				value: 'addLabelToTask',
				action: 'Add label to task',
				description: 'Add label to task',
				routing: {
					request: {
						method: 'POST',
						url: '=/task-labels/add-to-task/{{$parameter["TaskId"]}}',
					},
				},
			},
			{
				name: 'Remove',
				value: 'removeLabelFromTask',
				action: 'Remove label from task',
				description: 'Remove label from task',
				routing: {
					request: {
						method: 'POST',
						url: '=/task-labels/remove-from-task/{{$parameter["TaskId"]}}',
					},
				},
			},
		],
		default: 'createTaskLabel',
	},
	{
		...TaskSelectDescription,
		displayOptions: {
			show: {
				operation: ['addLabelToTask', 'removeLabelFromTask'],
				resource: ['TaskLabel'],
			},
		},
	},
	...createLabelDescription,
	...addLabelDescription,
];
