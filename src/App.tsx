import CategoryList from './components/CategoryList';
import ScheduledPayments from './components/ScheduledPayments';
import SkeletonLoader from './components/SkeletonLoader';
import useLoanAccountsCategorized from './services/hooks/useLoanAccountsCategorized';

export default function App() {
  const { loading } = useLoanAccountsCategorized();
  return (
    <div className="py-3">
      {loading
        ? <SkeletonLoader />
        : (
          <div className="row">
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
