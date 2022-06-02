import React from 'react';
import { toast } from 'react-toastify';
import cookie from "react-cookies"

export const showToast=(type,msg)=> {
  
      switch(type){
        case "SUCCESS":
            toast.success(msg, {
                position: toast.POSITION.TOP_LEFT
              });
        break; 
        case "ERROR":
            toast.error(msg, {
                position: toast.POSITION.TOP_LEFT
              });
        break;
        default:
              return false


      }

  
  
}
export const getTokenCookie=()=>cookie.load('x-access-token')
export const removeTokenCookie=()=>cookie.remove('x-access-token')
export const getAuthHeader={ headers :{'x-access-token':getTokenCookie()}}
