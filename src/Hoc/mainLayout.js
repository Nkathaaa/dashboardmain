import React from 'react'
import  Header from "../components/Navigation/header.js"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 const MainLayout=(props)=> (
   <>

  
   <>
     {props.children}
     <ToastContainer/>
   </>

   </>
 )

export  default MainLayout