import {
    AUTH_USER
} from '../types';


export const authUser = (user) => ({
    type: AUTH_USER,
    payload: user
});