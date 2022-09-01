import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { regActiveLink } from '../../actions/index';


function PhoneStage() {
  const [otp,setOtp] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const token = window.sessionStorage.getItem('access_token');
  const headers_param = {
    headers: {
      'authorization': 'Bearer ' + token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  const close = () =>{
    setTimeout(() => {
      Swal.close();
    }, 2000);
  };

  useEffect(() => {
    axios.get(`${window.Url}api/sendOtp`, headers_param)
   .then(({ data }) => {
   });
 }, []);

 const submitOtpDetails = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("otp", otp);

  const token = window.sessionStorage.getItem("access_token");
  const headers_param = {
    headers: {
      authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  await axios
    .post(`${window.Url}api/checkOtp`, formData, headers_param)
    .then(({ data }) => {
      if (data.hasOwnProperty("msg")) {
        dispatch(regActiveLink('profile'));
        history.go(0);
      } else {
        Swal.fire({
          icon: "error",
          text: data.error_msg,
        });
        close();
      }
    });
};

const skipStage = async (e) => {
  e.preventDefault();

  const token = window.sessionStorage.getItem("access_token");
  const headers_param = {
    headers: {
      authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  await axios
    .get(`${window.Url}api/skipOtp`, headers_param)
    .then(({ data }) => {
      if (data.hasOwnProperty("msg")) {
        Swal.fire({
          icon: "success",
          text: data.msg,
        });
        close();
        dispatch(regActiveLink('profile'));
        history.go(0);
      } else {
        Swal.fire({
          icon: "error",
          text: data.error_msg,
        });
        close();
      }
    });
};


  return (
    <>
<div className="col-md-6 mx-auto">
    

{/* <script src="js/jquery-2.1.4.js"></script>
<script src="js/jquery.mobile.custom.min.js"></script>
<script src="js/main.js"></script>  */}
    <div className="lg_form">
      <div className="main-heading ">
        <h2>Verify Your E-mail</h2>
        <div className="line-shape1">
          <img src="images/line.svg" alt="" />
        </div>
      </div>   
      <form onSubmit={submitOtpDetails}>
        <div className="row">
          <div className="col-md-12">
          <div className="form-group">
        <label className="label15">Check Your E-mail and Enter Otp Below </label><span className="float-right mr-2 text-primary bg-light font-weight-bold" style={{ cursor:'pointer'}}onClick={skipStage}><u>Skip Now</u></span>
        <input type="text" className="job-input" placeholder="Enter Otp Below" onChange={(event) => {
              setOtp(event.target.value);
            }}
            required />
      </div>
          </div>
          <div className="col-md-12 mt-4 text-center">
          <input type="submit" className="lr_btn float-none" value="Continue with Otp verification" />
          </div>
     </div>
      </form>
      </div>
      </div>
    </>
  );
}


export default PhoneStage;
