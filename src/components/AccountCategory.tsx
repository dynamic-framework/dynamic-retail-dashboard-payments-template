import { DCollapse, DIcon } from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';

import { AccountTypeConfig, Icon } from '../services/config';
import { Account } from '../services/interface';

import AccountItem from './AccountItem';

interface Props {
  type: string;
  accounts: Account[];
}

export default function AccountCategory({ type, accounts }: Props) {
  const { t } = useTranslation();

  return (
    <DCollapse
      className="shadow-sm rounded"
      defaultCollapsed={false}
      iconOpen="Plus"
      iconClose="Minus"
      Component={(
        <div className="d-flex gap-2 align-items-center category-header">
          <DIcon
            hasCircle
            color="primary"
            icon={accounts.length > 0 ? AccountTypeConfig[accounts[0].group as Icon].icon : 'Bank'}
          />
          <div className="flex-fill text-truncate fw-normal fs-5">{t(`account.${type}`)}</div>
        </div>
      )}
    >
      <div className="d-flex gap-4 flex-column">
        {accounts.map((account) => (
          <AccountItem
            type={type}
            key={account.id}
            account={account}
          />
        ))}
      </div>
    </DCollapse>
  );
}
