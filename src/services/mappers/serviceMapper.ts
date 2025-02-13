import type { ApiService } from '../api-interface';
import type { Service } from '../interface';

import companyMapper from './companyMapper';

export default function serviceMapper(data: ApiService): Service {
  return {
    label: data.name,
    value: data.code,
    companies: data.list.map(companyMapper),
  };
}
