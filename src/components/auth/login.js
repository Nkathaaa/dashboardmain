import React,{useState,useEffect} from 'react'
import { Grid,Paper,TextField,Button,Typography,Link } from "@mui/material"
import {useDispatch,useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';   
import { registerUser } from "../../store/actions/users_actions"
import * as Yup from 'yup';
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/Lock';


const Login=(props) =>{
   const [register,setRegister]=useState(false)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const formik=useFormik({
      initialValues:{ email:'',password:''},
      validationSchema:Yup.object({
          email:Yup.string()
          .required('Sorry the email is required')
          .email('This is not a valid email'),
          password:Yup.string()
          .required('Sorry the password is required')
      }),
        onSubmit:(values,{resetForm})=>{  
            handleSubmit(values) 
        }

        }); 
        const handleSubmit = (values) =>{
          dispatch(registerUser())
          navigate('/dashboard')

        }
    
        const errorHelper = (formik, values) => ({
          error: formik.errors[values] && formik.touched[values] ? true:false,
          helperText: formik.errors[values] && formik.touched[values] ? formik.errors[values] : null
      });
    const paperStyle={ padding:20,height:'70vh',width:350,margin:"20px auto"}
    const avatarStyle={backgroundColor:"green"}
  return (
    <>
     <form className="mt-3" onSubmit={formik.handleSubmit}>
         <Grid>
            <Paper style={paperStyle}>
            <Grid align="center">
                <Avatar style={avatarStyle}>
                    <LockIcon/>
                </Avatar>
                <h2>   Sign In </h2>
             </Grid> 
             <TextField  
             TextField id="standard-basic"
             variant="standard"
              label="Email" 
               placeholder="Enter Username"
              fullWidth required
                {...formik.getFieldProps('email')}
                {...errorHelper(formik,'email')}/>
            
             <TextField 
              TextField id="standard-basic"
               variant="standard"
                type="password"
                 label="Password"
                  placeholder="Enter Username" 
                  fullWidth required
                  {...formik.getFieldProps('password')}
                  {...errorHelper(formik,'password')}/>
             
             <Button type="submit" sx={{marginTop:3,backgroundColor:"#3bcf93" ,marginBottom:1}}variant="contained" fullWidth >Login</Button>
          
             </Paper>   

            </Grid>
          

            </form>

       
                                
                    
       
    </>
  )
}
export default Login