import React,{useState,useEffect} from 'react'
import { Grid,Paper,TextField,Button,Typography,Link } from "@mui/material"
import {useDispatch,useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';   
import * as Yup from 'yup';
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/Lock';

const Login=(props) =>{
  /* const [register,setRegister]=useState(false)
    const dispatch=useDispatch()

    const formik=useFormik({
        initialValues:{emailAddress:'',password:''},
        validationSchema:Yup.object({
            firstName:Yup
            .string()
            .max(12,"Sorry,the name is too long"),
            lastName:Yup
            .string(),
            emailAddress:Yup
            .string()
            .email("Enter a valid email address")
            .required("Sorry the Name is required"),
            password:Yup
            .string()
            .required("Sorry the Name is required")  
            .min(8,"Sorry,the name is too short"),

           
        }),
        onSubmit:(values,{resetForm})=>{  
            handleSubmit(values) 
        }

        }); 
        const handleSubmit = (values) =>{
       

    // */
    
    
    const paperStyle={ padding:20,height:'70vh',width:350,margin:"20px auto"}
    const avatarStyle={backgroundColor:"green"}
  return (
    <>
         <Grid>
            <Paper style={paperStyle}>
            <Grid align="center">
                <Avatar style={avatarStyle}>
                    <LockIcon/>
                </Avatar>
                <h2>   Sign In </h2>
             </Grid> 
             <TextField  TextField id="standard-basic" variant="standard" label="Email" placeholder="Enter Username" fullWidth required/>
            
             <TextField  TextField id="standard-basic" variant="standard" type="password" label="Password" placeholder="Enter Username" fullWidth required/>
             
             <Button  sx={{marginTop:3,backgroundColor:"green" ,marginBottom:1}}variant="contained" fullWidth >Login</Button>
             <Typography variant="h6">Do you have an account?
             <Link href="#">Sign Up</Link>
             </Typography>
             </Paper>   

            </Grid>

       
                                
                    
       
    </>
  )
}
export default Login