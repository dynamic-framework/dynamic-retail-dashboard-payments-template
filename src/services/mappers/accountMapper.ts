import type { ApiAccount } from '../api-interface';
import {
  AccountBaseType,
  ApiAccountTypeConfig,
} from '../config';
import type { LoanAccount } from '../interface';

export default function accountMapper(apiAccount: ApiAccount): LoanAccount {
  const commonProps = {
    id: apiAccount.id,
    name: apiAccount.nickName,
    alias: apiAccount.nickName,
    accountNumber: apiAccount.accountNumber,
    type: ApiAccountTypeConfig[apiAccount.accountType],
  };

  return {
    ...commonProps,
    baseType: AccountBaseType.Loan,
    balanceOwed: apiAccount.loanDetails?.balances.owed as number,
    due: apiAccount.loanDetails?.due as number,
    dueSinceDate: apiAccount.loanDetails?.dueSinceDate as string,
    balanceRemaining: apiAccount.loanDetails?.balances.remaining as number,
  };
}
