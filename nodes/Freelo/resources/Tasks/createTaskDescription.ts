import type { INodeProperties } from 'n8n-workflow';

const showForCreateTaskDescription = {
	operation: ['createTaskDescription'],
	resource: ['Task'],
};

export const taskDescriptionCreateDescription: INodeProperties[] = [
	{
		displayName: 'Description Content',
		name: 'descriptionContent',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showForCreateTaskDescription },
		routing: {
			send: {
				type: 'body',
				property: 'content',
			},
		},
	},
	{
		displayName: 'Files',
		name: 'files',
		type: 'fixedCollection',
		typeOptions: { multipleValues: true },
		displayOptions: { show: showForCreateTaskDescription },
		default: {},
		placeholder: 'Add file',
		options: [
			{
				displayName: 'File',
				name: 'file',
				values: [
					{
						displayName: 'Filename',
						name: 'filename',
						type: 'string',
						default: '',
						required: true,
					},
					{
						displayName: 'Download Url',
						name: 'download_url',
						type: 'string',
						default: '',
						required: true,
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'files',
				value: '={{$value.file}}',
			},
		},
	},
];
