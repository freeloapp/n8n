import type { ILoadOptionsFunctions } from 'n8n-workflow';
import { freeloRequest } from '../shared/freeloApiRequest';

interface TaskList {
	id: number;
	name: string;
}
export async function getTemplateTaskListsForProject(
	this: ILoadOptionsFunctions,
): Promise<{ name: string; value: string }[]> {
	const templateId = this.getCurrentNodeParameter('TemplateId') as number;
	if (!templateId) {
		return [];
	}

	const response = await freeloRequest.call(
		this,
		'GET',
		`/all-tasklists?projects_ids[]=${templateId}`,
		true,
	);

	return (
		response.data?.tasklists?.map((tasklist: TaskList) => ({
			name: tasklist.name,
			value: String(tasklist.id),
		})) ?? []
	);
}
