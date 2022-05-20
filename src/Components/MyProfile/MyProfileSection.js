import { useState } from "react";
import AboutMe from "./AboutMe";
import BasicDetails from "./BasicDetails";
import ContactDetails from "./ContactDetails";
import EducationDetails from "./EducationDetails";
import FamilyDetails from "./FamilyDetails";
import LifeStyleDetails from "./LifeStyleDetails";
import LikesDetails from "./LikesDetails";
import ProfileDetails from "./ProfileDashboard";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

function MyProfileSection() {
  const[TabName, setTabName] = useState('dashboard');
	// const [token, setToken] = useState('');
	// const [userData, setUserData] = useState({});
	const history = useHistory();
  const logout = async (e) => {
		e.preventDefault();
		
		const token = window.sessionStorage.getItem("access_token");
		const headers_param = {
		  headers: {
			authorization: "Bearer " + token,
			Accept: "application/json",
			"Content-Type": "application/json"
		  },
		};
	
		await axios
		  .get(`${window.Url}api/logout`, headers_param)
		  .then(({ data }) => {
			if (data.hasOwnProperty("message")) {
			  Swal.fire({
				icon: "success",
				text: data.message,
			  });
			  window.sessionStorage.removeItem('access_token');
          	  window.sessionStorage.removeItem('user_data');
				// setToken('');
				// setUserData('');
			  history.replace('/');
			} else {
			  Swal.fire({
				icon: "error",
				text: data.message,
			  });
			}
		  });
	  };

  return (
    <>
      <div className="account_heading">
        <div className="account_hd_left">
          <h2>Manage Your Account</h2>
        </div>
        <div className="account_hd_right">
          <a href="#" className="main_lg_btn" onClick={logout}>
            Logout
          </a>
        </div>
      </div>
      <div className="account_tabs">
        <ul className="nav nav-tabs">
          <li className="nav-item">
          <button className={` nav-link ${ TabName==='dashboard'?'active':'' }`} onClick={()=>{
              setTabName('dashboard');
            }}>
              Dashboard
            </button>
          </li>
          <li className="nav-item">
            <button className={` nav-link ${ TabName==='basic'?'active':'' }`} onClick={()=>{
              setTabName('basic');
            }}>
              Basic Details
            </button>
          </li>
          <li className="nav-item">
          <button className={` nav-link ${ TabName==='aboutme'?'active':'' }`} onClick={()=>{
              setTabName('aboutme');
            }}>
              About Me
            </button>
          </li>
          <li className="nav-item">
          <button className={` nav-link ${ TabName==='education'?'active':'' }`} onClick={()=>{
              setTabName('education');
            }}>
            Education & Career
            </button>
          </li>
          <li className="nav-item">
          <button className={` nav-link ${ TabName==='family'?'active':'' }`} onClick={()=>{
              setTabName('family');
            }}>
              Family Details
            </button>
          </li>
          <li className="nav-item">
          <button className={` nav-link ${ TabName==='contact'?'active':'' }`} onClick={()=>{
              setTabName('contact');
            }}>
              Contact Details
            </button>
          </li>
          <li className="nav-item">
          <button className={` nav-link ${ TabName==='lifestyle'?'active':'' }`} onClick={()=>{
              setTabName('lifestyle');
            }}>
            Lifestyle
            </button>
          </li>
          <li className="nav-item">
          <button className={` nav-link ${ TabName==='likes'?'active':'' }`} onClick={()=>{
              setTabName('likes');
            }}>
              Your Likes
            </button>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="my_freelancer_setting.html">
              <i className="fas fa-cog"></i>
            </a>
          </li> */}
        </ul>
      </div>
      { TabName==='dashboard' && <ProfileDetails /> }
      { TabName==='basic' && <BasicDetails /> }
      { TabName==='aboutme' && <AboutMe /> }
      { TabName==='education' && <EducationDetails /> }
      { TabName==='family' && <FamilyDetails /> }
      { TabName==='contact' && <ContactDetails /> }
      { TabName==='lifestyle' && <LifeStyleDetails /> }
      { TabName==='likes' && <LikesDetails /> }
    </>
  );
}

export default MyProfileSection;
