import { useState } from "react";
import BasicDetails from "./BasicDetails";
import ProfileDetails from "./ProfileDashboard";

function MyProfileSection() {
  const[TabName, setTabName] = useState('dashboard');

  return (
    <>
      <div className="account_heading">
        <div className="account_hd_left">
          <h2>Manage Your Account</h2>
        </div>
        <div className="account_hd_right">
          <a href="#" className="main_lg_btn">
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
          <button className={` nav-link ${ TabName==='family'?'active':'' }`} onClick={()=>{
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
    </>
  );
}

export default MyProfileSection;
