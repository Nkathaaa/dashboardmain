import React,{useEffect,useState} from 'react';
import { Link, withRouter } from 'react-router-dom';
import SideDrawer from './sideDrawer';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useLocation } from 'react-router-dom';
import { setLayout } from "../../store/actions/site_actions";
import {useDispatch,useSelector} from "react-redux";
import {  signOut } from "../../store/actions/users_actions"
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
    const [layout,setTheLayout]=useState('');
    const users=useSelector(state=>state.users)
    const location = useLocation();
    const navigate=useNavigate()
    let dispatch=useDispatch()
     console.log(location)

     const signOutUser =()=>{
       dispatch(signOut())
       navigate('/auth')
       
     }
     useEffect(()=>{
       //I need to split the location data
       let patharray=location
       if( patharray[1]==="dashboard"){
        dispatch(setLayout('dash_layout'))
     }else{
       setTheLayout('')
       dispatch(setLayout(''))
     }

       

     },[location,dispatch])

    return(
        <>  
            <nav className="navbar fixed-top">
                <div 
                    className="navbar-brand d-flex align-items-center"
                >
                </div>
                <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <DashboardIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Polls
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
            
            </nav>
        </>
    )
}

export default Header;