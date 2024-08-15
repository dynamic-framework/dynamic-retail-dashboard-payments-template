import CategoryList from './components/CategoryList';
import DashboardFeatures from './components/DashboardFeatures';
import SkeletonLoader from './components/SkeletonLoader';
import useLoanAccountsCategorized from './services/hooks/useLoanAccountsCategorized';

export default function App() {
  const { loading } = useLoanAccountsCategorized();
  return (
    <div className="py-4">
      {loading
        ? <SkeletonLoader />
        : (
          <div className="row position-relative align-items-start">
            <div className="col-12 col-lg-7 col-xl-8 pb-6 order-2">
              <CategoryList />
            </div>
            <div className="col-12 col-lg-5 col-xl-4 order-3 position-sticky sticky-md-top">
              <DashboardFeatures />
            </div>
          </div>
        )}
    </div>
  );
}
