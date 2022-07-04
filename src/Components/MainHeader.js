import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import "../App.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import TawkTo from 'tawkto-react';

function MainHeader() {
  const [show, setShow] = useState(false);
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({});
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
    
  }, []);

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
          window.sessionStorage.removeItem("access_token");
          window.sessionStorage.removeItem("user_data");
          setToken("");
          setUserData("");
          history.replace("/");
        } else {
          Swal.fire({
            icon: "error",
            text: data.message,
          });
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
                            Welcome to Matrimonial
                          </div>
                        </li>
                        {/* <li>
												<div className="lang-icon dropdown">
													<i className="fas fa-globe ln-glb"></i>
													<a href="#" className="icon15 dropdown-toggle-no-caret" role="button" data-toggle="dropdown" id="dropdownLangLink" aria-haspopup="true" aria-expanded="false">
														EN <i className="fas fa-caret-down p-crt"></i>
													</a>
													<div className="dropdown-menu lanuage-dropdown dropdown-menu-left" aria-labelledby="dropdownLangLink">
														<a className="link-item" href="#">EN</a>
														<a className="link-item" href="#">DE</a>
														<a className="link-item" href="#">RU</a>
														<a className="link-item" href="#">ES</a>
														<a className="link-item" href="#">FR</a>
													</div>
												</div>
											</li> */}
                      </ul>
                    </div>
                    <div className="top-right-hd">
                      <ul>
                        <li className="dropdown">
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
                          {/*<div className="dropdown-menu message-dropdown dropdown-menu-right">
                             <div className="user-request-list">
                              <div className="request-users">
                                <div className="user-request-dt">
                                  <a href="#">
                                    <img src="images/user-dp-1.jpg" alt="" />
                                    <div className="user-title1">
                                      Jassica William{" "}
                                    </div>
                                    <span>Hey How are you John Doe...</span>
                                  </a>
                                </div>
                                <div className="time5">2 min ago</div>
                              </div>
                            </div>
                            <div className="user-request-list">
                              <div className="request-users">
                                <div className="user-request-dt">
                                  <a href="#">
                                    <img src="images/user-dp-1.jpg" alt="" />
                                    <div className="user-title1">
                                      Rock Smith{" "}
                                    </div>
                                    <span>
                                      Interesting Event! I will join this...
                                    </span>
                                  </a>
                                </div>
                                <div className="time5">5 min ago</div>
                              </div>
                            </div>
                            <div className="user-request-list">
                              <div className="request-users">
                                <div className="user-request-dt">
                                  <a href="#">
                                    <img src="images/user-dp-1.jpg" alt="" />
                                    <div className="user-title1">Joy Doe </div>
                                    <span>Hey Sir! What about you...</span>
                                  </a>
                                </div>
                                <div className="time5">10 min ago</div>
                              </div>
                            </div> 
                            <div className="user-request-list">
                              <a
                                href="my_freelancer_messages.html"
                                className="view-all"
                              >
                                View All Messages
                              </a>
                            </div>
                          </div>*/}
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
                          {/* <div className="dropdown-menu message-dropdown dropdown-menu-right">
                            <div className="user-request-list">
                              <div className="request-users">
                                <div className="user-request-dt">
                                  <a href="#">
                                    <div className="noti-icon">
                                      <i className="fas fa-users"></i>
                                    </div>
                                    <div className="user-title1">
                                      Rock William{" "}
                                    </div>
                                    <span>
                                      applied for a{" "}
                                      <ins className="noti-p-link">
                                        Php Developer
                                      </ins>
                                      .
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="user-request-list">
                              <div className="request-users">
                                <div className="user-request-dt">
                                  <a href="#">
                                    <div className="noti-icon">
                                      <i className="fas fa-bullseye"></i>
                                    </div>
                                    <div className="user-title1">
                                      Johnson Smith
                                    </div>
                                    <span>
                                      placed a bid on your{" "}
                                      <ins className="noti-p-link">
                                        I Need a ...
                                      </ins>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="user-request-list">
                              <div className="request-users">
                                <div className="user-request-dt">
                                  <a href="#">
                                    <div className="noti-icon">
                                      <i className="fas fa-exclamation"></i>
                                    </div>
                                    <span className="pt-2">
                                      Your job listing{" "}
                                      <ins className="noti-p-link">
                                        Wordpress Developer
                                      </ins>{" "}
                                      is expiring.
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="user-request-list">
                              <a
                                href="my_freelancer_notifications.html"
                                className="view-all"
                              >
                                View All Notifications
                              </a>
                            </div>
                          </div> */}
                        </li>
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
                              <div className="link-item" onClick={logout}>
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
                    to="/"
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
                        <NavLink className="nav-link font-lobster" to="/">
                          Home
                        </NavLink>
                      </li>
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
                        {/* <a href="#" className="nav-link dropdown-toggle-no-caret" role="button" data-toggle="dropdown">Desired Profile</a> */}
                        {/* <div className="dropdown-menu pages-dropdown">
													<a className="link-item" href="browse_projects.html">Browse Matches</a>
													<a className="link-item" href="project_single_view.html">Single Match View</a> */}
                        {/* <a className="link-item" href="post_a_project.html">Post a Project</a> */}
                        {/* </div> */}
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
                    <a
                      href="#"
                      className="search-link"
                      role="button"
                      datatoggle="modal"
                      datatarget="#searchModal"
                    >
                      <i className="fas fa-search"></i>
                    </a>
                    {token.length === 0 && (
                      <div>
                        <NavLink to="/login" style={{letterSpacing: "1px"}} className="add-post font-fredokaone">
                          Login
                        </NavLink>
                        <NavLink to="/signUp" style={{letterSpacing: "1px"}} className="add-task font-fredokaone">
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
