import type { ApiBill } from '../api-interface';
import { Bill } from '../interface';

export default function billMapper(apiBill: ApiBill): Bill {
  return {
    amount: apiBill.amount,
    id: apiBill.id,
    service: apiBill.service,
    company: apiBill.company,
    nickname: apiBill.nickname,
    icon: apiBill.icon,
    clientId: apiBill.client_id,
    text: apiBill.text,
    payDate: apiBill.pay_date,
    automaticPayment: apiBill.automatic_payment,
    paid: apiBill.paid,
    paidDate: apiBill.paid_date,
    date: apiBill.date,
    type: apiBill.type,
    previousPayments: apiBill.previous_payments?.map((payDate) => ({
      id: payDate.id,
      payDate: payDate.pay_date,
      amount: payDate.amount,
    })),
  };
}
