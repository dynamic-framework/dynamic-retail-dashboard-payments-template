import { DCollapse } from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from '../store/hooks';
import { getBills } from '../store/selectors';

import BillItem from './BillItem';

export default function BillCategory() {
  const { t } = useTranslation();
  const bills = useAppSelector(getBills);

  return (
    <DCollapse
      className="shadow-sm rounded"
      defaultCollapsed={!!bills.length}
      Component={(
        <h2 className="fs-6 py-2 fw-bold text-truncate">
          {t('bills.title')}
        </h2>
      )}
    >
      <div className="d-flex flex-column gap-4">
        {bills.map((bill) => (
          <BillItem
            key={bill.id}
            bill={bill}
          />
        ))}
      </div>
    </DCollapse>
  );
}
