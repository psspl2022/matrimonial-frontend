import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import $ from "jquery";
import { useDispatch } from "react-redux";
import { regActiveLink } from "../../actions/index";
import { useHistory } from "react-router-dom";

function MyProfileSidebar() {
  const token = window.sessionStorage.getItem("access_token");
  const dispatch = useDispatch();
  const history = useHistory();
  const [memdata, setMemData] = useState([]);
  const [userData, setUserData] = useState({});
  const [gender, setGender] = useState({});
  const [userImage, setUserImage] = useState();
  const [image, setImage] = useState();
  const [imageInProcess, setImageInProcess] = useState(false);

  const headers_param = {
    headers: {
      authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const close = () =>{
    setTimeout(() => {
      Swal.close();
    }, 2000);
  };

  useEffect(() => {
    if (sessionStorage.hasOwnProperty("user_data")) {
      const user_data = window.sessionStorage.getItem("user_data");
      setUserData(JSON.parse(user_data));
      setGender(window.sessionStorage.getItem("gender"));
      profileSidebar();
      basicDropdown();
      getProfileImage();
    }
  }, []);

  const basicDropdown = () => {
    axios
      .get(`${window.Url}api/basicDropdown`, headers_param)
      .then(({ data }) => {
        // setCountries(
        //   data.country.map(function (country) {
        //     return { value: country.id, label: country.name };
        //   })
        // );
      });
  };

  const getProfileImage = () => {
    axios
      .get(`${window.Url}api/getProfileImage`, headers_param)
      .then(({ data }) => {
        if (data.hasOwnProperty("msg")) {
         setUserImage(`${window.Url}Documents/Image_Documents/${data.msg.identity_card_doc}`)
        } else {
          if(gender.gender == 1){
            setUserImage(`${ process.env.PUBLIC_URL + "/male_avatar.png" }`);
            } else{
              setUserImage(`${ process.env.PUBLIC_URL + "/female_avatar.png" }`);
            }
        }
      });
  };

  const uploadPhoto = (e) => {
    e.preventDefault();
    setImage(e.target.files[0]);
    console.warn(e.target.files[0]);
  };

  const profileSidebar = () => {
    axios
      .get(`${window.Url}api/profileSidebar`, headers_param)
      .then((response) => {
        setMemData(response.data);
      });
  };
  useEffect(() => {
    if(image){
      setImageInProcess(true);
      console.log("image upload section");
      const formData = new FormData();
      formData.append("image", image);
      axios
        .post(`${window.Url}api/storeProfileImage`, formData, headers_param)
        .then(({ data }) => {
          if (data.hasOwnProperty("msg")) {
            dispatch(regActiveLink("profileImg"));
            getProfileImage();
            setImageInProcess(false);
          } else {
          }
        });
    }
  }, [image]);

  return (
    <>
      <div className="account_dt_left">
        <div className="job-center-dt">
          <div className="admin-profile-loader">
            <img src={userImage} alt="user profile image" />
            { 
            imageInProcess && <div className="container">
              <span className="loader"></span>
            </div>
            }
          </div>
          <div className="job-urs-dts">
            <div className="dp_upload">
              <input
                type="file"
                name="image"
                onChange={(e) => uploadPhoto(e)}
                id="file"
              />
              <label htmlFor="file">Upload Photo</label>
            </div>
            <h4>{userData.name}</h4>
            {/* <span>UX Designer</span> */}
            <div className="avialable">
              Active Now
              <a href="#">
                <i style={{ fontSize: "13px", color: "green" }} className="fa">
                  &#xf111;
                </i>
              </a>
            </div>
          </div>
        </div>
        <div className="my_websites">
          <ul>
            <li>
              <a href="#" className="web_link">
                <i className="fas fa-globe"></i>Current Membership Plan:{" "}
                <span style={{ color: "brown", fontWeight:"600" }} >
                  {memdata.length != 0 && memdata['user'].get_package.name}{" "}
                </span>
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="group_skills_bar">
          <h6>Profile Completeness</h6>
          <div className="group_bar1">
            <span>85%</span>
            <div className="progress skill_process">
              <div
                className="progress-bar progress_bar_skills"
                role="progressbar"
                style={{ width: "85%" }}
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <a href="#" className="skiils_button">
            Complete Required Skills
          </a>
        </div> */}
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
        {/* <div className="social_section3 mb80">
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
            </li> 
          </ul>
        </div> */}
      </div>
    </>
  );
}

export default MyProfileSidebar;
