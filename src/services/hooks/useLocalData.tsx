import { useEffect, useState } from 'react';

import { SITE_LANG } from '../../config/widgetConfig';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getServices, getPayDates } from '../../store/selectors';
import { setPayDates, setServices } from '../../store/slice';

const payDatesES = [
  {
    label: 'Primer día del mes',
    value: '1',
  },
  {
    label: '5 de cada mes',
    value: '5',
  },
  {
    label: '15 de cada mes',
    value: '15',
  },
];

const payDatesEN = [
  {
    label: 'First day of the month',
    value: '1',
  },
  {
    label: '5th of the month',
    value: '5',
  },
  {
    label: '15th of the month',
    value: '15',
  },
];

const servicesES = [
  {
    label: 'Agua',
    value: 'water',
    companies: [
      {
        label: 'Dynamic Water',
        value: 'Dynamic Water',
      },
      {
        label: 'Water Company',
        value: 'Water Company',
      },
    ],
  },
  {
    label: 'Luz',
    value: 'lightbulb',
    companies: [
      {
        label: 'Dynamic Light',
        value: 'Dynamic Light',
      },
      {
        label: 'Light Company',
        value: 'Light Company',
      },
    ],
  },
  {
    label: 'Gas',
    value: 'fire',
    companies: [
      {
        label: 'Dynamic Gas',
        value: 'Dynamic Gas',
      },
      {
        label: 'Gas Company',
        value: 'Gas Company',
      },
    ],
  },
  {
    label: 'Internet',
    value: 'wifi',
    companies: [
      {
        label: 'Dynamic Internet',
        value: 'Dynamic Internet',
      },
      {
        label: 'Internet Company',
        value: 'Internet Company',
      },
    ],
  },
  {
    label: 'Telefono',
    value: 'telephone-fill',
    companies: [
      {
        label: 'Dynamic Phone',
        value: 'Dynamic Phone',
      },
      {
        label: 'Phone Company',
        value: 'Phone Company',
      },
    ],
  },
];

const servicesEN = [
  {
    label: 'Water',
    value: 'water',
    companies: [
      {
        label: 'Dynamic Water',
        value: 'Dynamic Water',
      },
      {
        label: 'Water Company',
        value: 'Water Company',
      },
    ],
  },
  {
    label: 'Light',
    value: 'lightbulb',
    companies: [
      {
        label: 'Dynamic Light',
        value: 'Dynamic Light',
      },
      {
        label: 'Light Company',
        value: 'Light Company',
      },
    ],
  },
  {
    label: 'Gas',
    value: 'fire',
    companies: [
      {
        label: 'Dynamic Gas',
        value: 'Dynamic Gas',
      },
      {
        label: 'Gas Company',
        value: 'Gas Company',
      },
    ],
  },
  {
    label: 'Internet',
    value: 'wifi',
    companies: [
      {
        label: 'Dynamic Internet',
        value: 'Dynamic Internet',
      },
      {
        label: 'Internet Company',
        value: 'Internet Company',
      },
    ],
  },
  {
    label: 'Phone',
    value: 'telephone-fill',
    companies: [
      {
        label: 'Dynamic Phone',
        value: 'Dynamic Phone',
      },
      {
        label: 'Phone Company',
        value: 'Phone Company',
      },
    ],
  },
];

export default function useLocalData() {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const payDates = useAppSelector(getPayDates);
  const services = useAppSelector(getServices);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const localPayDates = SITE_LANG === 'es' ? payDatesES : payDatesEN;
      dispatch(setPayDates(localPayDates));
      const localServices = SITE_LANG === 'es' ? servicesES : servicesEN;
      dispatch(setServices(localServices));
      setLoading(false);
    }, 10);
  }, [dispatch]);

  return {
    loading,
    payDates,
    services,
  };
}
