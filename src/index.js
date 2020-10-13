import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './components/store/store';
import {MarvelApp} from './MarvelApp';

ReactDOM.render(
  <Provider store={ store }>
    <MarvelApp />
    </Provider>,
  document.getElementById('root')
);
