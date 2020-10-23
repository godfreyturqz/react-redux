import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import allReducers from "./reducers";
import { Provider } from "react-redux";

const myStore = createStore(allReducers)
// //Store

// //action
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }
// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }
// //reducer
// const counter = (state = 0, action) => {
//   switch(action.type){
//     case 'INCREMENT':
//           return state + 1;
//     case 'DECREMENT':
//           return state - 1;
//   }
// }

// let store = createStore(counter)

// //display in console
// store.subscribe(()=> console.log(store.getState()) )

// //dispatch
// store.dispatch(increment())
// store.dispatch(decrement())
// store.dispatch(decrement())


ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


