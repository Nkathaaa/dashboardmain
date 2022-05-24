import {
    AUTH_USER,
    SIGN_USER,
    ERROR_GLOBAL,
    SUCCESS_GLOBAL,
    CLEAR_NOTIFICATION,
    ISUSER_AUTH,
    LAYOUT

} from '../types';


export const authUser = (user) => ({
    type: AUTH_USER,
    payload: user
});

export const signUser=(user)=>({
    type:SIGN_USER,
    payload:user
});

export const isUserAuth=(user)=>({
    type:ISUSER_AUTH,
    payload:user
    
})

////notifications////

export const errorGlobal=(msg)=>({
    type:ERROR_GLOBAL,
    payload:msg
})

export const successGlobal=(msg)=>({
    type:SUCCESS_GLOBAL,
    payload:msg
})

export const clearNotifications=()=>{
    return(dispatch)=>{
        dispatch({
            type:CLEAR_NOTIFICATION

        })
    }
    
}

///////site////
export const appLayout=(layout)=>({
    type:LAYOUT,
    payload:layout
})


