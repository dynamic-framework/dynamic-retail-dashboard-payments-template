import type { GenericAbortSignal } from 'axios';

import type { ApiAccount } from '../api-interface';
import ApiClient from '../clients/apiClient';
import accountMapper from '../mappers/accountMapper';

export async function list(config: { abortSignal: GenericAbortSignal }) {
  const { data } = await ApiClient.request<Array<ApiAccount>>({
    url: 'accounts',
    method: 'GET',
    signal: config.abortSignal,
    headers: {
      Prefer: 'code=200, example="LOAN,CREDIT_CARD"',
    },
  });
  return data.map((apiAccount: ApiAccount) => accountMapper(apiAccount));
}
