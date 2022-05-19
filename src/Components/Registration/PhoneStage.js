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

  useEffect(() => {
    axios.get(`${window.Url}api/sendOtp`, headers_param)
   .then(({ data }) => {
    console.log(data);

   });
 }, []);

 const submitOtpDetails = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("otp", otp);

  const token = window.localStorage.getItem("access_token");
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
        Swal.fire({
          icon: "success",
          text: data.msg,
        });
        dispatch(regActiveLink('profile'));
        history.go(0);
      } else {
        Swal.fire({
          icon: "error",
          text: data.error_msg,
        });
      }
    });
};


  return (
    <>
      <div className="main-heading">
        <h2>Verify Your Gmail</h2>
        <div className="line-shape1">
          <img src="images/line.svg" alt="" />
        </div>
      </div>   
      <form onSubmit={submitOtpDetails}>   
      <div className="form-group">
        <label className="label15">Check Your Gmail and Enter Otp Below</label>
        <input type="text" className="job-input" placeholder="Enter Otp Below" onChange={(event) => {
              setOtp(event.target.value);
            }}
            required />
      </div>

      <input type="submit" className="lr_btn" value="Continue with Otp verification" />
      </form>

    </>
  );
}


export default PhoneStage;
