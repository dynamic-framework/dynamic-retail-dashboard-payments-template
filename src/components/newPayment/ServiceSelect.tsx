import { DQuickActionButton, DSelect } from '@dynamic-framework/ui-react';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Company, Service } from '../../services/interface';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getServices } from '../../store/selectors';
import { setSelectedCompany, setSelectedService } from '../../store/slice';

export function ServiceSelect() {
  const { t } = useTranslation();
  const services = useAppSelector(getServices);
  const [allCompanies, setAllCompanies] = useState<Company[]>([]);
  const dispatch = useAppDispatch();

  const getUniqueCompanies = useCallback((serviceList: Service[]): Company[] => {
    const uniqueCompanies = new Map<string, Company>();

    serviceList.forEach((service) => {
      service.companies?.forEach((company) => {
        if (!uniqueCompanies.has(company.value)) {
          uniqueCompanies.set(company.value, company);
        }
      });
    });

    return Array.from(uniqueCompanies.values());
  }, []);

  useEffect(() => {
    setAllCompanies(getUniqueCompanies(services));
  }, [services, getUniqueCompanies]);

  return (
    <div className="col-12">
      <div>
        <DSelect
          id="selectCompany"
          options={allCompanies}
          label={t('bills.selectCompany')}
          onChange={(company) => { dispatch(setSelectedCompany(company as Company)); }}
        />
      </div>
      <hr className="my-8" />
      <h6 className="mb-4">{t('bills.serviceList')}</h6>
      <div className="row">
        {services?.map((service) => (
          <div className="col-6" key={service.value}>
            <div className="mb-3">
              <DQuickActionButton
                actionIcon="chevron-right"
                line1={service.label}
                line2=""
                onClick={() => { dispatch(setSelectedService(service)); }}
                representativeIcon={service.value}
                representativeIconTheme="info"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
