import type { INodeProperties } from 'n8n-workflow';

const showOnlyForStates = {
	resource: ['State'],
};
export const freeloStates: INodeProperties[] = [
	{
		displayName: 'States',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForStates,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many states',
				description: 'Get many states',
				routing: {
					request: {
						method: 'GET',
						url: '=/states',
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'states',
								},
							},
						],
					},
				},
			},
		],
		default: 'getAll',
	},
];
