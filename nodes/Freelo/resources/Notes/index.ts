import type { INodeProperties } from 'n8n-workflow';
import { noteCreateDescription } from './createNote';
import { projectSelectDescription } from '../../shared/descriptions';
import { noteSelectDescription } from './selectNote';

const showOnlyForNotes = {
	resource: ['Note'],
};
export const freeloNotes: INodeProperties[] = [
	{
		displayName: 'Note',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForNotes,
		},
		options: [
			{
				name: 'Create',
				value: 'createNote',
				action: 'Create new note',
				description: 'Create new note',
				routing: {
					request: {
						method: 'POST',
						url: '=/project/{{$parameter["projectId"]}}/note',
					},
				},
			},
			{
				name: 'Get',
				value: 'getNote',
				action: 'Get note',
				description: 'Get note',
				routing: {
					request: {
						method: 'GET',
						url: '=/note/{{$parameter["noteID"]}}',
					},
				},
			},
			{
				name: 'Edit',
				value: 'editNote',
				action: 'Edit note',
				description: 'Edit note',
				routing: {
					request: {
						method: 'POST',
						url: '=/note/{{$parameter["noteID"]}}',
					},
				},
			},
			{
				name: 'Delete',
				value: 'deleteNote',
				action: 'Delete note',
				description: 'Delete note',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/note/{{$parameter["noteID"]}}',
					},
				},
			},
		],
		default: 'createNote',
	},

	{
		...projectSelectDescription,
		displayOptions: {
			show: {
				operation: ['createNote'],
				resource: ['Note'],
			},
		},
	},
	...noteSelectDescription,
	...noteCreateDescription,
];
