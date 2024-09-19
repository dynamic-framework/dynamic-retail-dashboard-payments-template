import CategoryList from './components/CategoryList';
import CategoryLoader from './components/loaders/CategoryLoader';
import ScheduledPayments from './components/ScheduledPayments';
import useLoanAccountsCategorized from './services/hooks/useLoanAccountsCategorized';

export default function App() {
  const { loading } = useLoanAccountsCategorized();
  return (
    <div className="py-4">
      <div className="row">
        <div className="col-12 col-lg-7 col-xl-8 pb-6 order-2">
          {loading
            ? <CategoryLoader />
            : <CategoryList />}
        </div>
        <div className="col-12 col-lg-5 col-xl-4 order-3">
          <ScheduledPayments />
        </div>
      </div>
    </div>
  );
}
