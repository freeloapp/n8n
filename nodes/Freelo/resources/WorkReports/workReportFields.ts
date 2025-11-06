import type { INodeProperties } from 'n8n-workflow';

// Base field definitions without displayOptions (to be composed in create/edit)
export const dateReportedFieldBase: Omit<INodeProperties, 'displayOptions'> = {
	displayName: 'Date Reported',
	name: 'dateReport',
	type: 'dateTime',
	required: true,
	default: '',
	description: 'The date when the work was performed',
	routing: {
		send: {
			type: 'body',
			property: 'date_reported',
		},
	},
};

export const minutesFieldBase: Omit<INodeProperties, 'displayOptions'> = {
	displayName: 'Minutes',
	name: 'minutes',
	type: 'number',
	required: true,
	default: 0,
	description: 'The number of minutes worked',
	placeholder: 'e.g., 90',
	typeOptions: {
		minValue: 0,
	},
	routing: {
		send: {
			type: 'body',
			property: 'minutes',
		},
	},
};

export const costFieldBase: Omit<INodeProperties, 'displayOptions'> = {
	displayName: 'Cost',
	name: 'cost',
	type: 'string',
	default: "0",
	description: 'Amount in cents (e.g., enter 10025 for $100.25)',
	placeholder: 'e.g., 10025',
	hint: 'Value in cents',
	routing: {
		send: {
			type: 'body',
			property: 'cost',
		},
	},
};

export const noteFieldBase: Omit<INodeProperties, 'displayOptions'> = {
	displayName: 'Note',
	name: 'note',
	type: 'string',
	default: '',
	description: 'A note or description for the work report',
	routing: {
		send: {
			type: 'body',
			property: 'note',
		},
	},
};
