import liquidParser from '../utils/liquidParser';

export const SITE_URL = liquidParser.parse('{{site.url}}');
export const SITE_LANG = liquidParser.parse('{{site.language}}');

export const SITE_PATH = {
  PAY_DEBT: liquidParser.parse('{{vars.pay-debt-path}}'),
};

export type SitePath = keyof typeof SITE_PATH;

export type BillItem = {
  id: number,
  service: string,
  company: string,
  nickname: string,
  icon: string,
  clientID: string,
  text: string,
  payDate: string,
  amount: number,
  automaticPayment: boolean,
  paid: boolean,
  paidDate: string,
  previousPayments?: PreviousPayment;
};

export type PreviousPayment = {
  id: number,
  payDate: string,
  amount: number,
};

export type AvailablePortal = {
  modalDetail: {
    item: BillItem;
  };
  modalNew: {
    item: BillItem;
  };
};
