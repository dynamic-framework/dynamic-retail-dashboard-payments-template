import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getPayDates } from '../../store/selectors';
import { setPayDates } from '../../store/slice';
import { PayDateOption } from '../interface';

const payDates: PayDateOption[] = [
  {
    label: 'On the first day of every month',
    value: 'DAY_1',
  },
  {
    label: 'On the 5th day of every month',
    value: 'DAY_5',
  },
  {
    label: 'On the 15th day of every month',
    value: 'DAY_15',
  },
];

export default function useLocalData() {
  const dispatch = useAppDispatch();
  const existingPayDates = useAppSelector(getPayDates);
  useEffect(() => {
    if (!existingPayDates.length) {
      dispatch(setPayDates(payDates));
    }
  }, [dispatch, existingPayDates]);

  return {
    payDates,
  };
}
