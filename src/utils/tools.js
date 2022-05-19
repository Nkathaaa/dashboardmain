import React from 'react'
import { toast } from 'react-toastify';

const showToast(type,msg) {
  return (
    <>
      switch(type){
        case "SUCCESS":
            toast.success(msg, {
                position: toast.POSITION.TOP_CENTER
              });
        break; 
        case "ERROR":
            toast.error(msg, {
                position: toast.POSITION.TOP_LEFT
              });
        break;
        default
              return false


      }

    </>
  )
}

export default showToast
