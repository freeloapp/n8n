import type { ILoadOptionsFunctions } from 'n8n-workflow';
import { freeloRequest } from '../shared/freeloApiRequest';

interface CustomField {
    value_uuid: string;
    name: string;
}

export async function getCustomFieldsValues(
    this: ILoadOptionsFunctions,
): Promise<{ name: string; value: string }[]> {
    const taskIdParam = this.getCurrentNodeParameter('TaskId') as
        | string
        | number
        | { value: string | number };
    const taskId = typeof taskIdParam === 'object' ? taskIdParam?.value : taskIdParam;

    if (!taskId) {
        return [];
    }

    const response = await freeloRequest.call(
        this,
        'GET',
        `/task/${taskId}`,
        true,
    );

    return (
        response.custom_fields?.map((field: CustomField) => ({
            name: field.name,
            value: field.value_uuid,
        })) ?? []
    );
}
