import { DAlert } from '@dynamic-framework/ui-react';
import { toast as reactToast, Toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

function ToastSaveBillMessage({ id }: { id: string }) {
  const { t } = useTranslation();

  return (
    <DAlert
      onClose={() => reactToast.dismiss(id)}
      showClose
    >
      <span className="alert-text">
        {t('utilities.successSave')}
      </span>
      <div className="alert-separator" />
    </DAlert>
  );
}

export function toastSaveBillMessage({ id, visible }: Toast) {
  if (!visible) {
    return null;
  }
  return <ToastSaveBillMessage id={id} />;
}
