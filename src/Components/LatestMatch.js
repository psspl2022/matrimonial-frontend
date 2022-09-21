import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { NavLink } from "react-router-dom";
import bgimage from "../background2.jpeg";
import { useState } from "react";
import { useEffect } from "react";
import ProfileSkeleton from "./Dummy Skeleton/ProfileSkeleton";
import Usercard from "./common/Usercard";
import axios from "axios";

function LatestMatch() {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    loop: true,
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
                        <Usercard browse={true} key={index}
                          home={true}
                          link={false}
                          item={item}
                          index={index}
                          name={item.name}
                        />
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
