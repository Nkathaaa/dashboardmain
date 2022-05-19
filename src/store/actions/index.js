import {
    AUTH_USER,
    SIGN_USER,
    ERROR_GLOBAL,
    SUCCESS_GLOBAL

} from '../types';


export const authUser = (user) => ({
    type: AUTH_USER,
    payload: user
});

export const signUser=(user)=>({
    type:SIGN_USER,
    payload:user
});


////notifications////

export const errorGlobal=(msg)=>({
    type:ERROR_GLOBAL,
    payload:msg
})

export const successGlobal=(msg)=>({
    type:SUCCESS_GLOBAL,
    payload:msg
})