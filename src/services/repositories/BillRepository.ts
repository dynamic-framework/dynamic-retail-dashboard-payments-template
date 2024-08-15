import type { GenericAbortSignal } from 'axios';

import type { ApiBill } from '../api-interface';
import ApiClient from '../clients/apiClient';
import billMapper from '../mappers/billMapper';

export async function list(config: { abortSignal: GenericAbortSignal }) {
  const { data } = await ApiClient.request<Array<ApiBill>>({
    url: 'bills',
    method: 'GET',
    signal: config.abortSignal,
    headers: {
      Prefer: 'code=200, example="ALL"',
    },
  });
  return data.map((ApiBill: ApiBill) => billMapper(ApiBill));
}
