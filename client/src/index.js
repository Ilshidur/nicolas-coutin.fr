import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';

ReactGA.initialize('UA-62226552-2', {
  debug: process.env.NODE_ENV !== 'production'
});
ReactGA.set({ page: window.location.pathname + window.location.search });
ReactGA.pageview(window.location.pathname + window.location.search);

const alertOptions = {
  offset: '14px',
  position: 'bottom right',
  theme: 'dark',
  time: 10000,
  transition: 'scale'
};

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...alertOptions}>
    <App />
  </AlertProvider>,
  document.getElementById('root'),
);

unregister();
