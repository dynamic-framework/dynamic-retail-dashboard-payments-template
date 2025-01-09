import type {
  ApiBill,
  ApiBillActivity,
  ApiResponseWrapped,
} from '../api-interface';
import ApiClient from '../clients/apiClient';
import billActivityMapper from '../mappers/billActivityMapper';
import billMapper from '../mappers/billMapper';

import { RepositoryParams } from './repository';

export async function list(params: RepositoryParams) {
  const { data } = await ApiClient.request<ApiResponseWrapped<ApiBill[]>>({
    url: 'account-holder/bill-payment-accounts',
    method: 'GET',
    signal: params?.config?.abortSignal,
  });
  return data.content.map(billMapper);
}

export async function getActivity(params: RepositoryParams<{ id: string }>) {
  const { data } = await ApiClient.request<ApiResponseWrapped<ApiBillActivity[]>>({
    url: 'account-holder/bill-payment-accounts/account/activity',
    method: 'GET',
    signal: params?.config?.abortSignal,
    params: {
      id: params.id,
    },
  });
  return data.content.map(billActivityMapper);
}
