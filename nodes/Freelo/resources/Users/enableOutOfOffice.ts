import type { INodeProperties } from 'n8n-workflow';

const showForEnableOutOfOfficeUser = {
	operation: ['enableOutOfOffice'],
	resource: ['User'],
};

export const outOfOfficeEnableDescription: INodeProperties[] = [
	{
		displayName: 'Date And Time From',
		name: 'date_from',
		type: 'dateTime',
		required: true,
		default: '',
		displayOptions: {
			show: showForEnableOutOfOfficeUser,
		},
		routing: {
			send: {
				type: 'body',
				property: 'out_of_office.date_from',
			},
		},
	},
	{
		displayName: 'Date And Time To',
		name: 'date_to',
		type: 'dateTime',
		required: true,
		default: '',
		displayOptions: {
			show: showForEnableOutOfOfficeUser,
		},
		routing: {
			send: {
				type: 'body',
				property: 'out_of_office.date_to',
			},
		},
	},
];
