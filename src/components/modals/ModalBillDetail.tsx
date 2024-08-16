import {
  DInput,
  DButton,
  DInputCheck,
  DInputSelect,
  DModal,
  useDPortalContext,
  PortalProps,
  useDToast,
} from '@dynamic-framework/ui-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import useLocalData from '../../services/hooks/useLocalData';
import { AvailablePortal } from '../../services/interface';
import { toastSaveBillMessage } from '../toast/toastSaveBillMessage';

export default function ModalBillDetail({
  payload: {
    bill,
  },
}: PortalProps<AvailablePortal['modalBillDetail']>) {
  const { closePortal } = useDPortalContext();
  const { t } = useTranslation();
  const { toast } = useDToast();

  const { payDates } = useLocalData();
  const [automaticPayment, setAutomaticPayment] = useState<boolean>(bill.automaticPayment);
  const [nickname, setNickname] = useState<string>(bill.nickname);

  useEffect(() => {
    setNickname(bill.nickname);
  }, [bill.nickname]);

  useEffect(() => {
    setAutomaticPayment(bill.automaticPayment);
  }, [bill.automaticPayment]);

  const saveModal = () => {
    toast(
      toastSaveBillMessage,
      {
        duration: 3000,
      },
    );
  };

  return (
    <DModal
      name="modalBillDetail"
      size="lg"
      centered
    >
      <DModal.Header
        onClose={closePortal}
        showCloseButton
      >
        <h4>{t('bills.title')}</h4>
      </DModal.Header>
      <DModal.Body>
        <div>
          <h5 className="mb-4">{t('bills.billDetails')}</h5>
          <table className="table table-borderless w-auto">
            <tbody>
              <tr>
                <th>{t('bills.nickname')}</th>
                <td className="d-flex gap-2">
                  <DInput
                    id="nickname"
                    name="nickname"
                    type="text"
                    size="sm"
                    value={nickname}
                    onChange={(e) => setNickname(e)}
                  />
                </td>
              </tr>
              <tr>
                <th>{t('bills.clientNumber')}</th>
                <td>{bill.clientID}</td>
              </tr>
              <tr>
                <th>{t('bills.service')}</th>
                <td>{bill.service}</td>
              </tr>
              <tr>
                <th>{t('bills.company')}</th>
                <td>{bill.company}</td>
              </tr>
            </tbody>
          </table>
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
        <div className="mt-4">
          <div className="row">
            <div className="col-6">
              <DInputSelect
                id="payday"
                disabled={!automaticPayment}
                label={t('bills.payday')}
                options={payDates}
              />
            </div>
          </div>
        </div>
        <div className="d-flex mt-4 justify-content-end">
          <DButton
            onClick={() => saveModal()}
            text={t('utilities.save')}
            theme="primary"
            type="button"
          />
        </div>
        {bill.previousPayments && bill.previousPayments.length > 0 && (
          <div>
            <hr className="my-8" />
            <h5>{t('bills.previousPayments')}</h5>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">{t('bills.id')}</th>
                  <th scope="col">{t('bills.date')}</th>
                  <th scope="col">{t('bills.amount')}</th>
                  <th scope="col" aria-hidden="true" />
                </tr>
              </thead>
              <tbody>
                {bill.previousPayments?.map((i) => (
                  <tr key={i.id}>
                    <td>{i.id}</td>
                    <td>{i.payDate}</td>
                    <td>{i.amount}</td>
                    <td>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://cdn.modyo.cloud/uploads/e3d9d615-25e9-4d92-a3b0-b7ff063a9f77/original/voucher.pdf"
                        download="voucher.pdf"
                      >
                        <i className="bi bi-download" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </DModal.Body>
    </DModal>
  );
}
