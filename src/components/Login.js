import React,{useState} from 'react'
import styles from "./auth.css"
import Formfield from "./Formfield/formField"

function Login() {
  const[formvalues,setformvalues]=useState({
    maxAge:80,
    formData:{
        name:{
            element:"input",
            value:"",
            config:{
                name:"name_input",
                type:"text",
                placeholder:"Enter Your Name"
            },
            validation:{
                required:true
            },
            valid:false,
            touched:false,
            validationMessaage:""

        },
        lastname:{
            element:"input",
            value:"",
            config:{
                name:"name_input",
                type:"text",
                placeholder:"Enter Your Name"
            },
            validation:{
                required:true
            },
            valid:false,
            touched:false,
            validationMessaage:""

        }

    }
  })
  
  return (
    <> 
        <div id="auth-left" style={styles}>
        <div className="auth-logo">
          <a href="index.html"><img src="" alt="Logo" /></a>
        </div>
        <h1 className="auth-title">Log in.</h1>
        <p className="auth-subtitle mb-5">Log in with your data that you entered during registration.</p>
        <form action="index.html">
          <div className="form-group position-relative has-icon-left mb-4">
            <input type="text" className="form-control form-control-xl" placeholder="Username" />
            <div className="form-control-icon">
              <i className="bi bi-person" />
            </div>
          </div>
          <div className="form-group position-relative has-icon-left mb-4">
            <input type="password" className="form-control form-control-xl" placeholder="Password" />
            <div className="form-control-icon">
              <i className="bi bi-shield-lock" />
            </div>
          </div>
      
          <div className="form-group position-relative has-icon-left mb-4">
               <Formfield formData={formvalues.formData.name}/>
            <div className="form-control-icon">
              <i className="bi bi-shield-lock" />
            </div>
          </div>
          <div className="form-check form-check-lg d-flex align-items-end">
            <input className="form-check-input me-2" type="checkbox" defaultValue id="flexCheckDefault" />
            <label className="form-check-label text-gray-600" htmlFor="flexCheckDefault">
              Keep me logged in
            </label>
          </div>
     


          <button className="btn btn-primary btn-block btn-lg shadow-lg mt-5">Log in</button>
        </form>
        <div className="text-center mt-5 text-lg fs-4">
        
          <p><a className="font-bold" href="auth-forgot-password.html">Forgot password?</a>.</p>
        </div>

        
      </div>

    </>
  )
}
export default  Login