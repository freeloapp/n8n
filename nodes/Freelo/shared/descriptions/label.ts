import type { INodeProperties } from 'n8n-workflow';

export const LABEL_COLOR_OPTIONS=[
	{ name: 'Blue', value: '#15acc0' },
	{ name: 'Blue Violet', value: '#4186e0' },
	{ name: 'Dark Green', value: '#37a862' },
	{ name: 'Dark Red', value: '#e8384f' },
	{ name: 'Gold', value: '#e3b51e' },
	{ name: 'Gray', value: '#77787a' },
	{ name: 'Gray Blue', value: '#8da3a6' },
	{ name: 'Green', value: '#10aa40' },
	{ name: 'Indigo', value: '#7a6ff0' },
	{ name: 'Light Blue', value: '#367fee' },
	{ name: 'Light Gray', value: '#e9e9e9' },
	{ name: 'Light Purple', value: '#aa62e3' },
	{ name: 'Light Yellow', value: '#f4bd38' },
	{ name: 'Lime', value: '#a4c61a' },
	{ name: 'Magenta', value: '#e362e3' },
	{ name: 'Orange', value: '#f2830b' },
	{ name: 'Orange Light', value: '#fd612c' },
	{ name: 'Pink', value: '#ca3e99' },
	{ name: 'Pink Light', value: '#ea4e9d' },
	{ name: 'Pink Pastel', value: '#fc91ad' },
	{ name: 'Purple', value: '#9235e4' },
	{ name: 'Red', value: '#e9483a' },
	{ name: 'Sky Blue', value: '#159ddc' },
	{ name: 'Teal', value: '#62d26f' },
	{ name: 'White', value: '#ffffff' },
	{ name: 'Yellow', value: '#fda41a' },
];

export const labelSelectDescription: INodeProperties = {
	displayName: 'Label Name or ID',
	name: 'labelId',
	type: 'options',
	required: true,
	default: '',
	description:
		'Select Label ID and edit it. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	typeOptions: {
		loadOptionsMethod: 'getLabels',
		allowCustomValue: true,
	},
};
