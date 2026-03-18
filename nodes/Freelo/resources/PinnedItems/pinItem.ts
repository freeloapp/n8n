import type { INodeProperties } from 'n8n-workflow';

const showForPinItem = {
	operation: ['pinItem'],
	resource: ['PinnedItem'],
};

export const pinItemDescription: INodeProperties[] = [
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		displayOptions: {
			show: showForPinItem,
		},
		description: 'Title of pinned item',
		routing: {
			send: {
				type: 'body',
				property: 'title',
			},
		},
	},
	{
		displayName: 'Link',
		name: 'link',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showForPinItem,
		},
		description: 'Link of pinned item',
		routing: {
			send: {
				type: 'body',
				property: 'link',
			},
		},
	},
];
