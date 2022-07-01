import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import AboutProfile from "./AboutProfile";
import EducationProfile from "./EducationProfile";
import FamilyProfile from "./FamilyProfile";
import Lifestyle from "./Lifestyle";
import Likes from "./Likes";
import Desired from "./Desired";
import "../../App.css";
import axios from "axios";

function ProfileDetails() {
  const [TabName, setTabName] = useState('about');
  const token = window.sessionStorage.getItem("access_token");
  const history = useHistory();
  const { reg_id } = useParams();
  const [data, setData] = useState([]);

  const headers_data = {
    headers: {
      authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };


  useEffect(() => {
    window.scrollTo(0, 0);
    if (sessionStorage.hasOwnProperty("access_token")) {
      introduction();
    }
  }, []);

  const introduction = () => {
    axios
      .get(`${window.Url}api/introduction/${reg_id}`, headers_data)
      .then(( response ) => {
          setData(response.data);
      });
  };

  const sendIntrest = (id) => {
    const update = {
      id: id,
    };
    axios
      .post(`${window.Url}api/sendIntrest`, update, headers_data)
      .then((response) => {
        if (response.data.hasOwnProperty("succmsg")) {
          // Swal.fire({
          //     icon: "success",
          //     title: response.data.succmsg,
          // });
          introduction();
        } else {
          // Swal.fire({
          //     icon: "error",
          //     title: response.data.errmsg,
          // });
        }
      });
  };

  const shortlistProfile = (id) => {
    const update = {
      id: id,
    };
    axios
      .post(`${window.Url}api/shortlist`, update, headers_data)
      .then((response) => {
        if (response.data.hasOwnProperty("succmsg")) {
          // Swal.fire({
          //     icon: "success",
          //     title: response.data.succmsg,
          // });
          introduction();
        } else {
          Swal.fire({
              icon: "error",
              title: response.data.errmsg,
          });
        }
      });
  };


  return (
    <>
      <main className="browse-section pt-5"   style={{background:"rgb(240 236 262"}}>
        <div className="container ProfileDetails">
        <div className="row">
        <div className="col-lg-3 col-md-4">
        </div>
         
            
            <div className="col-lg-10 col-md-10 mx-auto" >
              <h1 className="text-center">Profile Details Section</h1>
              <div className="row" style={{background: "aliceblue"}}>
                <div className="col-lg-3 col-md-4">
                { data.lenth!=0 &&(<img src={`${window.Url}Documents/Image_Documents/${data['basicData'].get_profile_image.identity_card_doc}`} alt="user profile image" style={{height:"180px", margin:"0px 10px"}}/>)}

{ data.lenth==0 && (<img src={ (data['basicData'].get_user_register.gender == 1 ? process.env.PUBLIC_URL + "/male_avatar.png" : process.env.PUBLIC_URL + "/female_avatar.png")} alt="user profile image" style={{height:"180px", margin:"0px 10px"}}/>)}
                            
                  {/* <img src={data['basicData'] && `${window.Url}Documents/Image_Documents/${data['img_file'].identity_card_doc}`} alt="user profile image" style={{height:"200px", width:"200px"}}/> */}
                </div>
                <div className="col-lg-6 col-md-4">
                  <div className="row">
                  <div className="col-12" style={{margin: "15px 0px"}}>
                  <h3>{data['basicData'] && data['basicData'].name}</h3>
                  <hr />
                  </div>
                    <div className="col-lg-6 col-md-4" >
                      <span className="view_head_span">{data['basicData'] && data['basicData'].get_height.height}</span><br />
                      <span className="view_head_span">{data['basicData'] && (`${data['basicData'].get_religion.religion}: ${data['basicData'].get_caste.caste}`) }</span><br />
                      <span className="view_head_span">{data['basicData'] && data['basicData'].get_mother_tongue.mother_tongue}</span><br />
                      <span className="view_head_span">{data['basicData'] && data['basicData'].get_city.name} </span>                 
                    </div>
                    <div className="col-lg-6 col-md-4">
                    <span className="view_head_span">{data['basicData'] && data['basicData'].get_occupation.occupation}</span><br />
                    <span className="view_head_span">{data['basicData'] && (data['basicData'].get_income.income != '0 Lakh' &&(data['basicData'].get_income.income) )}
                      {data['basicData'] && (data['basicData'].get_income.income == '0 Lakh' && ('No Income'))} </span><br />
                      <span className="view_head_span">{/* {data['basicData'] && data.mother_tongue.get_city.mother_tongue} */}</span>
                      <span className="view_head_span">{data['basicData'] && (data['basicData'].maritial_status == 1 && 'Never Married')} </span>  
                      <span className="view_head_span">{data['basicData'] && (data['basicData'].maritial_status == 2 && 'Awaiting Divorce')} </span>  
                      <span className="view_head_span">{data['basicData'] && (data['basicData'].maritial_status == 3 && 'Divorced')}</span>  
                      <span className="view_head_span">{data['basicData'] && (data['basicData'].maritial_status == 4 && 'Widowed')} </span> 
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4" style={{background:"rgb(222 19 82)"}}>

                {(data.interest > 0) && (
                      <><span className="view_profile_font1"><i className="fas fa-check view_profile_font2"    style={{
                        color: "black",
                      }} 
                      ></i>Send Interest</span><br /></>
                  )}

                  {(data.interest == 0) && (
                      <><span className="view_profile_font1"><i className="fas fa-check view_profile_font2"   onClick={(e) =>sendIntrest(data['basicData'].reg_id)} style={{
                        cursor:"pointer"
                      }} 
                      ></i>Send Interest</span><br /></>
                  )}
                  
                  <span className="view_profile_font1"><i className="fas fa-comment view_profile_font2"></i> Chat</span><br />
                 
                  {(data.shortlist > 0) && (
                      <><span className="view_profile_font1"><i className="fas fa-star view_profile_font2" onClick={(e) =>shortlistProfile(data['basicData'].reg_id)} style={{
                        color: "black",
                        cursor:"pointer"
                      }} ></i> Shortlist</span><br /></>
                  )}

                  {(data.shortlist == 0) && (
                      <><span className="view_profile_font1"><i className="fas fa-star view_profile_font2" onClick={(e) =>shortlistProfile(data['basicData'].reg_id)} style={{
                          cursor:"pointer"
                      }} ></i> Shortlist</span><br /></>
                  )}

                  <span className="view_profile_font1"><i className="fas fa-heart view_profile_font2"></i> Favourite</span><br />
                </div>
                </div>
              </div>
              <section className="tabs container">
                <div className="row">
                  <div className="col-12 mx-auto">
                  <ul className="nav nav-tabs">
                  <li className={`nav-link ${
                        TabName === "about" ? "active" : ""
                      }`} onClick={() => {
                        setTabName("about");
                      }}>
                    <span
                    >
                      <i class="fa fa-user" aria-hidden="true"></i> &nbsp; About Section
                    </span>
                  </li>
                  <li
                      className={` nav-link ${
                        TabName === "education" ? "active" : ""
                      }`} onClick={() => {
                        setTabName("education");
                      }}>
                    <span>
                    <i class="fa fa-book" aria-hidden="true"></i> &nbsp; Education & Career
                    </span>
                  </li>
                  <li
                      className={` nav-link ${
                        TabName === "family" ? "active" : ""
                      }`} onClick={() => {
                        setTabName("family");
                      }}>
                    <span>
                    <i class="fa fa-users" aria-hidden="true"></i> &nbsp; Family Details
                    </span>
                  </li>
                  <li
                      className={` nav-link ${
                        TabName === "lifestyle" ? "active" : ""
                      }`} onClick={() => {
                        setTabName("lifestyle");
                      }}>
                    <span>
                    <i class="fa fa-users" aria-hidden="true"></i> &nbsp; Lifestyle
                    </span>
                  </li>
                  <li
                      className={` nav-link ${
                        TabName === "likes" ? "active" : ""
                      }`} onClick={() => {
                        setTabName("likes");
                      }}>
                    <span>
                    <i class="fa fa-users" aria-hidden="true"></i> &nbsp; Likes
                    </span>
                  </li>
                  <li
                      className={` nav-link ${
                        TabName === "desired" ? "active" : ""
                      }`} onClick={() => {
                        setTabName("desired");
                      }}>
                    <span>
                    <i class="fa fa-eye" aria-hidden="true"></i> &nbsp; Desired Partner
                    </span>
                  </li>
                </ul>
                  </div>
                </div>
                <div className="row" >
                  <div className="col-12 mx-auto" >
                  { TabName==='about' && <AboutProfile reg_id={reg_id}/> }
                  { TabName==='education' && <EducationProfile reg_id={reg_id}/> }
                  { TabName==='family' && <FamilyProfile reg_id={reg_id}/> }
                  { TabName==='lifestyle' && <Lifestyle reg_id={reg_id}/> }
                  { TabName==='likes' && <Likes reg_id={reg_id}/> }
                  { TabName==='desired' && <Desired reg_id={reg_id}/> }
                  </div>
                </div>
              </section>
             

            </div>
          </div>
      
      </main>
    </>
  );
}

export default ProfileDetails;
