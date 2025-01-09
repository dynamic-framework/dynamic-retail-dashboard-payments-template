import type { ApiBill } from '../api-interface';
import { Bill } from '../interface';

export default function billMapper(apiBill: ApiBill): Bill {
  return {
    id: apiBill.id,
    provider: {
      id: apiBill.provider.id,
      name: apiBill.provider.name,
      category: {
        id: apiBill.provider.category.id,
        name: apiBill.provider.category.name,
        code: apiBill.provider.category.code,
      },
    },
    accountNickname: apiBill.account_nickname,
    clientNumber: apiBill.client_number,
    enrollmentDate: apiBill.enrollment_date,
    isAutomaticallyPaid: apiBill.is_automatically_paid,
    paymentDueDetails: {
      dueDate: apiBill.payment_due_details.due_date,
      dueAmount: apiBill.payment_due_details.due_amount,
      payment_details: {
        isPaid: apiBill.payment_due_details.payment_details.is_paid,
        paymentDate: apiBill.payment_due_details?.payment_details?.payment_date,
      },
    },
    lastPayment: {
      id: apiBill.last_payment?.id,
      amount: apiBill.last_payment?.amount,
      effectiveDate: apiBill.last_payment.effective_date,
      description: apiBill.last_payment.description,
      documentId: apiBill.last_payment.document_id,
      type: apiBill.last_payment.type,
      was_automatically_paid: apiBill.last_payment.was_automatically_paid,
      payee: {
        id: apiBill.last_payment.payee.id,
        name: apiBill.last_payment.payee.name,
        category: {
          id: apiBill.last_payment.payee.category.id,
          name: apiBill.last_payment.payee?.category.name,
          code: apiBill.last_payment.payee?.category.code,
        },
      },
    },
  };
}
