import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import { act, create } from 'react-test-renderer';

import App from '../src/App';

jest.useFakeTimers();

// We use 'create' and 'act' to avoid fail cases in certain asynchronous libraries
it('renders correctly', async () => {
  const render = create(<App />);
  await act(async () => {
    expect(render).toBeDefined();
  });
});
