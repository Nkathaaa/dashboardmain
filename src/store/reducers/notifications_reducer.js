import {
    ERROR_GLOBAL

} from '../types';


export default function notificationsReducer(state={},action){
    switch(action.type){
        case ERROR_GLOBAL:
            return {...state,error:true,msg:action.payload}
    }
}