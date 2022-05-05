import {NavLink} from 'react-router-dom';

function ForgetPassword() {
  return (
    <>
      <main className="browse-section">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-6">
              <div className="lg_form">
                <div className="main-heading">
                  <h2>Forgot Password</h2>
                  <div className="line-shape1">
                    <img src="images/line.svg" alt="" />
                  </div>
                </div>
                <p className="forgot_des">
                  Enter your email and we'll send a link to reset your password.
                </p>
                <div className="form-group">
                  <label className="label15">Email Address*</label>
                  <input
                    type="email"
                    className="job-input"
                    placeholder="Enter Email Address"
                  />
                </div>
                <button className="lr_btn" type="submit">
                  Reset Password
                </button>
                <div className="done140">
                  Go to
                  <NavLink to="/login">
                    Sign in<i className="fas fa-angle-double-right"></i>
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

export default ForgetPassword;
