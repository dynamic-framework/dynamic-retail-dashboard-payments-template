/* eslint-disable global-require */
import { DContextProvider, DToastContainer } from '@dynamic-framework/ui-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './config/liquidConfig';
import './config/i18nConfig';

import App from './App';
import ModalBillDetail from './components/modals/ModalBillDetail';
import ModalNewPayment from './components/modals/ModalNewPayment';
import reportWebVitals from './reportWebVitals';
import { AvailablePortal } from './services/interface';
import store from './store/store';
import '@dynamic-framework/ui-react/dist/css/dynamic-ui.css';
import './styles/base.scss';

const root = ReactDOM.createRoot(document.getElementById('dashboardPayments') as Element);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DContextProvider<AvailablePortal>
        portalName="portal"
        availablePortals={{
          modalBillDetail: ModalBillDetail,
          modalNew: ModalNewPayment,
        }}
      >
        <DToastContainer position="top-right" />
        <App />
      </DContextProvider>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
