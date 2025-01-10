import { useAppSelector } from '../store/hooks';
import { getAccountCards, getAccountLoans } from '../store/selectors';

import AccountCategory from './AccountCategory';
import BillCategory from './BillCategory';

export default function CategoryList() {
  const accountCards = useAppSelector(getAccountCards);
  const accountLoans = useAppSelector(getAccountLoans);

  return (
    <div className="d-flex flex-column gap-6">
      <AccountCategory
        type="credit-card"
        accounts={accountCards}
      />

      <AccountCategory
        type="loan"
        accounts={accountLoans}
      />
      <BillCategory />
    </div>
  );
}
