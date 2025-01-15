import type { ApiBill } from '../api-interface';
import { Bill } from '../interface';

export default function billMapper(apiBill: ApiBill): Bill {
  return {
    id: apiBill.id,
    date: apiBill.enrollment_date,
    service: apiBill.provider.name,
    company: apiBill.provider.name,
    nickname: apiBill.account_nickname,
    icon: apiBill.provider.category.code,
    clientId: apiBill.client_number,
    payDate: apiBill.payment_due_details.due_date,
    amount: apiBill.payment_due_details.due_amount,
    automaticPayment: apiBill.is_automatically_paid,
    paid: apiBill.payment_due_details.payment_details.is_paid,
    paidDate: apiBill.payment_due_details.due_date,
  };
}
