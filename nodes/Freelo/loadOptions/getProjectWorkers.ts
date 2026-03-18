import type { ILoadOptionsFunctions } from 'n8n-workflow';
import { freeloRequest } from '../shared/freeloApiRequest';

interface User {
	id: number;
	fullname: string;
}

export async function getProjectWorkers(
	this: ILoadOptionsFunctions,
): Promise<{ name: string; value: string }[]> {
	const projectParam = this.getCurrentNodeParameter('projectId') as | string | number | { value: string | number };
	const projectId = typeof projectParam === 'object' ? projectParam?.value : projectParam;

	if (!projectId) {
		return [];
	}

	const response = await freeloRequest.call(this, 'GET', `/project/${projectId}/workers`, true);

	return (
		response.data?.workers?.map((user: User) => ({
			name: user.fullname,
			value: String(user.id),
		})) ?? []
	);
}
