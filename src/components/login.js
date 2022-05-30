import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';   
import * as Yup from 'yup';

const Login=(props) =>{
    const [register,setRegister]=useState(false)
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
       

        }
    
    
  return (
    <>
             <form onSubmit={formik.handleSubmit} style={{marginTop: "120px"}} >
        




                            <div className="container">
                       

                        <div className="form-outline mb-4">
                        <label className="form-label" for="form3Example3">Email address</label>
                            <input type="email" id="form3Example3" className="form-control"  name="emailAddress"  {...formik.getFieldProps('emailAddress')}/>
                            { formik.errors.emailAddress && formik.touched.emailAddress?
                                  <span>{formik.errors.emailAddress}</span>
                                  :null

                                }          
                    
                        </div>

                        <div className="form-outline mb-4">
                        <label className="form-label" for="form3Example4">Password</label>
                            <input type="password" id="form3Example4" className="form-control"  name="password" {...formik.getFieldProps('password')} />
                            { formik.errors.password && formik.touched.password?
                                  <span>{formik.errors.password}</span>
                                  :null

                   
                  
                             }
                        </div>


                        </div> 

                            

                       <div className="container">
                        <button  className="btn btn-success btn-block ">{register ?'Register':'Login'}</button>
                      
                       </div> 
                            
                       
                    </form>
                                
                    
       
    </>
  )
}
export default Login