import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { regActiveLink } from '../../actions/index';


function ProfileImageStage() {
  const [image,setImage] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

   function handleChange(e){
    setImage(e.target.files[0]);
}
const submitImageDetails = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("image", image);

  const token = window.sessionStorage.getItem("access_token");
  const headers_param = {
    headers: {
      authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  await axios
    .post(`${window.Url}api/storeProfileImage`, formData, headers_param)
    .then(({ data }) => {
      if (data.hasOwnProperty("msg")) {
        Swal.fire({
          icon: "success",
          text: data.msg,
        });
        dispatch(regActiveLink('profileImg'));
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
        <h2>Setup Your Profile Image</h2>
        <div className="line-shape1">
          <img src="images/line.svg" alt="" />
        </div>
      </div>
      <form onSubmit={submitImageDetails} encType="multipart/form-data">
        <div className="form-group">
          <label className="label15">Select Profile Image</label>
          <input type="file" className="form-control" onChange={ handleChange } />
        </div>

        <input type="submit" className="lr_btn" value="Ready to go" />
      </form>
    </>
  );
}

export default ProfileImageStage;
