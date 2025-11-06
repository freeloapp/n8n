import type { INodeProperties } from 'n8n-workflow';

const showForGetAllTask = {
	operation: ['getAll'],
	resource: ['Task'],
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
			show: showForGetAllTask,
		},
		default: {},
		options: [
			{
				displayName: 'Project Names or IDs',
				name: 'projectsIds',
				type: 'multiOptions',
				default: [],
				description: 'Select a project or enter a custom project ID. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
				typeOptions: {
					loadOptionsMethod: 'getProjects',
					allowCustomValue: true,
				},
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
					{ name: 'Name', value: 'name' },
					{ name: 'Date Added', value: 'date_add' },
					{ name: 'Date Edited', value: 'date_edited_at' },
				],
				default: 'date_add',
			},
		],
	},

];
