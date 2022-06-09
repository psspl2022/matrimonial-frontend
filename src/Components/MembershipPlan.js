import "../App.css";
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import CheckTokenExist from "./CheckTokenExist";
import { useHistory } from "react-router-dom";

export default function MembershipPlan() {

	const history = useHistory();

  const {userExists} = CheckTokenExist();
  useEffect(() => {
    if(userExists==false){
      // history.push("/login");
    }
  }, []);

  return (
    <>
      <div className="membership-plan">
        <div className="plan-heading">
          <h2 style={{ fontSize: '2.71rem' }}>Membership Plans & Pricing</h2>
          <span style={{ fontSize: '20px' }}>Access all the paid services in reasonable prices</span>
        </div>
        <div className="wrapper">
          <div className="pricing-table gprice-single">
            <div className="head">
              <h4 className="title">Basic</h4>
            </div>
            <div className="content">
              <div className="price">
                <h1>{'\u20B9'} 499</h1>
              </div>
              <ul>
                <li>Browse Profiles</li>
                <li>Shortlist & Send Interest</li>
                <li>Send Mail</li>
                <li>View contacts of members you like</li>
                <li>10 Profiles can be viewed</li>
                <li>
                  {" "}
                  <del>Priority customer support</del>{" "}
                </li>
                <li>
                  {" "}
                  <del>Peer Chatting</del>
                </li>
                <li>
                  {" "}
                  <del>Make your contacts visible to others</del>
                </li>
              </ul>
              <div className="sign-up">
                { userExists==true && 
                <NavLink to="/membershipDetail/1" className="btn bordered radius">
                  Buy
                </NavLink>
                }
                {
                userExists==false &&
                <NavLink to="/signUp" className="btn bordered radius">
                  Signup Now
                </NavLink>
                }
              </div>
            </div>
          </div>
          <div className="pricing-table gprice-single">
            <div className="head">
              <h4 className="title">Standard</h4>
            </div>
            <div className="content">
              <div className="price">
                <h1>{'\u20B9'} 799</h1>
              </div>
              <ul>
                <li>Browse Profiles</li>
                <li>Shortlist & Send Interest</li>
                <li>Send Mail</li>
                <li>View contacts of members you like</li>
                <li>50 Profiles can be viewed</li>
                <li>Peer Chatting</li>
                <li>
                  <del>
                    Priority customer support
                  </del>
                </li>
                <li>
                  <del>Make your contacts visible to others</del>
                </li>
              </ul>
              <div className="sign-up">
              { userExists==true && 
                <NavLink to="/membershipDetail/2" className="btn bordered radius">
                  Buy
                </NavLink>
                }
                {
                userExists==false &&
                <NavLink to="/signUp" className="btn bordered radius">
                  Signup Now
                </NavLink>
                }
              </div>
            </div>
          </div>
          <div className="pricing-table gprice-single">
            <div className="head">
              <h4 className="title">Premium</h4>
            </div>
            <div className="content">
              <div className="price">
                <h1>{'\u20B9'} 999</h1>
              </div>
              <ul>
                <li>Browse Profiles</li>
                <li>Shortlist & Send Interest</li>
                <li>Send Mail</li>
                <li>View contacts of members you like</li>
                <li>Unlimited Profiles can be viewed</li>
                <li>Priority customer support</li>
                <li>Peer Chatting</li>
                <li>Make your contacts visible to others</li>
              </ul>
              <div className="sign-up">
              { userExists==true && 
                <NavLink to="/membershipDetail/3" className="btn bordered radius">
                  Buy
                </NavLink>
                }
                {
                userExists==false &&
                <NavLink to="/signUp" className="btn bordered radius">
                  Signup Now
                </NavLink>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
