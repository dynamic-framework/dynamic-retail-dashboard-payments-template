import type { ApiService, ApiResponseWrapped } from '../api-interface';
import ApiClient from '../clients/apiClient';
import serviceMapper from '../mappers/serviceMapper';

import { RepositoryParams } from './repository';

export async function list(params?: RepositoryParams) {
  const { data } = await ApiClient.request<ApiResponseWrapped<ApiService[]>>({
    url: 'service-providers/GROUPED',
    method: 'GET',
    signal: params?.config?.abortSignal,
  });
  return data.content.map(serviceMapper);
}
