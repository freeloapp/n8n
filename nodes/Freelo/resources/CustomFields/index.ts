import type { INodeProperties } from 'n8n-workflow';
import {
	customFieldSelectDescription,
	projectSelectDescription,
	TaskSelectDescription,
} from '../../shared/descriptions';
import { customFieldCreateDescription } from './createCustomField';
import { nameCreateDescription } from './createName';
import { valueSelectDescription } from './selectValue';
import { customFieldEnumSelectDescription } from './selectCustomFieldEnum';
import {customFieldValueSelectDescription} from "../../shared/descriptions/customField";

const showOnlyForCustomFields = {
	resource: ['CustomField'],
};
export const freeloCustomFields: INodeProperties[] = [
	{
		displayName: 'Custom Field',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForCustomFields,
		},
		options: [
			{
				name: 'Add or Edit Value',
				value: 'addEditValue',
				action: 'Add or edit value',
				routing: {
					request: {
						method: 'POST',
						url: '=/custom-field/add-or-edit-value',
					},
				},
			},

			{
				name: 'Create',
				value: 'createCustomField',
				action: 'Create custom field',
				description: 'Create custom field',
				routing: {
					request: {
						method: 'POST',
						url: '=/custom-field/create/{{$parameter["projectId"]}}',
					},
				},
			},

			{
				name: 'Create Enum Option',
				value: 'createEnumOption',
				action: 'Create enum option',
				routing: {
					request: {
						method: 'POST',
						url: '=/custom-field-enum/create/{{$parameter["CustomFieldId"]}}',
					},
				},
			},
			{
				name: 'Delete',
				value: 'deleteCustomField',
				action: 'Delete custom field',
				description: 'Delete custom field',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/custom-field/delete/{{$parameter["CustomFieldId"]}}',
					},
				},
			},
			{
				name: 'Delete Enum Option',
				value: 'deleteEnumOption',
				action: 'Delete enum option',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/custom-field-enum/delete/{{$parameter["CustomFieldEnumUUID"]}}',
					},
				},
			},
			{
				name: 'Delete Value',
				value: 'deleteValue',
				action: 'Delete value',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/custom-field/delete-value/{{$parameter["CustomFieldValueId"]}}',
					},
				},
			},

			{
				name: 'Edit Enum Option',
				value: 'editEnumOption',
				action: 'Edit enum option',
				routing: {
					request: {
						method: 'POST',
						url: '=/custom-field-enum/change/{{$parameter["CustomFieldEnumUUID"]}}',
					},
				},
			},
			{
				name: 'Get Enums Options',
				value: 'getEnumsOptions',
				action: 'Get enums options on custom field',
				description: 'Get enums options on custom field',
				routing: {
					request: {
						method: 'GET',
						url: '=/custom-field-enum/get-for-custom-field/{{$parameter["CustomFieldId"]}}',
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'custom_field_types',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many custom fields types',
				description: 'Get many custom fields types',
				routing: {
					request: {
						method: 'GET',
						url: '=/custom-field/get-types',
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'custom_field_types',
								},
							},
						],
					},
				},
			},

			{
				name: 'Get Many On Project',
				value: 'getAllOnProject',
				action: 'Get many custom fields of project',
				description: 'Get many custom fields of project',
				routing: {
					request: {
						method: 'GET',
						url: '=/custom-field/find-by-project/{{$parameter["projectId"]}}',
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'custom_fields',
								},
							},
						],
					},
				},
			},

			{
				name: 'Rename',
				value: 'renameCustomField',
				action: 'Rename custom field',
				description: 'Rename custom field',
				routing: {
					request: {
						method: 'POST',
						url: '=/custom-field/rename/{{$parameter["CustomFieldId"]}}',
					},
				},
			},

			{
				name: 'Restore',
				value: 'restoreCustomField',
				action: 'Restore custom field',
				description: 'Restore custom field',
				routing: {
					request: {
						method: 'POST',
						url: '=/custom-field/restore/{{$parameter["CustomFieldId"]}}',
					},
				},
			},
		],
		default: 'getAll',
	},

	{
		...projectSelectDescription,
		displayOptions: {
			show: {
				operation: ['createCustomField', 'getAllOnProject'],
				resource: ['CustomField'],
			},
		},
	},
	{
		displayName: 'Project Name or ID',
		name: 'projectId',
		type: 'options',
		required: true,
		default: '',
		description:
			'Select a project or enter a custom project ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'getProjects',
		},
		displayOptions: {
			show: {
				operation: [
					'renameCustomField',
					'deleteCustomField',
					'restoreCustomField',
					'addEditValue',
					'getEnumsOptions',
					'createEnumOption',
				],
				resource: ['CustomField'],
			},
		},
	},
	{
		...customFieldSelectDescription,
		displayOptions: {
			show: {
				operation: [
					'renameCustomField',
					'deleteCustomField',
					'restoreCustomField',
					'addEditValue',
					'getEnumsOptions',
					'createEnumOption',
				],
				resource: ['CustomField'],
			},
		},
	},
	{
		displayName: 'Task Name or ID',
		name: 'TaskId',
		type: 'options',
		default: '',
		description:
			'Select a task or enter a custom task ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		typeOptions: {
			loadOptionsMethod: 'getTasks',
		},
		displayOptions: {
			show: {
				operation: [
					'deleteValue',
				],
				resource: ['CustomField'],
			},
		},
	},
	{
		...TaskSelectDescription,
		displayOptions: {
			show: {
				operation: ['addEditValue'],
				resource: ['CustomField'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'task_id',
				value: '={{+$parameter["TaskId"]}}',
			},
		},
	},
	{
		...customFieldValueSelectDescription,
		displayOptions: {
			show: {
				operation: ['deleteValue',],
				resource: ['CustomField'],
			},
		},
	},
	...customFieldEnumSelectDescription,
	...nameCreateDescription,
	...customFieldCreateDescription,
	...valueSelectDescription,
];
