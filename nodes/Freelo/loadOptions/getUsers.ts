import type { ILoadOptionsFunctions } from 'n8n-workflow';
import { freeloRequest } from '../shared/freeloApiRequest';

interface User {
	id: number;
	fullname: string;
}
export async function getUsers(
	this: ILoadOptionsFunctions,
): Promise<{ name: string; value: number }[]> {
	const response = await freeloRequest.call(this, 'GET', `/users`, true);
	return (
		response.data?.users?.map((user: User) => ({
			name: user.fullname,
			value: user.id,
		})) ?? []
	);
}
