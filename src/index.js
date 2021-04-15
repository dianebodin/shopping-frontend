import React from 'react';
import ReactDOM from 'react-dom';
import './app/index.css';
import { Provider } from 'react-redux';
import { store } from './app/lib/store';
import { AppContainer } from './app/views/index';

//store.dispatch(addToCart({ name: "citron" }, 5));
const unsubscribe = store.subscribe(() => console.log(store.getState()));
unsubscribe();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);