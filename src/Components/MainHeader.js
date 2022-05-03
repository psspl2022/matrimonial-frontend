import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import "../App.css";

function MainHeader() {

    const [show, setShow] = useState(false);
	// Sticky Menu Area
	useEffect(() => {
		window.addEventListener('scroll', isSticky);
		return () => {
			window.removeEventListener('scroll', isSticky);
		};
	});

		   
	/* Method that will fix header after a specific scrollable */
	const isSticky = (e) => {
		const header = document.querySelector('header');
		const scrollTop = window.scrollY;
		scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
	};

	return (
		<>
			<header>
				<div className="top-header">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12 col-sm-12">
								<div className="top-header-full">
									<div className="top-left-hd">
										<ul>
											<li><div className="wlcm-text">Welcome to Matrimonial</div></li>
											<li>
												<div className="lang-icon dropdown">
													<i className="fas fa-globe ln-glb"></i>
													<a href="#" className="icon15 dropdown-toggle-no-caret" role="button" data-toggle="dropdown" id="dropdownLangLink" aria-haspopup="true" aria-expanded="false">
														EN <i className="fas fa-caret-down p-crt"></i>
													</a>
													<div className="dropdown-menu lanuage-dropdown dropdown-menu-left" aria-labelledby="dropdownLangLink">
														<a className="link-item" href="#">EN</a>
														<a className="link-item" href="#">DE</a>
														<a className="link-item" href="#">RU</a>
														<a className="link-item" href="#">ES</a>
														<a className="link-item" href="#">FR</a>
													</div>
												</div>
											</li>
										</ul>
									</div>
									<div className="top-right-hd">
										<ul>
											<li className="dropdown">
												<a href="#" className="icon14 dropdown-toggle-no-caret" role="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
													<i className="fas fa-envelope"></i><div className="circle-alrt"></div>
												</a>
												<div className="dropdown-menu message-dropdown dropdown-menu-right">
													<div className="user-request-list">
														<div className="request-users">
															<div className="user-request-dt">
																<a href="#"><img src="images/user-dp-1.jpg" alt="" />
																	<div className="user-title1">Jassica William </div>
																	<span>Hey How are you John Doe...</span>
																</a>
															</div>
															<div className="time5">2 min ago</div>
														</div>
													</div>
													<div className="user-request-list">
														<div className="request-users">
															<div className="user-request-dt">
																<a href="#"><img src="images/user-dp-1.jpg" alt="" />
																	<div className="user-title1">Rock Smith </div>
																	<span>Interesting Event! I will join this...</span>
																</a>
															</div>
															<div className="time5">5 min ago</div>
														</div>
													</div>
													<div className="user-request-list">
														<div className="request-users">
															<div className="user-request-dt">
																<a href="#"><img src="images/user-dp-1.jpg" alt="" />
																	<div className="user-title1">Joy Doe </div>
																	<span>Hey Sir! What about you...</span>
																</a>
															</div>
															<div className="time5">10 min ago</div>
														</div>
													</div>
													<div className="user-request-list">
														<a href="my_freelancer_messages.html" className="view-all">View All Messages</a>
													</div>
												</div>
											</li>
											<li className="dropdown">
												<a href="#" className="icon14 dropdown-toggle-no-caret" role="button" data-toggle="dropdown">
													<i className="fas fa-bell"></i><div className="circle-alrt"></div>
												</a>
												<div className="dropdown-menu message-dropdown dropdown-menu-right">
													<div className="user-request-list">
														<div className="request-users">
															<div className="user-request-dt">
																<a href="#">
																	<div className="noti-icon"><i className="fas fa-users"></i></div>
																	<div className="user-title1">Rock William </div>
																	<span>applied for a <ins className="noti-p-link">Php Developer</ins>.</span>
																</a>
															</div>
														</div>
													</div>
													<div className="user-request-list">
														<div className="request-users">
															<div className="user-request-dt">
																<a href="#">
																	<div className="noti-icon"><i className="fas fa-bullseye"></i></div>
																	<div className="user-title1">Johnson Smith</div>
																	<span>placed a bid on your <ins className="noti-p-link">I Need a ...</ins></span>
																</a>
															</div>
														</div>
													</div>
													<div className="user-request-list">
														<div className="request-users">
															<div className="user-request-dt">
																<a href="#">
																	<div className="noti-icon"><i className="fas fa-exclamation"></i></div>
																	<span className="pt-2">Your job listing <ins className="noti-p-link">Wordpress Developer</ins> is expiring.</span>
																</a>
															</div>
														</div>
													</div>
													<div className="user-request-list">
														<a href="my_freelancer_notifications.html" className="view-all">View All Notifications</a>
													</div>
												</div>
											</li>
											<li>
												<div className="account order-1 dropdown">
													<a href="#" className="account-link dropdown-toggle-no-caret" role="button" id="dropdownAccountLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
														<div className="user-dp"><img src="images/dp.jpg" alt="" /></div>
														<span>Hi! Ankit</span>
														<i className="fas fa-sort-down"></i>
													</a>
													<div className="dropdown-menu account-dropdown dropdown-menu-right" aria-labelledby="dropdownAccountLink">
														<a className="link-item" href="my_freelancer_dashboard.html">Dashboard</a>
														<a className="link-item" href="my_freelancer_setting.html">Setting</a>
														<a className="link-item" href="my_freelancer_messages.html">My Messages</a>
														<a className="link-item" href="my_freelancer_portfolio.html">My Portfolio</a>
														<a className="link-item" href="my_freelancer_bookmarks.html">My Bookmarks</a>
														<a className="link-item" href="my_freelancer_payments.html">Payments</a>
														<a className="link-item" href="sign_in.html">Logout</a>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="sub-header theme-color">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12 col-sm-12">
								<nav className="navbar navbar-expand-lg navbar-light bg-dark1 justify-content-sm-start">
									<a className="order-1 order-lg-0 ml-lg-0 ml-3 mr-auto" href="index.html"><img src="matrimonial_logo.png" alt="" style={{maxHeight:'40px'}} /></a>
									<button className="navbar-toggler align-self-start" onClick={()=>setShow(!show)} type="button">
										<i className="fas fa-bars"></i>
									</button>
									<div className={`collapse navbar-collapse d-flex flex-column flex-lg-row flex-xl-row justify-content-lg-end bg-dark1 p-3 p-lg-0 mt1-5 mt-lg-0 mobileMenu ${show ? "open" : ""}` } id="navbarSupportedContent">
										<ul className="navbar-nav align-self-stretch">
											<li className="nav-item">
												<NavLink className="nav-link" to="/" >Home</NavLink>
											</li>
											<li className="nav-item">
												<NavLink to="/findMatches" className="nav-link" >Find Matches</NavLink>
												{/* <div className="dropdown-menu pages-dropdown">
													<a className="link-item" href="browse_jobs.html">Browse Match</a>
													<a className="link-item" href="job_single_view.html">Single Match View</a>
													<a className="link-item" href="post_a_job.html">Post a Match</a>
												</div> */}
											</li>
											<li className="nav-item dropdown">
												<a href="#" className="nav-link dropdown-toggle-no-caret" role="button" data-toggle="dropdown">Search</a>
												<div className="dropdown-menu pages-dropdown">
													<a className="link-item" href="browse_projects.html">Browse Projects</a>
													<a className="link-item" href="project_single_view.html">Single Project View</a>
													<a className="link-item" href="post_a_project.html">Post a Project</a>
												</div>
											</li>
											<li className="nav-item dropdown">
												<a href="#" className="nav-link dropdown-toggle-no-caret" role="button" data-toggle="dropdown">Upgrade Plan</a>
												<div className="dropdown-menu pages-dropdown">
													<a className="link-item" href="browse_companies.html">Browse Companies</a>
													<a className="link-item" href="other_company_profile.html">Company Profile</a>
												</div>
											</li>
											<li className="nav-item">
												<NavLink to="/help" className="nav-link" role="button">Help</NavLink>
											</li>
											<li className="nav-item dropdown pages152">
												<a href="#" className="nav-link dropdown-toggle-no-caret" role="button"  id="dropdownPageLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
													Pages <i className="fas fa-caret-down p-crt"></i>
												</a>
												<div className='dropdown-menu' aria-labelledby="dropdownPageLink" >
													<NavLink className="link-item" to="/">About</NavLink>
													<NavLink className="link-item" to="/blog">Our Blog</NavLink>
													<NavLink className="link-item" to="/view">Signle Blog View</NavLink>
												</div>
											</li>
										</ul>
										<a href="#" className="search-link" role="button" dataToggle="modal" dataTarget="#searchModal"><i className="fas fa-search"></i></a>
										<a href="post_a_job.html" className="add-post">Login</a>
										<a href="post_a_project.html" className="add-task">Register</a>
									</div>
									<div className="responsive-search order-1">
										<input type="text" className="rsp-search" placeholder="Search..." />
											<i className="fas fa-search r-sh1"></i>
									</div>
								</nav>
								<div className={`overlay ${show ? "open" : ""}` }></div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}

export default MainHeader;


