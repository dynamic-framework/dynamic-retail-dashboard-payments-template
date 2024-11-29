import { DButton, DIcon } from '@dynamic-framework/ui-react';
import classnames from 'classnames';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { SITE_PATH, SITE_URL } from '../config/widgetConfig';
import { AccountTypeConfig } from '../services/config';
import type { Account } from '../services/interface';

interface Props {
  account: Account;
}

export default function AccountItem({ account }: Props) {
  const { t } = useTranslation();

  const accountPath = useMemo(
    () => (`${SITE_URL}/${SITE_PATH.PAY_DEBT}?account_id=${account.id}`),
    [account.id],
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
          icon={AccountTypeConfig[account.type].icon}
          size="var(--bs-ref-spacer-6)"
          theme={AccountTypeConfig[account.type].theme}
        />
        <div className="d-flex flex-column flex-grow-1">
          <p className="mb-0 fw-bold text-light-emphasis">{account.alias ?? account.name}</p>
          <small className="text-light-emphasis">{account.accountNumber}</small>
        </div>
        <DButton
          text={t('button.pay')}
          size="sm"
        />
      </div>
    </a>
  );
}
