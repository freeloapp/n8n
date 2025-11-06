import type { INodeProperties } from 'n8n-workflow';

const showForManageCustomFieldValue = {
	operation: ['addEditValue', 'createEnumOption', 'editEnumOption'],
	resource: ['CustomField'],
};

export const valueSelectDescription: INodeProperties[] = [
	{
		displayName: 'Value',
		name: 'value',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showForManageCustomFieldValue,
		},
		routing: {
			send: {
				type: 'body',
				property: 'value',
			},
		},
	},
];
