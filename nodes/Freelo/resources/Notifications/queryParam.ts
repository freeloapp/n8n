import type { INodeProperties } from 'n8n-workflow';

const showForGetAllNotification = {
	operation: ['getAll'],
	resource: ['Notification'],
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
			show: showForGetAllNotification,
		},
		default: {},
		options: [
			{
				displayName: 'Project Names or IDs',
				name: 'projectsIds',
				type: 'multiOptions',
				default: [],

				description:
					'Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
				typeOptions: {
					loadOptionsMethod: 'getProjects',
					allowCustomValue: true,
				},
			},
			{
				displayName: 'Authors Names or IDs',
				name: 'usersIds',
				type: 'multiOptions',
				default: [],

				description:
					'Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
				typeOptions: {
					loadOptionsMethod: 'getUsers',
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
		],
	},

];
