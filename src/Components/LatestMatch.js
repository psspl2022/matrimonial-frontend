import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { NavLink } from "react-router-dom";
import bgimage from "../background2.jpeg";
import { useState } from "react";
import { useEffect } from "react";
import ProfileSkeleton from "./Dummy Skeleton/ProfileSkeleton";
import axios from "axios";

function LatestMatch() {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    profiles();
  }, []);

  function profiles() {
    axios.get(`${window.Url}api/homeProfile`).then(({ data }) => {
      setData(data);
    });
  }

  return (
    <>
      <div
        className="find-lts-jobs mb-5"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          boxShadow: "rgb(228 130 147 / 15%) 0px 0px 0px 2000px inset",
          backgroundAttachment: "fixed",
          paddingBottom: "40px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div
                className="main-heading"
                style={{ marginBottom: "0px", paddingBottom: "0px" }}
              >
                <div className="main_heading_style font-lobster">
                  Latest Match
                </div>
                <span className="main_heading_span">Match for a Future</span>
                {/* <div className="line-shape1" style={{marginfTop : '-30px'}}>
                                    <img src={ process.env.PUBLIC_URL + "/THEME/gambolthemes.net/html-items/jobby/jobby-freelancer/images/line.svg" } alt="" />
                                </div> */}
              </div>
            </div>
            <div className="col-md-12 col-12">
              <div className="lts-jobs-slider" style={{ marginTop: "0px" }}>
                {data.length != 0 && (
                  <>
                    {" "}
                    <OwlCarousel className="owl-theme" {...options}>
                      {data.map((item, index) => (
                        <div className="item" key={index}>
                          <div className="job-item mt-30">
                            <div
                              className="job-top-dt text-right"
                              style={{ paddingTop: "3px" }}
                            >
                              <div className="job-skills"></div>
                              <div className="img-profile text-center">
                                {item.get_profile_image && (
                                  <img
                                    src={`${window.Url}Documents/Image_Documents/${item.get_profile_image.identity_card_doc}`}
                                    alt="user profile image"
                                    style={{
                                      height: "180px",
                                      margin: "0px auto",
                                      width: "auto",
                                    }}
                                  />
                                )}

                                {!item.get_profile_image && (
                                  <img
                                    src={
                                      item.get_user_register.gender == 1
                                        ? process.env.PUBLIC_URL +
                                        "/male_avatar.png"
                                        : process.env.PUBLIC_URL +
                                        "/female_avatar.png"
                                    }
                                    alt="user profile image"
                                    style={{
                                      height: "180px",
                                      margin: "0px auto",
                                      width: "auto",
                                    }}
                                  />
                                )}
                              </div>
                            </div>
                            <div className="job-des-dt">
                              <h2 style={{ fontWeight: "200" }}>{item.name}</h2>
                              {/* <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Etiam cursus pulvinar dolor nec...
                                            </p> */}
                              <div className="job-skills">
                                <span>
                                  Age:{" "}
                                  {Math.floor(
                                    (Date.now() - new Date(item.dob)) /
                                    31557600000
                                  )}{" "}
                                  years
                                </span>
                                <span>Height: {item.get_height.height} </span>
                                <span>
                                  Religion: {item.get_religion.religion}{" "}
                                </span>
                                <span>Caste: {item.get_caste.caste} </span>
                                <span>
                                  Mother Tongue:{" "}
                                  {item.get_mother_tongue.mother_tongue}{" "}
                                </span>

                                <><span>Salary: {item.get_income.income}{" "} </span><span>
                                  Qualification: {item.get_education.education}{" "}
                                </span><span>
                                    Occupation: {item.get_occupation.occupation}{" "}
                                  </span></>
                                <span className="more-skills">+4</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </OwlCarousel>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestMatch;
