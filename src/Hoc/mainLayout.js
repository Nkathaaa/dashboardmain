import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import  Header from "../components/Navigation/header.js"

 const MainLayout=(props)=> (
   <>

   <Header/>
   <>
     {props.children}
   </>

   </>
 )

export  default MainLayout