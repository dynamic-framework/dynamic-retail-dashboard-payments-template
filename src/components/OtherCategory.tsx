import { useTranslation } from 'react-i18next';
import { DCollapse } from '@dynamic-framework/ui-react';
import OtherItem, { OtherItemType } from './OtherItem';

interface Props {
  type: OtherItemType['type'];
  items: Array<OtherItemType['item']>;
}

export default function OtherCategory({ type, items }: Props) {
  const { t } = useTranslation();

  return (
    <DCollapse
      defaultCollapsed
      className="shadow-sm rounded"
      Component={(
        <h2 className="fs-6 py-2 text-gray-700 fw-bold text-truncate">
          {t(`account.${type}`)}
        </h2>
      )}
    >
      <div className="d-flex flex-column gap-3">
        {items.map((item) => (
          <OtherItem key={item.id} item={item} type={type} />
        ))}
      </div>
    </DCollapse>
  );
}
