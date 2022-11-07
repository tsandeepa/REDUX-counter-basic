import { combineReducers } from "redux";
import countReducer from "./counter";
import isLoggedReducer from "./isLogged";


const allReducers = combineReducers({
  counter: countReducer,
  logged: isLoggedReducer
})

export default allReducers;
