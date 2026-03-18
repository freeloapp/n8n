import type { INodeProperties } from 'n8n-workflow';

export const customFieldSelectDescription: INodeProperties = {
	displayName: 'Custom Field Name or ID',
	name: 'CustomFieldId',
	type: 'options',
	required: true,
	default: '',
	description: 'Select a custom field or enter a custom UUID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	typeOptions: {
		loadOptionsMethod: 'getCustomFields',
		loadOptionsDependsOn: ['projectId'],
		allowCustomValue: true,
	},
	routing: {
		send: {
			type: 'body',
			property: 'custom_field_uuid',
		},
	},
};

export const customFieldValueSelectDescription: INodeProperties = {
	displayName: 'Custom Field Name or Custom Field Value Name or ID',
	name: 'CustomFieldValueId',
	type: 'options',
	required: true,
	default: '',
	description: 'Select a custom field or enter a UUID of custom field value. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	typeOptions: {
		loadOptionsMethod: 'getCustomFieldsValues',
		loadOptionsDependsOn: ['TaskId'],
		allowCustomValue: true,
	},
};
