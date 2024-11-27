import liquidParser from '../utils/liquidParser';

export const SITE_URL = liquidParser.parse('{{site.url}}');
export const SITE_LANG = liquidParser.parse('{{site.language}}');

export const SITE_PATH = {
  PAY_DEBT: liquidParser.parse('{{vars.pay-debt-path}}'),
  PAY_BILL: liquidParser.parse('{{vars.pay-bill-path}}'),
  ONE_TIME_PAYMENT: liquidParser.parse('{{vars.one-time-path}}'),
};

export type SitePath = keyof typeof SITE_PATH;
