import React from 'react';
import { Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import MainPageView from '../MainPageView';
import * as serviceWorker from './serviceWorker';

document.addEventListener('DOMContentLoaded', () => {
  const history = createBrowserHistory();
  ReactDOM.render((
    <Router history={history}>
      <MainPageView />
    </Router>
  ),
  document.getElementById('root'),
  );
  serviceWorker.unregister();
});
