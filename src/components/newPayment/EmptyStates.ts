import { Service, Company } from '../../services/interface';

export const EMPTY_SERVICE: Service = {
  label: '',
  value: '',
  companies: [],
};

export const EMPTY_COMPANY: Company = {
  service: '',
  icon: '',
  label: '',
  value: '',
};
