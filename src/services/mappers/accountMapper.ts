import type { ApiAccount } from '../api-interface';
import { Account } from '../interface';

export default function accountMapper(apiAccount: ApiAccount): Account {
  return {
    id: apiAccount.id,
    number: apiAccount.number,
    maskedNumber: apiAccount.masked_number,
    type: apiAccount.type,
    group: apiAccount.group,
    state: apiAccount.state,
    accountHolderName: apiAccount.account_holder_name,
    accountName: apiAccount.account_name,
    currency: apiAccount.currency,
    deposit: apiAccount.deposit,
    loan: {
      details: {
        amount: apiAccount.loan.details.amount,
        total: apiAccount.loan.details.total,
        amountDue: apiAccount.loan.details.amount_due,
        balance: {
          owed: apiAccount.loan.details.balance.owed,
          remaining: apiAccount.loan.details.balance.remaining,
        },
        interest: {
          rateSettings: {
            monthlyRate:
              apiAccount.loan.details.interest.rate_settings.monthly_rate,
            yearlyRate:
              apiAccount.loan.details.interest.rate_settings.yearly_rate,
            calculationMethod:
              apiAccount.loan.details.interest.rate_settings.calculation_method,
          },
          interestAccrued: {
            due: apiAccount.loan.details.interest.interest_accrued.due,
            amount: apiAccount.loan.details.interest.interest_accrued.amount,
            inCycle: apiAccount.loan.details.interest.interest_accrued.in_cycle,
            inArrears:
              apiAccount.loan.details.interest.interest_accrued.in_arrears,
          },
        },
      },
      daysInArrears: apiAccount.loan.days_in_arrears,
      daysLate: apiAccount.loan.days_late,
      dates: {
        dueSince: apiAccount.loan.dates.due_since,
        lastPaid: apiAccount.loan.dates.last_paid,
        nextDue: apiAccount.loan.dates.next_due,
      },
      term: {
        count: apiAccount.loan.term.count,
        description: apiAccount.loan.term.description,
        period: apiAccount.loan.term.period,
      },
    },
  };
}
