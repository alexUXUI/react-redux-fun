import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import CounterContainer from './containers/counter/counter.container';

import { Provider } from 'react-redux'
import Store from './store/store.dev'

import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <Provider store={ Store }>
    <CounterContainer />
  </Provider>,
  document.getElementById('root')
);
