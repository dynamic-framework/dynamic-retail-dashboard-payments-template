export enum AccountBaseType {
  Deposit = 'deposit',
  Loan = 'loan',
}

export enum AccountType {
  CREDIT_CARD = 'CREDIT_CARD',
  LOAN = 'LOAN',
}

export const AccountTypeConfig = {
  CREDIT_CARD: {
    name: 'Credit Cards',
    theme: 'indigo',
    icon: 'credit-card',
    accounts: [],
    id: 'credit-card',
    type: 'credit-card',
  },
  LOAN: {
    name: 'Loans',
    theme: 'yellow',
    icon: 'cash-stack',
    accounts: [],
    id: 'loan',
    type: 'loan',
  },
};

export type Icon = keyof typeof AccountTypeConfig;
