import {
  DIcon,
  DButton,
  DInputCheck,
  DSelect,
  DInput,
  useDToast,
  useDPortalContext,
} from '@dynamic-framework/ui-react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  getPayDates,
  getSelectedCompany,
  getSelectedService,
} from '../../store/selectors';
import {
  setSelectedCompany,
  setSelectedService,
} from '../../store/slice';

import { EMPTY_SERVICE, EMPTY_COMPANY } from './EmptyStates';

export default function PaymentDetailsForm() {
  const { t } = useTranslation();
  const { toast } = useDToast();
  const dispatch = useAppDispatch();
  const { closePortal } = useDPortalContext();
  const selectedService = useAppSelector(getSelectedService);
  const selectedCompany = useAppSelector(getSelectedCompany);

  const payDates = useAppSelector(getPayDates);

  const NEW_BILL_SCHEMA = Yup.object().shape({
    clientId: Yup.string().required().matches(/^[0-9]+$/, t('formError.onlyDigits')),
    nickname: Yup.string().required().max(20, t('formError.maxDigits')),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      amount: 0,
      paid: false,
      paidDate: '',
      service: selectedCompany.service,
      company: selectedCompany.label,
      icon: selectedCompany.icon,
      nickname: '',
      clientId: '',
      payDate: payDates[0]?.value || '',
      date: '',
      automaticPayment: false,
      previousPayments: [],
    },
    validationSchema: NEW_BILL_SCHEMA,
    onSubmit: () => {
      dispatch(setSelectedService(EMPTY_SERVICE));
      dispatch(setSelectedCompany(EMPTY_COMPANY));
      closePortal();
      toast({
        title: t('utilities.successCreated'),
        theme: 'success',
        soft: true,
      }, {
        duration: 3000,
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="d-flex align-items-start justify-content-start mb-2 flex-column gap-4">
        <button
          type="button"
          className="px-0 link-primary bg-transparent d-flex align-items-center gap-2 border-0"
          onClick={() => {
            if (!selectedService.label) {
              dispatch(setSelectedService(EMPTY_SERVICE));
            }
            dispatch(setSelectedCompany(EMPTY_COMPANY));
          }}
        >
          <DIcon
            icon="arrow-left"
            size="var(--bs-ref-spacer-6)"
          />
          {t('button.back')}
        </button>
        <div className="d-flex align-items-center gap-3 border border-light p-4 rounded w-100">
          <DIcon
            hasCircle
            icon={selectedCompany.icon}
            size="var(--bs-ref-spacer-7)"
            theme="info"
          />
          <div>
            <h6 className="text-gray-600 fw-normal mb-2">{selectedCompany.service}</h6>
            <h5 className="text-gray-800">{selectedCompany.label}</h5>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-2">
          <DInput
            label={t('bills.clientNumber')}
            id="clientId"
            name="clientId"
            type="text"
            maxLength={20}
            value={formik.values.clientId}
            invalid={formik.touched.clientId && !!formik.errors.clientId}
            onChange={(e) => {
              if (/^\d*$/.test(e) && e.length <= 20) {
                formik.setFieldValue('clientId', e);
              }
            }}
          />

        </div>
        <div className="col-12 mb-2">
          <DInput
            label={t('bills.nickname')}
            id="nickname"
            name="nickname"
            type="text"
            maxLength={20}
            value={formik.values.nickname}
            invalid={formik.touched.nickname && !!formik.errors.nickname}
            onChange={(e) => formik.setFieldValue('nickname', e)}
          />
        </div>
        <div className="col-12 mt-4">
          <div className="d-flex">
            <DInputCheck
              ariaLabel="Manual bill payment"
              checked={!formik.values.automaticPayment}
              id="manualPayment"
              label={t('bills.manualPayment')}
              value="false"
              name="automaticPayment"
              onChange={() => formik.setFieldValue('automaticPayment', false)}
              type="radio"
            />
            <DInputCheck
              ariaLabel="Automatic bill payment"
              checked={formik.values.automaticPayment}
              id="automaticPayment"
              label={t('bills.automaticPayment')}
              value="true"
              name="automaticPayment"
              onChange={() => formik.setFieldValue('automaticPayment', true)}
              type="radio"
            />
          </div>
          {formik.values.automaticPayment
            && (
              <div className="mt-4">
                <div className="row">
                  <div className="col-6">
                    <DSelect
                      id="payday"
                      name="payDate"
                      defaultValue={payDates[0]}
                      disabled={!formik.values.automaticPayment}
                      label={t('bills.payday')}
                      options={payDates}
                      onChange={(data) => formik.setFieldValue('payDate', data?.value)}
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
            id="saveBill"
          />
        </div>
      </div>
    </form>
  );
}
