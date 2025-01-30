import type { ApiBill } from '../api-interface';
import { Bill } from '../interface';

const iconMap: Record<string, Bill['icon']> = {
  WATER: 'WATER',
  GAS: 'GAS',
  MOBILE: 'MOBILE',
  ELECTRIC: 'ELECTRIC',
  CABLE: 'CABLE',
  INTERNET: 'INTERNET',
};

export default function billMapper(apiBill: ApiBill): Bill {
  return {
    id: apiBill.id,
    date: apiBill.enrollment_date,
    service: apiBill.provider.name,
    company: apiBill.provider.name,
    nickname: apiBill.account_nickname,
    icon: iconMap[apiBill.provider.category.code] || 'WATER',
    clientId: apiBill.client_number,
    payDate: apiBill.payment_due_details.due_date,
    amount: apiBill.payment_due_details.due_amount,
    automaticPayment: apiBill.is_automatically_paid,
    paid: apiBill.payment_due_details.payment_details.is_paid,
    paidDate: apiBill.payment_due_details.due_date,
  };
}
