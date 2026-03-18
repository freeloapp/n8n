import type { INodeProperties } from 'n8n-workflow';

const showForRemoveWorkersByEmailProject = {
	operation: ['removeWorkersByEmail'],
	resource: ['Project'],
};

export const emailsSelectDescription: INodeProperties[] = [
	{
		displayName: 'Users Emails',
		name: 'emails',
		type: 'string',
		required: true,
		default: [],
		typeOptions: {
			multipleValues: true,
			multipleValueButtonText: 'Add Email',
		},
		displayOptions: {
			show: showForRemoveWorkersByEmailProject,
		},
		description: 'Enter one or more email addresses. You can type or paste multiple addresses.',
		routing: {
			send: {
				type: 'body',
				property: 'users_emails',
				value: '={{ $value }}',
			},
		},
	},
];
