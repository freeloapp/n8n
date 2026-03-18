import type { ILoadOptionsFunctions } from 'n8n-workflow';
import { freeloRequest } from '../shared/freeloApiRequest';

interface Label {
	id: number;
	name: string;
}
export async function getLabels(
	this: ILoadOptionsFunctions,
): Promise<{ name: string; value: string }[]> {
	const response = await freeloRequest.call(this, 'GET', '/project-labels/find-available');
	return (
		response.labels?.map((label: Label) => ({
			name: label.name,
			value: String(label.id),
		})) ?? []
	);
}
