import { DIcon, DButtonIcon } from '@dynamic-framework/ui-react';
import { toast as reactToast, Toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

function ToastDeleteBillMessage({ id }: { id: string }) {
  const { t } = useTranslation();

  return (
    <div className="alert alert-danger">
      <DIcon
        icon="check-circle"
        size="32px"
      />
      <span className="alert-text">
        {t('utilities.successDelete')}
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

export function toastDeleteBillMessage({ id, visible }: Toast) {
  if (!visible) {
    return null;
  }
  return <ToastDeleteBillMessage id={id} />;
}
