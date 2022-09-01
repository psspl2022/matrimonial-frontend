import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import "../App.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import TawkTo from 'tawkto-react';

function MainHeader(props) {
  const [religionStyle, setReligionStyle] = useState({display: 'block,'});
  const [casteStyle, setCasteStyle] = useState({display: 'none'});
  const [motherStyle, setMotherStyle] = useState({display: 'none'});
  const [stateStyle, setStateStyle] = useState({display: 'none'});
  const [cityStyle, setCityStyle] = useState({display: 'none'});
  const [occupationStyle, setOccupationStyle] = useState({display: 'none'});
  const [show, setShow] = useState(false);
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({});
  const [data, setData] = useState({});
  const [gender, setGender] = useState({});
  const history = useHistory();
  const [userImage, setUserImage] = useState();
  const [loaderImg, setLoaderImage] = useState(false);

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    // return () => {
    // 	window.removeEventListener('scroll', isSticky);
    // };
  });
//   useEffect(() => {
//     if(token.length != 0){
//     var tawk = new TawkTo('62965117b0d10b6f3e74f9ce', '1g4dipi24');

//     tawk.onStatusChange((status) => 
//     {
//       // tawk.minimize();
//         // console.log(status)
//     })
//   }

// }, [])

  useEffect(() => {
    if (sessionStorage.hasOwnProperty("access_token")) {
      const token_data = window.sessionStorage.getItem("access_token");
      setToken(token_data);
    }
    if (sessionStorage.hasOwnProperty("user_data")) {
      const user_data = window.sessionStorage.getItem("user_data");
      setUserData(JSON.parse(user_data));
      setGender(window.sessionStorage.getItem("gender"));
    }

	const token = window.sessionStorage.getItem("access_token");
    const headers_param = {
      headers: {
        authorization: "Bearer "+ token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const close = () =>{
      setTimeout(() => {
        Swal.close();
      }, 2000);
    };
    
    axios
      .get(`${window.Url}api/getProfileImage`, headers_param)
      .then(({ data }) => {
        if (data.hasOwnProperty("msg")) {
          setUserImage(`${window.Url}Documents/Image_Documents/${data.msg.identity_card_doc}`);
        } else {
          if(gender.gender == 1){
          setUserImage(`${ process.env.PUBLIC_URL + "/male_avatar.png" }`);
          } else{
            setUserImage(`${ process.env.PUBLIC_URL + "/female_avatar.png" }`);
          }
          // Swal.fire({
          //   icon: "error",
          //   text: data.error_msg,
          // });
        }
      });

      if(token){
        var tawk = new TawkTo('62965117b0d10b6f3e74f9ce', '1g4dipi24');
    
        tawk.onStatusChange((status) => 
        {
          // tawk.minimize();
        })
      }

      browseProfileBy();
    
  }, []);

 
  const browseProfileBy = () => {
    axios
      .get(`${window.Url}api/browseProfileBy`)
      .then(( response ) => {
          setData(response.data);
      });
  };

  const logout = async (e) => {
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
      .get(`${window.Url}api/logout`, headers_param)
      .then(({ data }) => {
        if (data.hasOwnProperty("message")) {
          Swal.fire({
            icon: "success",
            text: data.message,
          });
          setTimeout(() => {
            Swal.close();
          }, 2000);
          window.sessionStorage.removeItem("access_token");
          window.sessionStorage.removeItem("user_data");
          window.sessionStorage.removeItem("gender");
          setToken("");
          setUserData("");
          history.replace("/");
          props.getBrowsedata(null, null)
        } else {
          Swal.fire({
            icon: "error",
            text: data.message,
          });
          setTimeout(() => {
            Swal.close();
          }, 2000);
        }
      });
  };

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector("header");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  return (
    <>
      <header>
        {token.length != 0 && (
          <div className="top-header">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="top-header-full">
                    <div className="top-left-hd">
                      <ul>
                        <li>
                          <div className="wlcm-text">
                            Welcome to Namdeo Matrimony
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="top-right-hd">
                      <ul>
                        {/* <li className="dropdown">
                          <a
                            href="#"
                            className="icon14 dropdown-toggle-no-caret"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fas fa-envelope"></i>
                            <div className="circle-alrt"></div>
                          </a>
                         
                        </li>
                        <li className="dropdown">
                          <a
                            href="#"
                            className="icon14 dropdown-toggle-no-caret"
                            role="button"
                            data-toggle="dropdown"
                          >
                            <i className="fas fa-bell"></i>
                            <div className="circle-alrt"></div>
                          </a>                          
                        </li> */}
                        <li>
                          <div className="account order-1 dropdown">
                            <a
                              href="#"
                              className="account-link dropdown-toggle-no-caret"
                              role="button"
                              id="dropdownAccountLink"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <div className="user-dp">
                                <img
                                  src={userImage}
                                  alt=""
                                />
                                {/* <img src="profile2.jpg" alt="" /> */}
                              </div>
                              <span>Hi! {userData.name}</span>
                              <i className="fas fa-sort-down"></i>
                            </a>
                            <div
                              className="dropdown-menu account-dropdown dropdown-menu-right"
                              aria-labelledby="dropdownAccountLink"
                            >
                              <NavLink className="link-item" to="/myprofile">
                                My Profile
                              </NavLink>
                              <NavLink className="link-item" to="/desiredProfile">
                                Desired Partner Profile
                              </NavLink>
                              <div className="link-item" onClick={logout} >
                                Logout
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="sub-header theme-color">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark1 justify-content-sm-start">
                  
                  <NavLink
                    className="order-1 order-lg-0 ml-lg-0 ml-3 mr-auto"
                    to="" style={{ width: "200px"}}
                  >
                    <div className="row">
                      <div className="col-4">
                      <img
                        src="matrimonial_logo.png"
                        alt=""
                        style={{ maxHeight: "40px"}}
                      />
                      </div>                    
                      <div className="col-8">
                      <span style={{color:'#ee0a4b', fontSize:"28px", fontStyle: "italic", fontWeight:"700"}} >Namdeo</span><r /><br /><span style={{ letterSpacing: "0px", fontWeight:"700"}}> MATRIMONY <i class="fa fa-heart" aria-hidden="true"></i></span>
                      </div>
                    </div>
                    
                   
                  </NavLink>
                  <button
                    className="navbar-toggler align-self-start"
                    onClick={() => setShow(!show)}
                    type="button"
                  >
                    <i className="fas fa-bars"></i>
                  </button>
                  <div
                    onBlur={(e) => setShow(false)}
                    className={`collapse navbar-collapse d-flex flex-column flex-lg-row flex-xl-row justify-content-lg-end bg-dark1 p-3 p-lg-0 mt1-5 mt-lg-0 mobileMenu ${
                      show ? "open" : ""
                    }`}
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav align-self-stretch">
                      <li className="nav-item">
                        <NavLink className="nav-link font-lobster" to="/" onClick={() => props.getBrowsedata(null, null)}>
                          Home
                        </NavLink>
                      </li>
                      {/* {token.length == 0 && (
                        <>
                      
                      </>
                      )} */}
                      <li className="nav-item dropdown">
                      <a
                          href="#"
                          className="nav-link dropdown-toggle-no-caret font-lobster"
                          role="button"
                          data-toggle="dropdown"
                        >
                          Browse Profiles By
                        </a>
                        <div className="dropdown-menu pages-dropdown row" style={{width:"0px", }}>
                          <div className="col-3" style={{position:"relative", }}>
                        <NavLink
                          to=""
                          className="link-item font-lobster"
                          role="button"
                          onMouseEnter={e => {
                            setReligionStyle({display: 'block'});
                            setCasteStyle({display: 'none'});
                            setMotherStyle({display: 'none'});
                            setStateStyle({display: 'none'});
                            setCityStyle({display: 'none'});
                            setOccupationStyle({display: 'none'});
                        }}
                      
                        >
                          Religion
                        </NavLink>
                        <NavLink
                          to=""
                          className="link-item font-lobster"
                          role="button"
                          onMouseEnter={e => {
                            setReligionStyle({display: 'none'});
                            setCasteStyle({display: 'block'});
                            setMotherStyle({display: 'none'});
                            setStateStyle({display: 'none'});
                            setCityStyle({display: 'none'});
                            setOccupationStyle({display: 'none'});
                        }}
                        
                        >
                          Caste 
                        </NavLink>
                        <NavLink
                          to=""
                          className="link-item font-lobster"
                          role="button"
                          onMouseEnter={e => {
                            setReligionStyle({display: 'none'});
                            setCasteStyle({display: 'none'});
                            setMotherStyle({display: 'block'});
                            setStateStyle({display: 'none'});
                            setCityStyle({display: 'none'});
                            setOccupationStyle({display: 'none'});
                        }}
                       
                        >
                          Mother Tongue 
                        </NavLink>
                        <NavLink
                          to=""
                          className="link-item font-lobster"
                          role="button"
                          onMouseEnter={e => {
                            setReligionStyle({display: 'none'});
                            setCasteStyle({display: 'none'});
                            setMotherStyle({display: 'none'});
                            setStateStyle({display: 'block'});
                            setCityStyle({display: 'none'});
                            setOccupationStyle({display: 'none'});
                        }}
                        // onMouseLeave={e => {
                        //     setMotherStyle({display: 'none'})
                        // }}
                        >
                          State
                        </NavLink>
                        <NavLink
                          to=""
                          className="link-item font-lobster"
                          role="button"
                          onMouseEnter={e => {
                            setReligionStyle({display: 'none'});
                            setCasteStyle({display: 'none'});
                            setMotherStyle({display: 'none'});
                            setStateStyle({display: 'none'});
                            setCityStyle({display: 'block'});
                            setOccupationStyle({display: 'none'});
                        }}
                       
                        >
                        City 
                        </NavLink>
                        <NavLink
                          to=""
                          className="link-item font-lobster"
                          role="button"
                          onMouseEnter={e => {
                            setReligionStyle({display: 'none'});
                            setCasteStyle({display: 'none'});
                            setMotherStyle({display: 'none'});
                            setStateStyle({display: 'none'});
                            setCityStyle({display: 'none'});
                            setOccupationStyle({display: 'block'});
                        }}
                        >
                          Occupation 
                        </NavLink>
                        </div>
                        <div className="home-div col-9" style={religionStyle}>
                          <div className="row mt-2">
                          {data['religion'] && data.religion.map((item, index) => (
                            <div className="col-md-4">
                              <NavLink to='/findMatches'><span className="home-browse-span" key={'r'+item.id} onClick={() => props.getBrowsedata('religion', item.id)}
                              >{item.religion}</span></NavLink>
                            </div>
                          ))}
                          </div>
                        </div>
                        <div className="home-div col-9" style={casteStyle} >
                        <div className="row mt-2">
                          {data['caste'] && data.caste.map((item, index) => (
                            <div className="col-md-4">
                              <NavLink to='/findMatches'><span className="home-browse-span" key={'c'+item.id} onClick={() => props.getBrowsedata('caste', item.id)}>{item.caste}</span>
                              </NavLink>
                            </div>
                          ))}
                          </div>
                        </div>
                        <div className="home-div col-9" style={motherStyle} >
                        <div className="row mt-2">
                          {data['mother_tongue'] && data.mother_tongue.map((item, index) => (
                            <div className="col-md-4">
                            <NavLink to='/findMatches'><span className="home-browse-span" key={'m'+item.id} onClick={() => props.getBrowsedata('mother', item.id)}>{item.mother_tongue}</span>
                            </NavLink>
                            </div>
                          ))}
                          </div>
                        </div>
                        <div className="home-div col-9" style={stateStyle}>
                        <div className="row mt-2">
                          {data['state'] && data.state.map((item, index) => (
                            <div className="col-md-4">
                              <NavLink to='/findMatches'><span className="home-browse-span" key={'s'+item.id} onClick={() => props.getBrowsedata('state', item.id)}>{item.name}</span>
                            </NavLink>
                            </div>
                          ))}
                          </div>
                        </div>
                        <div className="home-div col-9" style={cityStyle}>
                        <div className="row mt-2">
                          {data['city'] && data.city.map((item, index) => (
                            <div className="col-md-4">
                              <span className="home-browse-span" key={'ci'+item.id} onClick={() => props.getBrowsedata('city', item.id)}>{item.name}</span>
                            </div>
                          ))}
                          </div>
                        </div>
                        <div className="home-div col-9" style={occupationStyle}>
                        <div className="row mt-2">
                          {data['occupation'] && data.occupation.map((item, index) => (
                            <div className="col-md-4">
                              <span className="home-browse-span" key={'o'+item.id } onClick={() => props.getBrowsedata('occupation', item.id)}>{item.occupation}</span>
                            </div>
                          ))}
                          </div>
                        </div>
                        </div>
                      </li>
                      {token.length != 0 && (
                      <li className="nav-item">
                        <NavLink to="/findMatches" className= "font-lobster nav-link">
                          Find Matches
                        </NavLink>
                        {/* <div className="dropdown-menu pages-dropdown">
													<a className="link-item" href="browse_jobs.html">Browse Match</a>
													<a className="link-item" href="job_single_view.html">Single Match View</a>
													<a className="link-item" href="post_a_job.html">Post a Match</a>
												</div> */}
                      </li>
                      ) }
                      {token.length != 0 && (
                      <li className="nav-item dropdown">
                      <a
                          href="#"
                          className="nav-link dropdown-toggle-no-caret font-lobster"
                          role="button"
                          data-toggle="dropdown"
                        >
                          Matches
                        </a>
                        <div className="dropdown-menu pages-dropdown ">
                        <NavLink
                          to="/dailyRecommendation"
                          className="link-item font-lobster"
                          role="button"
                        >
                          Daily Recommendation
                        </NavLink>
                        <NavLink
                          to="/latest"
                          className="link-item font-lobster"
                          role="button"
                        >
                          Latest Profile
                        </NavLink>
                        <NavLink
                          to="/shortlist"
                          className="link-item font-lobster"
                          role="button"
                        >
                          Shortlist Profile
                        </NavLink>
                        <NavLink
                          to="/desiredlist"
                          className="link-item font-lobster"
                          role="button"
                        >
                          Desired Profile Match
                        </NavLink>
                        </div>
                        {/* <a href="#" className="nav-link dropdown-toggle-no-caret" role="button" data-toggle="dropdown">Desired Profile</a> */}
                        {/* <div className="dropdown-menu pages-dropdown">
													<a className="link-item" href="browse_projects.html">Browse Matches</a>
													<a className="link-item" href="project_single_view.html">Single Match View</a> */}
                        {/* <a className="link-item" href="post_a_project.html">Post a Project</a> */}
                        {/* </div> */}
                      </li>
                      ) }
                      {token.length != 0 && (
                      <li className="nav-item dropdown">
                      <a
                          href="#"
                          className="nav-link dropdown-toggle-no-caret"
                          role="button"
                          data-toggle="dropdown"
                        >
                          Inbox
                        </a>
                        <div className="dropdown-menu pages-dropdown">
                        <NavLink
                          to="/interest"
                          className="link-item font-lobster"
                          role="button"
                        >
                          Interest
                        </NavLink>
                        <NavLink
                          to="/accept"
                          className="link-item font-lobster"
                          role="button"
                        >
                          Acceptances
                        </NavLink>
                        </div>
                      </li>
                      ) }
                      {/* <li className="nav-item dropdown">
                        <a
                          href="#"
                          className="nav-link dropdown-toggle-no-caret font-lobster"
                          role="button"
                          data-toggle="dropdown"
                        >
                          Upgrade Plan
                        </a>
                        <div className="dropdown-menu pages-dropdown ">
                          <a className="link-item" href="browse_companies.html">
                            Browse Plans
                          </a>
                          <a
                            className="link-item font-lobster"
                            href="other_company_profile.html"
                          >
                            Membership Plan History
                          </a>
                        </div>
                      </li> */}
                      <li className="nav-item">
                        <a href="javascript:void(Tawk_API.toggle())" className="nav-link font-lobster" role="button">
                          Help
                        </a>
                      </li>
                      {/* <li className="nav-item dropdown pages152">
                        <a
                          href="#"
                          className="nav-link dropdown-toggle-no-caret font-lobster"
                          role="button"
                          id="dropdownPageLink"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Pages <i className="fas fa-caret-down p-crt"></i>
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownPageLink"
                        >
                          <NavLink className="link-item" to="/">
                            About
                          </NavLink>
                          <NavLink className="link-item" to="/blog">
                            Our Blog
                          </NavLink>
                          <NavLink className="link-item" to="/view">
                            Signle Blog View
                          </NavLink>
                        </div>
                      </li> */}
                    </ul>
                    {/* <a
                      href="#"
                      className="search-link"
                      role="button"
                      datatoggle="modal"
                      datatarget="#searchModal"
                    >
                      <i className="fas fa-search"></i>
                    </a> */}
                    {token.length === 0 && (
                      <div>
                        <NavLink to="/login" style={{letterSpacing: "1px"}} onClick={() => props.getUrl('/login')} className="add-post font-fredokaone">
                          Login
                        </NavLink>
                        <NavLink to="/signUp" style={{letterSpacing: "1px"}} onClick={()=> props.getUrl('/signUp')} className="add-task font-fredokaone">
                          Register
                        </NavLink>{" "}
                      </div>
                    )}
                  </div>
                  <div className="responsive-search order-1">
                    <input
                      type="text"
                      className="rsp-search"
                      placeholder="Search..."
                    />
                    <i className="fas fa-search r-sh1"></i>
                  </div>
                </nav>
                <div className={`overlay ${show ? "open" : ""}`}></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      { loaderImg && 
      <div className="main_loader">
        <div class="loading">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
}
    </>
  );
}

export default MainHeader;
