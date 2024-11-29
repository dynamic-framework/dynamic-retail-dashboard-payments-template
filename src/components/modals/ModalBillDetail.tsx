import {
  DButton,
  DModal,
  useDPortalContext,
  PortalProps,
} from '@dynamic-framework/ui-react';
import { DateTime } from 'luxon';
import { useTranslation } from 'react-i18next';

import { FORMAT_DATE } from '../../config/widgetConfig';
import { AvailablePortal } from '../../services/interface';

export default function ModalBillDetail({
  payload: { bill },
}: PortalProps<AvailablePortal['modalBillDetail']>) {
  const { t } = useTranslation();
  const { closePortal, openPortal } = useDPortalContext();

  const handleEdit = () => {
    closePortal();
    openPortal('modalBillEdit', { bill });
  };

  const formatDate = (date: string): string => DateTime.fromISO(date).toFormat(FORMAT_DATE);

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
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">{t('bills.id')}</th>
                    <th scope="col">{t('bills.date')}</th>
                    <th scope="col">{t('bills.amount')}</th>
                    <th
                      scope="col"
                      aria-hidden="true"
                    />
                  </tr>
                </thead>
                <tbody>
                  {bill.previousPayments.map((payment) => (
                    <tr key={payment.id}>
                      <td>{payment.id}</td>
                      <td>{formatDate(bill.payDate)}</td>
                      <td>{payment.amount}</td>
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
