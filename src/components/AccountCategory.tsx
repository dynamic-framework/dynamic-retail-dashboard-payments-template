import { DCollapse } from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';

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
      Component={(
        <h5 className="text-truncate fw-semibold">
          {t(`account.${type}`)}
        </h5>
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
