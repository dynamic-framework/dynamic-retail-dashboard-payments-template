import { DCollapse, DIcon } from '@dynamic-framework/ui-react';
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
      iconOpen="Plus"
      iconClose="Minus"
      Component={(
        <div className="d-flex gap-2 align-items-center category-header">
          <DIcon
            hasCircle
            color="primary"
            icon="Receipt"
          />
          <div className="flex-fill text-truncate fw-normal fs-5">{t('bills.title')}</div>
        </div>
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
