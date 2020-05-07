import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as Sentry from '@sentry/browser';
import { ExtraErrorData, CaptureConsole } from '@sentry/integrations';
import {dsn} from './sentry_secret';

Sentry.init({
  dsn,
  integrations: [
    new ExtraErrorData(),
    new CaptureConsole({
      levels: ['warn', 'error', 'debug', 'assert']
    })
  ]
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
