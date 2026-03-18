import type { INodeProperties } from 'n8n-workflow';

const showForGetAllComment = {
	operation: ['getAll'],
	resource: ['Comment'],
};

export const queryParamDescription: INodeProperties[] = [
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		typeOptions: {
			multipleValueButtonText: 'Add Filter',
		},
		displayOptions: {
			show: showForGetAllComment,
		},
		default: {},
		options: [
			{
				displayName: 'Comment Type',
				name: 'type',
				type: 'options',
				options: [
					{ name: 'All', value: 'all' },
					{ name: 'Document', value: 'document' },
					{ name: 'File', value: 'file' },
					{ name: 'Link', value: 'link' },
					{ name: 'Task', value: 'task' },
				],
				default: 'all',

			},
			{
				displayName: 'Order',
				name: 'order',
				type: 'options',
				options: [
					{ name: 'Ascending', value: 'asc' },
					{ name: 'Descending', value: 'desc' },
				],
				default: 'desc',

			},
			{
				displayName: 'Order By',
				name: 'order_by',
				type: 'options',
				options: [
					{ name: 'Date Added', value: 'date_add' },
					{ name: 'Date Edited', value: 'date_edited_at' },
				],
				default: 'date_add',

			},
			{
				displayName: 'Project Names or IDs',
				name: 'projectsIds',
				type: 'multiOptions',
				default: [],
				description:
					'Select a project or enter a custom project ID. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
				typeOptions: {
					loadOptionsMethod: 'getProjects',
					allowCustomValue: true,
				},

			},
		],
	},





];
