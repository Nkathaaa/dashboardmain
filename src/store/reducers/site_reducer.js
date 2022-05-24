
import{
    LAYOUT
} from "./../types"
export  default function siteReducer(state={},action){
    switch(action.type){
        case LAYOUT:
            return {...state, layout:action.payload}
        default:
            return state    
    }


}

