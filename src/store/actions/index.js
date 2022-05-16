export const userslist=()=>{
    return {
        type:"USERS_LIST",
        payload:[
               {id:1,name:"Geofrey Ngatia"},
                {id:2,name:"Geor Matui"},
                {id:3,name:"Malice Chani"}
            
        ]
    }
}

export const movielist=()=>{
    return{
        type:"MOVIES_DATA",
        payload:[
            {
                id:3586
                name:"pulp Fiction"
                actors:['Travolta','Deniro']
            }
        ]
    }
}