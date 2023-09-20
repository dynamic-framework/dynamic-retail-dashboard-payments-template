import { MButton, MQuickActionButton } from '@dynamic-framework/ui-react';
import { useTranslation } from 'react-i18next';

import useScheduledPayments from '../hooks/useScheduledPayments';

export default function ScheduledPayments() {
  const { t } = useTranslation();
  const { scheduledPayments } = useScheduledPayments();

  return (
    <div className="d-block bg-light rounded p-3">
      <div className="d-flex flex-column gap-3">
        <h2 className="fs-5 fw-bold mx-2">
          {t('scheduled.title')}
        </h2>
        {(!scheduledPayments || !scheduledPayments.length) && (
          <div className="text-center pt-3">
            {t('scheduled.noPayments')}
          </div>
        )}
        {scheduledPayments && (
          <div className="d-flex flex-column gap-2">
            {scheduledPayments.map((item: Record<string, string>) => (
              <MQuickActionButton
                line1={item.name}
                line2={item.text}
                representativeIcon={item.icon}
                key={item.id}
                representativeIconTheme={item.theme}
                representativeIconHasCircle
              />
            ))}
          </div>
        )}
        <MButton
          className="d-grid"
          text={t('button.addPayment')}
          isPill
        />
      </div>
    </div>
  );
}
