import type { ILoadOptionsFunctions } from 'n8n-workflow';
import { freeloRequest } from '../shared/freeloApiRequest';

interface CustomField {
	uuid: string;
	name: string;
}

export async function getCustomFields(
	this: ILoadOptionsFunctions,
): Promise<{ name: string; value: string }[]> {
	const projectParam = this.getCurrentNodeParameter('projectId') as
		| string
		| number
		| { value: string | number };
	const projectId = typeof projectParam === 'object' ? projectParam?.value : projectParam;

	if (!projectId) {
		return [];
	}

	const response = await freeloRequest.call(
		this,
		'GET',
		`/custom-field/find-by-project/${projectId}`,
		true,
	);

	return (
		response.custom_fields?.map((field: CustomField) => ({
			name: field.name,
			value: field.uuid,
		})) ?? []
	);
}
