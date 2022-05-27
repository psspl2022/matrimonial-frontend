import { NavLink } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState({});
  
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [verified, setverified] = useState(false);

  function onChange() {
    setverified(true);
  }

  const loginUser = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    await axios
      .post(`${window.Url}api/login`, formData)
      .then(({ data }) => {
        if (data.hasOwnProperty("msg")) {
          Swal.fire({
            icon: "success",
            text: data.msg,
          });
          window.sessionStorage.setItem('access_token', data.token);
          window.sessionStorage.setItem('user_data',JSON.stringify(data.user));
          history.replace("/registrationStage");
        //   return <Redirect to='/registrationStage' />
        } else {
          Swal.fire({
            icon: "error",
            text: data.error,
          });
        }

      })
      .catch(({ data }) => {
        if (data.hasOwnProperty("error")) {
          setValidationError(data.error);
        } else {
          Swal.fire({
            text: data.error,
            icon: "error",
          });
        }
      });
  };
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
                <form onSubmit={loginUser}>
                  <div className="form-group">
                    <label className="label15">Email Address*</label>
                    <input
                      type="email"
                      className="job-input"
                      placeholder="Enter Email Address"
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label className="label15">Password*</label>
                    <input
                      type="password"
                      className="job-input"
                      placeholder="Enter Password"
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                      required
                    />
                  </div>
                  <div>
                    <ReCAPTCHA
                      sitekey="6Lfd4sIfAAAAAE__2qvNpSoJHjCUIn5SM2RXVWXq"
                      onChange={onChange}
                      style={{ marginTop: "50px" }}
                    />
                  </div>
                  <input
                    type="submit"
                    className="lr_btn"
                    onClick={(e) => {
                      if (!verified) {
                        e.preventDefault();
                      }
                    }}
                    value="Login"
                    style={{marginTop: "7rem", cursor : verified===false ? "not-allowed" : "pointer" }}
                  />
                </form>
                <div className="done145">
                  <div className="done146">
                    Need an account?
                    <NavLink to="/signUp">
                      Join us Now<i className="fas fa-angle-double-right"></i>
                    </NavLink>
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
