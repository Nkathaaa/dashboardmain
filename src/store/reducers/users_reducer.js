export default function(state={},action){

    switch(action.type){
        case "USERS_LIST":
            return action.payload
         default :
            return state 
    }

}