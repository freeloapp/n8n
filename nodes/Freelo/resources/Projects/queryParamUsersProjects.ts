import type { INodeProperties } from 'n8n-workflow';

const showForGetUsersProjects = {
	operation: ['getUsersProjects'],
	resource: ['Project'],
};

export const queryParamUsersProjectsDescription: INodeProperties[] = [
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		typeOptions: {
			multipleValueButtonText: 'Add Filter',
		},
		displayOptions: {
			show: showForGetUsersProjects,
		},
		default: {},
		options: [
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
				displayName: 'States',
				name: 'states',
				type: 'multiOptions',
				options: [
					{ name: 'Active', value: '1' },
					{ name: 'Archived', value: '2' },
					{ name: 'Template', value: '3' },
				],
				default: ['1', '2'],
			},
		],
	},

];
