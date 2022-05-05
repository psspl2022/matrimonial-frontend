import { NavLink } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

function Login() {
    
  const [verified, setverified] = useState(false);

    function onChange(value){
        console.log("Captcha value ",value);
        setverified(true);
      }
    return (
        <>
            <main className="browse-section">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-6">
                            <div className="lg_form">
                                <div className="main-heading">
                                    <h2>Sign in to {window.AppName}</h2>
                                    <div className="line-shape1">
                                        <img src="images/line.svg" alt="" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="label15">Email Address*</label>
                                    <input type="email" className="job-input" placeholder="Enter Email Address" />
                                </div>
                                <div className="form-group mb-4">
                                    <label className="label15">Password*</label>
                                    <input type="password" className="job-input" placeholder="Enter Password" />
                                </div>
                                <div >
                                    <ReCAPTCHA sitekey="6Lfd4sIfAAAAAE__2qvNpSoJHjCUIn5SM2RXVWXq" onChange={onChange} style={{ marginTop:'50px' }}/>
                                </div>
                                <NavLink className="lr_btn" style={{ marginTop:'7rem' }} type="submit" to="/submitlogin">Login</NavLink>
                                <div className="done145">
                                    <div className="done146">
                                        Need an account?<NavLink to="/signUp">Join us Now<i className="fas fa-angle-double-right"></i></NavLink>
                                    </div>
                                    <div className="done147">
                                        <NavLink to="/forgetPassword">Forgot Password?</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}


export default Login;
