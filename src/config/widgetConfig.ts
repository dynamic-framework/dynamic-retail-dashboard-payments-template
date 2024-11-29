import liquidParser from '../utils/liquidParser';

export const SITE_URL = liquidParser.parse('{{site.url}}');
export const SITE_LANG = liquidParser.parse('{{site.language}}');
export const FORMAT_DATE = liquidParser.parse('{{vars.format-date}}');

export const SITE_PATH = {
  PAY_DEBT: liquidParser.parse('{{vars.pay-debt-path}}'),
  PAY_BILL: liquidParser.parse('{{vars.pay-bill-path}}'),
  ONE_TIME_PAYMENT: liquidParser.parse('{{vars.one-time-path}}'),
  RECHARGES: liquidParser.parse('{{vars.recharges}}'),
  PREAUTORIZED: liquidParser.parse('{{vars.preauthorized}}'),
  PAYMENTS_HISTORY: liquidParser.parse('{{vars.payment-history}}'),
};

export type SitePath = keyof typeof SITE_PATH;
