import { useEffect, useState } from 'react';
import { ProductRepository } from '@modyo-dynamic/modyo-service-retail';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getProductsByCategory } from '../store/selectors';
import { setProducts } from '../store/slice';
import errorHandler from '../utils/errorHandler';

export default function useProductsByCategory() {
  const [loading, setLoading] = useState(false);
  const products = useAppSelector(getProductsByCategory);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const {
      perform,
      abort,
    } = ProductRepository.list(['loan', 'credit-card']);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (async () => {
      setLoading(true);
      try {
        const data = await perform();
        setLoading(false);
        dispatch(setProducts(data));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        errorHandler(error);
      }
    })();

    return () => {
      abort();
    };
  }, [dispatch]);

  return {
    loading,
    products,
  };
}
