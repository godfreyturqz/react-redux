import { combineReducers } from "redux";
//individual reducers
import { counterReducer } from "./counter";
import { isLoggedReducer } from "./isLogged";
import { usernameReducer, passwordReducer } from "./userdata";

export const allReducers = combineReducers({
    counterReducer,
    isLoggedReducer,
    usernameReducer,
    passwordReducer
})