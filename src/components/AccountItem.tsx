import { DButton, DIcon } from '@dynamic-framework/ui-react';
import classnames from 'classnames';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { SITE_PATH, SITE_URL } from '../config/widgetConfig';
import { AccountTypeConfig, Icon } from '../services/config';
import type { Account } from '../services/interface';

type Props = {
  account: Account;
  type: string;
};

export default function AccountItem({ account, type }: Props) {
  const { t } = useTranslation();

  const accountPath = useMemo(
    () => (`${SITE_URL}/${SITE_PATH[type === 'credit-card' ? 'PAY_DEBT' : 'PAY_LOAN']}?account_id=${account.id}`),
    [account.id, type],
  );

  return (
    <a
      href={accountPath}
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
          icon={AccountTypeConfig[account.group as Icon].icon}
          size="var(--bs-ref-spacer-6)"
          theme={AccountTypeConfig[account.group as Icon].theme}
        />
        <div className="d-flex flex-column flex-grow-1">
          <p className="mb-0 fw-bold">{account.accountHolderName}</p>
          <small className="text-light-emphasis">{account.group === 'CREDIT_CARD' ? account.maskedNumber : account.number}</small>
        </div>
        <DButton
          text={t('button.pay')}
          size="sm"
        />
      </div>
    </a>
  );
}
