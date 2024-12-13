import type { ApiAccount } from '../api-interface';
import {
  AccountBaseType,
  ApiAccountTypeConfig,
} from '../config';
import type { LoanAccount } from '../interface';

export default function accountMapper(apiAccount: ApiAccount): LoanAccount {
  const commonProps = {
    id: apiAccount.id,
    name: apiAccount.alias,
    alias: apiAccount.alias,
    accountNumber: apiAccount.accountNumber,
    type: ApiAccountTypeConfig[apiAccount.accountType],
  };

  return {
    ...commonProps,
    baseType: AccountBaseType.Loan,
    balanceOwed: apiAccount.loan_details?.balances.owed as number,
    due: apiAccount.loan_details?.due as number,
    dueSinceDate: apiAccount.loan_details?.due_since_date as string,
    balanceRemaining: apiAccount.loan_details?.balances.remaining as number,
  };
}
