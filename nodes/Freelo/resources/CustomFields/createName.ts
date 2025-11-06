import type { INodeProperties } from 'n8n-workflow';

const showForRenameCustomField = {
	operation: ['renameCustomField'],
	resource: ['CustomField'],
};

export const nameCreateDescription: INodeProperties[] = [
	{
		displayName: 'Custom Field Name',
		name: 'customFieldName',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showForRenameCustomField },
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
];
