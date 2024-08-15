import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getAccounts, getBills } from '../../store/selectors';
import { setAccounts, setBills } from '../../store/slice';
import errorHandler from '../../utils/errorHandler';
import { AccountRepository, BillRepository } from '../repositories';

export default function useLoanAccountsCategorized() {
  const [loading, setLoading] = useState(false);
  const accounts = useAppSelector(getAccounts);
  const bills = useAppSelector(getBills);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    (async () => {
      try {
        setLoading(true);
        const accountsList = await AccountRepository.list({ abortSignal: abortController.signal });
        dispatch(setAccounts(accountsList));
        const billsList = await BillRepository.list({ abortSignal: abortController.signal });
        dispatch(setBills(billsList));
        setLoading(false);
      } catch (error) {
        errorHandler(error);
      }
    })();
    return () => {
      abortController.abort();
    };
  }, [dispatch]);

  return {
    loading,
    accounts,
    bills,
  };
}
