import type { ApiAccount, ApiResponseWrapped } from '../api-interface';
import ApiClient from '../clients/apiClient';
import accountMapper from '../mappers/accountMapper';

import { RepositoryParams } from './repository';

export async function cardList(params: RepositoryParams) {
  const { data } = await ApiClient.request<ApiResponseWrapped<ApiAccount[]>>({
    url: 'accounts/LOAN/CREDIT_CARD', // 10106
    method: 'GET',
    signal: params?.config?.abortSignal,
  });
  return data.content.map(accountMapper);
}

export async function loanList(params: RepositoryParams) {
  const { data } = await ApiClient.request<ApiResponseWrapped<ApiAccount[]>>({
    url: 'accounts/LOAN/LOAN', // 10105
    method: 'GET',
    signal: params?.config?.abortSignal,
  });
  return data.content.map(accountMapper);
}
