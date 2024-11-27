import {
  useDPortalContext,
  DIcon,
  DCard,
} from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';

import { SITE_PATH, SITE_URL } from '../config/widgetConfig';

export default function DashboardFeatures() {
  const { t } = useTranslation();
  const { openPortal } = useDPortalContext();

  return (
    <DCard>
      <DCard.Body>
        <h6 className="fw-bold mb-4">{t('features.title')}</h6>
        <ul className="list-unstyled">
          <li className="mb-4">
            <button
              className="gap-2 btn btn-link-primary text-decoration-none py-0 ps-0"
              type="button"
              onClick={() => openPortal('modalNew', {})}
            >
              <DIcon
                hasCircle
                icon="plus"
                size="1rem"
                theme="primary"
              />
              {t('features.newPayment')}
            </button>
          </li>
          <li className="mb-4">
            <button
              className="gap-2 btn btn-link-primary text-decoration-none py-0 ps-0"
              type="button"
              onClick={() => { }}
            >
              <DIcon
                hasCircle
                icon="phone"
                size="1rem"
                theme="primary"
              />
              {t('features.recharges')}
            </button>
          </li>
          <li className="mb-4">
            <button
              className="gap-2 btn btn-link-primary text-decoration-none py-0 ps-0"
              type="button"
              onClick={() => { }}
            >
              <DIcon
                hasCircle
                icon="hand-thumbs-up"
                size="1rem"
                theme="primary"
              />
              {t('features.preauthorized')}
            </button>
          </li>
          <li className="mb-4">
            <button
              className="gap-2 btn btn-link-primary text-decoration-none py-0 ps-0"
              type="button"
              onClick={() => { }}
            >
              <DIcon
                hasCircle
                icon="clock"
                size="1rem"
                theme="primary"
              />
              {t('features.history')}
            </button>
          </li>
          <li className="mb-4">
            <a
              href={`${SITE_URL}/${SITE_PATH.ONE_TIME_PAYMENT}`}
              className="gap-2 btn btn-link-primary text-decoration-none py-0 ps-0"
            >
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
      </DCard.Body>
    </DCard>
  );
}
