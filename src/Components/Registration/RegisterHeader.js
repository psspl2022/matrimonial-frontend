import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import "../../App.css";
import { useSelector, useDispatch } from "react-redux";
import { ACTIVE } from "../../actions/index";

function RegisterHeader() {
  const activeState = useSelector((state) => state.changeActiveLink);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
	document.title = "User Registration";
    // return () => {
    //   window.removeEventListener("scroll", isSticky);
    // };
  });

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
      <header id="registration_header">
        <div className="sub-header theme-color">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <nav className="navbar navbar-expand navbar-light bg-dark1 justify-content-start">
                  {/* <NavLink className="order-lg-0 ml-lg-0 ml-3" to="/"><img src="matrimonial_logo.png" alt="" style={{maxHeight:'40px'}} /></NavLink> */}
                  <NavLink
                    className="order-1 order-lg-0 ml-lg-0 ml-3 mr-auto"
                    to="/"
                  >
                    <div className="row">
                      <div className="col-4">
                        <img
                          src="matrimonial_logo.png"
                          alt=""
                          style={{ maxHeight: "40px" }}
                        />
                      </div>
                      <div className="col-8">
                        <span
                          style={{
                            color: "#ee0a4b",
                            fontSize: "28px",
                            fontStyle: "italic",
                            fontWeight: "700",
                          }}
                        >
                          Namdeo
                        </span>
                        <r />
                        <br />
                        <span
                          style={{ letterSpacing: "0px", fontWeight: "700" }}
                        >
                          {" "}
                          MATRIMONY{" "}
                          <i class="fa fa-heart" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                  </NavLink>
                  <div
                    className="d-flex flex-row justify-content-end mx-auto bg-dark1 p-3 p-lg-0 mt-lg-0"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav align-self-stretch">
                      <li
                        className={`nav-item ${
                          activeState == "otp" ? "theme-fontcolor" : ""
                        }`}
                      >
                        Email verification
                      </li>
                      <li
                        className={`nav-item ${
                          activeState == "profile" ? "theme-fontcolor" : ""
                        }`}
                      >
                        Profile Details
                      </li>
                      <li
                        className={`nav-item ${
                          activeState == "career" ? "theme-fontcolor" : ""
                        }`}
                      >
                        Career Details
                        {/* <NavLink to="/findMatches" className="nav-link" >Find Matches</NavLink> */}
                      </li>
                      <li
                        className={`nav-item ${
                          activeState == "family" || activeState == "profileimg"
                            ? "theme-fontcolor"
                            : ""
                        }`}
                      >
                        Lifestyle & Family
                        {/* <NavLink to="/help" className="nav-link" role="button">Help</NavLink> */}
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default RegisterHeader;
