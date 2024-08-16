/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Account } from '../services/interface';

export type WidgetState = {
  accounts: Account[];
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
  accounts: [],
  otherCategories: {},
  scheduledPayments: [],
} as WidgetState;

const slice = createSlice({
  name: 'widget',
  initialState,
  reducers: {
    setAccounts(state, action: PayloadAction<Array<Account>>) {
      state.accounts = action.payload;
    },
    setOtherCategories(state, action: PayloadAction<Record<string, any>>) {
      state.otherCategories = action.payload;
    },
    setScheduledPayments(state, action: PayloadAction<Array<Record<string, any>>>) {
      state.scheduledPayments = action.payload;
    },
  },
});

export const {
  setAccounts,
  setOtherCategories,
  setScheduledPayments,
} = slice.actions;
export default slice.reducer;
