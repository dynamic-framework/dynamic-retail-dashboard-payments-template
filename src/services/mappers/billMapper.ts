import type { ApiBill } from '../api-interface';

export default function billMapper(apiBill: ApiBill) {
  const commonProps = {
    id: apiBill.id,
    service: apiBill.service,
    company: apiBill.company,
    nickname: apiBill.nickname,
    icon: apiBill.icon,
    clientID: apiBill.clientID,
    text: apiBill.text,
    payDate: apiBill.payDate,
    amount: apiBill.amount,
    automaticPayment: apiBill.automaticPayment,
    paid: apiBill.paid,
    paidDate: apiBill.paidDate,
    date: apiBill.date,
    type: apiBill.type,
    previousPayments: apiBill.previousPayments,
  };

  return {
    ...commonProps,
    id: apiBill.id,
    service: apiBill.service,
    company: apiBill.company,
    nickname: apiBill.nickname,
    icon: apiBill.icon,
    clientID: apiBill.clientID,
    text: apiBill.text,
    payDate: apiBill.payDate,
    amount: apiBill.amount,
    automaticPayment: apiBill.automaticPayment,
    paid: apiBill.paid,
    paidDate: apiBill.paidDate,
    previousPayments: apiBill.previousPayments,
  };
}
