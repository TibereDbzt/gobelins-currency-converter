import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux' ;
import { createStore } from 'redux';
import reducer from './reducers/conversionsReducer';
import GlobalStyle from "./styles/Global";

const store = createStore(reducer);

const path = require('path')
console.log(path.resolve(__dirname, '../.env'));
const res = require('dotenv').config({ path: path.resolve(__dirname, '/./../../.env') });

// if (res.error) {
//     throw res.error
// }

console.log(res.parsed)

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <GlobalStyle />
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();