export enum AccountBaseType {
  Deposit = 'deposit',
  Loan = 'loan',
}

export enum AccountType {
  CreditCard = 'credit-card',
  Loan = 'loan',
}

export const AccountTypeConfig = {
  [AccountType.CreditCard]: {
    name: 'Credit Cards',
    theme: 'indigo',
    icon: 'credit-card',
    accounts: [],
    id: 'credit-card',
    type: 'credit-card',
  },
  [AccountType.Loan]: {
    name: 'Loans',
    theme: 'yellow',
    icon: 'cash-stack',
    accounts: [],
    id: 'loan',
    type: 'loan',
  },
};

export const ApiAccountTypeConfig = {
  LOAN: AccountType.Loan,
  CREDIT_CARD: AccountType.CreditCard,
};
