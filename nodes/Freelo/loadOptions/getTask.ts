import type { ILoadOptionsFunctions } from 'n8n-workflow';
import { freeloRequest } from '../shared/freeloApiRequest';

interface Task {
	id: number;
	name: string;
}
export async function getTasks(
	this: ILoadOptionsFunctions,
): Promise<{ name: string; value: string }[]> {
	const response = await freeloRequest.call(this, 'GET', `/all-tasks`, true);

	return (
		response.data?.tasks?.map((task: Task) => ({
			name: task.name,
			value: String(task.id),
		})) ?? []
	);
}
