import type { INodeProperties } from 'n8n-workflow';
import {LABEL_COLOR_OPTIONS} from "../../shared/descriptions";

const showForManageTaskLabel = {
	operation: [ 'addLabelToTask', 'removeLabelFromTask'],
	resource: ['TaskLabel'],
};
export const addLabelDescription: INodeProperties[] = [
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
						displayName: 'Use Labels UUID',
						name: 'useUUID',
						type: 'boolean',
						default: false,

					},
					{
						displayName: 'Label Name',
						name: 'name',
						type: 'string',
						required: true,
						default: '',
						displayOptions: {
							show: {
								useUUID: [false],
							},
						},

					},
					{
						displayName: 'Color',
						name: 'color',
						type: 'options',
						required: true,
						default: '#10aa40',
						description: 'Select a color for the label (Freelo accepts only specific colors)',
						options: LABEL_COLOR_OPTIONS,
						displayOptions: {
							show: {
								useUUID: [false],
							},
						},
					},
					{
						displayName: 'Label UUID',
						name: 'uuid',
						type: 'string',
						required: true,
						default: '',
						displayOptions: {
							show: {
								useUUID: [true],
							},
						},

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
