import { useDPortalContext, DIcon } from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';

export default function DashboardFeatures() {
  const { t } = useTranslation();
  const { openPortal } = useDPortalContext();

  return (
    <div className="rounded bg-white shadow-sm p-4 mb-4">
      <h6 className="fw-bold mb-4">{t('features.title')}</h6>
      <ul className="list-unstyled">
        <li className="mb-4">
          <a onClick={() => openPortal('modalNew', {})} href="#!" className="gap-2 btn btn-link-secondary text-decoration-none p-0">
            <DIcon
              hasCircle
              icon="plus"
              size="1rem"
              theme="secondary"
            />
            {t('features.newPayment')}
          </a>
        </li>
        <li className="mb-4">
          <a href=" " className="gap-2 btn btn-link-secondary text-decoration-none p-0">
            <DIcon
              hasCircle
              icon="phone"
              size="1rem"
              theme="secondary"
            />
            {t('features.recharges')}
          </a>
        </li>
        <li className="mb-4">
          <a href=" " className="gap-2 btn btn-link-secondary text-decoration-none p-0">
            <DIcon
              hasCircle
              icon="hand-thumbs-up"
              size="1rem"
              theme="secondary"
            />
            {t('features.preauthorized')}
          </a>
        </li>
        <li className="mb-4">
          <a href=" " className="gap-2 btn btn-link-secondary text-decoration-none p-0">
            <DIcon
              hasCircle
              icon="clock"
              size="1rem"
              theme="secondary"
            />
            {t('features.history')}
          </a>
        </li>
        <li className="mb-4">
          <a href=" " className="gap-2 btn btn-link-secondary text-decoration-none  p-0">
            <DIcon
              hasCircle
              icon="receipt"
              size="1rem"
              theme="secondary"
            />
            {t('features.onetime')}
          </a>
        </li>
      </ul>
    </div>
  );
}
