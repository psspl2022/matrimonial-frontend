import { useState } from "react";
import {NavLink} from 'react-router-dom';

function MainFooter() {

    return (
        <>
            <footer className="footer">
                <div className="subscribe-newsletter">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-6 col-md-6">
                                <div className="subcribes">
                                    <div className="text-step1">
                                        <h4>Subscribe to Newsletter</h4>
                                        <div className="btext-heading mt-2">
                                            <i className="fa fa-heart"></i>For Notifications Updates join our Newsletter.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6">
                                <div className="subcribe-input">
                                    <input className="nltr-input" type="email" placeholder="Your Email Address" />
                                    <button className="s-btn">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="about-jobby">
                                <a href="index.html"><img src="images/logo1.svg" alt="" /></a>
                                <p><sup><i class="fa fa-quote-left" style={{fontSize:"10px"}} aria-hidden="true"></i></sup> A good marriage is one  where each partner secretly suspects they got the better deal  <sup><i class="fa fa-quote-right" style={{fontSize:"10px"}} aria-hidden="true"></i></sup></p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="footer-links">
                                <h4>Explore</h4>
                                <ul>
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/signUp">Login / SignUp</NavLink></li>
                                    <li><NavLink to="/findMatches">Advanced Search</NavLink></li>
                                    <li><a href="contact_us.html">Sitemap</a></li>
                                    <li><a href="privacy_policy.html">Create Horoscope</a></li>
                                    <li><a href="Terms.html">Terms and Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="footer-links">
                                <h4>Services Offered</h4>
                                <ul>
                                    <li><NavLink to="/membership_plan">Membership Options</NavLink></li>
                                    <li><NavLink to="/findMatches">Find Match</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="footer-links">
                                <h4>Seeking Help</h4>
                                <ul>
                                    <li><a href="browse_jobs.html">Contact Us</a></li>
                                    <li><a href="my_freelancer_jobs.html">Feedback / Queries</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-social">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="copyright">
                                    <i className="far fa-copyright"></i>Copyright {(new Date().getFullYear())} <a href="#">Namdeo <i class="fa fa-heart " aria-hidden="true"></i>Matrimony</a>. All Right Reserved.
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="social-icons">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <button onClick="topFunction()" id="pageup" title="Go to top"><i className="fas fa-arrow-up"></i></button>

            
        </>
    );
}

export default MainFooter;