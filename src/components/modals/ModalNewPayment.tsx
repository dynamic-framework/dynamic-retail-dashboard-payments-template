import {
  DModal,
  useDPortalContext,
} from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from '../../store/hooks';
import { getSelectedService, getSelectedCompany } from '../../store/selectors';
import {
  ServiceSelect,
  CompanySelect,
  PaymentDetailsForm,
} from '../newPayment/index';

export default function ModalNewPayment() {
  const { closePortal } = useDPortalContext();
  const { t } = useTranslation();
  const selectedService = useAppSelector(getSelectedService);
  const selectedCompany = useAppSelector(getSelectedCompany);

  const renderContent = () => {
    if (selectedCompany.value) {
      return <PaymentDetailsForm />;
    }
    if (!selectedService.value) {
      return <ServiceSelect />;
    }
    return <CompanySelect />;
  };

  return (
    <DModal name="modalNew" size="lg">
      <DModal.Header onClose={closePortal} showCloseButton>
        <h5>{t('features.newPayment')}</h5>
      </DModal.Header>
      <DModal.Body>
        <div className="row justify-content-center">
          {renderContent()}
        </div>
      </DModal.Body>
    </DModal>
  );
}
