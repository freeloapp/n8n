import type { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { freeloRequest } from '../shared/freeloApiRequest';

interface Task {
	id: number;
	name: string;
}

export async function searchTasks(
	this: ILoadOptionsFunctions,
	filter?: string,
): Promise<INodeListSearchResult> {
	const response = await freeloRequest.call(this, 'GET', '/all-tasks', true);

	let results = response.data?.tasks?.map((task: Task) => ({
			name: task.name,
			value: String(task.id),
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
