import type { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { freeloRequest } from '../shared/freeloApiRequest';

interface TaskList {
	id: number;
	name: string;
}

export async function searchTaskLists(
	this: ILoadOptionsFunctions,
	filter?: string,
): Promise<INodeListSearchResult> {
	const response = await freeloRequest.call(this, 'GET', '/all-tasklists', true);

	let results =
		response.data?.tasklists?.map((taskList: TaskList) => ({
			name: taskList.name,
			value: String(taskList.id),
		})) ?? [];

	if (filter) {
		const lowerFilter = filter.toLowerCase();
		results = results.filter(
			(item: { name: string; value: string }) =>
				item.name.toLowerCase().includes(lowerFilter) || item.value.includes(filter),
		);
	}

	return { results };
}
