import {
    USERS_LIST,
    GET_USERS,
    MOVIES_DATA
} from "../types.js"

import axios from "axios";
export const userslist=()=>{
    return {
        type:USERS_LIST,
        payload:[
               {id:1,name:"Geofrey Ngatia"},
                {id:2,name:"Geor Matui"},
                {id:3,name:"Malice Chani"}
            
        ]
    }
}

export const movieData=()=>{
    return{
        type:MOVIES_DATA,
        payload:{
            
                id:3586,
                name:"pulp Fiction",
                actors:['Travolta','Deniro'],
                year:1990,

            
        }
    }
}

export  const getUser=()=>{
    const request=axios.get(`https://jsonplaceholder.typicode.com/users`)
                  .then(response=>{
                      return response.data
                  });

 return{
         type:GET_USERS,
         payload:request
 }
}