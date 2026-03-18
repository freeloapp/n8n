import type { ILoadOptionsFunctions } from 'n8n-workflow';
import { freeloRequest } from '../shared/freeloApiRequest';

interface Notification {
	id: number;
	text: string;
}

export async function getNotifications(
	this: ILoadOptionsFunctions,
): Promise<{ name: string; value: string }[]> {
	const response = await freeloRequest.call(this, 'GET', '/all-notifications', true);

	return (
		response.data?.notifications?.map((notification: Notification) => ({
			name: notification.text
				? notification.text.substring(0, 80)
				: `Notification #${notification.id}`,
			value: String(notification.id),
		})) ?? []
	);
}
