import type { INodeProperties } from 'n8n-workflow';

const showForGetAllOwnedProject = {
	operation: ['getAllOwned'],
	resource: ['Project'],
};

export const queryParamOwnerDescription: INodeProperties[] = [
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		typeOptions: {
			multipleValueButtonText: 'Add Filter',
		},
		displayOptions: {
			show: showForGetAllOwnedProject,
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
				routing: {
					request: {
						qs: {
							order_by: '={{$value}}',
						},
					},
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
				routing: {
					request: {
						qs: {
							order: '={{$value}}',
						},
					},
				},
			},
		],
	},

];
