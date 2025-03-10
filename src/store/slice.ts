import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  Account,
  Bill,
  PayDateOption,
  Service,
  Company,
} from '../services/interface';

export type WidgetState = {
  accountCards: Account[];
  accountLoans: Account[],
  bills: Bill[];
  otherCategories: Record<string, unknown>;
  payDates: PayDateOption[];
  services: Service[];
  scheduledPayments?: Array<Record<string, unknown>>;
  selectedService: Service;
  selectedCompany: Company;
};

const initialState: WidgetState = {
  accountCards: [],
  accountLoans: [],
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
    setAccountCards(state, action: PayloadAction<Account[]>) {
      state.accountCards = action.payload;
    },
    setAccountLoans(state, action: PayloadAction<Account[]>) {
      state.accountLoans = action.payload;
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
    resetSelectedCompany(state) {
      state.selectedCompany = {
        service: '',
        icon: '',
        value: '',
        label: '',
      };
    },
    resetSelectedService(state) {
      state.selectedService = {
        label: '',
        value: '',
        companies: [],
      };
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
  },
});

export const {
  setAccountCards,
  setAccountLoans,
  setBills,
  setOtherCategories,
  setPayDates,
  setServices,
  setScheduledPayments,
  setSelectedService,
  setSelectedCompany,
  resetSelectedCompany,
  resetSelectedService,
} = slice.actions;
export default slice.reducer;
