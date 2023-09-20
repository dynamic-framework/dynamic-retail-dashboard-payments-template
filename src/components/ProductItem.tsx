import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { MButton, MIcon } from '@dynamic-framework/ui-react';
import classnames from 'classnames';

import { liquidParser } from '@dynamic-framework/ui';
import type { Product } from '@modyo-dynamic/modyo-service-retail';
import { ProductTypeConfig } from '@modyo-dynamic/modyo-service-retail';

interface Props {
  product: Product;
}

export default function ProductItem({
  product,
}: Props) {
  const { t } = useTranslation();

  const productPath = useMemo(() => (
    `${liquidParser.parse('{{site.url}}')}/${liquidParser.parse('{{vars.pay-debt-path}}')}?product_id=${product.id}`
  ), [product.id]);

  return (
    <a
      href={productPath}
      className={classnames(
        'text-decoration-none text-body',
        'border-top',
        'pt-3',
        'd-flex flex-column flex-lg-row gap-3 justify-content-between',
      )}
    >
      <div className="d-flex gap-3 align-items-center w-100">
        <MIcon
          hasCircle
          icon={ProductTypeConfig[product.type].icon}
          size="1.5rem"
          theme={ProductTypeConfig[product.type].theme}
        />
        <div className="d-flex flex-column flex-grow-1">
          <p className="fw-bold text-light-emphasis">{product.alias ?? product.name}</p>
          <small className="text-light-emphasis">{product.productNumber}</small>
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
