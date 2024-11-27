import { DCollapse } from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';

import { Bill } from '../services/interface';

import BillItem from './BillItem';

type Props = {

  bills: Array<Bill>;
};

export default function BillCategory({ bills }: Props) {
  const { t } = useTranslation();

  return (
    <DCollapse
      className="shadow-sm rounded"
      defaultCollapsed={!!bills.length}
      Component={(
        <h2 className="fs-6 py-2 text-gray-700 fw-bold text-truncate">
          {t('bills.title')}
        </h2>
      )}
    >
      <div className="d-flex flex-column gap-4">
        {bills.map((item) => (
          <BillItem key={item.id} bill={item} />
        ))}
      </div>
    </DCollapse>
  );
}
