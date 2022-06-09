import InterestSent from "./InterestSent";
import InterestReceived from "./InterestReceived";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Interest() {
  const [TabName, setTabName] = useState("InterestReceived");
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (!sessionStorage.hasOwnProperty("access_token")) {
      history.replace("/signUp");
    }
  }, []);

  return (
    <>
      <main className="browse-section" style={{ padding : "20px 0px 80px 0px" }}>
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-3 col-md-4">
                <MyProfileSidebar /> */}
          </div>
          <div className="col-lg-12 col-md-12 mx-auto mainpage">
          <div class="browse-banner" style={{ marginBottom : "20px" }}>
                <div class="bbnr-left">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/THEME/gambolthemes.net/html-items/jobby/jobby-freelancer/images/browse/trophy.png"
                    }
                    alt=""
                  />
                  <div class="bbnr-text">
                    <h4>Upgrade to Pro</h4>
                    <p>Unlimited Matches and Apply.</p>
                  </div>
                </div>
                <div class="bbnr-right">
                  <button class="plan-btn">Upgrade Plan</button>
                </div>
              </div>
            <div className="account_tabs">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <button
                    className={` nav-link ${
                      TabName === "InterestReceived" ? "active" : ""
                    }`}
                    onClick={() => {
                      setTabName("InterestReceived");
                    }}
                  >
                    Interest Received
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={` nav-link ${
                      TabName === "InterestSent" ? "active" : ""
                    }`}
                    onClick={() => {
                      setTabName("InterestSent");
                    }}
                  >
                    Interest Sent
                  </button>
                </li>
              </ul>
            </div>
            {TabName === "InterestReceived" && <InterestReceived />}
            {TabName === "InterestSent" && <InterestSent />}
          </div>
        </div>
      </main>
    </>
  );
}

export default Interest;
