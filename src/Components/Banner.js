import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Banner() {

    
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
                    <img src="matrimonial_banner2.jpg" style={{width:'100%',maxHeight:'600px'}} alt="" />
                    <div className="d-none">
                        <div className="container">
                            <div className="row">
                                <div className='col-md-4 Search-section'>
                                <div className="col-10">
                                    <div className="form-group mb-0">
                                        <input
                                            className="search-1"
                                            type="text"
                                            placeholder="Keywords (e.g. Job Title, Position...)"
                                        />
                                    </div>
                                </div>
                                <div className="col-10">
                                    <div className="form-group mb-0 mt-15">
                                        <input
                                            className="search-1"
                                            type="text"
                                            placeholder="Location (e.g. City, Country...)"
                                        />
                                    </div>
                                </div>
                                <div className="col-10 mt-15">
                                    <div className="form-group mb-0">
                                        <input
                                            className="search-1"
                                            type="text"
                                            placeholder="Industry (e.g. Design, Art...)"
                                        />
                                    </div>
                                </div>
                                <div className="col-10 mt-15">
                                    <button className="srch-btn" type="submit">Search Now</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Search-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-3 col-12">
                            <div className="form-group mb-0">
                                <input
                                    className="search-1 text-dark"
                                    type="text"
                                    placeholder="Keywords (e.g. Name, Caste...)"
                                />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="form-group mb-0 mt-15">
                                <input
                                    className="search-1 text-dark"
                                    type="text"
                                    placeholder="Location (e.g. City, Country...)"
                                />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12 mt-15">
                            <div className="form-group mb-0">
                                <input
                                    className="search-1 text-dark"
                                    type="text"
                                    placeholder="Industry (e.g. Engineer, Accountant...)"
                                />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-12 mt-15">
                            <button className="srch-btn" type="submit">Search Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;