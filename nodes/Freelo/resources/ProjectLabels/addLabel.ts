import type { INodeProperties } from 'n8n-workflow';
import {LABEL_COLOR_OPTIONS} from "../../shared/descriptions";

const showForAddEditProjectLabel = {
	operation: ['addLabelToProject', 'editLabel'],
	resource: ['ProjectLabel'],
};

export const addLabelDescription: INodeProperties[] = [
	{
		displayName: 'Label Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: showForAddEditProjectLabel,
		},
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Color',
		name: 'color',
		type: 'options',
		required: true,
		default: '#10aa40',
		displayOptions: {
			show: showForAddEditProjectLabel,
		},
		description: 'Select a color for the label (Freelo accepts only specific colors)',
		options: LABEL_COLOR_OPTIONS,

		routing: {
			send: {
				type: 'body',
				property: 'color',
			},
		},
	},
	{
		displayName: 'Private Label?',
		name: 'is_private',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showForAddEditProjectLabel,
		},
		routing: {
			send: {
				type: 'body',
				property: 'is_private',
			},
		},
	},
];
