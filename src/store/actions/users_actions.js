import * as users from './index';
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';


export const registerUser = (values) => {
    return async(dispatch)=>{
        try{
            const user = await axios.post(``,{
                email: values.email,
                password: values.password
            });
             console.log(user)
            dispatch(users.authUser({data: user.data, auth: true }))
     
        } catch(error){
           
        }
    }
}


