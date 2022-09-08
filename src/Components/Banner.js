import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Select from "react-select";
import { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { forSearch } from '../actions/index';
import { resetSearch } from '../actions/index';
import { useDispatch } from "react-redux";
import {NavLink} from "react-router-dom";

function Banner() {
  const lookingForOptions = [
    { value: "2", label: "Bride" },
    { value: "1", label: "Groom" },
  ];
  const [age, setAge] = useState({});
  const [moths, setMoths] = useState([]);
  const [religions, setReligions] = useState([]);

  const [lookingFor, setLookingFor] = useState();
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [religion, setReligion] = useState("");
  const [moth, setMoth] = useState("");

  const [selectReligion, setSelectReligion] = useState("");
  const [selectCaste, setSelectCaste] = useState("");
  
  const dispatch = useDispatch();

  const searchSubmit = () => {
    dispatch(forSearch([lookingFor.value,minAge.label,maxAge.label,religion.value,moth.value])) 
  }
  var genderConst = 0;
  if(sessionStorage.hasOwnProperty("gender")){
    genderConst = JSON.parse(window.sessionStorage.getItem("gender")).gender;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Home";
    if(genderConst && genderConst == 1){
      setLookingFor(2);
    }

    if(genderConst && genderConst == 2){
      setLookingFor(1);
    }
  

    axios.get(`${window.Url}api/desiredDropdown`).then(({ data }) => {
      setAge(
        data.age.map(function (age) {
          return { value: age.id, label: age.age };
        })
      );

      setReligions(
        data.religion.map(function (religion) {
          return { value: religion.id, label: religion.religion };
        })
      );

      setMoths(
        data.mother_tongue.map(function (mother_tongue) {
          return {
            value: mother_tongue.id,
            label: mother_tongue.mother_tongue,
          };
        })
      );
    });

  }, []);

  const options = {
    margin: 10,
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
        items: 4,
      },
    },
  };

  return (
    <>
      <div className="banner-slider">
        {/* <div className="owl-carousel bnnr-owl owl-theme"> */}
        {/* <OwlCarousel 
                className="owl-theme"
                {...options} >
                    <div className="item">
                        <div className="featured-cities">
                            <a href="#">
                                <div className="feature-img">
                                    <img src={ process.env.PUBLIC_URL + "/THEME/gambolthemes.net/html-items/jobby/jobby-freelancer/images/homepage/owl-bnnr/img-1.jpg" } alt="" />
                                    <div className="overly-bg"></div>
                                </div>
                            </a>
                            <a href="#">
                                <div className="featured-text">
                                    <div className="city-title">California</div>
                                    <ins>125 Jobs</ins>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="featured-cities">
                            <a href="#">
                                <div className="feature-img">
                                    <img src={ process.env.PUBLIC_URL + "/THEME/gambolthemes.net/html-items/jobby/jobby-freelancer/images/homepage/owl-bnnr/img-1.jpg" } alt="" />
                                    <div className="overly-bg"></div>
                                </div>
                            </a>
                            <a href="#">
                                <div className="featured-text">
                                    <div className="city-title">Austin</div>
                                    <ins>200 Jobs</ins>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="featured-cities">
                            <a href="#">
                                <div className="feature-img">
                                    <img src={ process.env.PUBLIC_URL + "/THEME/gambolthemes.net/html-items/jobby/jobby-freelancer/images/homepage/owl-bnnr/img-1.jpg" } alt="" />
                                    <div className="overly-bg"></div>
                                </div>
                            </a>
                            <a href="#">
                                <div className="featured-text">
                                    <div className="city-title">Los Angeles</div>
                                    <ins>25 Jobs</ins>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="featured-cities">
                            <a href="#">
                                <div className="feature-img">
                                    <img src={ process.env.PUBLIC_URL + "/THEME/gambolthemes.net/html-items/jobby/jobby-freelancer/images/homepage/owl-bnnr/img-1.jpg" } alt="" />
                                    <div className="overly-bg"></div>
                                </div>
                            </a>
                            <a href="#">
                                <div className="featured-text">
                                    <div className="city-title">San francisco</div>
                                    <ins>12 Jobs</ins>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="featured-cities">
                            <a href="#">
                                <div className="feature-img">
                                    <img src={ process.env.PUBLIC_URL + "/THEME/gambolthemes.net/html-items/jobby/jobby-freelancer/images/homepage/owl-bnnr/img-1.jpg" } alt="" />
                                    <div className="overly-bg"></div>
                                </div>
                            </a>
                            <a href="#">
                                <div className="featured-text">
                                    <div className="city-title">Tulsa</div>
                                    <ins>190 Jobs</ins>
                                </div>
                            </a>
                        </div>
                    </div>
                    </OwlCarousel> */}
        {/* </div> */}
        <div className="col-md-12 p-0">
          <img
            src={process.env.PUBLIC_URL + "/matrimonial_banner2.jpg"}
            style={{ width: "100%", maxHeight: "600px" }}
            alt=""
          />
        </div>
      </div>
     
      <div className="Search-section">
        <div className="container">
         
          <div className="row">          
            <div className="col-lg-2 col-md-2 col-12">
              <div className="form-group mb-0">
                <label>I'am looking for a</label>
                <Select
                  className="basic-single"
                  classNamePrefix="react-select"
                  name="lookingForOptions"
                  placeholder="Looking For"
                  options={lookingForOptions}
                  isDisabled = {genderConst!=0 ? "disabled" : ""}
                  value = {genderConst!=0 ? (genderConst == 1 ? lookingForOptions[0] : lookingForOptions[1]) : ''}
                  onChange={(e) => {
                    setLookingFor(e);
                  }}
                  
                />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-12">
              <div className="form-group mb-0 mt-15">
                <label>aged</label>
                <Select
                  className="basic-single"
                  classNamePrefix="react-select"
                  name="minage"
                  placeholder="Min Age"
                  options={age}
                  onChange={(e) => {
                    setMinAge(e);
                  }}
                />
              </div>
            </div>

            <div
              className="col-lg-2 col-md-2 col-12 mt-15"
              style={{ marginTop: "auto" }}
            >
              <div className="form-group mb-0" style={{ position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    top: "5px",
                    left: "-21px",
                    color: "#fff",
                  }}
                >
                  to
                </span>

                <Select
                  className="basic-single"
                  classNamePrefix="react-select"
                  name="minage"
                  placeholder="Max Age"
                  options={age}
                  onChange={(e) => {
                    setMaxAge(e);
                  }}
                />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-12 mt-15">
              <div className="form-group mb-0">
                <label>of Religion</label>
                <Select
                  className="basic-single"
                  classNamePrefix="react-select"
                  name="religion"
                  placeholder="Religion"
                  options={religions}
                  onChange={(e) => {
                    setReligion(e);
                  }}
                />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-12 mt-15">
              <div className="form-group mb-0" >
                <label>and Mother Tongue</label>
                <Select
                  className="basic-single"
                  classNamePrefix="react-select"
                  name="mother"
                  placeholder="Mother Tongue"
                  options={moths}
                  onChange={(e) => {
                    setMoth(e);
                  }}
                  style={{zIndex:'1000'}}
                  
                />
              </div>
            </div>
            <div
              className="col-lg-2 col-md-2 col-12 mt-15"
              style={{ marginTop: "auto" }}
            ><NavLink
            to="/findMatches">
              <button
                style={{ letterSpacing: "0.5px" }}
                className="srch-btn "
                onClick={(e) => {
                    searchSubmit()
                  }}
                type="submit"
              >
                Search Now <i class="fa fa-heart" aria-hidden="true" ></i>
              </button>
              </NavLink>
            </div>
          </div>
          
        </div>
      </div>

    </>
  );
}

export default Banner;
