import type { DContextProvider } from '@dynamic-framework/ui-react';
import type { ComponentProps } from 'react';

import liquidParser from '../utils/liquidParser';

export const SITE_URL = liquidParser.parse('{{site.url}}');
export const SITE_LANG = liquidParser.parse('{{site.language}}');
export const VARS_FORMAT_DATE = liquidParser.parse('{{vars.format-date}}');

export const VARS_PATH = {
  PAY_DEBT: liquidParser.parse('{{vars.pay-debt-path}}'),
  PAY_LOAN: liquidParser.parse('{{vars.pay-loan-path}}'),
  PAY_BILL: liquidParser.parse('{{vars.pay-bill-path}}'),
  ONE_TIME_PAYMENT: liquidParser.parse('{{vars.one-time-path}}'),
  RECHARGES: liquidParser.parse('{{vars.recharges}}'),
  PREAUTORIZED: liquidParser.parse('{{vars.preauthorized}}'),
  PAYMENTS_HISTORY: liquidParser.parse('{{vars.payment-history}}'),
};

export const VARS_CURRENCY = {
  symbol: liquidParser.parse('{{vars.currency-symbol}}'),
  precision: Number(liquidParser.parse('{{vars.currency-precision}}')),
  separator: liquidParser.parse('{{vars.currency-separator}}'),
  decimal: liquidParser.parse('{{vars.currency-decimal}}'),
};

export type SitePath = keyof typeof VARS_PATH;

export const CONTEXT_CONFIG = {
  language: SITE_LANG,
  currency: VARS_CURRENCY,
} satisfies Partial<ComponentProps<typeof DContextProvider>>;
