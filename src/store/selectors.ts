import { createDraftSafeSelector } from '@reduxjs/toolkit';

import { RootState } from './store';
import { Account } from '../services/interface';
import { AccountTypeConfig } from '../services/config';

const getState = (state: RootState) => state.widget;

export const getAccounts = createDraftSafeSelector(
  getState,
  (widget) => widget.accounts,
);

export const getAccountsByCategory = createDraftSafeSelector(
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

export const getOtherCategories = createDraftSafeSelector(
  getState,
  (widget) => widget.otherCategories,
);

export const getScheduledPayments = createDraftSafeSelector(
  getState,
  (widget) => widget.scheduledPayments,
);
