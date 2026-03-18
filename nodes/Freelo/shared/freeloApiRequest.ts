import type { ILoadOptionsFunctions, IHttpRequestMethods } from 'n8n-workflow';

export async function freeloRequest(
	this: ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	paginate = false,
) {
	const requestOptions = {
		method,
		url: endpoint,
		baseURL: 'https://api.freelo.io/v1/',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			'User-Agent': 'n8n-integration',
		},
	};
	const response = await this.helpers.httpRequestWithAuthentication.call(
		this,
		'freeloApi',
		requestOptions,
	);
	if (!paginate) {
		return response;
	}
	if (response.page == null || response.per_page == null || response.total == null) {
		return response;
	}
	const { per_page, total } = response;
	const totalPages = Math.ceil(total / per_page);

	if (totalPages <= 1) {
		return response;
	}
	for (let page = 1; page < totalPages; page++) {
		const separator = endpoint.includes('?') ? '&' : '?';
		const pageResponse = await this.helpers.httpRequestWithAuthentication.call(
			this,
			'freeloApi',
			{ ...requestOptions, url: `${endpoint}${separator}p=${page}` },
		);
		if (pageResponse.data) {
			for (const key of Object.keys(pageResponse.data)) {
				if (Array.isArray(pageResponse.data[key]) && Array.isArray(response.data[key])) {
					response.data[key] = response.data[key].concat(pageResponse.data[key]);
				}
			}
		}
	}

	return response;
}
