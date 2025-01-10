export type Account = {
  id: string;
  number: string;
  maskedNumber: string;
  type: string;
  group: string;
  state: string;
  accountHolderName: string;
  accountName: string;
  currency: string;
  deposit: null | string;
  loan: {
    details: {
      amount: number;
      total: number;
      amountDue: number;
      balance: {
        owed: number;
        remaining: number;
      };
      interest: {
        rateSettings: {
          monthlyRate: number;
          yearlyRate: number;
          calculationMethod: string;
        };
        interestAccrued: {
          due: number;
          amount: {
            total: number;
            positive: number;
            negative: number;
          };
          inCycle: number;
          inArrears: number;
        };
      };
    };
    term: {
      count: number;
      description: string;
      period: {
        id: string;
        name: string;
        code: string;
      };
    };
    daysInArrears: number;
    daysLate: number;
    dates: {
      lastPaid: string;
      dueSince: string;
      nextDue: string;
    };
  };
};

export type Bill = {
  date: string,
  id: string,
  service: string,
  company: string,
  nickname: string,
  icon: string,
  clientId: string,
  payDate: string,
  amount: number,
  automaticPayment: boolean,
  paid: boolean,
  paidDate?: string | null,
};

export type PaymentDates = {
  id: number;
  payDate: string;
  amount: number;
};

export type PayDateOption = {
  label: string;
  value: string;
};

export type Transaction = {
  repaymentId: string;
  name: string;
  date: string;
  amount: number;
  status: string;
};

export type Service = {
  label: string;
  value: string;
  companies: Company[];
};

export type Company = {
  service: string;
  icon: string;
  value: string;
  label: string;
};

export type SelectedItem = {
  label: string;
  value: string;
};

export type AvailablePortalPayload = {
  modalBillDetail: { bill: Bill };
  modalBillDelete: { bill: Bill };
  modalBillEdit: { bill: Bill };
  modalNew: undefined;
};

export enum AccountBaseType {
  Deposit = 'deposit',
  Loan = 'loan',
}

export enum AccountType {
  CreditCard = 'credit-card',
  Loan = 'loan',
}

export type BillActivity = {
  id: string;
  documentId: string;
  description: string;
  effectiveDate: string;
  amount: number;
  type: string;
  wasAutomaticallyPaid: boolean;
};
