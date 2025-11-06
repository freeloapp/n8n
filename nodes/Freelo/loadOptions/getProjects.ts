import type { ILoadOptionsFunctions } from 'n8n-workflow';
import { freeloRequest } from '../shared/freeloApiRequest';

interface Project {
	id: number;
	name: string;
}
export async function getProjects(
	this: ILoadOptionsFunctions,
): Promise<{ name: string; value: number }[]> {
	const response = await freeloRequest.call(this, 'GET', '/projects',true);

	return response.map((project: Project) => ({
		name: project.name,
		value: project.id,
	}));
}
