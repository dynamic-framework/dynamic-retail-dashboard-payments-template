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
      defaultCollapsed={false}
      Component={(
        <h5 className="text-truncate fw-semibold">
          {t('bills.title')}
        </h5>
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
