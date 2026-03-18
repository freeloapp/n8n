import type { INodeProperties } from 'n8n-workflow';

export const invoiceSelectDescription: INodeProperties = {
	displayName: 'Invoice ID',
	name: 'InvoiceId',
	type: 'number',
	required: true,
	default: 0,
	description: 'The ID of the invoice',
	typeOptions: {
		minValue: 1,
	},
};
