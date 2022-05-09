import { NavLink } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import Select from "react-select";
// import { useNavigate } from 'react-router-dom';

function SignUp() {
  
  // const navigate = useNavigate();
  const [verified, setverified] = useState(false);

  const [profileFor, setProfileFor] = useState("Self");
  const [email, setEmail] = useState("");
  const [cpass, setCPass] = useState("");
  const [pass, setPass] = useState("");
  const [phno, setPhno] = useState("");
  const [validationError,setValidationError] = useState({});

  const profileForOptions = [
    { value: "Self", label: "Self" },
    { value: "Son", label: "Son" },
    { value: "Daughter", label: "Daughter" },
    { value: "Brother", label: "Brother" },
    { value: "Sister", label: "Sister" },
    { value: "Relative", label: "Relative" },
    { value: "Client - Marriage Bureau", label: "Client - Marriage Bureau" },
  ];

  function onChange(value) {
    setverified(true);
  }

  const registerUser = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('for', profileFor)
    formData.append('email', email)
    formData.append('confirm-password', cpass)
    formData.append('password', pass)
    formData.append('contact', phno)

    await axios.post(`http://localhost:8000/api/register`, formData).then(({data})=>{
      Swal.fire({
        icon:"success",
        text:data.msg
      })
      // navigate("/")
      console.log(data);
    }).catch(({response})=>{
      if(response.status===422){
        setValidationError(response.data.errors)
      }else{
        Swal.fire({
          text:response.data.message,
          icon:"error"
        })
      }
    })
  }

  return (
    <>
      <main className="browse-section">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-6">
              <div className="lg_form">
                <div className="main-heading">
                  <h2>Sign Up to {window.AppName}</h2>
                  <div className="line-shape1">
                    <img src="images/line.svg" alt="" />
                  </div>
                </div>
                <form onSubmit={registerUser}>
                  <div className="form-group">
                    <label className="label15">Profile For*</label>
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      defaultValue={profileForOptions[0]}
                      isClearable
                      isSearchable
                      name="profile_for"
                      placeholder="Select Profile For"
                      options={profileForOptions}
                    />
                  </div>
                  <div className="form-group">
                    <label className="label15">Email Address*</label>
                    <input
                      type="email"
                      className="job-input"
                      placeholder="Enter Email Address"
                      name="email"
                      value={email} 
                      onChange={(event)=>{
                        setEmail(event.target.value)
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label className="label15">Phone Number*</label>
                    <input type="tel" id="phone" name="phno" className="job-input" placeholder="Enter Phone No." value={phno} onChange={(event)=>{
                              setPhno(event.target.value)
                            }} />
                  </div>
                  <div className="form-group">
                    <label className="label15">Password*</label>
                    <input
                      type="password"
                      className="job-input"
                      placeholder="Enter Password"
                      name="password"
                      value={pass}
                      onChange={(event)=>{
                        setPass(event.target.value)
                      }}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label className="label15">Confirm Password*</label>
                    <input
                      type="password"
                      className="job-input"
                      placeholder="Enter Confirm Password"
                      name="confirm-password"
                      value={cpass}
                      onChange={(event)=>{
                        setCPass(event.target.value)
                      }}
                    />
                  </div>
                  <div>
                    <ReCAPTCHA
                      sitekey="6Lfd4sIfAAAAAE__2qvNpSoJHjCUIn5SM2RXVWXq"
                      onChange={onChange}
                      style={{ marginTop: "50px" }}
                    />
                  </div>
                  <div
                    className="ui checkbox apply_check check_out checked"
                    style={{ marginTop: "6rem" }}
                  >
                    <input
                      type="checkbox"
                      tabindex="0"
                      className=""
                      id="tandc"
                    />
                    <label
                      style={{ color: "#242424 !important" }}
                      htmlFor="tandc"
                    >
                      I accept the Terms of Services
                    </label>
                  </div>

                  <input
                    type="submit"
                    className="lr_btn"
                    onClick={(e) => {
                      if (!verified) {
                        e.preventDefault();
                      }
                    }}
                    value="Register"
                  />
                </form>

                {/* </Button> */}
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
