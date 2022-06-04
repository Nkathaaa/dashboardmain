import * as users from "./index";
import axios from "axios";
import endpoint from "../../services/endpoint";
import {
  getAuthHeader,
  getTokenCookie,
  removeTokenCookie,
} from "../../utils/tools";

axios.defaults.headers.post["Content-Type"] = "application/json";

export const registerUser = (values) => {
  return async (dispatch) => {
    try {
<<<<<<< HEAD
      const user = await axios.post(`https://h4h.wezatech.co.ke/api/register`,{
       name:values.name,  
       email: values.email,
        password: values.password,
        password_confirmation:values.password
       });
       console.log(user)
      //dispatch(users.authUser({data: user.data, auth: true }))
     // console.log(values);
      
      //dispatch the success toast,the users.successGlobal refers to the funtions under the action type
      //ie for users its users-actions
      dispatch(users.successGlobal("User Succesfully Registered  "));
=======
      const user = await axios.post("http://fundraiser.devops/api/register", {
        name: values.email,
        email: values.email,
        password: values.password,
        password_confirmation: values.password,
      });
      console.log(user);
      // dispatch(users.authUser({ data: user.data, auth: true }));
      // console.log(values);

      //dispatch the success toast,the users.successGlobal refers to the funtions under the action type
      //ie for users its users-actions
      dispatch(users.successGlobal("User registration successfully"));
>>>>>>> ea22fdd55a9d7561880fcb57c7c6aea221d2c544
    } catch (error) {
      dispatch(users.errorGlobal("Error in user registration"));
    }
  };
};

export const signInUser = (values) => {
  return async (dispatch) => {
    try {
<<<<<<< HEAD
      console.log("we are getting here")
     
       const user=await axios.post(`https://h4h.wezatech.co.ke/api/login`,{
        email:values.email,
       password:values.password
       });
     
       dispatch(users.signUser({data:user.data,auth:true}))
       dispatch(users.successGlobal("User Succesfully Logged In "));

  
    } catch (error) {
      dispatch(users.errorGlobal("This is an error"));
   }
  };
};
    


 export const isAuthUser=()=>{
   return async(dispatch)=>{
     try{
       if(!getTokenCookie){
         throw new Error();
       }
     const user=await axios.get(`/api/userAuth`,getAuthHeader())
     dispatch(users.isUserAuth({data:user.data,auth:true}))
     }catch(error){
       dispatch(users.isUserAuth({data:{},auth:false}))

     }

   }
=======
      const user = await axios.post("http://fundraiser.devops/api/login", {
        email: values.email,
        password: values.password,
      });
      dispatch(users.signUser({ data: user.data, auth: true }));
    } catch (error) {
      dispatch(users.errorGlobal("Unauthorized"));
    }
  };
};
>>>>>>> ea22fdd55a9d7561880fcb57c7c6aea221d2c544

export const isAuthUser = () => {
  return async (dispatch) => {
    try {
      if (!getTokenCookie) {
        throw new Error();
      }
      const user = await axios.get(`/api/userAuth`, getAuthHeader());
      dispatch(users.isUserAuth({ data: user.data, auth: true }));
    } catch (error) {
      dispatch(users.isUserAuth({ data: {}, auth: false }));
    }
  };
};

export const signOut = () => {
  return async (dispatch) => {
    removeTokenCookie();
    dispatch(users.signUserOut());
  };
};
