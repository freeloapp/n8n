import type { INodeProperties } from 'n8n-workflow';

const showForGetAllWorkReport = {
	operation: ['getAll'],
	resource: ['WorkReport'],
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
			show: showForGetAllWorkReport,
		},
		default: {},
		options: [
			{
				displayName: 'Project Labels Names or IDs',
				name: 'labelsIds',
				type: 'multiOptions',
				default: [],
				description:
					'Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
				typeOptions: {
					loadOptionsMethod: 'getLabels',
					allowCustomValue: true,
				},

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
				displayName: 'Reported Date Range From',
				name: 'dateRangeReportedFrom',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Reported Date Range To',
				name: 'dateRangeReportedTo',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Task Names or IDs',
				name: 'tasksIds',
				type: 'multiOptions',
				default: [],
				description:
					'Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
				typeOptions: {
					loadOptionsMethod: 'getTasks',
					allowCustomValue: true,
				},
			},
			{
				displayName: 'Users Names or IDs',
				name: 'usersIds',
				type: 'multiOptions',
				description:
					'Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
				default: [],
				typeOptions: {
					loadOptionsMethod: 'getUsers',
					allowCustomValue: true,
				},
			},



		],
	},

];
