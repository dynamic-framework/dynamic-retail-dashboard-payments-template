import {
  DModal,
  useDPortalContext,
} from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';

import useServiceEffect from '../../services/hooks/useServiceEffect';
import { useAppSelector } from '../../store/hooks';
import { getSelectedService, getSelectedCompany } from '../../store/selectors';
import {
  ServiceSelect,
  CompanySelect,
  PaymentDetailsForm,
  Loading,
} from '../newPayment/index';

export default function ModalNewPayment() {
  const { loading, services } = useServiceEffect();
  const { closePortal } = useDPortalContext();
  const { t } = useTranslation();
  const selectedService = useAppSelector(getSelectedService);
  const selectedCompany = useAppSelector(getSelectedCompany);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }
    if (selectedCompany.value) {
      return <PaymentDetailsForm />;
    }
    if (!selectedService.value) {
      return <ServiceSelect />;
    }
    return <CompanySelect />;
  };

  if (!services.length && !loading) {
    return null;
  }

  return (
    <DModal
      name="modalNew"
      size="lg"
    >
      <DModal.Header
        onClose={closePortal}
        showCloseButton
      >
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
