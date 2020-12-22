import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider } from '@material-ui/styles';

import App from './components/App/App';
import { GlobalProvider } from './context/GlobalContext';
import './styles/global.scss';

ReactDOM.render(
  <GlobalProvider>
    <StylesProvider injectFirst>
      <App />
    </StylesProvider>
  </GlobalProvider>,
  document.getElementById('root')
);