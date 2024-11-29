import {
  DButton,
  DInput,
  DInputCheck,
  DInputSelect,
  DModal,
  useDPortalContext,
  PortalProps,
  useDToast,
} from '@dynamic-framework/ui-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AvailablePortal } from '../../services/interface';
import { useAppSelector } from '../../store/hooks';
import { getPayDates } from '../../store/selectors';

export default function ModalBillEdit({
  payload: { bill },
}: PortalProps<AvailablePortal['modalBillEdit']>) {
  const { t } = useTranslation();
  const { closePortal, openPortal } = useDPortalContext();
  const { toast } = useDToast();

  const [nickname, setNickname] = useState(bill.nickname || '');
  const [automaticPayment, setAutomaticPayment] = useState(bill.automaticPayment);

  const payDates = useAppSelector(getPayDates);

  const openDeleteModal = () => {
    closePortal();
    openPortal('modalBillDelete', { bill });
  };

  const saveModal = () => {
    toast({
      title: t('utilities.successSave'),
      theme: 'success',
      soft: true,
    }, {
      duration: 3000,
    });
    closePortal();
  };

  return (
    <DModal
      name="modalBillEdit"
      size="lg"
    >
      <DModal.Header
        onClose={closePortal}
        showCloseButton
      >
        <h4 className="modal-title">{t('bills.editBill')}</h4>
      </DModal.Header>
      <DModal.Body>
        <div className="mb-4">
          <DInput
            label={t('bills.nickname')}
            id="nickname"
            name="nickname"
            type="text"
            maxLength={20}
            value={nickname}
            onChange={(e) => setNickname(e)}
          />
        </div>
        <div className="d-flex">
          <DInputCheck
            ariaLabel="Manual bill payment"
            checked={!automaticPayment}
            id="manualPayment"
            label={t('bills.manualPayment')}
            value="false"
            name="typePayment"
            onChange={() => setAutomaticPayment(false)}
            type="radio"
          />
          <DInputCheck
            ariaLabel="Automatic bill payment"
            checked={automaticPayment}
            id="automaticPayment"
            label={t('bills.automaticPayment')}
            value="true"
            name="typePayment"
            onChange={() => setAutomaticPayment(true)}
            type="radio"
          />
        </div>
        {automaticPayment && (
          <div className="mt-4">
            <DInputSelect
              id="payday"
              disabled={!automaticPayment}
              label={t('bills.payday')}
              options={payDates}
            />
          </div>
        )}
        <div className="d-flex mt-4 justify-content-end gap-4">
          <DButton
            iconStart="trash"
            onClick={openDeleteModal}
            text={t('button.delete')}
            theme="danger"
            variant="outline"
            type="button"
          />

          <DButton
            onClick={saveModal}
            text={t('button.save')}
            type="button"
          />
        </div>
      </DModal.Body>
    </DModal>
  );
}
