import type { INodeProperties } from 'n8n-workflow';

const showForDeletePinnedItem = {
	operation: ['deletePin'],
	resource: ['PinnedItem'],
};

export const pinItemSelectDescription: INodeProperties[] = [
	{
		displayName: 'Pin Item ID',
		name: 'pinItemId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showForDeletePinnedItem,
		},
	},
];
