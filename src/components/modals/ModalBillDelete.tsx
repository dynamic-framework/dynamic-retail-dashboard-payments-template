import {
  DButton,
  DModal,
  useDPortalContext,
  PortalProps,
  useDToast,
} from '@dynamic-framework/ui-react';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { AvailablePortalPayload } from '../../services/interface';

export default function ModalBillDelete(
  {
    payload: {
      bill,
    },
  }: PortalProps<AvailablePortalPayload['modalBillDelete']>,
) {
  const { closePortal, openPortal } = useDPortalContext();
  const { t } = useTranslation();
  const { toast } = useDToast();
  const handleEdit = useCallback(() => {
    closePortal();
    openPortal('modalBillEdit', { bill });
  }, [closePortal, openPortal, bill]);
  const deleteBill = useCallback(() => {
    closePortal();
    toast(
      {
        title: t('utilities.successDelete'),
        theme: 'success',
        soft: true,
      },
      {
        duration: 3000,
      },
    );
  }, [closePortal, t, toast]);

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
          {t('utilities.deleteConfirmation', { bill: bill.accountNickname })}
        </p>
        <div className="d-flex justify-content-end gap-4">
          <DButton
            text={t('button.cancel')}
            theme="dark"
            variant="link"
            onClick={handleEdit}
          />
          <DButton
            text={t('button.yesDelete')}
            theme="primary"
            onClick={deleteBill}
          />
        </div>
      </DModal.Body>
    </DModal>
  );
}
