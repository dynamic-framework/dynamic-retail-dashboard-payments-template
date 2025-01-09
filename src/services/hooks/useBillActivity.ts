import { useEffect, useState } from 'react';

import errorHandler from '../../utils/errorHandler';
import { BillActivity } from '../interface';
import { BillRepository } from '../repositories';
import ApiError from '../utils/ApiError';

export default function useBillActivity(id: string) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<BillActivity[]>([]);

  useEffect(() => {
    const abortController = new AbortController();
    (async () => {
      try {
        setLoading(true);
        const billDetail = await BillRepository.getActivity(
          {
            id,
            config: { abortSignal: abortController.signal },
          },
        );
        setData(billDetail);
        setLoading(false);
      } catch (error) {
        if ((error as ApiError).name === 'CanceledError') return;
        errorHandler(error);
      }
    })();
    return () => {
      abortController.abort();
    };
  }, [id]);

  return {
    loading,
    data,
  };
}
