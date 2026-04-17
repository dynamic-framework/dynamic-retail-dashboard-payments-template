import {
  useDPortalContext,
  DBox,
  DListGroup,
} from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';

import { VARS_PATH, SITE_URL } from '../config/widgetConfig';

export default function DashboardFeatures() {
  const { t } = useTranslation();
  const { openPortal } = useDPortalContext();

  return (
    <DBox className="sidebar-payments">
      <h5 className="fw-semibold mb-4">{t('features.title')}</h5>
      <DListGroup
        as="div"
        flush
      >
        <DListGroup.Item
          as="button"
          action
          className="hover:bg-primary-25 border-0 rounded"
          onClick={() => openPortal('modalNew', {})}
          iconStart="Plus"
        >
          {t('features.newPayment')}
        </DListGroup.Item>
        <DListGroup.Item
          as="a"
          action
          className="hover:bg-primary-25 border-0 rounded"
          href={`${SITE_URL}/${VARS_PATH.RECHARGES}`}
          iconStart="Phone"
        >
          {t('features.recharges')}
        </DListGroup.Item>
        <DListGroup.Item
          as="a"
          action
          className="hover:bg-primary-25 border-0 rounded"
          href={`${SITE_URL}/${VARS_PATH.PREAUTORIZED}`}
          iconStart="ThumbsUp"
        >
          {t('features.preauthorized')}
        </DListGroup.Item>
        <DListGroup.Item
          as="a"
          action
          className="hover:bg-primary-25 border-0 rounded"
          href={`${SITE_URL}/${VARS_PATH.PAYMENTS_HISTORY}`}
          iconStart="Clock"
        >
          {t('features.history')}
        </DListGroup.Item>
        <DListGroup.Item
          as="a"
          action
          className="hover:bg-primary-25 border-0 rounded"
          href={`${SITE_URL}/${VARS_PATH.ONE_TIME_PAYMENT}`}
          iconStart="Receipt"
        >
          {t('features.onetime')}
        </DListGroup.Item>
      </DListGroup>
    </DBox>
  );
}
