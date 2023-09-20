import { Product } from '@modyo-dynamic/modyo-service-retail';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type WidgetState = {
  products: Product[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  otherCategories: Record<string, any>;
  scheduledPayments?: Array<Record<string, any>>;
};

export const OTHER_CONFIG = {
  bills: {
    theme: 'blue',
  },
  taxes: {
    theme: 'green',
  },
  'social-security': {
    theme: 'yellow',
  },
};

export type OtherConfigType = keyof typeof OTHER_CONFIG;

const initialState = {
  products: [],
  otherCategories: {},
  scheduledPayments: [],
} as WidgetState;

const slice = createSlice({
  name: 'widget',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Array<Product>>) {
      state.products = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setOtherCategories(state, action: PayloadAction<Record<string, any>>) {
      state.otherCategories = action.payload;
    },
    setScheduledPayments(state, action: PayloadAction<Array<Record<string, any>>>) {
      state.scheduledPayments = action.payload;
    },
  },
});

export const {
  setProducts,
  setOtherCategories,
  setScheduledPayments,
} = slice.actions;
export default slice.reducer;
