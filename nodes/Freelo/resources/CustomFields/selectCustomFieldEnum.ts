import type { INodeProperties } from 'n8n-workflow';

const showForManageCustomFieldEnum = {
	operation: ['editEnumOption', 'deleteEnumOption'],
	resource: ['CustomField'],
};

export const customFieldEnumSelectDescription: INodeProperties[] = [
	{
		displayName: 'Custom Field Enum UUID',
		name: 'CustomFieldEnumUUID',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showForManageCustomFieldEnum,
		},
	},
];
