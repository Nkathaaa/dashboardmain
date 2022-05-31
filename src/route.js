
import { BrowserRouter, Route,Routes, Link,Switch } from 'react-router-dom';
import MainLayout from "./Hoc/mainLayout";
import Auth from "./components/auth"
import Home from "./components/home.js"
import Header from "./components/Navigation/header"
import Dashboard from "./components/dashboard/dashboard"
import {isAuthUser} from "./store/actions/users_actions"
import { useSelector,useDispatch} from "react-redux"
import{ useEffect,useState} from 'react'
import Loader  from "./utils/loader"
import GuardAccess from "./Hoc/guardAccess"
import  SignOutContainer from "./containers/index"
import Login from "./components/login"
import SignUp from "./components/signup"
import TableContainer from "./components/TableContainer/tableContainer"
import SignInSide from "./components/auth/signinside"

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
  
     {/*{loading ?
        <Loader/>
     : */}
      <MainLayout>
        <Routes>
        <Route path="/sign" element={<SignInSide/>}/> 
         <Route path="/table" element={<TableContainer/>}/>  
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
           <Route path="/signout" element={<SignOutContainer/>}/>
            <Route path="/dashboard" element={GuardAccess(Dashboard)}/>
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
