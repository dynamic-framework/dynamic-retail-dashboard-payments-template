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
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getPayDates, getServices } from '../../store/selectors';
import { addBill } from '../../store/slice';
import { toastSaveBillMessage } from '../toast/toastSaveBillMessage';

const NewBillSchema = Yup.object().shape({
  service: Yup.string(),
  company: Yup.string().required('Company is required'),
  clientID: Yup.string().required('Client ID is required'),
  nickname: Yup.string().required('Nickname is required'),
  payDate: Yup.string(),
});

export default function ModalNewPayment() {
  const { closePortal } = useDPortalContext();
  const { t } = useTranslation();
  const payDates = useAppSelector(getPayDates);
  const services = useAppSelector(getServices);
  const { toast } = useDToast();
  const dispatch = useAppDispatch();

  const [selectedService, setSelectedService] = useState(services[0] || []);
  const [selectedCompany, setSelectedCompany] = useState(services[0].companies[0]);

  const [companyOptions, setCompanyOptions] = useState(selectedService?.companies || []);

  useEffect(() => {
    if (services.length) {
      setSelectedService(selectedService);
      setCompanyOptions(selectedService.companies);
      setSelectedCompany(selectedService.companies[0]);
    }
  }, [selectedService, services.length]);

  if (!services.length) {
    return null;
  }

  return (
    <Formik
      initialValues={{
        service: selectedService.value,
        company: selectedCompany.value,
        clientID: '',
        nickname: '',
        payDate: payDates[0].value,
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
          service: values.service,
          company: values.company,
          nickname: values.nickname,
          icon: values.service,
          clientID: values.clientID,
          payDate: values.payDate,
          automaticPayment: values.automaticPayment,
          previousPayments: [],
        };

        dispatch(addBill(newBill));
        closePortal();
        toast(toastSaveBillMessage, { duration: 3000 });
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
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-6 mb-2">
                  <DInputSelect
                    id="service-select"
                    name="service"
                    label={t('bills.service')}
                    options={services}
                    value={values.service}
                    onChange={(newService) => {
                      setSelectedService(newService);
                      setFieldValue('service', newService.value);
                    }}
                  />
                </div>
                <div className="col-6 mb-2">
                  <DInputSelect
                    id="company-select"
                    name="company"
                    label={t('bills.company')}
                    options={companyOptions}
                    value={values.company}
                    onChange={(newCompany) => setFieldValue('company', newCompany.value)}
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
                          onChange={({ value }) => setFieldValue('payDate', value)}
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
