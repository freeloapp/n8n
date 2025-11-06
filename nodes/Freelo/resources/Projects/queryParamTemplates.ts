import type { INodeProperties } from 'n8n-workflow';

const showForGetAllTemplateProject = {
	operation: ['getAllTemplate'],
	resource: ['Project'],
};

export const queryParamTemplatesDescription: INodeProperties[] = [
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		typeOptions: {
			multipleValueButtonText: 'Add Filter',
		},
		displayOptions: {
			show: showForGetAllTemplateProject,
		},
		default: {},
		options: [
			{
				displayName: 'Create Date Range From',
				name: 'dateRangeCreateFrom',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Create Date Range To',
				name: 'dateRangeCreateTo',
				type: 'dateTime',
				default: '',
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
			{
				displayName: 'Project Owner Names or IDs',
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
			{
				displayName: 'Project Tags',
				name: 'tags',
				type: 'string',
				default: [],
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
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
