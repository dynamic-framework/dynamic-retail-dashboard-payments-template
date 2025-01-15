import type { ApiBillActivity } from '../api-interface';
import { BillActivity } from '../interface';

export default function billActivityMapper(apiBillActivity: ApiBillActivity): BillActivity {
  return {
    id: apiBillActivity.id,
    documentId: apiBillActivity.document_id,
    description: apiBillActivity.description,
    effectiveDate: apiBillActivity.effective_date,
    amount: apiBillActivity.amount,
    type: apiBillActivity.type,
    wasAutomaticallyPaid: apiBillActivity.was_automatically_paid,
  };
}
