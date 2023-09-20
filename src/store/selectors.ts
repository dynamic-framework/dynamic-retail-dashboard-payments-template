import { createDraftSafeSelector } from '@reduxjs/toolkit';
import {
  CategoriesConfig,
} from '@modyo-dynamic/modyo-service-retail';
import type {
  Product,
  ProductCategory,
} from '@modyo-dynamic/modyo-service-retail';

import { RootState } from './store';

const getState = (state: RootState) => state.widget;

export const getProducts = createDraftSafeSelector(
  getState,
  (widget) => widget.products,
);

// TODO: move to common package, the dashboard uses this selector.
export const getProductsByCategory = createDraftSafeSelector(
  getProducts,
  (data) => (
    (Object.values(
      data.reduce((categorized, product: Product) => {
        const category = categorized[product.type];
        const { products = [] } = category;
        return {
          ...categorized,
          [product.type]: {
            ...category,
            products: [
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              ...products,
              product,
            ],
          },
        };
      }, CategoriesConfig),
    ) as Array<ProductCategory>)
      .filter((productCategory: ProductCategory) => (
        ['loan', 'credit-card'].includes(productCategory.type)
      ))
  ),
);

export const getOtherCategories = createDraftSafeSelector(
  getState,
  (widget) => widget.otherCategories,
);

export const getScheduledPayments = createDraftSafeSelector(
  getState,
  (widget) => widget.scheduledPayments,
);
