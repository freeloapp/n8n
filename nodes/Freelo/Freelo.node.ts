import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { freeloProjects } from './resources/Projects';
import { freeloProjectLabels } from './resources/ProjectLabels';
import { freeloTasks } from './resources/Tasks';
import { freeloPinnedItems } from './resources/PinnedItems';
import { freeloTaskList } from './resources/TaskLists';
import { freeloSubTask } from './resources/SubTasks';
import { freeloTaskLabels } from './resources/TaskLabels';
import { freeloTimeTracking } from './resources/TimeTracking';
import { freeloUsers } from './resources/Users';
import { freeloWorkReports } from './resources/WorkReports';
import { freeloStates } from './resources/States';
import { freeloNotifications } from './resources/Notifications';
import { freeloNotes } from './resources/Notes';
import { freeloInvoicing } from './resources/Invoicing';
import { freeloFiles } from './resources/Files';
import { freeloEvents } from './resources/Events';
import { freeloCustomFields } from './resources/CustomFields';
import { freeloComments } from './resources/Comments';
import { getProjects } from './loadOptions/getProjects';
import { getUsers } from './loadOptions/getUsers';
import { getProjectWorkers } from './loadOptions/getProjectWorkers';
import { getLabels } from './loadOptions/getLabels';
import { getTaskLists } from './loadOptions/getTaskLists';
import { getTasks } from './loadOptions/getTask';
import { getComments } from './loadOptions/getComments';
import { getNotifications } from './loadOptions/getNotifications';
import { searchTasks } from './loadOptions/searchTasks';
import { searchProjects } from './loadOptions/searchProjects';
import { searchTaskLists } from './loadOptions/searchTaskLists';
import { searchTaskListsForProject } from './loadOptions/searchTaskListsForProject';
import { getTemplateProjects } from './loadOptions/getTemplateProjects';
import { getTemplateTaskListsForProject } from './loadOptions/getTemplateTaskListsForProject';
import { getCustomFields } from './loadOptions/getCustomFields';
import { getCustomFieldsValues } from './loadOptions/getCustomFieldValues';


export class Freelo implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Freelo',
		name: 'freelo',
		icon: { light: 'file:../../icons/freelo.svg', dark: 'file:../../icons/freelo.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Freelo project management API',
		defaults: {
			name: 'Freelo',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'freeloApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.freelo.io/v1/',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'User-Agent': 'n8n-integration',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Comment',
						value: 'Comment',
						description: 'Create, Get, Edit comments',
					},
					{
						name: 'Custom Field',
						value: 'CustomField',
						description: 'Create, Get, Edit, Remove, Restore Custom Fields',
					},
					{
						name: 'Event',
						value: 'Event',
						description: 'Get Event',
					},
					{
						name: 'File',
						value: 'File',
						description: 'Get Files',
					},
					{
						name: 'Invoice',
						value: 'Invoice',
						description: 'Get, Invoice Invoices',
					},
					{
						name: 'Note',
						value: 'Note',
						description: 'Create, Get, Edit, Delete Notes',
					},
					{
						name: 'Notification',
						value: 'Notification',
						description: 'Get, Read, Unread Notifications',
					},
					{
						name: 'Pinned Item',
						value: 'PinnedItem',
						description: 'Get, Delete, Pin Item',
					},
					{
						name: 'Project',
						value: 'Project',
						description:
							'Get, Create, Delete, Archive, Active, Invite Projects and Template Projects',
					},
					{
						name: 'Project Label',
						value: 'ProjectLabel',
						description: 'Add, Get, Edit, Remove, Restore Project Labels',
					},
					{
						name: 'State',
						value: 'State',
						description: 'Get States',
					},
					{
						name: 'Sub Task',
						value: 'SubTask',
						description: 'Get, Create Sub Tasks',
					},
					{
						name: 'Task',
						value: 'Task',
						description: 'Get, Create, Delete, Archive, Active, Move Tasks',
					},
					{
						name: 'Task Label',
						value: 'TaskLabel',
						description: 'Create, Add, Remove Task Labels',
					},
					{
						name: 'Task List',
						value: 'TaskList',
						description: 'Get, Create Task Lists',
					},
					{
						name: 'Time Tracking',
						value: 'TimeTracking',
						description: 'Start, Stop, Edit Time Tracking',
					},
					{
						name: 'User',
						value: 'User',
						description: 'Get, Out of the Office, Invite Users',
					},
					{
						name: 'Work Report',
						value: 'WorkReport',
						description: 'Get, Create, Edit, Delete Work Report',
					},
				],
				default: 'Task',
			},
			...freeloProjects,
			...freeloTasks,
			...freeloProjectLabels,
			...freeloPinnedItems,
			...freeloTaskList,
			...freeloSubTask,
			...freeloTaskLabels,
			...freeloTimeTracking,
			...freeloUsers,
			...freeloWorkReports,
			...freeloStates,
			...freeloNotifications,
			...freeloNotes,
			...freeloInvoicing,
			...freeloFiles,
			...freeloEvents,
			...freeloCustomFields,
			...freeloComments,
		],
	};
	methods = {
		loadOptions: {
			getProjects,
			getUsers,
			getProjectWorkers,
			getLabels,
			getTaskLists,
			getTasks,
			getComments,
			getNotifications,
			getTemplateProjects,
			getTemplateTaskListsForProject,
			getCustomFields,
			getCustomFieldsValues
		},
		listSearch: {
			searchTasks,
			searchProjects,
			searchTaskLists,
			searchTaskListsForProject,
		},
	};
}
