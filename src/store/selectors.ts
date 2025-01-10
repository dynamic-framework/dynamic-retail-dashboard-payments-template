import { createSelector } from '@reduxjs/toolkit';

import { EMPTY_COMPANY } from '../components/newPayment/EmptyStates';

import { RootState } from './store';

const getState = (state: RootState) => state.widget;

export const getAccountCards = createSelector(
  getState,
  (widget) => widget.accountCards,
);

export const getAccountLoans = createSelector(
  getState,
  (widget) => widget.accountLoans,
);

export const getBills = createSelector(
  getState,
  (widget) => widget.bills,
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
  (widget) => widget.selectedCompany || EMPTY_COMPANY,
);
