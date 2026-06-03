import type { INodePropertyRouting, IExecuteSingleFunctions, IHttpRequestOptions } from 'n8n-workflow';

const filterParamToQs: Record<string, string> = {
	order: 'order',
	type: 'type',
	order_by: 'order_by',
	projectsIds: 'projects_ids[]',
	labelsIds: 'tasks_labels[]',
	tasksIds: 'tasks_ids[]',
	usersIds: 'users_ids[]',
	typeEvents: 'events_types[]',
	tags: 'tags[]',
	states: 'states_ids[]',
	dateRangeFrom: 'date_range[date_from]',
	dateRangeTo: 'date_range[date_to]',
	dateRangeReportedFrom: 'date_reported_range[date_from]',
	dateRangeReportedTo: 'date_reported_range[date_to]',
	dateRangeCreateFrom: 'created_in_range[date_from]',
	dateRangeCreateTo: 'created_in_range[date_to]',
	searchQuery: 'search_query',
	stateId: 'state_id',
	tasklistsIds: 'tasklists_ids[]',
	withLabels: 'with_labels[]',
	withoutLabel: 'without_label',
	noDueDate: 'no_due_date',
	dueDateFrom: 'due_date_range[date_from]',
	dueDateTo: 'due_date_range[date_to]',
	finishedOverdue: 'finished_overdue',
	finishedDateFrom: 'finished_date_range[date_from]',
	finishedDateTo: 'finished_date_range[date_to]',
	workerId: 'worker_id',
	myPriorities: 'my_priorities',
};

// Params the API declares as `format: date` — trim dateTime values to YYYY-MM-DD
const dateOnlyParams = new Set(['dueDateFrom', 'dueDateTo', 'finishedDateFrom', 'finishedDateTo']);

async function resolveFilters(
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	let filters: Record<string, unknown>;
	try {
		filters = this.getNodeParameter('filters', {}) as Record<string, unknown>;
	} catch {
		return requestOptions;
	}

	// Build filter query string and append to URL
	// This bypasses pagination qs replacement which overwrites preSend qs values
	const params: string[] = [];
	for (const [param, qsKey] of Object.entries(filterParamToQs)) {
		const value = filters[param];
		if (value == null || value === '') continue;
		if (Array.isArray(value) && value.length === 0) continue;
		if (Array.isArray(value)) {
			for (const item of value) {
				params.push(`${encodeURIComponent(qsKey)}=${encodeURIComponent(String(item))}`);
			}
		} else if (typeof value === 'boolean') {
			// API expects 1/0 — string values like "true"/"false" are silently ignored
			params.push(`${encodeURIComponent(qsKey)}=${value ? '1' : '0'}`);
		} else {
			let stringValue = String(value);
			if (dateOnlyParams.has(param)) {
				stringValue = stringValue.slice(0, 10);
			}
			params.push(`${encodeURIComponent(qsKey)}=${encodeURIComponent(stringValue)}`);
		}
	}
	if (params.length > 0) {
		const separator = requestOptions.url.includes('?') ? '&' : '?';
		requestOptions.url += separator + params.join('&');
	}

	return requestOptions;
}

export const paginator: INodePropertyRouting = {
	operations: {
		pagination: {
			type: 'generic',
			properties: {
				continue: `={{ $response.body?.page != null && $response.body?.per_page != null && $response.body?.total != null &&
                            ($response.body.page + 1) * $response.body.per_page < $response.body.total && ($parameter.returnAll ||
                             ($response.body.page + 1) * $response.body.per_page < $parameter.limit) }}`,
				request: {
					qs: {
						p: `={{ $response?.body?.page != null ? $response.body.page + 1 : 0 }}`,
					},
				},
			},
		},
	},
	send: {
		paginate: true,
		preSend: [resolveFilters],
	},
};
