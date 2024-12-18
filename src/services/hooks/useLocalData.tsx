import { useEffect, useState } from 'react';

import { SITE_LANG } from '../../config/widgetConfig';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getServices, getPayDates } from '../../store/selectors';
import { setPayDates, setServices } from '../../store/slice';

const payDatesES = [
  {
    label: 'Cada primer día del mes',
    value: '2023-02-01T09:43:44-03:00',
  },
  {
    label: 'El día 5 de cada mes',
    value: '2023-02-05T09:43:44-03:00',
  },
  {
    label: 'El día 15 de cada mes',
    value: '2023-02-15T09:43:44-03:00',
  },
];

const payDatesEN = [
  {
    label: 'Each first of the month',
    value: '2023-02-01T09:43:44-03:00',
  },
  {
    label: 'Each month on 5th',
    value: '2023-02-05T09:43:44-03:00',
  },
  {
    label: 'Each month on 15th',
    value: '2023-02-15T09:43:44-03:00',
  },
];

const servicesES = [
  {
    label: 'Agua',
    value: 'water',
    companies: [
      {
        service: 'Agua',
        icon: 'water',
        label: 'Dynamic Water',
        value: 'Dynamic Water',
      },
      {
        service: 'Agua',
        icon: 'water',
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
        service: 'Luz',
        icon: 'lightbulb',
        label: 'Dynamic Light',
        value: 'Dynamic Light',
      },
      {
        service: 'Luz',
        icon: 'lightbulb',
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
        service: 'Gas',
        icon: 'fire',
        label: 'Dynamic Gas',
        value: 'Dynamic Gas',
      },
      {
        service: 'Gas',
        icon: 'fire',
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
        service: 'Internet',
        icon: 'wifi',
        label: 'Dynamic Internet',
        value: 'Dynamic Internet',
      },
      {
        service: 'Internet',
        icon: 'wifi',
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
        service: 'Telefono',
        icon: 'telephone-fill',
        label: 'Dynamic Phone',
        value: 'Dynamic Phone',
      },
      {
        service: 'Telefono',
        icon: 'telephone-fill',
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
        service: 'Water',
        icon: 'water',
        label: 'Dynamic Water',
        value: 'Dynamic Water',
      },
      {
        service: 'Water',
        icon: 'water',
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
        service: 'Light',
        icon: 'lightbulb',
        label: 'Dynamic Light',
        value: 'Dynamic Light',
      },
      {
        service: 'Light',
        icon: 'lightbulb',
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
        service: 'Gas',
        icon: 'fire',
        label: 'Dynamic Gas',
        value: 'Dynamic Gas',
      },
      {
        service: 'Gas',
        icon: 'fire',
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
        service: 'Internet',
        icon: 'wifi',
        label: 'Dynamic Internet',
        value: 'Dynamic Internet',
      },
      {
        service: 'Internet',
        icon: 'wifi',
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
        service: 'Phone',
        icon: 'telephone-fill',
        label: 'Dynamic Phone',
        value: 'Dynamic Phone',
      },
      {
        service: 'Phone',
        icon: 'telephone-fill',
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
