import { ApiCompanyIcon, type ApiCompany } from '../api-interface';
import type { Company } from '../interface';

export default function companyMapper(data: ApiCompany): Company {
  return {
    service: data.name,
    icon: ApiCompanyIcon[data.icon.toLowerCase() as keyof typeof ApiCompanyIcon],
    value: data.id,
    label: data.name,
  };
}
