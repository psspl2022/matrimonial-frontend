
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import $ from "jquery";
import { useSelector, useDispatch } from "react-redux";
import { regActiveLink } from '../../actions/index';
import { useHistory } from "react-router-dom";

function MyProfileSidebar() {
  const token = window.sessionStorage.getItem("access_token");
	const history = useHistory();
  const headers_param = {
    headers: {
      authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  
  useEffect(() => {
    axios
      .get(`${window.Url}api/basicDropdown`, headers_param)
      .then(({ data }) => {
        // setCountries(
        //   data.country.map(function (country) {
        //     return { value: country.id, label: country.name };
        //   })
        // );

      });
  }, []);

  return (
    <>
      <div className="account_dt_left">
        <div className="job-center-dt">
          <img src="profile2.jpg" alt="" />
          <div className="job-urs-dts">
            <div className="dp_upload">
              <input type="file" id="file" />
              <label htmlFor="file">Upload Photo</label>
            </div>
            <h4>Kartik Aryan</h4>
            {/* <span>UX Designer</span> */}
            <div className="avialable">
              Active Now
              <a href="#">
              <i style={{ fontSize:'13px', color:'green' }} className="fa">&#xf111;</i>
              </a>
            </div>
          </div>
        </div>
        <div className="my_websites">
          <ul>
          <li>
              <a href="#" className="web_link">
                <i className="fas fa-globe"></i>Current Membership Plan: <span style={{color:'brown'}}>Gold</span>
              </a>
            </li>
            {/* <li>
              <a href="#" className="web_link">
                <i className="fas fa-globe"></i>www.companysite.com
              </a>
            </li>
            <li>
              <a href="#" className="web_link">
                <i className="far fa-edit"></i>www.blogsite.com
              </a>
            </li> */}
          </ul>
        </div>
        <div className="group_skills_bar">
          <h6>Profile Completeness</h6>
          <div className="group_bar1">
            <span>85%</span>
            <div className="progress skill_process">
              <div
                className="progress-bar progress_bar_skills"
                role="progressbar"
                style={{ width: '85%' }}
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <a href="#" className="skiils_button">
            Complete Required Skills
          </a>
        </div>
        {/* <div className="rlt_section">
          <div className="rtl_left">
            <h6>Rating</h6>
          </div>
          <div className="rtl_right">
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <span>4.9</span>
            </div>
          </div>
        </div> */}
        {/* <div className="rlt_section">
          <div className="rtl_left">
            <h6>Location</h6>
          </div>
          <div className="rtl_right">
            <span>
              <i className="fas fa-map-marker-alt lc_icon"></i> Ludhiana, India
            </span>
          </div>
          <div className="my_location">
            <div id="map"></div>
          </div> */}
          {/* <ul className="rlt_section2">
            <li>
              <div className="rtl_left2">
                <h6>Hourly Rate</h6>
              </div>
              <div className="rtl_right2">
                <span>$50 / hr</span>
              </div>
            </li>
            <li>
              <div className="rtl_left2">
                <h6>Age</h6>
              </div>
              <div className="rtl_right2">
                <span>28</span>
              </div>
            </li>
            <li>
              <div className="rtl_left2">
                <h6>Experenice</h6>
              </div>
              <div className="rtl_right2">
                <span>5 Year</span>
              </div>
            </li>
            <li>
              <div className="rtl_left2">
                <h6>Job Done</h6>
              </div>
              <div className="rtl_right2">
                <span>69</span>
              </div>
            </li>
          </ul> */}
        {/* </div> */}
        <div className="social_section3 mb80">
          <div className="social_leftt3">
            <h6>Contact Social Account</h6>
          </div>
          <div className="social_right3">
            <a href="#">
              <i className="far fa-edit"></i>
            </a>
          </div>
          <ul className="social_accounts">
            <li>
              <a href="#" className="social_links">
                <i className="fab fa-facebook-f f1"></i>
                http://facebook.com/johndoe
              </a>
            </li>
            <li>
              <a href="#" className="social_links">
                <i className="fab fa-twitter t1"></i>
                http://twitter.com/johndoe
              </a>
             </li>
            {/*<li>
              <a href="#" className="social_links">
                <i className="fab fa-linkedin-in l1"></i>
                http://linkedin.com/johndoe
              </a>
            </li>
            <li>
              <a href="#" className="social_links">
                <i className="fab fa-dribbble d1"></i>
                http://dribbble.com/johndoe
              </a>
            </li>
            <li>
              <a href="#" className="social_links">
                <i className="fab fa-behance b1"></i>
                http://behance.net/johndoe
              </a>
            </li>
            <li>
              <a href="#" className="social_links">
                <i className="fab fa-github g1"></i>
                http://github.com/johndoe
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
}

export default MyProfileSidebar;