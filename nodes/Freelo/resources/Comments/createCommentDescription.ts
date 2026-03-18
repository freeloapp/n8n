import type { INodeProperties } from 'n8n-workflow';

const showForCreateEditComment = {
	operation: ['createComment', 'editComment'],
	resource: ['Comment'],
};

export const CommentCreateDescription: INodeProperties[] = [
	{
		displayName: 'Content',
		name: 'descriptionContent',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showForCreateEditComment },
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
		displayOptions: { show: showForCreateEditComment },
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
