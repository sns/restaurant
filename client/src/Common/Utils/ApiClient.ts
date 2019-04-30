import { isNullOrUndefined } from "./ObjectUtils";

export const defaultRequestInit: RequestInit = {
  credentials: "same-origin"
};

export const jsonHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Pragma: "no-cache"
};

export interface ApiClientRequestInit extends RequestInit {
  jsonBody?: any;
  queryParams?: QueryStringProperties;
}

/**
 * Wrapper around the global fetch() api
 */
export function fetch(
  input: RequestInfo,
  init?: RequestInit
): Promise<Response> {
  return window.fetch(input, init);
}

export function fetchJsonRaw<T>(
  url: string,
  init: RequestInit = {}
): Promise<Response> {
  return fetch(url, {
    ...defaultRequestInit,
    ...init,
    headers: {
      ...jsonHeaders,
      ...init.headers
    }
  } as RequestInit);
}

export function fetchJson<T>(
  url: string,
  init: ApiClientRequestInit = {}
): Promise<T> {
  if (init.queryParams) {
    const queryString = createQueryString(init.queryParams);
    url = `${url}?${queryString}`;
  }

  return fetchJsonRaw(url, init)
    .then(errorHandler)
    .then(response => response.json());
}

export const getJson = fetchJson;

export function postJson<T>(
  url: string,
  init?: ApiClientRequestInit
): Promise<T> {
  const body =
    init &&
    (init.jsonBody || init.body) &&
    JSON.stringify(init.jsonBody || init.body);

  return fetchJson(url, {
    method: "POST",
    ...init,
    body
  });
}

export function postJsonRaw(
  url: string,
  init?: ApiClientRequestInit
): Promise<Response> {
  const body =
    init &&
    (init.jsonBody || init.body) &&
    JSON.stringify(init.jsonBody || init.body);
  const requestInit = init && (init as RequestInit);

  return fetchJsonRaw(url, {
    method: "POST",
    ...requestInit,
    body
  });
}

export function putJson<T>(
  url: string,
  init?: ApiClientRequestInit
): Promise<T> {
  const body =
    init &&
    (init.jsonBody || init.body) &&
    JSON.stringify(init.jsonBody || init.body);

  return fetchJson(url, {
    method: "PUT",
    ...init,
    body
  });
}

export function deleteJson<T>(
  url: string,
  init?: ApiClientRequestInit
): Promise<T> {
  const body =
    init &&
    (init.jsonBody || init.body) &&
    JSON.stringify(init.jsonBody || init.body);

  return fetchJson(url, {
    method: "DELETE",
    ...init,
    body
  });
}

export function errorHandler(response: Response): Response {
  if (!response.ok) {
    console.error(
      `API Error: ${response.url} -> ${response.status} ${response.statusText}`
    );
    throw response;
  }

  return response;
}

export interface QueryStringProperties {
  [paramName: string]: string | number | undefined;
}

export function createQueryString(params: QueryStringProperties): string {
  return Object.keys(params)
    .map(name => {
      const param = isNullOrUndefined(params[name]) ? "" : params[name];
      return `${name}=${encodeURIComponent(param.toString())}`;
    })
    .join("&");
}

const apiClient = {
  defaultRequestInit,
  errorHandler,
  fetchJsonRaw,
  fetchJson,
  jsonHeaders,
  postJson,
  postJsonRaw,
  putJson,
  deleteJson,
  createQueryString
};

export default apiClient;
