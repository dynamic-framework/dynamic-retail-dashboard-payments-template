import useOtherCategories from '../hooks/useOtherCategories';
import { useAppSelector } from '../store/hooks';
import { getProductsByCategory } from '../store/selectors';
import { OtherConfigType } from '../store/slice';
import OtherCategory from './OtherCategory';
import { OtherItemType } from './OtherItem';
import ProductCategory from './ProductCategory';

export default function CategoryList() {
  const categories = useAppSelector(getProductsByCategory);
  const { otherCategories } = useOtherCategories();

  return (
    <div className="d-flex flex-column gap-4">
      {categories.map((category) => {
        if (!category.products.length) {
          return null;
        }

        return (
          <ProductCategory
            key={category.id}
            type={category.type}
            products={category.products}
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
