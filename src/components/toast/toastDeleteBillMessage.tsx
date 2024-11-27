import { DAlert } from '@dynamic-framework/ui-react';
import { toast as reactToast, Toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

function ToastDeleteBillMessage({ id }: { id: string }) {
  const { t } = useTranslation();

  return (
    <DAlert
      onClose={() => reactToast.dismiss(id)}
      theme="danger"
      showClose
    >
      <span className="alert-text">
        {t('utilities.successDelete')}
      </span>
      <div className="alert-separator" />
    </DAlert>
  );
}

export function toastDeleteBillMessage({ id, visible }: Toast) {
  if (!visible) {
    return null;
  }
  return <ToastDeleteBillMessage id={id} />;
}
