import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  getAccountCards,
  getAccountLoans,
  getBills,
} from '../../store/selectors';
import {
  setAccountCards,
  setAccountLoans,
  setBills,
} from '../../store/slice';
import errorHandler from '../../utils/errorHandler';
import { BillRepository, AccountRepository } from '../repositories';
import ApiError from '../utils/ApiError';

export default function useLoanAccountsCategorized() {
  const [loading, setLoading] = useState(false);
  const accountCards = useAppSelector(getAccountCards);
  const accountLoans = useAppSelector(getAccountLoans);
  const bills = useAppSelector(getBills);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    (async () => {
      try {
        setLoading(true);
        const cardsList = await AccountRepository.cardList(
          { config: { abortSignal: abortController.signal } },
        );
        const loansList = await AccountRepository.loanList(
          { config: { abortSignal: abortController.signal } },
        );
        dispatch(setAccountCards(cardsList));
        dispatch(setAccountLoans(loansList));
        const billsList = await BillRepository.list(
          { config: { abortSignal: abortController.signal } },
        );
        dispatch(setBills(billsList));
        setLoading(false);
      } catch (error) {
        if ((error as ApiError).name === 'CanceledError') return;
        errorHandler(error);
      }
    })();
    return () => {
      abortController.abort();
    };
  }, [dispatch]);

  return {
    loading,
    accountCards,
    accountLoans,
    bills,
  };
}
