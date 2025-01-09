import { useDPortalContext } from '@dynamic-framework/ui-react';
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

import IconBill from './IconBill';

type Props = {
  bill: Bill;
};

export default function BillItem({ bill }: Props) {
  const { t } = useTranslation();
  const { openPortal } = useDPortalContext();

  const billPath = useMemo(
    () => `${SITE_URL}/${SITE_PATH.PAY_BILL}?bill_id=${bill.id}`,
    [bill],
  );

  const billDate = useMemo(
    () => DateTime.fromISO(bill.paymentDueDetails.dueDate).toFormat(FORMAT_DATE),
    [bill],
  );

  const lastPaymentDate = useMemo(
    () => DateTime.fromISO(bill.lastPayment.effectiveDate).toFormat(FORMAT_DATE),
    [bill],
  );

  const billStatus = useMemo(() => {
    if (bill.paymentDueDetails.payment_details?.isPaid) {
      return t('bills.totalPay', { amount: bill.paymentDueDetails.dueAmount, date: billDate });
    }
    if (bill.lastPayment) {
      return t('bills.lastPay', { amount: bill.lastPayment.amount, date: lastPaymentDate });
    }
    return '';
  }, [bill, t, lastPaymentDate, billDate]);

  const paymentInfo = useMemo(() => {
    if (bill.isAutomaticallyPaid) {
      return t('bills.nextPay', { date: billDate });
    }
    return t('bills.noDebt');
  }, [bill.isAutomaticallyPaid, t, billDate]);

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
          <IconBill
            name={bill.provider.category.code}
          />
          <div className="d-flex flex-column">
            <p className="mb-0 fw-bold">
              {bill.accountNickname}
              {' '}
              <small className="fw-normal">|</small>
              {' '}
              <small className="fw-normal text-light-emphasis">
                {bill.provider.name}
                <span> · </span>
                {t('bills.clientNumber', { number: bill.clientNumber })}
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
        <div className="justify-content-end d-flex col-12 col-md-3 text-end small text-light-emphasis">
          {bill.paymentDueDetails.payment_details.isPaid ? (
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
