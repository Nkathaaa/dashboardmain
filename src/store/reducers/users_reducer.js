import {
    USERS_LIST,
    GET_USERS,
    MOVIES_DATA
} from "../types.js"

const DEFAULT_STORE={
    userName:"Francis",
    userId:1234
}

export default function appReducer(state={DEFAULT_STORE},action){

    switch(action.type){
        case USERS_LIST:
            return {...state,userList:action.payload}
        case MOVIES_DATA:
            return { ...state,movieData:action.payload}
        case GET_USERS:
            return { ...state,usersls:action.payload}   
         default :
            return state 
    }

}