import { DButton, DIcon } from '@dynamic-framework/ui-react';
import classnames from 'classnames';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { SITE_URL } from '../config/widgetConfig';
import { OTHER_CONFIG } from '../store/slice';
import type { OtherConfigType } from '../store/slice';

export type OtherItemType = {
  type: OtherConfigType;
  item: {
    id: string;
    icon: string;
    name: string;
    text: string;
  }
};

export default function OtherItem({
  type,
  item,
}: OtherItemType) {
  const { t } = useTranslation();

  const accountPath = useMemo(() => SITE_URL, []);

  return (
    <a
      id={item.id}
      href={accountPath}
      className={classnames(
        'text-decoration-none text-body',
        'border-top',
        'pt-4',
        'd-flex flex-column flex-lg-row gap-4 justify-content-between pe-none',
      )}
    >
      <div className="d-flex gap-4 align-items-center w-100">
        <DIcon
          hasCircle
          icon={item.icon}
          theme={OTHER_CONFIG[type].theme}
        />
        <div className="d-flex flex-column flex-grow-1">
          <p className="mb-0 fw-bold text-light-emphasis">{item.name}</p>
          <small className="text-light-emphasis">{item.text}</small>
        </div>
        <DButton
          text={t('button.pay')}
          theme="secondary"
          variant="link"
          disabled
        />
      </div>
    </a>
  );
}
