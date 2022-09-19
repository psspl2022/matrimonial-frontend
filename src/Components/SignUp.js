import { NavLink } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import Select from "react-select";
import { useHistory } from "react-router-dom";
import CheckTokenExist from "./CheckTokenExist";
import bgimage from "../background2.jpeg";
import TwitterLogin from 'react-twitter-auth';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

// import { useNavigate } from 'react-router-dom';
import validator from 'validator';
function SignUp() {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "SignUp";
  }, [])

  const close = () => {
    setTimeout(() => {
      Swal.close();
    }, 2000);
  };

  // const navigate = useNavigate();
  const [verified, setverified] = useState(false);
  const history = useHistory();

  const [info, setInfo] = useState(false);
  const [validName, setValidName] = useState(true);
  const [validgender, setValidGender] = useState(true);
  const [validemail, setValidemail] = useState(true);
  const [validemob, setValidemob] = useState(true);
  const [validecpass, setValidecpass] = useState(true);
  const [profileFor, setProfileFor] = useState("");
  const [gender, setGender] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpass, setCPass] = useState("");
  const [pass, setPass] = useState("");
  const [phno, setPhno] = useState("");
  const [passError, setPassError] = useState(false);
  const [validationError, setValidationError] = useState({});
  const [requiredError, setRequiredError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')

  function confirmPass(val) {
    setCPass(val);
    if (pass != val && val != "") {
      setPassError(true);
      setverified(false);
    }
    else {
      setPassError(false);
      setverified(true);
    }

  }
  const validate = (value) => {
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage({ 'color': "green", 'msg': "Is Strong Password" })
    } else {
      setErrorMessage({ 'color': "red", 'msg': 'Is Not Strong Password' })
    }
  }
  const gendervalid = ($text) => {
    return !validgender && <span style={{
      color: '#ff0000',
      fontWeight: '400', fontFamily: 'Roboto,helvetica,arial,sans-serif'
    }}> {$text}</span>

  }
  const nameValid = ($text) => {
    return !validName && <span style={{
      color: '#ff0000',
      fontWeight: '400', fontFamily: 'Roboto,helvetica,arial,sans-serif'
    }}> {$text}</span>

  }
  const emailvaild = ($text) => {
    return !validemail && <span style={{
      color: '#ff0000',
      fontWeight: '400', fontFamily: 'Roboto,helvetica,arial,sans-serif'
    }}> {$text}</span>

  }
  const mobValid = ($text) => {
    return !validemob && <span style={{
      color: '#ff0000',
      fontWeight: '400', fontFamily: 'Roboto,helvetica,arial,sans-serif'
    }}> {$text}</span>

  }
  const cpassValid = ($text) => {
    return passError == true || !validecpass && (<span className="text-danger"> {$text}</span>)

  }
  function validat(e) {
    const emailrgx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let rgxname = /^([A-za-z]{3})+(\s{0,1}[a-zA-Z-, ])*$/;
    let rgxmob = /^[6-9]{1}[0-9]{9}$/;
    if (!rgxname.test(name)) {
      setValidName(false);
    }
    else {
      setValidName(true);
    }
    if (!rgxmob.test(phno)) {
      setValidemob(false);
    }
    else {
      setValidemob(true);
    }
    if (!emailrgx.test(email)) {
      setValidemail(false);
    }
    else {
      setValidemail(true);
    }
    if (!gender) {
      setValidGender(false);
    }
    else {
      setValidGender(true);
    }
    // console.log(cpass == pass);
    if (cpass.length == 0 || cpass != pass) {
      setValidecpass(false);
    }
    else {
      setValidecpass(true);
    }
    if (!verified) {
      e.preventDefault();
    }

  }
  const { userExists } = CheckTokenExist();
  const profileForOptions = [
    { value: "Self", label: "Self" },
    { value: "Son", label: "Son" },
    { value: "Daughter", label: "Daughter" },
    { value: "Brother", label: "Brother" },
    { value: "Sister", label: "Sister" },
    { value: "Relative", label: "Relative" },
    { value: "Client - Marriage Bureau", label: "Client - Marriage Bureau" },
  ];

  const genderOptions = [
    { value: "0", label: "Select Gender" },
    { value: "1", label: "Male" },
    { value: "2", label: "Female" },
    { value: "3", label: "Other" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (userExists) {
      history.replace("/myprofile");
    }
  }, []);


  useEffect(() => {
    if ((gender != undefined || gender != null) && (profileFor != undefined || profileFor != null)) {
      setRequiredError(true);
    } else {
      setRequiredError(false);
    }
  }, [gender, profileFor]);

  function onChange(value) {
    setverified(true);
  }



  const registerUser = async (e) => {
    e.preventDefault();
    if (validName == validgender == validemail == validemob == validecpass == true) {
      const formData = new FormData()

      formData.append('for', profileFor.value)
      formData.append('gender', gender.value)
      formData.append('name', name)
      formData.append('email', email)
      formData.append('confirm-password', cpass)
      formData.append('password', pass)
      formData.append('contact', phno)

      await axios.post(`${window.Url}api/register`, formData).then(({ data }) => {
        if (data.hasOwnProperty('msg')) {
          Swal.fire({
            icon: "success",
            text: data.msg
          });
          close();
          window.sessionStorage.setItem('access_token', data.token);
          window.sessionStorage.setItem("gender", JSON.stringify(data.gender));
          window.sessionStorage.setItem('user_data', JSON.stringify(data.user));
          history.replace("/registrationStage");
        }
        else {
          Swal.fire({
            icon: "error",
            text: data.error
          });
          close();
          history.replace("/login");
        }

        // console.log(data);
        // navigate("/")
      }).catch(({ data }) => {
        if (data.hasOwnProperty('errors')) {
          setValidationError(data.errors)
        } else {
          Swal.fire({
            text: data.errors,
            icon: "error"
          });
          close();
        }
      })
    }

  }

  return (
    <>
      <main className="browse-section" style={{ backgroundImage: `url(${bgimage})`, backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', paddingBottom: '40px' }}>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-10">
              <div className="lg_form">
                <div className="main-heading">
                  <h2>Sign Up to {window.AppName}</h2>
                  {/* <div className="line-shape1">
                    <img src="images/line.svg" alt="" />
                  </div> */}
                </div>
                <form onSubmit={registerUser}>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group ">
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
                          onChange={(event) => {
                            setProfileFor(event)
                          }}
                        />
                        <span style={{
                          color: '#ff0000',
                          fontWeight: '400', fontFamily: 'Roboto,helvetica,arial,sans-serif'
                        }}> {(profileFor == undefined || profileFor == null) ? 'Please select a value' : ''}</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="label15">Gender*</label>
                        <Select
                          className="basic-single"
                          classNamePrefix="select"
                          defaultValue={genderOptions[0]}
                          isClearable
                          isSearchable
                          name="gender"
                          placeholder="Select Gender"
                          options={genderOptions}
                          onChange={(event) => {
                            setGender(event)
                          }}
                        />

                        {gendervalid('Please select gender')}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="label15">Full Name*</label>
                        <input
                          type="text"
                          className="job-input"
                          placeholder="Enter Full Name"
                          value={name}
                          onChange={(event) => {
                            setName(event.target.value)
                          }}

                        />
                        {nameValid('Please input valid name')}
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="label15">Email Address*</label>
                        <input
                          type="email"
                          className="job-input"
                          placeholder="Enter Email Address"
                          name="email"
                          value={email}
                          onChange={(event) => {
                            setEmail(event.target.value)
                          }}

                        />
                        {emailvaild("Please Enter Valid Email Adress")}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="label15">Phone Number*</label>
                        <input type="tel" id="phone" name="phno" className="job-input" minlength="10" maxLength="10" placeholder="Enter Phone No." value={phno} onChange={(event) => {
                          setPhno(event.target.value)
                        }} />
                        {mobValid("Please Enter Vaild Mobile Number")}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="label15">Password* <i class="fas fa-info-circle" style={{ cursor: "pointer" }} onClick={() => {
                          setInfo(!info)
                        }}></i> </label>
                        <div class="position-relative" >
                          <div class={info == false ? 'd-none' : ''} style={{ backgroundColor: "black", color: "white", padding: "10px", borderRadius: "5px", position: "absolute", zIndex: "0", top: "-2px" }}>
                            <span class="">Password contain atleast 8 characters.
                              Password should be match all criteria given below:<br /> <ol ><li>English uppercase characters (A – Z)</li> <li>English lowercase characters (a – z)</li> <li>Base 10 digits (0 – 9)</li> <li>Non-alphanumeric (For example: !, $, #, or %)</li></ol></span>
                          </div>
                        </div>
                      </div>
                      <input
                        type="password"
                        className="job-input"
                        placeholder="Enter Password"
                        name="password"
                        value={pass}
                        onChange={(event) => {
                          setPass(event.target.value)
                          validate(event.target.value)
                        }}
                      // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                      // required

                      />
                      {errorMessage === '' ? null :
                        <span style={{
                          color: errorMessage['color']
                        }} > {errorMessage['msg']}</span>
                      }
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mb-4">
                        <label className="label15">Confirm Password*</label>
                        <input
                          type="password"
                          className="job-input"
                          placeholder="Enter Confirm Password"
                          name="confirm-password"
                          value={cpass}
                          onChange={(event) => {
                            setCPass(event.target.value)
                          }}

                        />
                        {(passError == true || !validecpass) && (<span className="text-danger">Confirm Password and Password does not matched </span>)}

                      </div>
                    </div>
                    <div className="col-md-12">
                      <div>
                        <ReCAPTCHA
                          sitekey="6Lfd4sIfAAAAAE__2qvNpSoJHjCUIn5SM2RXVWXq"
                          onChange={onChange}
                        />
                      </div>
                      <div className="ui checkbox apply_check check_out checked">
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
                    </div>
                    <div className="col-md-12 text-center">
                      <input
                        type="submit"
                        className="lr_btn float-none"
                        onClick={(e) => {
                          validat(e)
                        }}
                        value="Register"
                        style={{ cursor: (validationError === false) ? "not-allowed" : (requiredError === false) ? "not-allowed" : "pointer" }}

                      />
                    </div>
                  </div>
                </form>
                {/* </Button> */}
                <div className="done140">
                  Already have an account?
                  <NavLink to="/login">
                    Sign in Now<i className="fas fa-angle-double-right"></i>
                  </NavLink>
                </div>
                <div className="col-1 m-auto">
                  {/* <TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
                    // onFailure={this.twitterResponse} onSuccess={this.twitterResponse}
                    requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse" /> */}
                  {/* <FacebookLogin
                    style={{ maxWidth: "200px" }}
                    appId="XXXXXXXXXX"
                    autoLoad={false}
                    fields="name,email,picture"
                  // callback={this.facebookResponse}
                  /> */}
                  <GoogleLogin
                    clientId="687289036097-685fdvidipeb7ahtkcbf44mhlidr833n.apps.googleusercontent.com"
                    buttonText="Login"
                  // onSuccess={console.log(this.googleResponse)}
                  // onFailure={this.googleResponse}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main >
    </>
  );
}

export default SignUp;
