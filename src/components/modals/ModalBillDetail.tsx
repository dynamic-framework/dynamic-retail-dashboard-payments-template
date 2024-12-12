import {
  DButton,
  DModal,
  useDPortalContext,
  PortalProps,
  useFormatCurrency,
} from '@dynamic-framework/ui-react';
import { DateTime } from 'luxon';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { FORMAT_DATE } from '../../config/widgetConfig';
import { AvailablePortalPayload } from '../../services/interface';

export default function ModalBillDetail(
  {
    payload: {
      bill,
    },
  }: PortalProps<AvailablePortalPayload['modalBillDetail']>,
) {
  const { t } = useTranslation();
  const { closePortal, openPortal } = useDPortalContext();

  const handleEdit = useCallback(() => {
    closePortal();
    openPortal('modalBillEdit', { bill });
  }, [closePortal, openPortal, bill]);
  const { format } = useFormatCurrency();
  const formatDate = useMemo(
    () => (date: string) => DateTime.fromISO(date).toFormat(FORMAT_DATE),
    [],
  );

  return (
    <DModal
      name="modalBillDetail"
      size="lg"
    >
      <DModal.Header
        onClose={closePortal}
        showCloseButton
      >
        <h4 className="mb-0">{t('bills.billDetails')}</h4>
      </DModal.Header>
      <DModal.Body>
        <div>
          <table className="table table-borderless w-auto">
            <tbody>
              <tr>
                <th>{t('bills.nickname')}</th>
                <td>{bill.nickname}</td>
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
              <tr>
                <th>{t('bills.paymentType')}</th>
                <td>
                  {bill.automaticPayment
                    ? t('bills.automaticPayment')
                    : t('bills.manualPayment')}
                </td>
              </tr>
              {bill.automaticPayment && (
                <tr>
                  <th>{t('bills.payday')}</th>
                  <td>{formatDate(bill.payDate)}</td>
                </tr>
              )}
            </tbody>
          </table>
          {bill.previousPayments && bill.previousPayments.length > 0 && (
            <div>
              <hr className="my-8" />
              <h5>{t('bills.previousPayments')}</h5>
              <div className="d-flex flex-column gap-2 px-2 mt-2">
                {bill.previousPayments.map((payment) => (
                  <div
                    className="row align-items-center border rounded p-2"
                    key={payment.id}
                  >
                    <div className="col">
                      <p className="mb-0">
                        {payment.id}
                      </p>
                      <small>{formatDate(bill.payDate)}</small>
                    </div>
                    <div className="col d-flex gap-4 justify-content-end">
                      <p className="mb-0">
                        {format(payment.amount)}
                      </p>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://cdn.modyo.cloud/uploads/e3d9d615-25e9-4d92-a3b0-b7ff063a9f77/original/voucher.pdf"
                        download="voucher.pdf"
                      >
                        <i className="bi bi-download" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DModal.Body>
      <DModal.Footer>
        <DButton
          onClick={handleEdit}
          text={t('button.edit')}
          theme="primary"
          type="button"
        />
      </DModal.Footer>
    </DModal>
  );
}