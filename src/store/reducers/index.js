import React from 'react'
import users from "./users_reducer"
import { combineReducers } from "redux";
 const rootReducer=combineReducers({
  users
  })


export default  rootReducer