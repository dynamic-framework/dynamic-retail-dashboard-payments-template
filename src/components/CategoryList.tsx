import useOtherCategories from '../services/hooks/useOtherCategories';
import { useAppSelector } from '../store/hooks';
import { getAccountsByCategory } from '../store/selectors';
import type { OtherConfigType } from '../store/slice';

import AccountCategory from './AccountCategory';
import OtherCategory from './OtherCategory';
import type { OtherItemType } from './OtherItem';

export default function CategoryList() {
  const categories = useAppSelector(getAccountsByCategory);
  const { otherCategories } = useOtherCategories();

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
      {Object.keys(otherCategories).map((key) => (
        <OtherCategory
          key={key}
          type={key as OtherConfigType}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          items={otherCategories[key].items as Array<OtherItemType['item']>}
        />
      ))}
    </div>
  );
}
