import useOtherCategories from '../services/hooks/useOtherCategories';
import { useAppSelector } from '../store/hooks';
import { getAccountsByCategory } from '../store/selectors';
import { OtherConfigType } from '../store/slice';
import OtherCategory from './OtherCategory';
import { OtherItemType } from './OtherItem';
import AccountCategory from './AccountCategory';

export default function CategoryList() {
  const categories = useAppSelector(getAccountsByCategory);
  const { otherCategories } = useOtherCategories();

  return (
    <div className="d-flex flex-column gap-4">
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
