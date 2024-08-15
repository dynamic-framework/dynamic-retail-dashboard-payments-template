import type { ApiBill } from '../api-interface';

export default function billMapper(ApiBill: ApiBill) {
  const commonProps = {
    id: ApiBill.id,
    service: ApiBill.service,
    company: ApiBill.company,
    nickname: ApiBill.nickname,
    icon: ApiBill.icon,
    clientID: ApiBill.clientID,
    text: ApiBill.text,
    payDate: ApiBill.payDate,
    amount: ApiBill.amount,
    automaticPayment: ApiBill.automaticPayment,
    paid: ApiBill.paid,
    paidDate: ApiBill.paidDate,
    previousPayments: ApiBill.previousPayments,
  };

  return {
    ...commonProps,
    id: ApiBill.id,
    service: ApiBill.service,
    company: ApiBill.company,
    nickname: ApiBill.nickname,
    icon: ApiBill.icon,
    clientID: ApiBill.clientID,
    text: ApiBill.text,
    payDate: ApiBill.payDate,
    amount: ApiBill.amount,
    automaticPayment: ApiBill.automaticPayment,
    paid: ApiBill.paid,
    paidDate: ApiBill.paidDate,
    previousPayments: ApiBill.previousPayments,
  };
}
