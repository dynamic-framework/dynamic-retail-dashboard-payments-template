import {
  DButton,
  DModal,
  useDPortalContext,
  PortalProps,
  useDToast,
} from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';

import { AvailablePortal } from '../../services/interface';

export default function ModalBillDelete({
  payload: { bill },
}: PortalProps<AvailablePortal['modalBillDelete']>) {
  const { closePortal } = useDPortalContext();
  const { t } = useTranslation();
  const { toast } = useDToast();

  const deleteBill = () => {
    closePortal();
    toast({
      title: t('utilities.successDelete'),
      theme: 'success',
      soft: true,
    }, {
      duration: 3000,
    });
  };

  return (
    <DModal
      name="modalBillDelete"
      size="lg"
    >
      <DModal.Header
        onClose={closePortal}
        showCloseButton
      >
        <h4>{t('bills.deleteBill')}</h4>
      </DModal.Header>
      <DModal.Body>
        <p>
          {t('utilities.deleteConfirmation', { bill: bill.nickname })}
        </p>
        <div className="d-flex justify-content-end gap-4">
          <DButton
            text={t('button.cancel')}
            theme="dark"
            onClick={closePortal}
          />
          <DButton
            text={t('button.delete')}
            theme="danger"
            onClick={deleteBill}
          />
        </div>
      </DModal.Body>
    </DModal>
  );
}
