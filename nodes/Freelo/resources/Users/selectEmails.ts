import type { INodeProperties } from 'n8n-workflow';

const showForInviteByEmailsUser = {
	operation: ['inviteByEmailsIds'],
	resource: ['User'],
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
			show: showForInviteByEmailsUser,
		},
		description: 'Enter one or more email addresses. You can type or paste multiple addresses.',
		routing: {
			send: {
				type: 'body',
				property: 'emails',
			},
		},
	},
];
