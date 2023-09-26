import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { DButton, DIcon } from '@dynamic-framework/ui-react';
import classnames from 'classnames';
import { Account } from '../services/interface';
import { AccountTypeConfig } from '../services/config';
import { SITE_PATH, SITE_URL } from '../config/widgetConfig';

interface Props {
  account: Account;
}

export default function AccountItem({
  account,
}: Props) {
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
        'pt-3',
        'd-flex flex-column flex-lg-row gap-3 justify-content-between',
      )}
    >
      <div className="d-flex gap-3 align-items-center w-100">
        <DIcon
          hasCircle
          icon={AccountTypeConfig[account.type].icon}
          size="1.5rem"
          theme={AccountTypeConfig[account.type].theme}
        />
        <div className="d-flex flex-column flex-grow-1">
          <p className="fw-bold text-light-emphasis">{account.alias ?? account.name}</p>
          <small className="text-light-emphasis">{account.accountNumber}</small>
        </div>
        <DButton
          text={t('button.pay')}
          theme="secondary"
          variant="link"
          className="text-decoration-underline"
        />
      </div>
    </a>
  );
}
