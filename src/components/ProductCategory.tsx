import { useTranslation } from 'react-i18next';
import { MCollapse } from '@dynamic-framework/ui-react';
import type { Product } from '@modyo-dynamic/modyo-service-retail';
import ProductItem from './ProductItem';

interface Props {
  type: string;
  products: Array<Product>;
}

export default function ProductCategory({ type, products }: Props) {
  const { t } = useTranslation();

  return (
    <MCollapse
      className="shadow-sm rounded"
      defaultCollapsed={!!products.length}
      Component={(
        <h2 className="fs-6 py-2 text-gray-700 fw-bold text-truncate">
          {t(`product.${type}`)}
        </h2>
      )}
    >
      <div className="d-flex gap-3 flex-column">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </MCollapse>
  );
}
