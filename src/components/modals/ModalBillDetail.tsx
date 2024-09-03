import {
  DInput,
  DButton,
  DInputCheck,
  DInputSelect,
  DModal,
  useDPortalContext,
  PortalProps,
  useDToast,
} from '@dynamic-framework/ui-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import useLocalData from '../../services/hooks/useLocalData';
import { AvailablePortal } from '../../services/interface';
import { toastDeleteBillMessage } from '../toast/toastDeleteBillMessage';
import { toastSaveBillMessage } from '../toast/toastSaveBillMessage';

export default function ModalBillDetail({
  payload: {
    bill,
  },
}: PortalProps<AvailablePortal['modalBillDetail']>) {
  const { closePortal } = useDPortalContext();
  const { t } = useTranslation();
  const { toast } = useDToast();

  const { payDates } = useLocalData();
  const [automaticPayment, setAutomaticPayment] = useState<boolean>(bill.automaticPayment);
  const [nickname, setNickname] = useState<string>(bill.nickname);

  const [edit, setEdit] = useState(false);
  const [deleteConfirmation, setDelete] = useState(false);

  useEffect(() => {
    setNickname(bill.nickname);
  }, [bill.nickname]);

  useEffect(() => {
    setAutomaticPayment(bill.automaticPayment);
  }, [bill.automaticPayment]);

  const saveModal = () => {
    setEdit((prevEdit) => !prevEdit);
    toast(
      toastSaveBillMessage,
      {
        duration: 3000,
      },
    );
  };
  const deleteModal = () => {
    closePortal();
    setDelete((prevEdit) => !prevEdit);
    toast(
      toastDeleteBillMessage,
      {
        duration: 3000,
      },
    );
  };

  return (
    <DModal name="modalBillDetail" size="lg">
      <DModal.Header
        onClose={closePortal}
        showCloseButton
      >
        <div className="d-flex">
          <h4 className="mb-0 me-2">
            {t('bills.billDetails')}
          </h4>
          {!edit ? (
            <DButton
              iconStart=""
              onClick={() => {
                setEdit((prevEdit) => !prevEdit);
              }}
              size="sm"
              text={t('button.edit')}
              theme="secondary"
              type="button"
              variant="link"
            />
          ) : (
            <DButton
              iconStart=""
              onClick={() => {
                setEdit((prevEdit) => !prevEdit);
                setDelete((prevEdit) => !prevEdit);
              }}
              size="sm"
              text={t('button.cancel')}
              theme="secondary"
              type="button"
              variant="link"
            />
          )}
        </div>
      </DModal.Header>
      <DModal.Body>
        {edit ? (
          <div>
            {deleteConfirmation ? (
              <div>
                <h5 className="text-center">{t('utilities.deleteConfirmation')}</h5>
                <div className="d-flex mt-4 justify-content-center gap-4">
                  <DButton
                    onClick={() => saveModal()}
                    text={t('button.cancel')}
                    theme="dark"
                    variant="link"
                    type="button"
                  />
                  <DButton
                    iconStart="trash"
                    onClick={() => { deleteModal(); }}
                    text={t('button.delete')}
                    theme="danger"
                    type="button"
                  />
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-4">
                  <DInput
                    label={t('bills.nickname')}
                    id="nickname"
                    name="nickname"
                    type="text"
                    maxLength={20}
                    value={nickname}
                    onChange={(e) => setNickname(e)}
                  />
                </div>
                <div className="d-flex">
                  <DInputCheck
                    ariaLabel="Manual bill payment"
                    checked={!automaticPayment}
                    id="manualPayment"
                    label={t('bills.manualPayment')}
                    value="false"
                    name="typePayment"
                    onChange={() => setAutomaticPayment(false)}
                    type="radio"
                  />
                  <DInputCheck
                    ariaLabel="Automatic bill payment"
                    checked={automaticPayment}
                    id="automaticPayment"
                    label={t('bills.automaticPayment')}
                    value="true"
                    name="typePayment"
                    onChange={() => setAutomaticPayment(true)}
                    type="radio"
                  />
                </div>
                {automaticPayment
                  && (
                    <div className="mt-4">
                      <div className="row">
                        <div className="col-6">
                          <DInputSelect
                            id="payday"
                            disabled={!automaticPayment}
                            label={t('bills.payday')}
                            options={payDates}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                <div className="d-flex mt-4 justify-content-end gap-4">
                  <DButton
                    iconStart="trash"
                    onClick={() => {
                      setDelete((prevEdit) => !prevEdit);
                    }}
                    text={t('button.delete')}
                    theme="danger"
                    variant="outline"
                    type="button"
                  />
                  <DButton
                    onClick={() => saveModal()}
                    text={t('button.save')}
                    theme="success"
                    type="button"
                  />
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            <div>
              <table className="table table-borderless w-auto">
                <tbody>
                  <tr>
                    <th>{t('bills.nickname')}</th>
                    <td>{bill.nickname}</td>
                  </tr>
                  <tr>
                    <th>{t('bills.clientNumber')}</th>
                    <td>{bill.clientID}</td>
                  </tr>
                  <tr>
                    <th>{t('bills.service')}</th>
                    <td>{bill.service}</td>
                  </tr>
                  <tr>
                    <th>{t('bills.company')}</th>
                    <td>{bill.company}</td>
                  </tr>
                  <tr>
                    <th>{t('bills.paymentType')}</th>
                    <td>
                      {!automaticPayment ? (
                        <span>{t('bills.manualPayment')}</span>
                      ) : (
                        <span>{t('bills.automaticPayment')}</span>
                      )}
                    </td>
                  </tr>
                  {automaticPayment && (
                    <tr>
                      <th>{t('bills.payday')}</th>
                      <td>{bill.payDate}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {bill.previousPayments && bill.previousPayments.length > 0 && (
              <div>
                <hr className="my-8" />
                <h5>{t('bills.previousPayments')}</h5>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">{t('bills.id')}</th>
                      <th scope="col">{t('bills.date')}</th>
                      <th scope="col">{t('bills.amount')}</th>
                      <th scope="col" aria-hidden="true" />
                    </tr>
                  </thead>
                  <tbody>
                    {bill.previousPayments?.map((i) => (
                      <tr key={i.id}>
                        <td>{i.id}</td>
                        <td>{i.payDate}</td>
                        <td>{i.amount}</td>
                        <td>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://cdn.modyo.cloud/uploads/e3d9d615-25e9-4d92-a3b0-b7ff063a9f77/original/voucher.pdf"
                            download="voucher.pdf"
                          >
                            <i className="bi bi-download" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </DModal.Body>
    </DModal>
  );
}
