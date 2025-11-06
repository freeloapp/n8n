import type { INodeProperties } from 'n8n-workflow';

const showForGetAllEvent = {
	operation: ['getAll'],
	resource: ['Event'],
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
			show: showForGetAllEvent,
		},
		default: {},
		options: [
			{
				displayName: 'Date Range From',
				name: 'dateRangeFrom',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Date Range To',
				name: 'dateRangeTo',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Events Types',
				name: 'typeEvents',
				type: 'string',
				default: [],
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Type',
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
			{
				displayName: 'Task Names or IDs',
				name: 'tasksIds',
				type: 'multiOptions',
				description:
					'Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
				typeOptions: {
					loadOptionsMethod: 'getTasks',
					allowCustomValue: true,
				},
				default: [],
			},
			{
				displayName: 'Users Names or IDs',
				name: 'usersIds',
				type: 'multiOptions',
				description:
					'Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
				typeOptions: {
					loadOptionsMethod: 'getUsers',
					allowCustomValue: true,
				},
				default: [],
			},
		],
	},

];
