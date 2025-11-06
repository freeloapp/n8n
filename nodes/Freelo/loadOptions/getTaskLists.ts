import type { ILoadOptionsFunctions } from 'n8n-workflow';
import { freeloRequest } from '../shared/freeloApiRequest';

interface TaskList {
	id: number;
	name: string;
}
export async function getTaskLists(
	this: ILoadOptionsFunctions,
): Promise<{ name: string; value: number }[]> {
	const response = await freeloRequest.call(this, 'GET', `/all-tasklists`, true);

	return (
		response.data?.tasklists?.map((taskList: TaskList) => ({
			name: taskList.name,
			value: taskList.id,
		})) ?? []
	);
}
