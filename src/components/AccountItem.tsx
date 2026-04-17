import { DButton } from '@dynamic-framework/ui-react';
import classnames from 'classnames';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { VARS_PATH, SITE_URL } from '../config/widgetConfig';
import type { Account } from '../services/interface';

type Props = {
  account: Account;
  type: string;
};

export default function AccountItem({ account, type }: Props) {
  const { t } = useTranslation();

  const accountPath = useMemo(
    () => (`${SITE_URL}/${VARS_PATH[type === 'credit-card' ? 'PAY_DEBT' : 'PAY_LOAN']}?account_id=${account.id}`),
    [account.id, type],
  );

  return (
    <div className="py-1 category-item-container">
      <a
        href={accountPath}
        className={classnames(
          'cursor-pointer text-decoration-none text-body',
          'py-2 px-4 rounded-2',
          'd-flex flex-column flex-lg-row gap-2 gap-lg-4 justify-content-between',
          'hover:bg-primary-25 transition-all category-item',
        )}
      >
        <div className="d-flex gap-4 align-items-center w-100">
          <div className="d-flex flex-column flex-grow-1">
            <p className="mb-0 fw-semibold">{account.accountName}</p>
            <small className="text-light-emphasis">{account.group === 'CREDIT_CARD' ? account.maskedNumber : account.number}</small>
          </div>
          <DButton
            variant="outline"
            text={t('button.pay')}
            size="sm"
          />
        </div>
      </a>
    </div>
  );
}
