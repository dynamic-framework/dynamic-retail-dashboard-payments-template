import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getServices } from '../../store/selectors';
import { setServices } from '../../store/slice';
import errorHandler from '../../utils/errorHandler';
import { ServicesRepository } from '../repositories';
import ApiError from '../utils/ApiError';

export default function useServiceEffect() {
  const [loading, setLoading] = useState(false);
  const services = useAppSelector(getServices);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      setLoading(true);
      try {
        const response = await ServicesRepository.list(
          {
            config: { abortSignal: abortController.signal },
          },
        );
        setLoading(false);
        dispatch(setServices(response));
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
    services,
  };
}
