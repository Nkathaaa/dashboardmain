import React,{useState,useEffect} from 'react'
import { Grid,Paper,TextField,Button,Typography,Link } from "@mui/material"
import {useDispatch,useSelector} from "react-redux"
import FormControlLabel from '@mui/material/FormControlLabel'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';   
import * as Yup from 'yup';
import Checkbox from '@mui/material/Checkbox';

const SignUp=(props) =>{
    const [register,setRegister]=useState(false)
    const dispatch=useDispatch()

    /*const formik=useFormik({
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
       

        }
    */
        const paperStyle = { padding: 20, width: 400, margin: "0 auto" }
        const headerStyle = { margin: 0 }
        const avatarStyle = { backgroundColor: 'green' }
        const marginTop = { marginTop: 5 }
    
  return (
    <>
                    <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' variant="standard" placeholder="Enter your name" />
                    <TextField fullWidth label='Email'  variant="standard" placeholder="Enter your email" />
                    <TextField fullWidth label='Phone Number' variant="standard" placeholder="Enter your phone number" />
                    <TextField fullWidth label='Password'  variant="standard" placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password'variant="standard"  placeholder="Confirm your password"/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' color='success'>Sign up</Button>
                </form>
            </Paper>
        </Grid>
                    
       
    </>
  )
}
export default SignUp