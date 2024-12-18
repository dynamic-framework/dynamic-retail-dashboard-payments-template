import type { ApiAccount } from '../api-interface';
import ApiClient from '../clients/apiClient';
import accountMapper from '../mappers/accountMapper';

import { RepositoryParams } from './repository';

export async function list(params: RepositoryParams) {
  const { data } = await ApiClient.request<Array<ApiAccount>>({
    url: 'accounts',
    method: 'GET',
    signal: params?.config?.abortSignal,
    headers: {
      Prefer: 'code=200, example="LOAN,CREDIT_CARD"',
    },
  });
  return data.map((apiAccount: ApiAccount) => accountMapper(apiAccount));
}
