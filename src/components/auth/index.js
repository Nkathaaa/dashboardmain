import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Auth=(props) =>{
    const formik=useFormik({
        initialValues:{email:'',password:''},
        validationSchema:Yup.object({
            email:Yup.string()
            .required("Sorry the email is required")
            .email("This is not a  valid emauil"),
             password:Yup.string()
             .required("Sorry the password is required")

        }),
        onSubmit:(values,{resetForm})=>{
            console.log(values)

        }
    })
  return (
    <>
      <div className="auth_container">
        </div>
    </>
  )
}
export default Auth