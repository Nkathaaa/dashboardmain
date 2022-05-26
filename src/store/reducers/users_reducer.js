import {
    AUTH_USER,
    SIGN_USER,
    SIGNOUT

} from '../types';

let DEFAULT_USER_STATE = {
    data: {
        _id: '',
        email: '',
        firstname:'',
        lastname:'',
        password:'' 
    },
    auth:''
}

export default function usersReducer(state=DEFAULT_USER_STATE,action){
    switch(action.type){
        case AUTH_USER:
            return { ...state,
                data: { ...state.data, ...action.payload.data},
                auth: action.payload.auth
            }
        case SIGN_USER:
            return{...state,
                data:{...state.data,...action.payload.data},
                auth:action.payload.auth
            } 
        case SIGNOUT:
            return{...state,
                data:{...DEFAULT_USER_STATE.data},
                auth:false     
        }    
      
        default:
            return state
    }
}