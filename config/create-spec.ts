import { spec } from 'pactum';
import { env } from './env';

type PactumSpec = ReturnType<typeof spec>;
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type RelativePathString = `/${string}`;
type UrlString = `http://${string}` | `https://${string}`;
type SpecCreatorConfigOptions = {
  baseUrl: UrlString;
};
type SpecCreatorConfig<T> = {
  method: HttpMethod;
  path: RelativePathString;
  request?: T;
  options?: SpecCreatorConfigOptions;
};

export interface BaseRequest {
  params?: unknown;
  query?: unknown;
  headers?: unknown;
  json?: unknown;
}

const defaultCreatorConfigOptions: SpecCreatorConfigOptions = {
  baseUrl: env.BASE_URL as UrlString,
};

export const createSpec = <T extends BaseRequest>(
  config: SpecCreatorConfig<T>,
): PactumSpec => {
  const { method, path, request, options } = config;

  const { baseUrl } = {
    ...defaultCreatorConfigOptions,
    ...options,
  };

  const pactumSpec = spec();

  pactumSpec.withMethod(method).withPath(`${baseUrl}${path}`);

  if (request?.json) pactumSpec.withJson(request.json);
  if (request?.query) pactumSpec.withQueryParams(request.query);
  if (request?.params) pactumSpec.withPathParams(request.params);
  if (request?.headers) pactumSpec.withHeaders(request.headers);

  return pactumSpec;
};
