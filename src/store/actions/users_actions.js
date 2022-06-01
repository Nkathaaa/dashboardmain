import * as users from "./index";
import axios from "axios";
import endpoint from "../../services/endpoint";
import { getAuthHeader,getTokenCookie,removeTokenCookie } from "../../utils/tools"

// axios.defaults.headers.post["Content-Type"] = "application/json";

export const registerUser = (values) => {
  return async (dispatch) => {
    try {
      //const user = await axios.post(``,{
      //   email: values.email,
      //    password: values.password
      // });
      // console.log(user)
      //dispatch(users.authUser({data: user.data, auth: true }))
      console.log(values);
      
      //dispatch the success toast,the users.successGlobal refers to the funtions under the action type
      //ie for users its users-actions
      dispatch(users.successGlobal("user registered"));
    } catch (error) {
      dispatch(users.errorGlobal("Error in user registration"));
    }
  };
};

export const signInUser = (values) => {
  //return async (dispatch) => {
   // try {
      // const user=await axios.post(``,{
      //  email:values.email,
      //  password:values.password
      // });
      // console.log(values)
      // dispatch(users.signUser({data:user.data,auth:true}))

     // endpoint.get("/sanctum/csrf-cookie").then(() => {
      //  endpoint
      //    .post("/api/login", {
      //      email: values.email,
      //      password: values.password,
      //    })
       //   .then((response) => {
       //     console.log(response.data);
      //    });
     // });
   // } catch (error) {
   //   dispatch(users.errorGlobal("This is an error"));
   // }
  //};
//};
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

 }   

 export const signOut= () => {
  return async (dispatch) => {
      removeTokenCookie();
      dispatch(users.signUserOut())
  }
}
