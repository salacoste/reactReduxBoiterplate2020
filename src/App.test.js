import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

import {ThemeProvider} from 'styled-components'
import theme from './utils/theme'

test('renders learn react link', () => {
  const { getByText } = render(
    
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
    </Provider>
    
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
