import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import SearchFilters from "./SearchFilters";
import ProfileSkeleton from "./Dummy Skeleton/ProfileSkeleton";

export default function SearchResult(props) {
  const [grid, setGrid] = useState(false);
  const [forFilter, setForFilter] = useState([]);
  const [parfilterData, setParFilterData] = useState([]);
  const [fetchDone, setFetchDone] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Find Matches List";
    showAllProfiles();
  }, []);

  const token = window.sessionStorage.getItem("access_token");
  const headers_data = {
    headers: {
      authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  //   useEffect(() => {
  //     setData(props.profileData);
  //   }, [props]);

  useEffect(() => {
    setData(
      forFilter.filter((prof_data) => {
        if (
          (parfilterData[0] != "" ? (Math.floor((Date.now() - new Date(prof_data.dob)) / (31557600000))) >= parfilterData[0] : 1) &&
          (parfilterData[1] != "" ? (Math.floor((Date.now() - new Date(prof_data.dob)) / (31557600000))) <= parfilterData[1] : 1) &&
          (parfilterData[2] != ""
            ? prof_data.height >= parfilterData[2]
            : 1) &&
          (parfilterData[3] != ""
            ? prof_data.height <= parfilterData[3]
            : 1) &&
          (parfilterData[4] != ""
            ? prof_data[3].get_income.income >= parfilterData[4]
            : 1) &&
          (parfilterData[5] != ""
            ? prof_data[3].get_income.income <= parfilterData[5]
            : 1) &&
          (parfilterData[6] != ""
            ? parfilterData[6].includes(prof_data.religion)
            : 1) &&
          (parfilterData[7] != ""
            ? parfilterData[7].includes(prof_data.mother_tongue)
            : 1) &&
          (parfilterData[8] != ""
            ? parfilterData[8].includes(prof_data.maritial_status)
            : 1)
        ) {
          return prof_data;
        }
      })
    );
  }, [parfilterData]);

  function showAllProfiles() {
    axios
      .get(`${window.Url}api/getAllUserProfiles`, headers_data)
      .then(({ data }) => {
        setData(data);
        setForFilter(data);
        setFetchDone(true);
      });
  }

  const sendIntrest = (id) => {
    const update = {
      id: id,
    };
    axios
      .post(`${window.Url}api/sendIntrest`, update, headers_data)
      .then((response) => {
        if (response.data.hasOwnProperty("succmsg")) {
          showAllProfiles();
        } else {
        }
      });
  };

  const shortlistProfile = (id) => {
    const update = {
      id: id,
    };
    axios
      .post(`${window.Url}api/shortlist`, update, headers_data)
      .then((response) => {
        if (response.data.hasOwnProperty("succmsg")) {
          showAllProfiles();
        } else {
          //   Swal.fire({
          //       icon: "error",
          //       title: response.data.errmsg,
          //   });
        }
      });
  };

  return (
    <>
      <div className="col-lg-4 col-md-5">
        <SearchFilters setParFilterData={setParFilterData} />
      </div>
      <div className="col-lg-8 col-md-7 mainpage">
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
                    Newest Match
                  </a>
                </li>
                {/* <li className="nav-item">
                                    <a href="#tab-2" className="nav-link" data-toggle="tab"
                                    >Full Time</a
                                    >
                                </li>
                                <li className="nav-item">
                                    <a href="#tab-3" className="nav-link" data-toggle="tab"
                                    >Part Time</a
                                    >
                                </li> */}
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
          <div className="tab-content">
            <div className="tab-pane active" id="tab-1">
              <div className="row view-group" id="products">
                {data &&
                  data.map((item, index) => (
                    <div
                      className={`lg-item col-lg-6 col-xs-6 grid-group-item1 ${grid == true ? "list-group-item1" : ""
                        }`}
                      key={index}
                    >
                      <div className="job-item mt-30">
                        <NavLink to={`/profileDetail/${item["reg_id"]}`}>
                          <div
                            className="job-top-dt text-right"
                            style={{ paddingTop: "3px" }}
                          >
                            <div className="desired_percent"></div>
                            <div className="img-profile text-center">
                              {item.get_profile_image && (
                                <img
                                  src={`${window.Url}Documents/Image_Documents/${item.get_profile_image.identity_card_doc}`}
                                  alt="user profile image"
                                  style={{
                                    height: "180px",
                                    margin: "0px 10px",
                                  }}
                                />
                              )}

                              {!item.get_profile_image && (
                                <img
                                  src={
                                    item.get_user_register.gender == 1
                                      ? process.env.PUBLIC_URL +
                                      "/male_avatar.png"
                                      : process.env.PUBLIC_URL +
                                      "/female_avatar.png"
                                  }
                                  alt="user profile image"
                                  style={{
                                    height: "180px",
                                    margin: "0px 10px",
                                  }}
                                />
                              )}
                            </div>
                          </div>
                          <div className="job-des-dt">
                            <h4>{item.name}</h4>
                            <div className="job-skills">
                              <span>Age: {Math.floor((Date.now() - new Date(item.dob)) / (31557600000))} years</span>
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
                            </div>
                          </div>
                        </NavLink>
                        <div className="job-buttons">
                          <ul className="link-btn">
                            <li className="bkd-pm">
                              {item.get_interest_received &&
                                item.get_interest_received.reg_id.includes(
                                  item["reg_id"]
                                ) && (
                                  <button
                                    className="bookmark1"
                                    style={{
                                      color: "#fff",
                                      background: "#ee0a4b",
                                      cursor: "none",
                                    }}
                                  >
                                    <i className="fas fa-check 2x"></i>
                                  </button>
                                )}

                              {(item.get_interest_received == null ||
                                !item.get_interest_received.reg_id.includes(
                                  item["reg_id"]
                                )) && (
                                  <button
                                    className="bookmark1"
                                    onClick={(e) => sendIntrest(item["reg_id"])}
                                    title="Send Interest"
                                  >
                                    <i className="fas fa-envelope 2x"></i>
                                  </button>
                                )}
                            </li>
                            <li className="bkd-pm">
                              <button className="bookmark1">
                                <i className="fas fa-comment 2x"></i>
                              </button>
                            </li>
                            <li className="bkd-pm">
                              {item.get_shortlist &&
                                item.get_shortlist.saved_reg_id ==
                                item["reg_id"] && (
                                  <button
                                    className="bookmark1"
                                    onClick={(e) =>
                                      shortlistProfile(item["reg_id"])
                                    }
                                    style={{
                                      color: "#fff",
                                      background: "#ee0a4b",
                                    }}
                                  >
                                    <i className="fas fa-star"></i>
                                  </button>
                                )}

                              {(item.get_shortlist == null ||
                                item.get_shortlist.saved_reg_id !=
                                item["reg_id"]) && (
                                  <button className="bookmark1">
                                    <i
                                      className="fas fa-star"
                                      onClick={(e) =>
                                        shortlistProfile(item["reg_id"])
                                      }
                                      title="Shortlist Profile"
                                    ></i>
                                  </button>
                                )}
                            </li>

                            <li className="bkd-pm">
                              <button className="bookmark1">
                                <i className="fas fa-heart"></i>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}

                {data.length == 0 && !fetchDone && (
                  <div className="desired_section">
                    <ProfileSkeleton />
                    <ProfileSkeleton />
                  </div>
                )}

                <div className="col-12">
                  <div className="main-p-pagination">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="#"
                            aria-label="Previous"
                          >
                            PREV
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link active" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            ...
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            24
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            NEXT
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
