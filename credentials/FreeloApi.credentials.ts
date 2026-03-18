import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialType,
	INodeProperties,
	ICredentialTestRequest,
} from 'n8n-workflow';

export class FreeloApi implements ICredentialType {
	name = 'freeloApi';
	displayName = 'Freelo API';
	icon: Icon = {
		light: 'file:../icons/freelo.svg',
		dark: 'file:../icons/freelo.dark.svg',
	};
	documentationUrl = 'https://help.freelo.io/help/api-klic/';
	properties: INodeProperties[] = [
		{
			displayName: 'Your Freelo Email',
			name: 'username',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Your API Key',
			name: 'password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			auth: {
				username: '={{ $credentials.username }}',
				password: '={{ $credentials.password }}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			method: 'GET',
			url: 'https://api.freelo.io/v1/projects?order_by=name&order=asc',
		},
	};
}
