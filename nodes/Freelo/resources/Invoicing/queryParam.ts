import type { INodeProperties } from 'n8n-workflow';

const showForGetAllInvoice = {
	operation: ['getAll'],
	resource: ['Invoice'],
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
			show: showForGetAllInvoice,
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
				displayName: 'Invoiced Date Range From',
				name: 'dateRangeFrom',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Invoiced Date Range To',
				name: 'dateRangeTo',
				type: 'dateTime',
				default: '',
			},
		],
	},

];
