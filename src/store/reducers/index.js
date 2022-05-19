import { combineReducers } from 'redux';
import users from './users_reducer.js';
import notifications from './notifications_reducer.js';


const rootReducer = combineReducers({
  
    users,
    notifications
   
});

export default rootReducer;