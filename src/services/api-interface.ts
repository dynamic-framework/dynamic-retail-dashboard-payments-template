export type ApiErrorItem = {
  status: string;
  code: string;
  title: string;
  message_code: string;
  detail: string;
};

export type ApiResponseWrapped<T> = {
  content: T;
};

export type ApiAccountAccountType = 'LOAN' | 'CREDIT_CARD';

export type ApiAccountType = 'LOAN';

export type ApiAccount = {
  id: string;
  number: string;
  masked_number: string;
  type: string;
  group: string;
  state: string;
  account_holder_name: string;
  account_name: string;
  currency: string;
  deposit: null;
  loan: {
    details: {
      amount: number;
      total: number;
      amount_due: number;
      balance: {
        owed: number;
        remaining: number;
      };
      interest: {
        rate_settings: {
          monthly_rate: number;
          yearly_rate: number;
          calculation_method: string;
        };
        interest_accrued: {
          due: number;
          amount: {
            total: number;
            positive: number;
            negative: number;
          };
          in_cycle: number;
          in_arrears: number;
        };
      };
    };
    term: {
      count: number;
      description: string;
      period: {
        id: string;
        name: string;
        code: string;
      };
    };
    days_in_arrears: number;
    days_late: number;
    dates: {
      last_paid: string;
      due_since: string;
      next_due: string;
    };
  };
};

export type ApiBill = {
  id: string;
  account_nickname: string;
  enrollment_date: string;
  client_number: string;
  is_automatically_paid: boolean;
  payment_due_details: {
    due_date: string;
    due_amount: number;
    payment_details: {
      is_paid: boolean;
    }
  }
  provider: {
    name: string;
    category: {
      code: string;
    }
  }
};

export type ApiBillActivity = {
  id: string;
  document_id: string;
  description: string;
  effective_date: string;
  amount: number;
  type: string;
  was_automatically_paid: boolean
};

export type ApiService = {
  id: string;
  name: string;
  code: string;
  icon: string;
  list: ApiCompany[];
};

export type ApiCompany = {
  id: string;
  name: string;
  icon: string;
};

export const ApiCompanyIcon = {
  lightbulb: 'lightning',
  water: 'droplet',
  fire: 'fire',
  'telephone-fill': 'phone',
  wifi: 'wifi',
  tv: 'tv',
};

export const ApiBillIcon = {
  electric: 'lightning',
  water: 'droplet',
  gas: 'fire',
  mobile: 'phone',
  internet: 'wifi',
  cable: 'tv',
};
