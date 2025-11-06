import type { INodeProperties } from 'n8n-workflow';
import {LABEL_COLOR_OPTIONS} from "../../shared/descriptions";

const showForManageTaskLabel = {
	operation: ['createTaskLabel'],
	resource: ['TaskLabel'],
};
export const createLabelDescription: INodeProperties[] = [
	{
		displayName: 'Labels',
		name: 'label',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		placeholder: 'Add Label',
		default: {},
		displayOptions: {
			show: showForManageTaskLabel,
		},
		options: [
			{
				displayName: 'Labels',
				name: 'labels',
				values: [
					{
						displayName: 'Label Name',
						name: 'name',
						type: 'string',
						required: true,
						default: '',

					},
					{
						displayName: 'Color',
						name: 'color',
						type: 'options',
						required: true,
						default: '#10aa40',
						description: 'Select a color for the label (Freelo accepts only specific colors)',
						options: LABEL_COLOR_OPTIONS,

					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'labels',
				value: '={{ $value.labels }}',
			},
		},
	},
];
