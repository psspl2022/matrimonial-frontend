import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Select from "react-select";
import { useEffect } from 'react';

function Banner() {

    const lookingForOptions = [
        { value: "2", label: "Bride"},
        { value: "1", label: "Groom" },
        { value: "Daughter", label: "Daughter" },
        { value: "Brother", label: "Brother" },
        { value: "Sister", label: "Sister" },
        { value: "Relative", label: "Relative" },
        { value: "Client - Marriage Bureau", label: "Client - Marriage Bureau" },
      ];

      
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Home";
      }, [])
    
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

        }
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
                    <img src={ process.env.PUBLIC_URL + "/matrimonial_banner2.jpg"} style={{width:'100%',maxHeight:'600px'}} alt="" />
                </div>
            </div>
            <div className="Search-section">
                <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-12">
                        <label>I'am looking for a</label>
                    </div>                   
                    <div className="col-lg-4 col-md-4 col-12">
                        <label>aged</label>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12 ml-3">
                        <label>of Religion</label>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                        <label>and Mother Tongue</label>
                    </div>
                    
                </div>
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-12">
                            <div className="form-group mb-0">                               
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    name="lookingForOptions"
                                    placeholder="Looking For"
                                    options={lookingForOptions}
                                />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-12">
                            <div className="form-group mb-0 mt-15">
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    name="minage"
                                    placeholder="Min Age"
                                    options={lookingForOptions}
                                />
                            </div>
                        </div>
                        {/* <label className="mt-2">to</label> */}
                        <div className="col-lg-2 col-md-2 col-12 mt-15">                           
                            <div className="form-group mb-0"
                                    style={{ position: 'relative'  }}>
                            <span style={{ position: 'absolute', top: '5px', left: '-21px', color:'#fff'  }}>to</span>
                            
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    name="minage"
                                    placeholder="Max Age"
                                    options={lookingForOptions}
                                />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-12 mt-15">
                            <div className="form-group mb-0">
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    name="religion"
                                    placeholder="Religion"
                                    options={lookingForOptions}
                                />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-12 mt-15">
                            <div className="form-group mb-0">
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    name="mother"
                                    placeholder="Mother Tongue"
                                    options={lookingForOptions}
                                />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-12 mt-15">
                            <button style={{letterSpacing: "0.5px"}} className="srch-btn " type="submit">Search Now <i class="fa fa-heart" aria-hidden="true"></i>
</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;