import { useAppSelector } from '../store/hooks';
import { getAccountsByCategory, getBills } from '../store/selectors';

import AccountCategory from './AccountCategory';
import BillCategory from './BillCategory';

export default function CategoryList() {
  const categories = useAppSelector(getAccountsByCategory);
  const bills = useAppSelector(getBills);

  return (
    <div className="d-flex flex-column gap-6">
      {categories.map((category) => {
        if (!category.accounts.length) {
          return null;
        }

        return (
          <AccountCategory
            key={category.id}
            type={category.type}
            accounts={category.accounts}
          />
        );
      })}
      <BillCategory
        bills={bills}
      />
    </div>
  );
}
