import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { allReducers } from "./reducers/allReducers";

const mainStore = createStore(allReducers)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={mainStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);