import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '_test-utils/configureStore';

export default function withProviders(component, { initialState } = {}) {
  const store = configureStore(initialState);
  return <Provider store={store}>{component}</Provider>;
}
