import { useDPortalContext, DIcon } from '@dynamic-framework/ui-react';
import classnames from 'classnames';
import { DateTime } from 'luxon';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import {
  SITE_PATH,
  SITE_URL,
  FORMAT_DATE,
} from '../config/widgetConfig';
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

  const billDate = useMemo(
    () => DateTime.fromISO(bill.payDate).toFormat(FORMAT_DATE),
    [bill.payDate],
  );

  const billStatus = useMemo(() => {
    if (bill.paid) {
      return t('bills.totalPay', { amount: bill.amount, date: billDate });
    }
    return t('bills.lastPay', { amount: bill.amount, date: billDate });
  }, [bill.paid, bill.amount, t, billDate]);

  const paymentInfo = useMemo(() => {
    if (bill.automaticPayment) {
      return t('bills.nextPay', { date: billDate });
    }
    return t('bills.noDebt');
  }, [bill.automaticPayment, t, billDate]);

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
      <div className="row align-items-center w-100">
        <div className="d-flex flex-grow-1 gap-4 col-12 col-md-9">
          <DIcon
            hasCircle
            icon={bill.icon}
            size="var(--bs-ref-spacer-6)"
            theme="info"
          />
          <div className="d-flex flex-column">
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
            <small className="text-light-emphasis text-balance">
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
        </div>
        <div className="justify-content-end d-flex col-12 col-md-3">
          {bill.paid ? (
            <a
              className="btn btn-primary btn-sm"
              href={billPath}
            >
              {t('button.pay')}
            </a>
          ) : (
            <p className="m-0">
              {paymentInfo}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
