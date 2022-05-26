import * as site from "./index"
import{
    LAYOUT
} from "./../types"




export const setLayout=(layout)=>{
    return (dispatch)=>{
         dispatch(site.appLayout(layout))
        
    }
}
