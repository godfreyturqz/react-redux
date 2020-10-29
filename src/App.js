import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login, logout, handleUsername, handlePassword } from "./actions/actions";

function App() {
  const counter = useSelector(state => state.counterReducer)
  const isLogged = useSelector(state => state.isLoggedReducer)
  const username = useSelector(state => state.usernameReducer)
  const password = useSelector(state => state.passwordReducer)
  const dispatch = useDispatch()

  return (
    <div>
      {isLogged == 'logged-in' && 
        <div>
          {username && <div>Hi! {username}</div>}
          {password && <div>Your password is: {password}</div>}
          <br/>
          <div>Counter: {counter}</div>
          <button onClick={()=> dispatch(increment())}>+</button>
          <button onClick={()=> dispatch(decrement())}>-</button>
        </div>
      }
      <br/>
      <input type="text" placeholder="username" onChange={(e)=> dispatch(handleUsername(e.target.value))} />
      <input type="password" placeholder="password" onChange={(e)=> dispatch(handlePassword(e.target.value))} />
      <button onClick={()=> dispatch(login())}>Log-in</button>
      <button onClick={()=> dispatch(logout())}>Log-out</button>
      <div>Status: {isLogged}</div>
      
    </div>
  );
}

export default App; 
