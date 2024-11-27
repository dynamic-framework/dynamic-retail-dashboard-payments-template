import { useDPortalContext, DIcon } from '@dynamic-framework/ui-react';
import classnames from 'classnames';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { SITE_PATH, SITE_URL } from '../config/widgetConfig';
import type { Bill } from '../services/interface';

type Props = {
  bill: Bill;
};

export default function BillItem({ bill }: Props) {
  const { t } = useTranslation();
  const { openPortal } = useDPortalContext();

  const billPath = useMemo(
    () => `${SITE_URL}/${SITE_PATH.PAY_BILL}?bill_id=${bill.id}`,
    [bill.id],
  );

  const billStatus = useMemo(
    () => (bill.paid
      ? `${t('bills.total')} $${bill.amount}, ${t('bills.expiration')} ${bill.payDate}`
      : `${t('bills.paid')} $${bill.amount} ${t('bills.on')} ${bill.payDate}`),
    [bill.paid, bill.amount, bill.payDate, t],
  );

  const paymentInfo = useMemo(
    () => (bill.automaticPayment
      ? `${t('bills.next')} ${bill.payDate}`
      : t('bills.noDebt')),
    [bill.automaticPayment, bill.payDate, t],
  );

  return (
    <div
      id={bill.id.toString()}
      className={classnames(
        'text-decoration-none text-body',
        'border-top',
        'pt-4',
        'd-flex flex-column flex-lg-row gap-4 justify-content-between',
      )}
    >
      <div className="d-flex gap-4 align-items-center w-100">
        <DIcon
          hasCircle
          icon={bill.icon}
          size="1.5rem"
          theme="blue"
        />
        <div className="d-flex flex-column flex-grow-1">
          <p className="mb-0 fw-bold text-light-emphasis">
            {bill.nickname}
            {' '}
            <small className="fw-normal">|</small>
            {' '}
            <small className="fw-normal text-light-emphasis">
              {bill.company}
              <span> · </span>
              {t('bills.clientNumber')}
              {bill.clientID}
            </small>
          </p>
          <small className="text-light-emphasis">
            {billStatus}
          </small>
          <div className="d-flex gap-3">
            <button
              type="button"
              className="px-0 small link-primary bg-transparent d-flex align-items-center gap-2 border-0"
              onClick={() => openPortal('modalBillDetail', { bill })}
            >
              {t('bills.detail')}
            </button>
          </div>
        </div>
        {bill.paid ? (
          <a className="btn btn-primary btn-sm" href={billPath}>{t('button.pay')}</a>
        ) : (
          <p className="m-0">
            {paymentInfo}
          </p>
        )}
      </div>
    </div>
  );
}
