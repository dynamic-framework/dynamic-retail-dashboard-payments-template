export type ApiErrorItem = {
  status: string;
  code: string;
  title: string;
  message_code: string;
  detail: string;
};

export type ApiAccountAccountType = 'LOAN' | 'CREDIT_CARD';

export type ApiAccountType = 'LOAN';

export type ApiAccount = {
  id: string;
  alias: string;
  accountNumber: string;
  type: ApiAccountType;
  accountType: ApiAccountAccountType;
  accountingBalance: number;
  availableBalance: number;
  currency: string;
  totalCharges: number;
  totalIncomes: number;
  closed_at: string;
  created: string;
  modified: string;
  status: string;
  depositDetails?: ApiDepositDetails;
  loan_details?: ApiLoanDetails;
};

export type ApiDepositDetails = {
  balances: {
    total: number;
    available: number;
    unavailable: number;
  };
  overdraft?: {
    limit: number;
    total: number;
    available: number;
    expiry_date: string;
  };
  maturity_date?: string;
  interest: {
    accrued: number;
    accrued_negative: number;
    settings?: {
      rate_settings?: {
        rate?: number;
        tiers?: number;
        terms?: string;
        source?: string;
      };
      payment_point: string;
      payment_dates?: ApiPayDates;
    };
  };
};

export type ApiBill = {
  amount: number;
  id: number;
  service: string;
  company: string;
  nickname: string;
  icon: string;
  client_id: string;
  text: string;
  pay_date: string;
  automatic_payment: boolean;
  paid: boolean;
  paid_date: string;
  date: string;
  type: string;
  previous_payments?: ApiPayDates[];
};

export type ApiPayDates = {
  id: number;
  pay_date: string;
  amount: number;
};

export type ApiLoanDetails = {
  amount: number;
  balances: {
    owed: number;
    remaining: number;
  };
  due: number;
  days_in_arrears: number;
  days_late: number;
  due_since_date: string;
  installments: number;
  interest: {
    accrued: number;
    accrued_in_billing_cycle: number;
    accrued_from_arrears: number;
    settings: {
      rate: number;
      rates: null;
      type: string;
      source: string;
    };
  };
};

export type ApiTransaction = {
  repayment_id: string;
  name: string;
  date: string;
  amount: number;
  status: string;
};
