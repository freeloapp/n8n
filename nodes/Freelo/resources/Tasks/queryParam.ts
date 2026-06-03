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
				displayName: 'Due Date From',
				name: 'dueDateFrom',
				type: 'dateTime',
				default: '',
				description: 'Only tasks with due date on or after this date',
			},
			{
				displayName: 'Due Date To',
				name: 'dueDateTo',
				type: 'dateTime',
				default: '',
				description: 'Only tasks with due date on or before this date',
			},
			{
				displayName: 'Finished Date From',
				name: 'finishedDateFrom',
				type: 'dateTime',
				default: '',
				description: 'Only tasks finished on or after this date',
			},
			{
				displayName: 'Finished Date To',
				name: 'finishedDateTo',
				type: 'dateTime',
				default: '',
				description: 'Only tasks finished on or before this date',
			},
			{
				displayName: 'Finished Overdue',
				name: 'finishedOverdue',
				type: 'boolean',
				default: false,
				description: 'Whether to return only tasks finished after their due date',
			},
			{
				displayName: 'My Priorities',
				name: 'myPriorities',
				type: 'boolean',
				default: false,
				description: 'Whether to return only tasks in your priorities',
			},
			{
				displayName: 'No Due Date',
				name: 'noDueDate',
				type: 'boolean',
				default: false,
				description: 'Whether to return only tasks without a due date. Do not combine with Due Date From/To — the range is ignored.',
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
					{ name: 'Name', value: 'name' },
					{ name: 'Priority', value: 'priority' },
				],
				default: 'date_add',
			},
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
				displayName: 'Search Query',
				name: 'searchQuery',
				type: 'string',
				default: '',
				description: 'Fulltext search on the task name',
			},
			{
				displayName: 'State ID',
				name: 'stateId',
				type: 'number',
				default: 1,
				description: 'ID of the task state (1 = active, 2 = finished). Omit to get tasks in all states.',
			},
			{
				displayName: 'Tasklist Names or IDs',
				name: 'tasklistsIds',
				type: 'multiOptions',
				default: [],
				description: 'Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
				typeOptions: {
					loadOptionsMethod: 'getTaskLists',
					allowCustomValue: true,
				},
			},
			{
				displayName: 'With Labels',
				name: 'withLabels',
				type: 'string',
				default: [],
				description: 'Only tasks that have at least one of the specified label names (case insensitive)',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Label',
				},
			},
			{
				displayName: 'Without Label',
				name: 'withoutLabel',
				type: 'string',
				default: '',
				description: 'Exclude tasks that have the specified label name (case insensitive)',
			},
			{
				displayName: 'Worker Name or ID',
				name: 'workerId',
				type: 'options',
				default: '',
				description: 'Filter by assignee. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
				typeOptions: {
					loadOptionsMethod: 'getUsers',
					allowCustomValue: true,
				},
			},
		],
	},

];
