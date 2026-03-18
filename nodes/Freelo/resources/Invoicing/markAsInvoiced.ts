import type { INodeProperties } from 'n8n-workflow';

const showForMarkAsInvoiced = {
	operation: ['markAsInvoiced'],
	resource: ['Invoice'],
};

export const markAsInvoicedDescription: INodeProperties[] = [
	{
		displayName: 'Subject',
		name: 'subject',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showForMarkAsInvoiced,
		},
		description: 'Subject name for the invoice',
		routing: {
			send: {
				type: 'body',
				property: 'subject',
			},
		},
	},
	{
		displayName: 'Url',
		name: 'url',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showForMarkAsInvoiced,
		},
		routing: {
			send: {
				type: 'body',
				property: 'url',
			},
		},
	},
];
