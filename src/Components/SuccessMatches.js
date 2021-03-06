import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import bgimage from "../background1.jpeg";
export default function SuccessMatches(){

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
            <div className="featured-candidates" style={{ backgroundImage: `url(${bgimage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',  paddingBottom: '40px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="main-heading">
                <h2 className="font-lobster" style={{fontSize: "2.71rem"}}>Success Matches By Us</h2>
                <span>Happily Married Couples.</span>
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
                      <div className="job-top-dt1 text-center">
                        <div className="job-center-dt">
                          <img
                            src={ process.env.PUBLIC_URL + "/successmatch1.jpg"}
                            alt=""
                          />
                          <div className="job-urs-dts">
                            <a href="#"><h4>Anjali <i class="fa fa-heart successheart" aria-hidden="true"></i>
  Akash</h4></a>
                            {/* <span>UX Designer</span> */}
                            <div ><span className="marriagedate">Marriage Date 23<sup>rd</sup> December 2021 </span></div>
                          </div>
                        </div>
                        {/* <div className="job-price hire-price">$50/hr</div> */}
                      </div>
                      {/* <div className="rating-location">
                        <div className="left-rating">
                          <div className="rtitle">Rating</div>
                          <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <span>4.9</span>
                          </div>
                        </div>
                        <div className="right-location">
                          <div className="text-left">
                            <div className="rtitle">Location</div>
                            <span
                              ><i className="fas fa-map-marker-alt"></i> New York
                              City</span
                            >
                          </div>
                        </div>
                      </div>
                      <div className="job-buttons">
                        <ul className="link-btn">
                          <li>
                            <a
                              href="other_freelancer_profile.html"
                              className="link-j1"
                              title="View Profile"
                              >View Profile</a
                            >
                          </li>
                          <li>
                            <a href="#" className="link-j1" title="Hire Me"
                              >Hire Me</a
                            >
                          </li>
                          <li className="bkd-pm">
                            <button className="bookmark1" title="bookmark">
                              <i className="fas fa-heart"></i>
                            </button>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                  <div className="item">
                    <div className="job-item">
                      <div className="job-top-dt1 text-center">
                        <div className="job-center-dt">
                          <img
                            src={ process.env.PUBLIC_URL + "/successmatch2.jpg"}
                            alt=""
                          />
                          <div className="job-urs-dts">
                            <a href="#"><h4>Ankit <i class="fa fa-heart successheart" aria-hidden="true"></i>
  Silpi</h4></a>
                            {/* <span>Wordpress Developer</span> */}
                            <div><span className="marriagedate">Marriage Date 23<sup>rd</sup> December 2021 </span></div>
                          </div>
                        </div>
                        {/* <div className="job-price hire-price">$50/hr</div> */}
                      </div>
                      {/* <div className="rating-location">
                        <div className="left-rating">
                          <div className="rtitle">Rating</div>
                          <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <span>4.9</span>
                          </div>
                        </div>
                        <div className="right-location">
                          <div className="text-left">
                            <div className="rtitle">Location</div>
                            <span
                              ><i className="fas fa-map-marker-alt"></i>
                              Australia</span
                            >
                          </div>
                        </div>
                      </div>
                      <div className="job-buttons">
                        <ul className="link-btn">
                          <li>
                            <a
                              href="other_freelancer_profile.html"
                              className="link-j1"
                              title="View Profile"
                              >View Profile</a
                            >
                          </li>
                          <li>
                            <a href="#" className="link-j1" title="Hire Me"
                              >Hire Me</a
                            >
                          </li>
                          <li className="bkd-pm">
                            <button className="bookmark1" title="bookmark">
                              <i className="fas fa-heart"></i>
                            </button>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                  <div className="item">
                    <div className="job-item">
                      <div className="job-top-dt1 text-center">
                        <div className="job-center-dt">
                          <img
                            src={ process.env.PUBLIC_URL + "/successmatch3.jpg"}
                            alt=""
                          />
                          <div className="job-urs-dts">
                            <a href="#"><h4>Rajan <i class="fa fa-heart successheart" aria-hidden="true"></i>  Naina</h4></a>
                            {/* <span>Php Developer</span> */}
                            <div ><span className="marriagedate">Marriage Date 23<sup>rd</sup> December 2021 </span></div>
                          </div>
                        </div>
                        {/* <div className="job-price hire-price">$60/hr</div> */}
                      </div>
                      {/* <div className="rating-location">
                        <div className="left-rating">
                          <div className="rtitle">Rating</div>
                          <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <span>5.0</span>
                          </div>
                        </div>
                        <div className="right-location">
                          <div className="text-left">
                            <div className="rtitle">Location</div>
                            <span
                              ><i className="fas fa-map-marker-alt"></i> India</span
                            >
                          </div>
                        </div>
                      </div>
                      <div className="job-buttons">
                        <ul className="link-btn">
                          <li>
                            <a
                              href="other_freelancer_profile.html"
                              className="link-j1"
                              title="View Profile"
                              >View Profile</a
                            >
                          </li>
                          <li>
                            <a href="#" className="link-j1" title="Hire Me"
                              >Hire Me</a
                            >
                          </li>
                          <li className="bkd-pm">
                            <button className="bookmark1" title="bookmark">
                              <i className="fas fa-heart"></i>
                            </button>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                  
                  
                 
                  </OwlCarousel>
                {/* </div> */}
                <div className="text-center">
                  <button
                    className="view-links"
                    onClick="window.location.href = '#';"
                  >
                    SEE ALL SUCCESS MATCHES
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