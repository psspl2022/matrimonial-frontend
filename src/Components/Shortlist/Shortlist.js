import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import ProfileSkeleton from "../Dummy Skeleton/ProfileSkeleton";

export default function Shortlist() {
  const [grid, setGrid] = useState(false);
  const [data, setData] = useState([]);
  const [fetchDone, setFetchDone] = useState(false);

  const token = window.sessionStorage.getItem("access_token");
  const headers_data = {
    headers: {
      authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    acceptMe();
    document.title = "Shortlist Profiles";
  }, []);

  function acceptMe() {
    axios
      .get(`${window.Url}api/getShortlist`, headers_data)
      .then(({ data }) => {
        setData(data);
        setFetchDone(true);
      });
  }

  return (
    <>
      <main className="browse-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 mainpage mx-auto">
              <div className="browse-banner">
                <div className="bbnr-left">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/THEME/gambolthemes.net/html-items/jobby/jobby-freelancer/images/browse/trophy.png"
                    }
                    alt=""
                  />
                  <div className="bbnr-text">
                    <h4>Upgrade to Pro</h4>
                    <p>Unlimited Matches and Apply.</p>
                  </div>
                </div>
                <div className="bbnr-right">
                  <button className="plan-btn">Upgrade Plan</button>
                </div>
              </div>
              <div className="main-tabs">
                <div className="res-tabs">
                  <div className="mtab-left">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item">
                        <a
                          href="#tab-1"
                          className="nav-link active"
                          data-toggle="tab"
                        >
                          Shortlist Profile
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mtab-right">
                    <ul>
                      <li className="sort-list-dt">
                        <div className="ui selection dropdown skills-search sort-dropdown">
                          <input name="gender" type="hidden" value="default" />
                          <i className="dropdown icon d-icon"></i>
                          <div className="text">Sort By</div>
                          <div className="menu">
                            <div className="item" data-value="0">
                              Relevance
                            </div>
                            <div className="item" data-value="1">
                              New
                            </div>
                            <div className="item" data-value="2">
                              Old
                            </div>
                            <div className="item" data-value="3">
                              Last 15 Days
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="grid-list">
                        <button
                          className="gl-btn"
                          onClick={() => {
                            setGrid(false);
                          }}
                          id="grid"
                        >
                          <i className="fas fa-th-large"></i>
                        </button>
                        <button
                          className="gl-btn"
                          onClick={() => {
                            setGrid(true);
                          }}
                          id="list"
                        >
                          <i className="fas fa-th-list"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tab-content ">
                  <div className="tab-pane active" id="tab-1">
                    <div className="row view-group " id="products">
                      {data.map((item, index) => (
                        <div
                          className={`lg-item col-lg-4 col-xs-4 grid-group-item1 ${
                            grid == true ? "list-group-item1" : ""
                          }`}
                          key={index}
                        >
                          <div className="job-item mt-30">
                            <div
                              className="job-top-dt text-right"
                              style={{ paddingTop: "3px" }}
                            >
                              <div className="job-skills"></div>
                              <img
                                src={process.env.PUBLIC_URL + "/profile1.jpg"}
                                alt=""
                                style={{ maxHeight: "220px" }}
                              />
                            </div>
                            <div className="job-des-dt">
                              <h2 style={{ fontWeight: "200" }}>{item.name}</h2>
                              {/* <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Etiam cursus pulvinar dolor nec...
                                            </p> */}
                              <div className="job-skills">
                                <span>
                                  Age:{" "}
                                  {Math.floor(
                                    (Date.now() - new Date(item.dob)) /
                                      31557600000
                                  )}{" "}
                                  years
                                </span>
                                <span>Height: {item.get_height.height} </span>
                                <span>
                                  Religion: {item.get_religion.religion}{" "}
                                </span>
                                <span>Caste: {item.get_caste.caste} </span>
                                <span>
                                  Mother Tongue:{" "}
                                  {item.get_mother_tongue.mother_tongue}{" "}
                                </span>
                                <span>Salary: {item.get_income.income} </span>
                                <span>
                                  Qualification: {item.get_education.education}{" "}
                                </span>
                                <span>
                                  Occupation: {item.get_occupation.occupation}{" "}
                                </span>
                                {/* <span className="more-skills">+4</span> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      {data.length == 0 && !fetchDone && (
                        <div className="desired_section">
                          <ProfileSkeleton />
                          <ProfileSkeleton />
                          <ProfileSkeleton />
                        </div>
                      )}

                      <div className="col-12">
                        <div className="main-p-pagination">
                          <nav aria-label="Page navigation example"></nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
