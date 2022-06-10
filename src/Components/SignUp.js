import { NavLink } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import Select from "react-select";
import { useHistory } from "react-router-dom";
import CheckTokenExist from "./CheckTokenExist";
import bgimage from "../background2.jpeg";
// import { useNavigate } from 'react-router-dom';

function SignUp() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // const navigate = useNavigate();
  const [verified, setverified] = useState(false);
  const history = useHistory();

  const [profileFor, setProfileFor] = useState("Self");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpass, setCPass] = useState("");
  const [pass, setPass] = useState("");
  const [phno, setPhno] = useState("");
  const [passError, setPassError] = useState(false);
  const [validationError,setValidationError] = useState({});

  const {userExists} = CheckTokenExist();
  
  const profileForOptions = [
    { value: "Self", label: "Self" },
    { value: "Son", label: "Son" },
    { value: "Daughter", label: "Daughter" },
    { value: "Brother", label: "Brother" },
    { value: "Sister", label: "Sister" },
    { value: "Relative", label: "Relative" },
    { value: "Client - Marriage Bureau", label: "Client - Marriage Bureau" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    if(userExists){
      history.replace("/myprofile");
    }
  }, []);

  function onChange(value) {
    setverified(true);
  }

  function confirmPass(val){
    setCPass(val);
    if(pass!=val && val!=""){
      setPassError(true);
      setverified(false);
    }
    else{
      setPassError(false);
      setverified(true);
    }

  }

  const registerUser = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('for', profileFor)
    formData.append('name', name)
    formData.append('email', email)
    formData.append('confirm-password', cpass)
    formData.append('password', pass)
    formData.append('contact', phno)

    await axios.post(`${window.Url}api/register`, formData).then(({data})=>{
      if (data.hasOwnProperty('msg')) {
        Swal.fire({
          icon:"success",
          text:data.msg
        })
        window.sessionStorage.setItem('access_token', data.token);
        window.sessionStorage.setItem('user_data',JSON.stringify(data.user));
        history.replace("/registrationStage");
    }
    else{
      Swal.fire({
        icon:"error",
        text:"Check Your Fields Properly"
      })
    }
      
      // console.log(data);
      // navigate("/")
    }).catch(({data})=>{
      if(data.hasOwnProperty('errors')){
        setValidationError(data.errors)
      }else{
        Swal.fire({
          text:data.errors,
          icon:"error"
        })
      }
    })
  }

  return (
    <>
      <main className="browse-section" style={{ backgroundImage: `url(${bgimage})`, backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundSize: 'cover',  paddingBottom: '40px' }}>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-6">
              <div className="lg_form">
                <div className="main-heading">
                  <h2>Sign Up to {window.AppName}</h2>
                  {/* <div className="line-shape1">
                    <img src="images/line.svg" alt="" />
                  </div> */}
                </div>
                <form onSubmit={registerUser}>
                  <div className="form-group mt-0">
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
                    <label className="label15">Full Name*</label>
                    <input
                      type="text"
                      className="job-input"
                      placeholder="Enter Full Name"
                      value={name} 
                      onChange={(event)=>{
                        setName(event.target.value)
                      }}
                      required
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
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="label15">Phone Number*</label>
                    <input type="tel" id="phone" name="phno" className="job-input" maxLength="10" placeholder="Enter Phone No." value={phno} onChange={(event)=>{
                              setPhno(event.target.value)
                            }} required />
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
                      pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                      required
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
                        confirmPass(event.target.value)
                      }}
                      pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                      required
                    />
                    {passError==true && (<span className="text-danger">Confirm Password and Password does not matched</span>) }
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
                      required
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
                    style={{cursor : verified===false ? "not-allowed" : "pointer" }}
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
