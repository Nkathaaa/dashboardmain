import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link as RouterLink} from "react-location"

const AdminLayout = () => {
  return (
    <div className="row adminLayout">
        <nav className="col-md-2 d-none d-md-block sidebar">
            <div>
                
               
            <List>
          <ListItem >
            <ListItemButton component={RouterLink } to="dashboard">
            
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
         
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
        </List>
             </div>



        </nav>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-wrap align-items-center pb-2 border-bottom">
                <h1 className="h2">
                 </h1>   
            </div>   
            {props.children} 

        </main>    

    </div>
  )
}

export default AdminLayout