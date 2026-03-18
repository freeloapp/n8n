import type { ILoadOptionsFunctions } from 'n8n-workflow';
import { freeloRequest } from '../shared/freeloApiRequest';

interface Comment {
	id: number;
	content: string;
}

export async function getComments(
	this: ILoadOptionsFunctions,
): Promise<{ name: string; value: string }[]> {
	const response = await freeloRequest.call(this, 'GET', '/all-comments', true);

	return (
		response.data?.comments?.map((comment: Comment) => ({
			name: comment.content ? comment.content.substring(0, 60) : `Comment #${comment.id}`,
			value: String(comment.id),
		})) ?? []
	);
}
