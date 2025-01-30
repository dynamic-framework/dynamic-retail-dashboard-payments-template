import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getPayDates } from '../../store/selectors';
import { setPayDates } from '../../store/slice';
import { PayDateOption } from '../interface';

const payDates: PayDateOption[] = [
  {
    label: 'Each first of the month',
    value: '01',
  },
  {
    label: 'Each month on 5th',
    value: '05',
  },
  {
    label: 'Each month on 15th',
    value: '15',
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
