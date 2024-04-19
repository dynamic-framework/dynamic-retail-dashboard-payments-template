import { DSkeleton } from '@dynamic-framework/ui-react';

export default function SkeletonLoader() {
  return (
    <>
      <div className="d-flex d-lg-none flex-column justify-content-center align-items-center gap-4 w-100">
        <DSkeleton viewBox="0 0 320 600" backgroundColor="#e9e9ff" foregroundColor="#f8f8fb">
          <rect x="10" y="20" rx="4" ry="4" width="300" height="30" />
          <rect x="10" y="70" rx="4" ry="4" width="300" height="40" />
          <rect x="10" y="130" rx="4" ry="4" width="300" height="140" />
          <rect x="10" y="300" rx="4" ry="4" width="300" height="140" />
          <rect x="10" y="470" rx="4" ry="4" width="300" height="140" />
        </DSkeleton>
      </div>
      <div className="d-none d-lg-flex flex-column justify-content-center align-items-center gap-4 w-100">
        <DSkeleton viewBox="0 0 320 200" backgroundColor="#e9e9ff" foregroundColor="#f8f8fb">
          <rect x="220" y="15" rx="4" ry="4" width="100" height="100" />
          <rect x="0" y="0" rx="4" ry="4" width="210" height="10" />
          <rect x="0" y="15" rx="4" ry="4" width="210" height="40" />
          <rect x="0" y="65" rx="4" ry="4" width="210" height="40" />
          <rect x="0" y="115" rx="4" ry="4" width="210" height="40" />
        </DSkeleton>
      </div>
    </>
  );
}
