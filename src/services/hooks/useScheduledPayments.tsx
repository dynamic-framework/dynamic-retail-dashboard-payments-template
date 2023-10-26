import { useEffect, useState } from 'react';

import { SITE_LANG } from '../../config/widgetConfig';
import { setScheduledPayments } from '../../store/slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getScheduledPayments } from '../../store/selectors';

const scheduledEN = [
  {
    id: '1',
    name: 'Water',
    type: 'bills',
    icon: 'water',
    text: 'Account 7483719 • 22-09-22',
    theme: 'blue',
  },
  {
    id: '2',
    name: 'Energy',
    type: 'bills',
    icon: 'lightbulb',
    text: 'Account 7483719 • 22-09-22',
    theme: 'blue',
  },
  {
    id: '3',
    name: 'Credit Card',
    type: 'credit-card',
    icon: 'credit-card',
    text: '**** **** 5256 • 22-09-22',
    theme: 'indigo',
  },
];

const scheduledES = [
  {
    id: '1',
    name: 'Agua',
    type: 'bills',
    icon: 'water',
    text: 'Contrato 7483719 • 22-09-22',
    theme: 'blue',
  },
  {
    id: '2',
    name: 'Energía',
    type: 'bills',
    icon: 'lightbulb',
    text: 'Contrato 7483719 • 22-09-22',
    theme: 'blue',
  },
  {
    id: '3',
    name: 'Tarjeta de Crédito',
    type: 'credit-card',
    icon: 'credit-card',
    text: '**** **** 5256 • 22-09-22',
    theme: 'indigo',
  },
];

export default function useScheduledPayments() {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const scheduledPayments = useAppSelector(getScheduledPayments);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const scheduled = SITE_LANG === 'es' ? scheduledES : scheduledEN;
      dispatch(setScheduledPayments(scheduled));
      setLoading(false);
    }, 1000);
  }, [dispatch]);

  return {
    loading,
    scheduledPayments,
  };
}
