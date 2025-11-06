import type { INodeProperties } from 'n8n-workflow';

export const commentSelectDescription: INodeProperties = {
	displayName: 'Comment Name or ID',
	name: 'commentId',
	type: 'options',
	required: true,
	default: '',
	description:
		'Select a comment or enter a custom comment ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	typeOptions: {
		loadOptionsMethod: 'getComments',
		allowCustomValue: true,
	},
};
