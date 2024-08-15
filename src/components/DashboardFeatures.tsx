import { useDPortalContext, DIcon } from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';

export default function DashboardFeatures() {
  const { t } = useTranslation();
  const { openPortal } = useDPortalContext();

  return (
    <div>
      <h2 className="fs-5 fw-bold mb-4">{t('features.title')}</h2>
      <ul className="list-unstyled">
        <li className="mb-4">
          <a onClick={() => openPortal('modalNew', {})} href="#!" className="gap-2 btn btn-link text-decoration-none p-0">
            <DIcon
              hasCircle
              icon="plus"
              size="1rem"
              theme="primary"
            />
            {t('features.newPayment')}
          </a>
        </li>
        <li className="mb-4">
          <a href=" " className="gap-2 btn btn-link text-decoration-none p-0">
            <DIcon
              hasCircle
              icon="phone"
              size="1rem"
              theme="primary"
            />
            {t('features.recharges')}
          </a>
        </li>
        <li className="mb-4">
          <a href=" " className="gap-2 btn btn-link text-decoration-none p-0">
            <DIcon
              hasCircle
              icon="hand-thumbs-up"
              size="1rem"
              theme="primary"
            />
            {t('features.preauthorized')}
          </a>
        </li>
        <li className="mb-4">
          <a href=" " className="gap-2 btn btn-link text-decoration-none p-0">
            <DIcon
              hasCircle
              icon="clock"
              size="1rem"
              theme="primary"
            />
            {t('features.history')}
          </a>
        </li>
        <li className="mb-4">
          <a href=" " className="gap-2 btn btn-link text-decoration-none  p-0">
            <DIcon
              hasCircle
              icon="receipt"
              size="1rem"
              theme="primary"
            />
            {t('features.onetime')}
          </a>
        </li>
      </ul>
    </div>
  );
}
