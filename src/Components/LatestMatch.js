
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

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

        }
    },
};

    return (
        <>
            <div className="find-lts-jobs mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <div className="main-heading">
                                <h2>Latest Match</h2>
                                <span>Match for a Future</span>
                                <div className="line-shape1">
                                    <img src={ process.env.PUBLIC_URL + "/THEME/gambolthemes.net/html-items/jobby/jobby-freelancer/images/line.svg" } alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-12">
                            <div className="lts-jobs-slider">
                                {/* <div className="owl-carousel jobs-owl owl-theme"> */}
                                    <OwlCarousel
                                        className="owl-theme"
                                        {...options} >
                                        <div className="item">
                                            <div className="job-item">
                                                <div className="job-top-dt">
                                                        <img
                                                            src={ process.env.PUBLIC_URL + "/profile1.jpeg" }
                                                            alt="" style={{maxHeight:'220px'}}
                                                        />
                                                </div>
                                                <div className="job-des-dt">
                                                    <h4>Kartik Kumar</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        elit. Etiam cursus pulvinar dolor nec...
                                                    </p>
                                                    <div className="job-skills">
                                                        <span >Location: Faridabad</span>
                                                        <span href="#">Height: 5'4</span>
                                                        <span href="#">Salary: 10-12Lakhs</span>
                                                        <span href="#" className="more-skills">+4</span>
                                                    </div>
                                                </div>
                                                <div className="job-buttons">
                                                    <ul className="link-btn">
                                                        <li>
                                                            <a href="#" className="link-j1" title="Message"
                                                            >Message</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="job_single_view.html"
                                                                className="link-j1"
                                                                title="View Details"
                                                            >View Details</a
                                                            >
                                                        </li>
                                                        <li className="bkd-pm">
                                                            <button className="bookmark1" title="Mark Favourite">
                                                                <i className="fas fa-heart"></i>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="job-item">
                                                <div className="job-top-dt">
                                                        <img
                                                            src={ process.env.PUBLIC_URL + "/profile2.jpeg" }
                                                            alt="" style={{maxHeight:'220px'}}
                                                        />
                                                </div>
                                                <div className="job-des-dt">
                                                    <h4>Roshan Gupta</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        elit. Etiam cursus pulvinar dolor nec...
                                                    </p>
                                                    <div className="job-skills">
                                                        <span >Location: Faridabad</span>
                                                        <span href="#">Height: 5'4</span>
                                                        <span href="#">Salary: 10-12Lakhs</span>
                                                        <span href="#" className="more-skills">+4</span>
                                                    </div>
                                                </div>
                                                <div className="job-buttons">
                                                    <ul className="link-btn">
                                                        <li>
                                                            <a href="#" className="link-j1" title="Message"
                                                            >Message</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="job_single_view.html"
                                                                className="link-j1"
                                                                title="View Details"
                                                            >View Details</a
                                                            >
                                                        </li>
                                                        <li className="bkd-pm">
                                                            <button className="bookmark1" title="bookmark">
                                                                <i className="fas fa-heart"></i>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="job-item">
                                                <div className="job-top-dt">
                                                        <img
                                                            src={ process.env.PUBLIC_URL + "/profile3.jpeg" }
                                                            alt="" style={{maxHeight:'220px'}}
                                                        />
                                                </div>
                                                <div className="job-des-dt">
                                                    <h4>Doraemon Bhandari</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        elit. Etiam cursus pulvinar dolor nec...
                                                    </p>
                                                    <div className="job-skills">
                                                        <span >Location: Faridabad</span>
                                                        <span href="#">Height: 5'4</span>
                                                        <span href="#">Salary: 10-12Lakhs</span>
                                                        <span href="#" className="more-skills">+4</span>
                                                    </div>
                                                </div>
                                                <div className="job-buttons">
                                                    <ul className="link-btn">
                                                        <li>
                                                            <a href="#" className="link-j1" title="Message"
                                                            >Message</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="job_single_view.html"
                                                                className="link-j1"
                                                                title="View Details"
                                                            >View Details</a
                                                            >
                                                        </li>
                                                        <li className="bkd-pm">
                                                            <button className="bookmark1" title="bookmark">
                                                                <i className="fas fa-heart"></i>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="job-item">
                                                <div className="job-top-dt">
                                                        <img
                                                            src={ process.env.PUBLIC_URL + "/profile4.jpeg" }
                                                            alt="" style={{maxHeight:'220px'}}
                                                        />
                                                </div>
                                                <div className="job-des-dt">
                                                    <h4>Arjun Bisht</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        elit. Etiam cursus pulvinar dolor nec...
                                                    </p>
                                                    <div className="job-skills">
                                                        <span >Location: Faridabad</span>
                                                        <span href="#">Height: 5'4</span>
                                                        <span href="#">Salary: 10-12Lakhs</span>
                                                        <span href="#" className="more-skills">+4</span>
                                                    </div>
                                                </div>
                                                <div className="job-buttons">
                                                    <ul className="link-btn">
                                                        <li>
                                                            <a href="#" className="link-j1" title="Message"
                                                            >Message</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="job_single_view.html"
                                                                className="link-j1"
                                                                title="View Details"
                                                            >View Details</a
                                                            >
                                                        </li>
                                                        <li className="bkd-pm">
                                                            <button className="bookmark1" title="bookmark">
                                                                <i className="fas fa-heart"></i>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="job-item">
                                                <div className="job-top-dt">
                                                        <img
                                                            src={ process.env.PUBLIC_URL + "/profile5.jpeg" }
                                                            alt="" style={{maxHeight:'220px'}}
                                                        />
                                                </div>
                                                <div className="job-des-dt">
                                                    <h4>Darshan Kumar</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        elit. Etiam cursus pulvinar dolor nec...
                                                    </p>
                                                    <div className="job-skills">
                                                    <span >Location: Faridabad</span>
                                                        <span href="#">Height: 5'4</span>
                                                        <span href="#">Salary: 10-12Lakhs</span>
                                                        <span href="#" className="more-skills">+4</span>
                                                    </div>
                                                </div>
                                                <div className="job-buttons">
                                                    <ul className="link-btn">
                                                        <li>
                                                            <a href="#" className="link-j1" title="Message"
                                                            >Message</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="job_single_view.html"
                                                                className="link-j1"
                                                                title="View Details"
                                                            >View Details</a
                                                            >
                                                        </li>
                                                        <li className="bkd-pm">
                                                            <button className="bookmark1" title="bookmark">
                                                                <i className="fas fa-heart"></i>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="job-item">
                                                <div className="job-top-dt">
                                                        <img
                                                            src={ process.env.PUBLIC_URL + "/profile1.jpeg" }
                                                            alt="" style={{maxHeight:'220px'}}
                                                        />
                                                    <div className="job-right-dt">
                                                        {/* <div className="job-price">$60/hr</div> */}
                                                        <div className="job-fp">Verified</div>
                                                    </div>
                                                </div>
                                                <div className="job-des-dt">
                                                    <h4>Nirbhay Kumar</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        elit. Etiam cursus pulvinar dolor nec...
                                                    </p>
                                                    <div className="job-skills">
                                                    <span >Location: Faridabad</span>
                                                        <span href="#">Height: 5'4</span>
                                                        <span href="#">Salary: 10-12Lakhs</span>
                                                        <span href="#" className="more-skills">+4</span>
                                                    </div>
                                                </div>
                                                <div className="job-buttons">
                                                    <ul className="link-btn">
                                                        <li>
                                                            <a href="#" className="link-j1" title="Message"
                                                            >Message</a
                                                            >
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="job_single_view.html"
                                                                className="link-j1"
                                                                title="View Details"
                                                            >View Details</a
                                                            >
                                                        </li>
                                                        <li className="bkd-pm">
                                                            <button className="bookmark1" title="bookmark">
                                                                <i className="fas fa-heart"></i>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        </OwlCarousel>
                                {/* </div> */}
                                <div className="text-center">
                                    <button
                                        className="view-links"
                                        onclick="window.location.href = '#';"
                                    >
                                        BROWSE ALL MATCHES
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LatestMatch;