import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './config/liquidConfig';
import './config/i18nConfig';

import { LiquidContextProvider } from '@dynamic-framework/ui-react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('dashboardPaymentsTemplate') as Element);
root.render(
  <React.StrictMode>
    <LiquidContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </LiquidContextProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  require('@dynamic-framework/ui-react/dist/css/dynamic-ui.css');
}
