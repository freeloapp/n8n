import type { INodeProperties } from 'n8n-workflow';

const showForCreateEditNote = {
	operation: ['createNote', 'editNote'],
	resource: ['Note'],
};

export const noteCreateDescription: INodeProperties[] = [
	{
		displayName: 'Note Name',
		name: 'noteName',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showForCreateEditNote,
		},
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		displayOptions: {
			show: showForCreateEditNote,
		},
		default: '',
		routing: {
			send: {
				type: 'body',
				property: 'content',
			},
		},
	},
];
