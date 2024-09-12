export type ApiErrorItem = {
  status: string;
  code: string;
  title: string;
  messageCode: string;
  detail: string;
};

export type ApiAccountAccountType = 'LOAN' | 'CREDIT_CARD';

export type ApiAccountType = 'LOAN';

export type ApiAccount = {
  id: number;
  alias: string;
  accountNumber: string;
  type: ApiAccountType;
  accountType: ApiAccountAccountType;
  accountingBalance: number;
  availableBalance: number;
  currency: string;
  totalCharges: number;
  totalIncomes: number;
  closedAt: string;
  created: string;
  modified: string;
  status: string;
  depositDetails?: ApiDepositDetails;
  loanDetails?: ApiLoanDetails;
};

export type ApiDepositDetails = {
  balances: {
    total: number;
    available: number;
    unavailable: number;
  }
  overdraft?: {
    limit: number;
    total: number;
    available: number;
    expiryDate: string;
  };
  maturityDate?: string;
  interest: {
    accrued: number;
    accruedNegative: number;
    settings?: {
      rateSettings?: {
        rate?: number;
        tiers?: number;
        terms?: string;
        source?: string;
      };
      paymentPoint: string;
      paymentDates?: PaymentDates;
    }
  }
};

export type PaymentDates = {
  id: number,
  payDate: string,
  amount: number,
};

export type ApiBill = {
  amount: number;
  id: number,
  service: string,
  company: string,
  nickname: string,
  icon: string,
  clientID: string,
  text: string,
  payDate: string,
  automaticPayment: boolean,
  paid: boolean,
  paidDate: string,
  previousPayments?: PreviousPayment[];
};

export type PreviousPayment = {
  id: number,
  payDate: string,
  amount: number,
};

export type ApiLoanDetails = {
  amount: number;
  balances: {
    owed: number;
    remaining: number;
  }
  due: number;
  daysInArrears: number;
  daysLate: number;
  dueSinceDate: string;
  installments: number;
  interest: {
    accrued: number;
    accruedInBillingCycle: number;
    accruedFromArrears: number;
    settings: {
      rate: number;
      rates: null;
      type: string;
      source: string;
    };
  };
};

export type ApiTransaction = {
  repaymentId: string;
  name: string;
  date: string;
  amount: number;
  status: string;
};
