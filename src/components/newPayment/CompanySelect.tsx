import { DIcon } from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getSelectedService } from '../../store/selectors';
import { resetSelectedService, setSelectedCompany } from '../../store/slice';

export function CompanySelect() {
  const { t } = useTranslation();
  const selectedService = useAppSelector(getSelectedService);
  const dispatch = useAppDispatch();

  return (
    <div className="col-12">
      <div className="d-flex align-items-start justify-content-start mb-2 flex-column gap-4">
        <button
          type="button"
          className="px-0 link-primary bg-transparent d-flex align-items-center gap-2 border-0"
          onClick={() => dispatch(resetSelectedService())}
        >
          <DIcon
            icon="ArrowLeft"
            size="var(--bs-ref-spacer-6)"
          />
          {t('button.back')}
        </button>
      </div>
      <div className="row pb-3">
        {selectedService?.companies.map((company) => (
          <div
            className="col-6"
            key={company.value}
          >
            <button
              className="d-flex flex-column align-items-center justify-content-center p-4 bg-white border rounded text-decoration-none w-100 h-100"
              onClick={() => dispatch(setSelectedCompany(company))}
              style={{
                cursor: 'pointer',
              }}
              type="button"
            >
              <DIcon
                className="mb-3 text-primary"
                color="info"
                hasCircle
                icon={company.icon}
                size="2rem"
              />
              <h6 className="mb-1 text-center">
                {company.label}
              </h6>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
