import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { LectoresChile } from './LectoresChile';
import { store } from './store/store';
import './index.css';

ReactDOM.render(
  <Provider store={ store }>
    <LectoresChile/>
  </Provider>,
  document.getElementById('root')
);

