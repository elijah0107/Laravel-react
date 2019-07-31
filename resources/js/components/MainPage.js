import React from 'react';
import { createStore } from '../service/store';
import { createWatcher } from '../sagas/_index';
import { createAPI } from '../service/api';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';
import reducer from '../reducers/_index';
import MainPageView from '../Connector';

document.addEventListener('DOMContentLoaded', () => {
  const history = createBrowserHistory();
  const store = createStore(reducer, createWatcher({
    api: createAPI(),
    history,
  }));
  ReactDOM.render(
    (
      <Provider store={store}>
        <MainPageView />
      </Provider>
    ),
    document.getElementById('root'),
  );
  serviceWorker.unregister();
});
