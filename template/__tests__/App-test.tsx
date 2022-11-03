import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import { act, create } from 'react-test-renderer';

import App from '../src/App';

jest.useFakeTimers();

it('renders correctly', async () => {
  const render = create(<App />);
  await act(async () => {
    expect(render).toBeDefined();
  });
});
