
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import { Grid,Paper,TextField,Button,Typography,Link } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Login from "./login"
import SignUp from "./signup"


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const paperStyle={ width:600,margin:'120px auto'}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Auth() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
  
      <Grid container component="main" sx={{ height: '100vh' }}>
    
      <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
           // backgroundImage: 'url(https://h4h.wezatech.co.ke/frontend/assets/img/banner/428c74a137f69269.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#3bcf93',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
  
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Box sx={{ borderBottom: 1, borderColor: '#3bcf93' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{marginRight:10}}label="LOGIN" {...a11yProps(0)} />
          <Tab label="REGISTER" {...a11yProps(1)} />
        
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Login/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <SignUp/>
      </TabPanel>

        </Grid>

        </Grid>

    
  
 
  );
}