import type { INodeProperties } from 'n8n-workflow';

const showForCreateCustomField = {
	operation: ['createCustomField'],
	resource: ['CustomField'],
};

export const customFieldCreateDescription: INodeProperties[] = [
	{
		displayName: 'Custom Field Name',
		name: 'customFieldName',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showForCreateCustomField },
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		required: true,
		displayOptions: {
			show: showForCreateCustomField,
		},
		options: [
			{ name: 'Text', value: '2f7bfe3a-c950-470e-b910-95b4caf5dc4f' },
			{ name: 'Number', value: 'b1e56fa9-a97a-429b-8ab4-82bebe58933a' },
		],
		default: '2f7bfe3a-c950-470e-b910-95b4caf5dc4f',
		routing: {
			send: {
				type: 'body',
				property: 'type',
			},
		},
	},
];
