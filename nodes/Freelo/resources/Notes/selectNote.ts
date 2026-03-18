import type { INodeProperties } from 'n8n-workflow';

const showForGetEditDeleteNote = {
	operation: ['getNote', 'editNote', 'deleteNote'],
	resource: ['Note'],
};

export const noteSelectDescription: INodeProperties[] = [
	{
		displayName: 'Note ID',
		name: 'noteID',
		type: 'number',
		default: 0,
		required: true,
		typeOptions: {
			minValue: 1,
		},
		displayOptions: {
			show: showForGetEditDeleteNote,
		},
	},
];
