import type { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { freeloRequest } from '../shared/freeloApiRequest';

interface TaskList {
	id: number;
	name: string;
}

export async function searchTaskListsForProject(
	this: ILoadOptionsFunctions,
	filter?: string,
): Promise<INodeListSearchResult> {
	const projectParam = this.getCurrentNodeParameter('projectId') as
		| string
		| number
		| { value: string | number };
	const projectId =
		typeof projectParam === 'object' ? projectParam?.value : projectParam;

	if (!projectId) {
		return { results: [] };
	}

	const response = await freeloRequest.call(
		this,
		'GET',
		`/all-tasklists?projects_ids[]=${projectId}`,
		true,
	);

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
