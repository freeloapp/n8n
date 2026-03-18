import type { ILoadOptionsFunctions } from 'n8n-workflow';
import { freeloRequest } from '../shared/freeloApiRequest';

interface TemplateProject {
	id: number;
	name: string;
}
export async function getTemplateProjects(
	this: ILoadOptionsFunctions,
): Promise<{ name: string; value: string }[]> {
	const response = await freeloRequest.call(this, 'GET', '/template-projects', true);

	return (
		response.data?.template_projects?.map((project: TemplateProject) => ({
			name: project.name,
			value: String(project.id),
		})) ?? []
	);
}
