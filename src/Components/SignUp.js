import { NavLink } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";



function SignUp() {

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
                  <h2>Sign Up to NamdeoMatrimonial</h2>
                  <div className="line-shape1">
                    <img src="images/line.svg" alt="" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="label15">Email Address*</label>
                  <input
                    type="email"
                    className="job-input"
                    placeholder="Enter Email Address"
                  />
                </div>
                <div className="form-group">
                  <label className="label15">Password*</label>
                  <input
                    type="password"
                    className="job-input"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="form-group">
                  <label className="label15">Confirm Password*</label>
                  <input
                    type="password"
                    className="job-input"
                    placeholder="Enter Confirm Password"
                  />
                </div>
                
                <div className="ui checkbox apply_check check_out checked">
                  <input type="checkbox" tabindex="0" className="hidden" />
                  <label style={{color:'#242424 !important'}}>
                    I accept the Terms of Services
                  </label>
                </div>
                <div >
                  <ReCAPTCHA sitekey="6Lfd4sIfAAAAAE__2qvNpSoJHjCUIn5SM2RXVWXq" onChange={onChange}/>
                </div>
                <NavLink to="/findMatches" className="lr_btn" onClick={(e)=>{
                  if(!verified){
                    e.preventDefault()
                  }
                }} disabled={!verified}>
                  Register
                </NavLink>
                <div className="done140">
                  Already have an account?
                  <NavLink to="/login">
                    Sign in Now<i className="fas fa-angle-double-right"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </>
  );
}


export default SignUp;
