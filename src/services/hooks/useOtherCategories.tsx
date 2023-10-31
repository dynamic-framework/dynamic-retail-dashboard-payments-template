import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setOtherCategories } from '../../store/slice';
import { getOtherCategories } from '../../store/selectors';
import { SITE_LANG } from '../../config/widgetConfig';

const othersEN = {
  bills: {
    type: 'bills',
    items: [
      {
        id: '1',
        name: 'Water',
        icon: 'water',
        text: 'Account 7483719 • Payment due by 22-09-22',
      },
      {
        id: '2',
        name: 'Light ',
        icon: 'lightbulb',
        text: 'Account 7483719 • Payment due by 22-09-22',
      },
      {
        id: '3',
        name: 'Gas',
        icon: 'fire',
        text: 'Account 7483719 • Payment due by 22-09-22',
      },
    ],
  },
  taxes: {
    type: 'taxes',
    items: [
      {
        id: '11',
        name: 'Household',
        icon: 'house',
        text: 'Registration number 7483719',
      },
      {
        id: '12',
        name: 'Vehicle',
        icon: 'car-front',
        text: 'Registration 7483719',
      },
    ],
  },
  'social-security': {
    type: 'social-security',
    items: [
      {
        id: '21',
        name: 'Health',
        icon: 'heart-pulse',
        text: 'EPS Sura',
      },
      {
        id: '22',
        name: 'Pension',
        icon: 'safe',
        text: 'Protección fondo de pensiones',
      },
    ],
  },
};

const othersES = {
  bills: {
    type: 'bills',
    items: [
      {
        id: '1',
        name: 'Agua',
        icon: 'water',
        text: 'Contrato 7483719 • Fecha maxíma de pago 22-09-22',
      },
      {
        id: '2',
        name: 'Luz',
        icon: 'lightbulb',
        text: 'Contrato 7483719 • Fecha maxíma de pago 22-09-22',
      },
      {
        id: '3',
        name: 'Gas',
        icon: 'fire',
        text: 'Contrato 7483719 • Fecha maxíma de pago 22-09-22',
      },
    ],
  },
  taxes: {
    type: 'taxes',
    items: [
      {
        id: '11',
        name: 'Vivienda',
        icon: 'house',
        text: 'Matrícula inmoviliaria 7483719',
      },
      {
        id: '12',
        name: 'Vehículo',
        icon: 'car-front',
        text: 'Matrícula 7483719',
      },
    ],
  },
  'social-security': {
    type: 'social-security',
    items: [
      {
        id: '21',
        name: 'Salud',
        icon: 'heart-pulse',
        text: 'EPS Sura',
      },
      {
        id: '22',
        name: 'Pensión',
        icon: 'safe',
        text: 'Protección fondo de pensiones',
      },
    ],
  },
};

export default function useOtherCategories() {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const otherCategories = useAppSelector(getOtherCategories);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const others = SITE_LANG === 'es' ? othersES : othersEN;
      dispatch(setOtherCategories(others));
      setLoading(false);
    }, 1000);
  }, [dispatch]);

  return {
    loading,
    otherCategories,
  };
}
