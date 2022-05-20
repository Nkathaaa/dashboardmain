import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import SideDrawer from './sideDrawer';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DashboardIcon from '@mui/icons-material/Dashboard';

const Header = (props) => {

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
                <SideDrawer/>
            </nav>
        </>
    )
}

export default Header;