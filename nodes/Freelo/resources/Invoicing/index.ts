import type { INodeProperties } from 'n8n-workflow';
import { invoiceSelectDescription } from '../../shared/descriptions';
import { markAsInvoicedDescription } from './markAsInvoiced';
import { queryParamDescription } from './queryParam';
import { paginator } from '../../shared/paginator';
import { limiter, returnAll} from '../../shared/limiter';
import { makeListOutput } from '../../shared/listOutput';

const showOnlyForInvoicing = {
	resource: ['Invoice'],
};
export const freeloInvoicing: INodeProperties[] = [
	{
		displayName: 'Invoicing',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForInvoicing,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many issued invoices',
				description: 'Get many issued invoices',
				routing: {
					request: {
						method: 'GET',
						url: '=/issued-invoices',

					},
					...paginator,
					output: makeListOutput('data.issued_invoices'),
				},
			},
			{
				name: 'Get',
				value: 'getDetail',
				action: 'Get issued invoice detail',
				description: 'Get issued invoice detail',
				routing: {
					request: {
						method: 'GET',
						url: '=/issued-invoice/{{$parameter["InvoiceId"]}}',
					},
				},
			},
			{
				name: 'Mark As Invoiced',
				value: 'markAsInvoiced',
				action: 'Mark issued invoice as invoiced',
				description: 'Mark issued invoice as invoiced',
				routing: {
					request: {
						method: 'POST',
						url: '=/issued-invoice/{{$parameter["InvoiceId"]}}/mark-as-invoiced',
					},
				},
			},
		],
		default: 'getAll',
	},
	{
		...returnAll,
		displayOptions: {
			show: {
				operation: ['getAll'],
				resource: ['Invoice'],
			},
		},
	},
	{
		...limiter,
		displayOptions: {
			show: {
				operation: ['getAll'],
				resource: ['Invoice'],
				returnAll: [false],
			},
		},
	},

	{
		...invoiceSelectDescription,
		displayOptions: {
			show: {
				operation: ['getDetail', 'markAsInvoiced'],
				resource: ['Invoice'],
			},
		},
	},
	...markAsInvoicedDescription,
	...queryParamDescription,
];
