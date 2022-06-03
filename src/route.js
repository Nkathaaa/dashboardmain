import { BrowserRouter, Route,Routes, Link,Switch } from 'react-router-dom';
import MainLayout from "./Hoc/mainLayout";
import Auth from "./components/auth/index";
import Home from "./components/home.js";
import Header from "./components/Navigation/header";
import Dashboard from "./components/dashboard/dashboard";
import {isAuthUser} from "./store/actions/users_actions";
import { useSelector,useDispatch} from "react-redux";
import React,{ useEffect,useState} from 'react';
import Loader  from "./utils/loader"
import GuardAccess from "./Hoc/guardAccess"
import  SortedTable from "./components/Table/SortedTable"
import BasicTable from "./components/Table/BasicTable"
import FilteredTable from "./components/Table/FilteringTable"
import RowSelection from "./components/Table/RowSelection"


function Router() {
       //check if user is logged in
  // const [loading,setLoading]=useState(true)
   const users=useSelector(state=>state.users)
   const dispatch=useDispatch()
   useEffect(()=>{
     dispatch(isAuthUser())
   },[dispatch])

   {/*useEffect(()=>{
       if(users.auth !==null){
           setLoading(false)

       }
   }
       
   ) */}
  return (
    <BrowserRouter>
      <Header/>
     {/*{loading ?
        <Loader/>
     : */}
      <MainLayout>
       
        <Routes>
        <Route path ="/tablerow" element={<RowSelection/>}/>
        <Route path ="/tablefilter" element={<FilteredTable/>}/>
            <Route path ="/table" element={<BasicTable/>}/>
            <Route path ="/tablesort" element={<SortedTable/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/auth" element={<Auth />}/>
            <Route path="/" element={<Auth />}/>
        </Routes>
        
     </MainLayout>
{/*} */}
  </BrowserRouter>
  )
}

export default Router;
