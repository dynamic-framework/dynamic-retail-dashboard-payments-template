import * as DynamicFramework from '@dynamic-framework/ui-react';
import { render, screen, waitFor } from '@testing-library/react';

import App from '../src/App';
import { CONTEXT_CONFIG } from '../src/config/widgetConfig';
import { Provider } from 'react-redux';
import store from '../src/store/store';
import React from 'react';
import { DContextProvider, DToastContainer } from '@dynamic-framework/ui-react';
import { AvailablePortalPayload } from '../src/services/interface';

const mockStore = {
  accountCards: [],
  accountLoans: [],
  bills: [],
  payDates: {}
};

jest.mock('@dynamic-framework/ui-react', () => {
  const originalModule: typeof DynamicFramework = jest.requireActual('@dynamic-framework/ui-react');
  return {
    ...originalModule,
    useDContext: jest.fn(),
    DSelect: jest.fn(),
  };
});

jest.mock('../src/store/selectors', () => ({
  getAccountCards: jest.fn(() => mockStore.accountCards),
  getAccountLoans: jest.fn(() => mockStore.accountLoans),
  getBills: jest.fn(() => mockStore.bills),
  getPayDates: jest.fn(() => mockStore.payDates),

}));

describe('App Component', () => {
  beforeEach(() => {
    (DynamicFramework.useDContext as jest.Mock).mockReturnValue({
      setContext: jest.fn(),
    });
  });

  it('sets context with correct configuration', async () => {
    render(
      <Provider store={store}>
        <DContextProvider<AvailablePortalPayload>
          portalName="portal"
        >
          <DToastContainer position="top-right" />
          <App />
        </DContextProvider>
      </Provider>
    );

    await waitFor(() => {
      expect(DynamicFramework.useDContext().setContext).toHaveBeenCalledWith(CONTEXT_CONFIG);
    });
  });
});