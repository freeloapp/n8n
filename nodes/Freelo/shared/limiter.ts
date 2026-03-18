import type { INodeProperties } from 'n8n-workflow';

export const limiter: INodeProperties = {
	displayName: 'Limit Responses',
	name: 'limit',
	type: 'number',
	typeOptions: {
		minValue: 1,
	},
	description: 'Max number of results to return',
	required: true,
	default: 50,
};

export const returnAll: INodeProperties = {
	displayName: 'Return All',
	name: 'returnAll',
	type: 'boolean',
	default: false,
	description: 'Whether to return all results or only up to a given limit',
};