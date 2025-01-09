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
      defaultCollapsed={!!accounts.length}
      Component={(
        <h2 className="fs-6 py-2 fw-bold text-truncate">
          {t(`account.${type}`)}
        </h2>
      )}
    >
      <div className="d-flex gap-4 flex-column">
        {accounts.map((account) => (
          <AccountItem
            key={account.id}
            account={account}
          />
        ))}
      </div>
    </DCollapse>
  );
}
