import React,{useState} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Auth=(props) =>{
    const [register,setRegister]=useState(false)
    const formik=useFormik({
        initialValues:{firstName:'',lastName:'',emailAddress:'',password:''},
        validationSchema:Yup.object({
            firstName:Yup
            .string()
            .required("Sorry the Name is required")
            .max(12,"Sorry,the name is too long"),
            lastName:Yup
            .string(),
            emailAddress:Yup
            .string()
            .email("Enter a valid email address"),
            password:Yup
            .string()
            .required("Sorry the Name is required")  
            .min(8,"Sorry,the name is too short"),
            

        }), 
        onSubmit:values=>{
            console.log(values)

        }
    })
  return (
    <>
      <div className="auth_container">
        
                    <form onSubmit={formik.handleSubmit}>
                    <div className="container">
                        <div className="row mb-4">
                            <div className="col">
                            <div className="form-outline">
                            <label className="form-label" for="form3Example1">First name</label>
                                <input type="text" id="form3Example1" className="form-control" name="firstName"  {...formik.getFieldProps('firstName')}/>
                                { formik.errors.firstName && formik.touched.firstName?
                                  <span>{formik.errors.firstName}</span>
                                  :null

                                }
                               
                            </div>
                            </div>
                            <div className="col">
                            <label className="form-label" for="form3Example2">Last name</label>
                            <div className="form-outline">
                                <input type="text" id="form3Example2" className="form-control"  name="lastName"  {...formik.getFieldProps('lastName')}/>
                                { formik.errors.lastName && formik.touched.lastName?
                                  <span>{formik.errors.lastName}</span>
                                  :null

                                }
                            </div>
                            </div>
                        </div>

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

                  
                

                    
                        <button  className="btn btn-success btn-block mb-4">{register ?'Register':'Login'}</button>
                        <button  className="btn btn-primary btn-block  mb-4" OnClick={()=>setRegister(!register)}>Want to {!register?'Register':'Login'}</button>
                       
                     
                      </div>  
                    </form>
                                
                    
        </div>
    </>
  )
}
export default Auth