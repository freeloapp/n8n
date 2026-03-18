import type { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { freeloRequest } from '../shared/freeloApiRequest';

interface Project {
	id: number;
	name: string;
}

export async function searchProjects(
	this: ILoadOptionsFunctions,
	filter?: string,
): Promise<INodeListSearchResult> {
	const response = await freeloRequest.call(this, 'GET', '/projects', true);

	let results = (response.data?.projects ?? []).map((project: Project) => ({
		name: project.name,
		value: String(project.id),
	}));

	if (filter) {
		const lowerFilter = filter.toLowerCase();
		results = results.filter(
			(item: { name: string; value: string }) =>
				item.name.toLowerCase().includes(lowerFilter) || item.value.includes(filter),
		);
	}

	return { results };
}
