import React from 'react';
import { Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history'
import CheckoutView from '../CheckoutView';
import * as serviceWorker from './serviceWorker';

document.addEventListener('DOMContentLoaded', () => {
  const history = createBrowserHistory()
  ReactDOM.render(
    (
      <Router history={history}>
        <CheckoutView />
      </Router>
    ),
    document.getElementById('checkout'),
  );
  serviceWorker.unregister();
});
