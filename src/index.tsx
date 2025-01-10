/* eslint-disable global-require */
import { DContextProvider, DToastContainer } from '@dynamic-framework/ui-react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './config/liquidConfig';
import './config/i18nConfig';

import App from './App';
import ModalBillDelete from './components/modals/ModalBillDelete';
import ModalBillDetail from './components/modals/ModalBillDetail';
import ModalBillEdit from './components/modals/ModalBillEdit';
import ModalNewPayment from './components/modals/ModalNewPayment';
import { AvailablePortalPayload } from './services/interface';
import store from './store/store';
import '@dynamic-framework/ui-react/dist/css/dynamic-ui.css';
import './styles/base.scss';

const root = ReactDOM.createRoot(document.getElementById('dashboardPayments') as Element);
root.render(
  <StrictMode>
    <Provider store={store}>
      <DContextProvider<AvailablePortalPayload>
        portalName="portal"
        availablePortals={{
          modalBillDetail: ModalBillDetail,
          modalBillEdit: ModalBillEdit,
          modalBillDelete: ModalBillDelete,
          modalNew: ModalNewPayment,
        }}
      >
        <DToastContainer position="top-right" />
        <App />
      </DContextProvider>
    </Provider>
  </StrictMode>,
);
