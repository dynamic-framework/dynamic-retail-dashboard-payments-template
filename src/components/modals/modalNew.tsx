import {
  DButton,
  DInputCheck,
  DInputSelect,
  DInput,
  DModal,
  useDPortalContext,
  useDToast,
} from '@dynamic-framework/ui-react';
import { Formik } from 'formik';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getPayDates, getServices } from '../../store/selectors';
import { addBill } from '../../store/slice';
import { toastMessage } from '../toast/toastMessage';

const NewBillSchema = Yup.object().shape({
  service: Yup.string(),
  company: Yup.string().required('Company is required'),
  clientID: Yup.string().required('Client ID is required'),
  nickname: Yup.string().required('Nickname is required'),
  payDate: Yup.string(),
});
export default function ModalNew() {
  const { closePortal } = useDPortalContext();
  const { t } = useTranslation();
  const payDates = useAppSelector(getPayDates);
  const services = useAppSelector(getServices);
  const { toast } = useDToast();
  const dispatch = useAppDispatch();

  const initialService = useMemo(() => (services[0]), [services]);

  const [companyOptions, setCompanyOptions] = useState(initialService?.items);

  useEffect(() => {
    if (initialService) {
      setCompanyOptions(initialService.items);
    }
  }, [initialService]);

  if (services.length === 0) {
    return null;
  }

  return (
    <Formik
      initialValues={{
        service: services[0],
        company: services[0].items[0],
        clientID: '',
        nickname: '',
        payDate: '',
        automaticPayment: false,
      }}
      validationSchema={NewBillSchema}
      onSubmit={(values) => {
        const randomId = Math.floor(Math.random() * 1000000) + Date.now();
        const newBill = {
          type: 'Bill',
          text: '',
          amount: 0,
          paid: false,
          paidDate: '',
          id: randomId.toString(),
          service: values.service.label,
          company: values.company.label,
          nickname: values.nickname,
          icon: values.service.value,
          clientID: values.clientID,
          payDate: values.payDate,
          automaticPayment: values.automaticPayment,
          previousPayments: [],
        };

        dispatch(addBill(newBill));
        closePortal();
        toast(toastMessage, { duration: 3000 });
      }}
      enableReinitialize
    >
      {({
        values,
        errors,
        touched,
        setFieldValue,
        handleSubmit,
      }) => (
        <DModal name="modalNew" size="lg" centered>
          <DModal.Header onClose={closePortal} showCloseButton>
            <h5>{t('features.newPayment')}</h5>
          </DModal.Header>
          <DModal.Body>
            <form onSubmit={(event) => { event.preventDefault(); handleSubmit(); }}>
              <div className="row">
                <div className="col-6 mb-2">
                  <DInputSelect
                    id="service-select"
                    name="service"
                    label={t('bills.service')}
                    options={services}
                    value={values.service.label}
                    onChange={(value) => setFieldValue('service', value)}
                  />
                </div>
                <div className="col-6 mb-2">
                  <DInputSelect
                    id="company-select"
                    name="company"
                    label={t('bills.company')}
                    options={companyOptions}
                    value={values.company.label}
                    onChange={({ value }) => setFieldValue('company', value)}
                  />
                </div>
                <div className="col-6 mb-2">
                  <DInput
                    label={t('bills.clientNumber')}
                    id="idClient"
                    name="clientID"
                    type="text"
                    value={values.clientID}
                    invalid={touched.clientID && !!errors.clientID}
                    onChange={(e) => setFieldValue('clientID', e)}
                  />
                </div>
                <div className="col-6 mb-2">
                  <DInput
                    label={t('bills.nickname')}
                    id="nickname"
                    name="nickname"
                    type="text"
                    value={values.nickname}
                    invalid={touched.nickname && !!errors.nickname}
                    onChange={(e) => setFieldValue('nickname', e)}
                  />
                </div>
                <div className="col-12 mt-4">
                  <div className="d-flex">
                    <DInputCheck
                      ariaLabel="Manual bill payment"
                      checked={!values.automaticPayment}
                      id="manualPayment"
                      label={t('bills.manualPayment')}
                      value="false"
                      name="automaticPayment"
                      onChange={() => setFieldValue('automaticPayment', false)}
                      type="radio"
                    />
                    <DInputCheck
                      ariaLabel="Automatic bill payment"
                      checked={values.automaticPayment}
                      id="automaticPayment"
                      label={t('bills.automaticPayment')}
                      value="true"
                      name="automaticPayment"
                      onChange={() => setFieldValue('automaticPayment', true)}
                      type="radio"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="row">
                      <div className="col-6">
                        <DInputSelect
                          id="payday"
                          name="payDate"
                          disabled={!values.automaticPayment}
                          label={t('bills.payday')}
                          options={payDates}
                          value={values.company.label}
                          onChange={({ value }) => setFieldValue('payDate', value)}
                          invalid={touched.payDate && !!errors.payDate}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-6 d-flex justify-content-end">
                  <DButton
                    type="submit"
                    text={t('utilities.save')}
                    theme="primary"
                    id="saveBill"
                  />
                </div>
              </div>
            </form>
          </DModal.Body>
        </DModal>
      )}
    </Formik>
  );
}
