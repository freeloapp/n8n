import type {
	IExecuteSingleFunctions,
	INodeExecutionData,
	INodeRequestOutput,
	IN8nHttpFullResponse,
} from 'n8n-workflow';

export function makeListOutput(rootProperty: string): INodeRequestOutput {
	return {
		postReceive: [
			{
				type: 'rootProperty',
				properties: {
					property: rootProperty,
				},
			},
			async function (
				this: IExecuteSingleFunctions,
				items: INodeExecutionData[],
				response: IN8nHttpFullResponse,
			): Promise<INodeExecutionData[]> {
				let returnAllValue = false;
				returnAllValue = this.getNodeParameter('returnAll') as boolean;
				if (returnAllValue) return items;

				const limit = this.getNodeParameter('limit') as number;
				const body = response.body as { page?: number; per_page?: number };
				const page = body.page ?? 0;
				const perPage = body.per_page ?? items.length;
				const itemsBefore = page * perPage;
				const remaining = limit - itemsBefore;
				if (remaining <= 0) return [];
				return items.slice(0, remaining);
			},
		],
	};
}