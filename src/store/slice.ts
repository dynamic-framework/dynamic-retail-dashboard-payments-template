import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  Account,
  Bill,
  PayDateOption,
  ServiceItem,
} from '../services/interface';

export type WidgetState = {
  accounts: Account[];
  bills: Bill[];
  otherCategories: Record<string, unknown>;
  payDates: PayDateOption[];
  services: ServiceItem[];
  scheduledPayments?: Array<Record<string, unknown>>;
};

export const OTHER_CONFIG = {
  taxes: {
    theme: 'green',
  },
  'social-security': {
    theme: 'yellow',
  },
};

export type OtherConfigType = keyof typeof OTHER_CONFIG;
export type BillConfigType = keyof typeof OTHER_CONFIG;

const initialState: WidgetState = {
  accounts: [],
  bills: [],
  otherCategories: {},
  payDates: [],
  services: [],
  scheduledPayments: [],
};

const slice = createSlice({
  name: 'widget',
  initialState,
  reducers: {
    setAccounts(state, action: PayloadAction<Account[]>) {
      state.accounts = action.payload;
    },
    setBills(state, action: PayloadAction<Bill[]>) {
      state.bills = action.payload;
    },
    setOtherCategories(state, action: PayloadAction<Record<string, unknown>>) {
      state.otherCategories = action.payload;
    },
    setPayDates(state, action: PayloadAction<PayDateOption[]>) {
      state.payDates = action.payload;
    },
    setServices(state, action: PayloadAction<ServiceItem[]>) {
      state.services = action.payload;
    },
    setScheduledPayments(state, action: PayloadAction<Array<Record<string, unknown>>>) {
      state.scheduledPayments = action.payload;
    },
    addAccount(state, action: PayloadAction<Account>) {
      state.accounts.push(action.payload);
    },
    addBill(state, action: PayloadAction<Bill>) {
      if (state.bills) {
        state.bills.push(action.payload);
      }
    },
  },
});

export const {
  setAccounts,
  setBills,
  setOtherCategories,
  setPayDates,
  setServices,
  setScheduledPayments,
  addAccount,
  addBill,
} = slice.actions;
export default slice.reducer;
