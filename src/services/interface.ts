export type Account = DepositAccount | LoanAccount;

export type DepositAccount = BaseAccount<AccountBaseType.Deposit> & {
  accountingBalance: number;
  balanceAvailable: number;
};

export type LoanAccount = BaseAccount<AccountBaseType.Loan> & {
  balanceOwed: number;
  balanceRemaining: number;
  dueSinceDate: string;
  due: number;
};

export type BaseAccount<T extends AccountBaseType> = {
  id: string;
  name: string;
  alias?: string;
  accountNumber: string;
  type: AccountType;
  baseType: T;
};

export type Bill = {
  id: string,
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
  paidDate: string | null,
  previousPayments?: PaymentDates[];
};

export type PaymentDates = {
  id: number,
  payDate: string,
  amount: number,
};

export type PayDateOption = {
  label: string,
  value: string,
};

export type Transaction = {
  repaymentId: string;
  name: string;
  date: string;
  amount: number;
  status: string;
};

export type ServiceItem = {
  label: string;
  value: string;
  items: Company[];
};

export type Company = {
  value: string;
  label: string;
};

export type AvailablePortal = {
  modalDetail: { bill: Bill },
  modalNew: undefined,
};

export enum AccountBaseType {
  Deposit = 'deposit',
  Loan = 'loan',
}

export enum AccountType {
  CreditCard = 'credit-card',
  Loan = 'loan',
}
