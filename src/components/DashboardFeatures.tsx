import {
  useDPortalContext,
  DIcon,
  DButton,
  DBox,
} from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';

import { VARS_PATH, SITE_URL } from '../config/widgetConfig';

export default function DashboardFeatures() {
  const { t } = useTranslation();
  const { openPortal } = useDPortalContext();

  return (
    <DBox>
      <h5 className="fw-semibold mb-4">{t('features.title')}</h5>
      <ul className="list-unstyled">
        <li>
          <DButton
            iconStart="Plus"
            className="w-100 justify-content-start"
            color="primary"
            variant="link"
            text={t('features.newPayment')}
            onClick={() => openPortal('modalNew', {})}
          />
        </li>
        <li>
          <a
            href={`${SITE_URL}/${VARS_PATH.RECHARGES}`}
            className="btn btn-link-primary w-100 justify-content-start"
          >
            <DIcon
              icon="Phone"
              size="1rem"
              color="primary"
            />
            {t('features.recharges')}
          </a>
        </li>
        <li>
          <a
            href={`${SITE_URL}/${VARS_PATH.PREAUTORIZED}`}
            className="btn btn-link-primary w-100 justify-content-start"
          >
            <DIcon
              icon="ThumbsUp"
              size="1rem"
              color="primary"
            />
            {t('features.preauthorized')}
          </a>
        </li>
        <li>
          <a
            href={`${SITE_URL}/${VARS_PATH.PAYMENTS_HISTORY}`}
            className="btn btn-link-primary w-100 justify-content-start"
          >
            <DIcon
              icon="Clock"
              size="1rem"
              color="primary"
            />
            {t('features.history')}
          </a>
        </li>
        <li>
          <a
            href={`${SITE_URL}/${VARS_PATH.ONE_TIME_PAYMENT}`}
            className="btn btn-link-primary w-100 justify-content-start"
          >
            <DIcon
              icon="Receipt"
              size="1rem"
              color="primary"
            />
            {t('features.onetime')}
          </a>
        </li>
      </ul>
    </DBox>
  );
}
