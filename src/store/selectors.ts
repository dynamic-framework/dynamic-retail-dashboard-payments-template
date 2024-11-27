import { createSelector } from '@reduxjs/toolkit';

import { AccountTypeConfig } from '../services/config';
import { Account } from '../services/interface';

import { RootState } from './store';

const getState = (state: RootState) => state.widget;

export const getAccounts = createSelector(
  getState,
  (widget) => widget.accounts,
);

export const getBills = createSelector(
  getState,
  (widget) => widget.bills,
);

export const getAccountsByCategory = createSelector(
  getAccounts,
  (data) => (
    (Object.values(
      data.reduce((categorized, account: Account) => {
        const category = categorized[account.type];
        const { accounts = [] } = category;
        return {
          ...categorized,
          [account.type]: {
            ...category,
            accounts: [
              ...accounts,
              account,
            ],
          },
        };
      }, AccountTypeConfig),
    ))
  ),
);

export const getOtherCategories = createSelector(
  getState,
  (widget) => widget.otherCategories,
);

export const getPayDates = createSelector(
  getState,
  (widget) => widget.payDates,
);

export const getServices = createSelector(
  getState,
  (widget) => widget.services,
);

export const getScheduledPayments = createSelector(
  getState,
  (widget) => widget.scheduledPayments,
);

export const getSelectedService = createSelector(
  getState,
  (widget) => widget.selectedService,
);

export const getSelectedCompany = createSelector(
  getState,
  (widget) => widget.selectedCompany,
);
