import type { ApiBill } from '../api-interface';
import ApiClient from '../clients/apiClient';
import billMapper from '../mappers/billMapper';

import { RepositoryParams } from './repository';

export async function list(params: RepositoryParams) {
  const { data } = await ApiClient.request<Array<ApiBill>>({
    url: 'bills',
    method: 'GET',
    signal: params?.config?.abortSignal,
    headers: {
      Prefer: 'code=200, example="ALL"',
    },
  });
  return data.map(billMapper);
}
