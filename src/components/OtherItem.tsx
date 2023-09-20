import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { MButton, MIcon } from '@dynamic-framework/ui-react';
import classnames from 'classnames';

import { liquidParser } from '@dynamic-framework/ui';
import { OTHER_CONFIG, OtherConfigType } from '../store/slice';

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

  const productPath = useMemo(() => (
    `${liquidParser.parse('{{site.url}}')}/`
  ), []);

  return (
    <a
      id={item.id}
      href={productPath}
      className={classnames(
        'text-decoration-none text-body',
        'border-top',
        'pt-3',
        'd-flex flex-column flex-lg-row gap-3 justify-content-between pe-none',
      )}
    >
      <div className="d-flex gap-3 align-items-center w-100">
        <MIcon
          hasCircle
          icon={item.icon}
          theme={OTHER_CONFIG[type].theme}
        />
        <div className="d-flex flex-column flex-grow-1">
          <p className="fw-bold text-light-emphasis">{item.name}</p>
          <small className="text-light-emphasis">{item.text}</small>
        </div>
        <MButton
          text={t('button.pay')}
          theme="secondary"
          variant="link"
          className="text-decoration-underline"
        />
      </div>
    </a>
  );
}
