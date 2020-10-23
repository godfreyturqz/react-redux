import React from "react";
//1st step to access the state
import { useSelector, useDispatch } from "react-redux";
//2nd step to execute
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector(state => state.counter)
  const logged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={()=> dispatch(increment(5))}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      <div>Logged: {logged}</div>
    </div>
  );
}

export default App;
