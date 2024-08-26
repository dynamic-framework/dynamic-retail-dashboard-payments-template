import {
  DIcon,
  DSelect,
  DButton,
  DInputCheck,
  DInputSelect,
  DInput,
  DModal,
  useDPortalContext,
  useDToast,
  DQuickActionButton,
} from '@dynamic-framework/ui-react';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { ServiceItem, Company } from '../../services/interface';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getPayDates, getServices } from '../../store/selectors';
import { addBill } from '../../store/slice';
import { toastSaveBillMessage } from '../toast/toastSaveBillMessage';

const NewBillSchema = Yup.object().shape({
  service: Yup.string(),
  company: Yup.string().required('Company is required'),
  clientID: Yup.string().required('Client ID is required').matches(/^[0-9]+$/, 'Must be only digits'),
  nickname: Yup.string().required('Nickname is required').max(20, 'Must be max 20 digits'),
  payDate: Yup.string(),
});

export default function ModalNewPayment() {
  const { closePortal } = useDPortalContext();
  const { t } = useTranslation();
  const payDates = useAppSelector(getPayDates);
  const services = useAppSelector(getServices);
  const { toast } = useDToast();
  const dispatch = useAppDispatch();
  const [allCompanies, setAllCompanies] = useState<Company[]>([]);

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [companyOptions, setCompanyOptions] = useState<Company[]>([]);

  useEffect(() => {
    if (selectedService) {
      setCompanyOptions(selectedService.companies || []);
    }
  }, [selectedService]);

  useEffect(() => {
    const companiesSet = new Set<string>();

    const companiesArray = services.flatMap((service) => service.companies?.filter((company) => {
      if (!companiesSet.has(company.value)) {
        companiesSet.add(company.value);
        return true;
      }
      return false;
    }) || []);

    setAllCompanies(companiesArray);
  }, [services]);

  if (!services.length) {
    return null;
  }

  return (
    <Formik
      initialValues={{
        service: '',
        company: '',
        clientID: '',
        nickname: '',
        icon: '',
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
          icon: values.icon,
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
        <DModal name="modalNew" size="lg">
          <DModal.Header onClose={closePortal} showCloseButton>
            <h5>{t('features.newPayment')}</h5>
          </DModal.Header>
          <DModal.Body>
            <div className="row justify-content-center">
              {!values.service
                && (
                  <div className="col-12">
                    <div>
                      <DSelect
                        id="selectCompany"
                        options={allCompanies}
                        label={t('bills.selectCompany')}
                        onChange={(e) => {
                          if (e) {
                            setFieldValue('service', e.service);
                            setFieldValue('company', e.label);
                            setFieldValue('icon', e.icon);
                          }
                        }}
                      />
                    </div>
                    <hr className="my-8" />
                    <h6 className="mb-4">{t('bills.serviceList')}</h6>
                    <div className="row">
                      {services?.map((i) => (
                        <div className="col-6" key={i.value}>
                          <div className="mb-3">
                            <DQuickActionButton
                              actionIcon="chevron-right"
                              line1={i.label}
                              line2=""
                              onClick={() => {
                                setSelectedService(i);
                                setFieldValue('service', i.label);
                                setFieldValue('icon', i.value);
                              }}
                              representativeIcon={i.value}
                              representativeIconTheme="info"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              {values.service && !values.company
                && (
                  <div className="col-12">
                    <div className="d-flex align-items-end justify-content-end mb-4">
                      <DButton
                        iconStart="arrow-left"
                        onClick={() => {
                          setSelectedService(null);
                          setFieldValue('service', '');
                        }}
                        size="sm"
                        text={t('button.back')}
                        theme="secondary"
                        type="button"
                        variant="link"
                      />
                    </div>
                    <div className="row">
                      {companyOptions?.map((i) => (
                        <div className="col-6" key={i.value}>
                          <div className="mb-3">
                            <DQuickActionButton
                              actionIcon="chevron-right"
                              line1={i.label}
                              line2=""
                              onClick={() => {
                                setFieldValue('company', i.value);
                              }}
                              representativeIcon={values.icon}
                              representativeIconTheme="info"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>
            {values.service && values.company
              && (
                <form onSubmit={handleSubmit}>
                  <div className="d-flex align-items-start justify-content-between mb-4">
                    <div className="d-flex align-items-center gap-3 border border-light p-4 rounded">
                      <DIcon
                        hasCircle
                        icon={values.icon}
                        size="30px"
                        theme="info"
                      />
                      <div>
                        <h6 className="text-gray-600 fw-normal mb-2">{values.service}</h6>
                        <h5 className="text-gray-800">{values.company}</h5>
                      </div>
                    </div>
                    <DButton
                      iconStart="arrow-left"
                      onClick={() => {
                        if (selectedService === null) {
                          setFieldValue('company', '');
                          setFieldValue('service', '');
                        } else {
                          setFieldValue('company', '');
                        }
                      }}
                      size="sm"
                      text={t('button.back')}
                      theme="secondary"
                      type="button"
                      variant="link"
                    />
                  </div>
                  <div className="row">
                    <div className="col-12 mb-2">
                      <DInput
                        label={t('bills.clientNumber')}
                        id="idClient"
                        name="clientID"
                        type="text"
                        pattern="\d*"
                        maxLength={20}
                        value={values.clientID}
                        invalid={touched.clientID && !!errors.clientID}
                        onChange={(e) => setFieldValue('clientID', e)}
                      />
                    </div>
                    <div className="col-12 mb-2">
                      <DInput
                        label={t('bills.nickname')}
                        id="nickname"
                        name="nickname"
                        type="text"
                        maxLength={20}
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
                      {values.automaticPayment
                        && (
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
                        )}
                    </div>
                    <div className="col-12 mt-6 d-flex justify-content-end">
                      <DButton
                        type="submit"
                        text={t('button.save')}
                        theme="primary"
                        id="saveBill"
                      />
                    </div>
                  </div>
                </form>
              )}
          </DModal.Body>
        </DModal>
      )}
    </Formik>
  );
}
