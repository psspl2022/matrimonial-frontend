import { useState } from "react";

export default function SearchResult() {
    const [grid, setGrid] = useState(false);

    return (
        <>
            
                <div class="browse-banner">
                    <div class="bbnr-left">
                        <img src={ process.env.PUBLIC_URL + "/THEME/gambolthemes.net/html-items/jobby/jobby-freelancer/images/browse/trophy.png"} alt="" />
                        <div class="bbnr-text">
                            <h4>Upgrade to Pro</h4>
                            <p>Unlimited Matches and Apply.</p>
                        </div>
                    </div>
                    <div class="bbnr-right">
                        <button class="plan-btn">Upgrade Plan</button>
                    </div>
                </div>
                <div class="main-tabs">
                    <div class="res-tabs">
                        <div class="mtab-left">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a href="#tab-1" class="nav-link active" data-toggle="tab"
                                    >Newest Match</a
                                    >
                                </li>
                                {/* <li class="nav-item">
                                    <a href="#tab-2" class="nav-link" data-toggle="tab"
                                    >Full Time</a
                                    >
                                </li>
                                <li class="nav-item">
                                    <a href="#tab-3" class="nav-link" data-toggle="tab"
                                    >Part Time</a
                                    >
                                </li> */}
                            </ul>
                        </div>
                        <div class="mtab-right">
                            <ul>
                                <li class="sort-list-dt">
                                    <div
                                        class="ui selection dropdown skills-search sort-dropdown"
                                    >
                                        <input name="gender" type="hidden" value="default" />
                                        <i class="dropdown icon d-icon"></i>
                                        <div class="text">Sort By</div>
                                        <div class="menu">
                                            <div class="item" data-value="0">Relevance</div>
                                            <div class="item" data-value="1">New</div>
                                            <div class="item" data-value="2">Old</div>
                                            <div class="item" data-value="3">Last 15 Days</div>
                                        </div>
                                    </div>
                                </li>
                                <li class="grid-list">
                                    <button class="gl-btn" onClick={()=>{ setGrid(false) }} id="grid">
                                        <i class="fas fa-th-large"></i>
                                    </button>
                                    <button class="gl-btn" onClick={()=>{ setGrid(true) }} id="list">
                                        <i class="fas fa-th-list"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="tab-content">
                        <div class="tab-pane active" id="tab-1">
                            <div class="row view-group" id="products">
                                <div class={`lg-item col-lg-6 col-xs-6 grid-group-item1 ${grid==true?'list-group-item1':''}`}>
                                    <div className="job-item mt-30">
                                        <div className="job-top-dt text-center">
                                                <img
                                                    src={ process.env.PUBLIC_URL + "/profile1.jpg" }
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
                                            {/* <ul className="link-btn">
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
                                            </ul> */}
                                            <ul className="link-btn">
                                                {/* <li>
                                                    <a href="#" className="link-j1" title="Message"
                                                    >Message</a
                                                    >
                                                </li> */}
                                                {/* <li>
                                                    <a
                                                        href="job_single_view.html"
                                                        className="link-j1"
                                                        title="View Details"
                                                    >View Details</a
                                                    >
                                                </li> */}
                                                <li className="bkd-pm">
                                                    <button className="bookmark1" >
                                                        <i className="fas fa-envelope 2x"></i>
                                                    </button>
                                                </li>
                                                <li className="bkd-pm">
                                                    <button className="bookmark1" >
                                                        <i className="fas fa-comment 2x"></i>
                                                    </button>
                                                </li>
                                                <li className="bkd-pm">
                                                    <button className="bookmark1" >
                                                        <i className="fas fa-star"></i>
                                                    </button>
                                                </li>
                                                <li className="bkd-pm">
                                                    <button className="bookmark1" >
                                                        <i className="fas fa-heart"></i>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class={`lg-item col-lg-6 col-xs-6 grid-group-item1 ${grid==true?'list-group-item1':''}`}>
                                    <div className="job-item mt-30">
                                        <div className="job-top-dt text-center">
                                                <img
                                                    src={ process.env.PUBLIC_URL + "/profile3.jpg" }
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
                                            {/* <ul className="link-btn">
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
                                            </ul> */}
                                            <ul className="link-btn">
                                                {/* <li>
                                                    <a href="#" className="link-j1" title="Message"
                                                    >Message</a
                                                    >
                                                </li> */}
                                                {/* <li>
                                                    <a
                                                        href="job_single_view.html"
                                                        className="link-j1"
                                                        title="View Details"
                                                    >View Details</a
                                                    >
                                                </li> */}
                                                <li className="bkd-pm">
                                                    <button className="bookmark1" >
                                                        <i className="fas fa-envelope 2x"></i>
                                                    </button>
                                                </li>
                                                <li className="bkd-pm">
                                                    <button className="bookmark1" >
                                                        <i className="fas fa-comment 2x"></i>
                                                    </button>
                                                </li>
                                                <li className="bkd-pm">
                                                    <button className="bookmark1" >
                                                        <i className="fas fa-star"></i>
                                                    </button>
                                                </li>
                                                <li className="bkd-pm">
                                                    <button className="bookmark1" >
                                                        <i className="fas fa-heart"></i>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-12">
                                    <div class="main-p-pagination">
                                        <nav aria-label="Page navigation example">
                                            <ul class="pagination">
                                                <li class="page-item">
                                                    <a
                                                        class="page-link"
                                                        href="#"
                                                        aria-label="Previous"
                                                    >
                                                        PREV
                                                    </a>
                                                </li>
                                                <li class="page-item">
                                                    <a class="page-link active" href="#">1</a>
                                                </li>
                                                <li class="page-item">
                                                    <a class="page-link" href="#">2</a>
                                                </li>
                                                <li class="page-item">
                                                    <a class="page-link" href="#">...</a>
                                                </li>
                                                <li class="page-item">
                                                    <a class="page-link" href="#">24</a>
                                                </li>
                                                <li class="page-item">
                                                    <a class="page-link" href="#" aria-label="Next">
                                                        NEXT
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="tab-pane" id="tab-2">
                            <div class="row view-group" id="products_1">
                                <div class={`lg-item col-lg-6 col-xs-6 grid-group-item1 ${grid==true?'list-group-item1':''}`}>
                                    <div class="job-item mt-30">
                                        <div class="job-top-dt">
                                            <div class="job-left-dt">
                                                <img
                                                    src="images/homepage/latest-jobs/img-1.jpg"
                                                    alt=""
                                                />
                                                <div class="job-ut-dts">
                                                    <a href="#"><h4>John Doe</h4></a>
                                                    <span
                                                    ><i class="fas fa-map-marker-alt"></i> New York
                                                        City</span
                                                    >
                                                </div>
                                            </div>
                                            <div class="job-right-dt">
                                                <div class="job-price">$599</div>
                                                <div class="job-fp">Full Time</div>
                                            </div>
                                        </div>
                                        <div class="job-des-dt">
                                            <h4>UX Designer</h4>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Etiam cursus pulvinar dolor nec...
                                            </p>
                                            <div class="job-skills">
                                                <a href="#">UX</a>
                                                <a href="#">UI</a>
                                                <a href="#">Photoshop</a>
                                                <a href="#" class="more-skills">+4</a>
                                            </div>
                                        </div>
                                        <div class="job-buttons">
                                            <ul class="link-btn">
                                                <li>
                                                    <a href="#" class="link-j1" title="Apply Now"
                                                    >APPLY NOW</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        href="job_single_view.html"
                                                        class="link-j1"
                                                        title="View Job"
                                                    >View Job</a
                                                    >
                                                </li>
                                                <li class="bkd-pm">
                                                    <button class="bookmark1" title="bookmark">
                                                        <i class="fas fa-heart"></i>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class={`lg-item col-lg-6 col-xs-6 grid-group-item1 ${grid==true?'list-group-item1':''}`}>
                                    <div class="job-item mt-30">
                                        <div class="job-top-dt">
                                            <div class="job-left-dt">
                                                <img
                                                    src="images/homepage/latest-jobs/img-2.jpg"
                                                    alt=""
                                                />
                                                <div class="job-ut-dts">
                                                    <a href="#"><h4>Johnson Smith</h4></a>
                                                    <span
                                                    ><i class="fas fa-map-marker-alt"></i>
                                                        India</span
                                                    >
                                                </div>
                                            </div>
                                            <div class="job-right-dt">
                                                <div class="job-price">$50/hr</div>
                                                <div class="job-fp">Full Time</div>
                                            </div>
                                        </div>
                                        <div class="job-des-dt">
                                            <h4>PHP Developer</h4>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Etiam cursus pulvinar dolor nec...
                                            </p>
                                            <div class="job-skills">
                                                <a href="#">Php</a>
                                                <a href="#">Sql</a>
                                                <a href="#">Javascript</a>
                                                <a href="#" class="more-skills">+4</a>
                                            </div>
                                        </div>
                                        <div class="job-buttons">
                                            <ul class="link-btn">
                                                <li>
                                                    <a href="#" class="link-j1" title="Apply Now"
                                                    >APPLY NOW</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        href="job_single_view.html"
                                                        class="link-j1"
                                                        title="View Job"
                                                    >View Job</a
                                                    >
                                                </li>
                                                <li class="bkd-pm">
                                                    <button class="bookmark1" title="bookmark">
                                                        <i class="fas fa-heart"></i>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class={`lg-item col-lg-6 col-xs-6 grid-group-item1 ${grid==true?'list-group-item1':''}`}>
                                    <div class="job-item mt-30">
                                        <div class="job-top-dt">
                                            <div class="job-left-dt">
                                                <img
                                                    src="images/homepage/latest-jobs/img-5.jpg"
                                                    alt=""
                                                />
                                                <div class="job-ut-dts">
                                                    <a href="#"><h4>Jassica William</h4></a>
                                                    <span
                                                    ><i class="fas fa-map-marker-alt"></i>
                                                        Australia</span
                                                    >
                                                </div>
                                            </div>
                                            <div class="job-right-dt">
                                                <div class="job-price">$300</div>
                                                <div class="job-fp">Full Time</div>
                                            </div>
                                        </div>
                                        <div class="job-des-dt">
                                            <h4>Delivery Boy</h4>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Etiam cursus pulvinar dolor nec...
                                            </p>
                                            <div class="job-skills">
                                                <a href="#">Delivery</a>
                                                <a href="#">Local</a>
                                                <a href="#">Graduation</a>
                                            </div>
                                        </div>
                                        <div class="job-buttons">
                                            <ul class="link-btn">
                                                <li>
                                                    <a href="#" class="link-j1" title="Apply Now"
                                                    >APPLY NOW</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        href="job_single_view.html"
                                                        class="link-j1"
                                                        title="View Job"
                                                    >View Job</a
                                                    >
                                                </li>
                                                <li class="bkd-pm">
                                                    <button class="bookmark1" title="bookmark">
                                                        <i class="fas fa-heart"></i>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="main-p-pagination">
                                        <nav aria-label="Page navigation example">
                                            <ul class="pagination">
                                                <li class="page-item">
                                                    <a
                                                        class="page-link"
                                                        href="#"
                                                        aria-label="Previous"
                                                    >
                                                        PREV
                                                    </a>
                                                </li>
                                                <li class="page-item">
                                                    <a class="page-link active" href="#">1</a>
                                                </li>
                                                <li class="page-item">
                                                    <a class="page-link" href="#">2</a>
                                                </li>
                                                <li class="page-item">
                                                    <a class="page-link" href="#">...</a>
                                                </li>
                                                <li class="page-item">
                                                    <a class="page-link" href="#">10</a>
                                                </li>
                                                <li class="page-item">
                                                    <a class="page-link" href="#" aria-label="Next">
                                                        NEXT
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="tab-3">
                            <div class="row view-group" id="products_2">
                                <div class={`lg-item col-lg-6 col-xs-6 grid-group-item1 ${grid==true?'list-group-item1':''}`}>
                                    <div class="job-item mt-30">
                                        <div class="job-top-dt">
                                            <div class="job-left-dt">
                                                <img
                                                    src="images/homepage/latest-jobs/img-1.jpg"
                                                    alt=""
                                                />
                                                <div class="job-ut-dts">
                                                    <a href="#"><h4>John Doe</h4></a>
                                                    <span
                                                    ><i class="fas fa-map-marker-alt"></i> New York
                                                        City</span
                                                    >
                                                </div>
                                            </div>
                                            <div class="job-right-dt">
                                                <div class="job-price">$599</div>
                                                <div class="job-fp job-prt">Part Time</div>
                                            </div>
                                        </div>
                                        <div class="job-des-dt">
                                            <h4>UX Designer</h4>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Etiam cursus pulvinar dolor nec...
                                            </p>
                                            <div class="job-skills">
                                                <a href="#">UX</a>
                                                <a href="#">UI</a>
                                                <a href="#">Photoshop</a>
                                                <a href="#" class="more-skills">+4</a>
                                            </div>
                                        </div>
                                        <div class="job-buttons">
                                            <ul class="link-btn">
                                                <li>
                                                    <a href="#" class="link-j1" title="Apply Now"
                                                    >APPLY NOW</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        href="job_single_view.html"
                                                        class="link-j1"
                                                        title="View Job"
                                                    >View Job</a
                                                    >
                                                </li>
                                                <li class="bkd-pm">
                                                    <button class="bookmark1" title="bookmark">
                                                        <i class="fas fa-heart"></i>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class={`lg-item col-lg-6 col-xs-6 grid-group-item1 ${grid==true?'list-group-item1':''}`}>
                                    <div class="job-item mt-30">
                                        <div class="job-top-dt">
                                            <div class="job-left-dt">
                                                <img
                                                    src="images/homepage/latest-jobs/img-2.jpg"
                                                    alt=""
                                                />
                                                <div class="job-ut-dts">
                                                    <a href="#"><h4>Johnson Smith</h4></a>
                                                    <span
                                                    ><i class="fas fa-map-marker-alt"></i>
                                                        India</span
                                                    >
                                                </div>
                                            </div>
                                            <div class="job-right-dt">
                                                <div class="job-price">$50/hr</div>
                                                <div class="job-fp job-prt">Part Time</div>
                                            </div>
                                        </div>
                                        <div class="job-des-dt">
                                            <h4>PHP Developer</h4>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Etiam cursus pulvinar dolor nec...
                                            </p>
                                            <div class="job-skills">
                                                <a href="#">Php</a>
                                                <a href="#">Sql</a>
                                                <a href="#">Javascript</a>
                                                <a href="#" class="more-skills">+4</a>
                                            </div>
                                        </div>
                                        <div class="job-buttons">
                                            <ul class="link-btn">
                                                <li>
                                                    <a href="#" class="link-j1" title="Apply Now"
                                                    >APPLY NOW</a
                                                    >
                                                </li>
                                                <li>
                                                    <a
                                                        href="job_single_view.html"
                                                        class="link-j1"
                                                        title="View Job"
                                                    >View Job</a
                                                    >
                                                </li>
                                                <li class="bkd-pm">
                                                    <button class="bookmark1" title="bookmark">
                                                        <i class="fas fa-heart"></i>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-12">
                                    <div class="main-p-pagination">
                                        <nav aria-label="Page navigation example">
                                            <ul class="pagination">
                                                <li class="page-item">
                                                    <a
                                                        class="page-link"
                                                        href="#"
                                                        aria-label="Previous"
                                                    >
                                                        PREV
                                                    </a>
                                                </li>
                                                <li class="page-item">
                                                    <a class="page-link active" href="#">1</a>
                                                </li>
                                                <li class="page-item">
                                                    <a class="page-link" href="#">2</a>
                                                </li>
                                                <li class="page-item">
                                                    <a class="page-link" href="#">3</a>
                                                </li>
                                                <li class="page-item">
                                                    <a class="page-link" href="#" aria-label="Next">
                                                        NEXT
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
        </>
    );
}