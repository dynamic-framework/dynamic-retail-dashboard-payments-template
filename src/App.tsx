import { useTranslation } from 'react-i18next';
import CategoryList from './components/CategoryList';
import ScheduledPayments from './components/ScheduledPayments';
import SkeletonLoader from './components/SkeletonLoader';
import useLoanAccountsCategorized from './services/hooks/useLoanAccountsCategorized';

export default function App() {
  const { loading } = useLoanAccountsCategorized();
  const { t } = useTranslation();
  return (
    <div className="container justify-content-center py-3">
      {loading
        ? <SkeletonLoader />
        : (
          <div className="row">
            <div className="col-12 col-lg-8">
              <h1 className="fs-4 text-dark fw-bold order-1 pb-4">
                {t('title')}
              </h1>
            </div>
            <div className="col-12 col-lg-7 col-xl-8 pb-4 order-2">
              <CategoryList />
            </div>
            <div className="col-12 col-lg-5 col-xl-4 order-3">
              <ScheduledPayments />
            </div>
          </div>
        )}
    </div>
  );
}
