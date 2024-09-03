import { DIcon, DButtonIcon } from '@dynamic-framework/ui-react';
import { toast as reactToast, Toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

function ToastSaveBillMessage({ id }: { id: string }) {
  const { t } = useTranslation();

  return (
    <div className="alert alert-success">
      <DIcon
        icon="check-circle"
        size="32px"
      />
      <span className="alert-text">
        {t('utilities.successSave')}
      </span>
      <div className="alert-separator" />
      <DButtonIcon
        icon="x"
        className="btn-close p-1"
        theme="light"
        type="button"
        variant="link"
        onClick={() => reactToast.dismiss(id)}
      />
    </div>
  );
}

export function toastSaveBillMessage({ id, visible }: Toast) {
  if (!visible) {
    return null;
  }
  return <ToastSaveBillMessage id={id} />;
}