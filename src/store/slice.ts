import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  Account,
  Bill,
  PayDateOption,
  Service,
  Company,
} from '../services/interface';

export type WidgetState = {
  accounts: Account[];
  bills: Bill[];
  otherCategories: Record<string, unknown>;
  payDates: PayDateOption[];
  services: Service[];
  scheduledPayments?: Array<Record<string, unknown>>;
  selectedService: Service;
  selectedCompany: Company;
};

const initialState: WidgetState = {
  accounts: [],
  bills: [],
  otherCategories: {},
  payDates: [],
  services: [],
  scheduledPayments: [],
  selectedService: {
    label: '',
    value: '',
    companies: [],
  },
  selectedCompany: {
    service: '',
    icon: '',
    value: '',
    label: '',
  },
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
    setSelectedService(state, action: PayloadAction<Service>) {
      state.selectedService = action.payload;
    },
    setSelectedCompany(state, action: PayloadAction<Company>) {
      state.selectedCompany = action.payload;
    },
    setPayDates(state, action: PayloadAction<PayDateOption[]>) {
      state.payDates = action.payload;
    },
    setServices(state, action: PayloadAction<Service[]>) {
      state.services = action.payload;
    },
    setScheduledPayments(state, action: PayloadAction<Array<Record<string, unknown>>>) {
      state.scheduledPayments = action.payload;
    },
    addAccount(state, action: PayloadAction<Account>) {
      state.accounts = [...state.accounts, action.payload];
    },
    addBill(state, action: PayloadAction<Bill>) {
      if (state.bills) {
        state.bills = [...state.bills, action.payload];
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
  setSelectedService,
  setSelectedCompany,
  addAccount,
  addBill,
} = slice.actions;
export default slice.reducer;
