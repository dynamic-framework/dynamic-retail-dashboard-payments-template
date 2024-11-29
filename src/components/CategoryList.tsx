import { useAppSelector } from '../store/hooks';
import { getAccountsByCategory } from '../store/selectors';

import AccountCategory from './AccountCategory';
import BillCategory from './BillCategory';

export default function CategoryList() {
  const categories = useAppSelector(getAccountsByCategory);
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
      <BillCategory />
    </div>
  );
}
