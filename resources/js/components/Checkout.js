import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import CheckoutView from '../CheckoutView';
import * as serviceWorker from './serviceWorker';
import { createStore } from '../service/store';
import { createWatcher } from '../sagas/_index';
import { createAPI } from '../service/api';
import reducer from '../reducers/_index';

document.addEventListener('DOMContentLoaded', () => {
  const history = createBrowserHistory();
  const store = createStore(reducer, createWatcher({
    api: createAPI(),
    history,
  }));
  ReactDOM.render(
    (
      <Provider store={store}>
        <Router history={history}>
          <CheckoutView />
        </Router>
      </Provider>
    ),
    document.getElementById('checkout'),
  );
  serviceWorker.unregister();
});
