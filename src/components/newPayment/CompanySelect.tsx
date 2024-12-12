import { DIcon, DQuickActionButton } from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getSelectedService } from '../../store/selectors';
import { setSelectedCompany, setSelectedService } from '../../store/slice';

import { EMPTY_SERVICE } from './EmptyStates';

export default function CompanySelect() {
  const { t } = useTranslation();
  const selectedService = useAppSelector(getSelectedService);
  const dispatch = useAppDispatch();

  return (
    <div className="col-12">
      <div className="d-flex align-items-start justify-content-start mb-2 flex-column gap-4">
        <button
          type="button"
          className="px-0 link-primary bg-transparent d-flex align-items-center gap-2 border-0"
          onClick={() => dispatch(setSelectedService(EMPTY_SERVICE))}
        >
          <DIcon
            icon="arrow-left"
            size="var(--bs-ref-spacer-6)"
          />
          {t('button.back')}
        </button>
      </div>
      <div className="row">
        {selectedService?.companies.map((company) => (
          <div
            className="col-6"
            key={company.value}
          >
            <div className="mb-3">
              <DQuickActionButton
                actionIcon="chevron-right"
                line1={company.label}
                line2=""
                onClick={() => dispatch(setSelectedCompany(company))}
                representativeIcon={company.icon}
                representativeIconTheme="info"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
