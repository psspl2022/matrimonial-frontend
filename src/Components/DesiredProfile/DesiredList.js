import SearchFilters from "../SearchFilters";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import ProfileSkeleton from "../Dummy Skeleton/ProfileSkeleton";

export default function DesiredList() {
  const [grid, setGrid] = useState(false);
  const [data, setData] = useState([]);
  const [forFilter, setForFilter] = useState([]);
  const [parfilterData, setParFilterData] = useState([]);
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
    window.scrollTo(0, 0)
        showDesiredProfiles();
        document.title = "Desired Partner List";
  }, []);

  useEffect(() => {
    setData(
      forFilter.filter((prof_data) => {
        if (
          (parfilterData[0] != "" ? prof_data[1] >= parfilterData[0] : 1) &&
          (parfilterData[1] != "" ? prof_data[1] <= parfilterData[1] : 1) &&
          (parfilterData[2] != ""
            ? prof_data[2].height >= parfilterData[2]
            : 1) &&
          (parfilterData[3] != ""
            ? prof_data[2].height <= parfilterData[3]
            : 1) &&
          (parfilterData[4] != ""
            ? prof_data[3].income >= parfilterData[4]
            : 1) &&
          (parfilterData[5] != ""
            ? prof_data[3].income <= parfilterData[5]
            : 1) &&
          (parfilterData[6] != ""
            ? parfilterData[6].includes(prof_data[2].religion)
            : 1) &&
          (parfilterData[7] != ""
            ? parfilterData[7].includes(prof_data[2].mother_tongue)
            : 1) &&
          (parfilterData[8] != ""
            ? parfilterData[8].includes(prof_data[2].maritial_status)
            : 1)
        ) {
          return prof_data;
        }
      })
    );
  }, [parfilterData]);

  function showDesiredProfiles() {
    axios
      .get(`${window.Url}api/showDesiredProfiles`, headers_data)
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
          // Swal.fire({
          //     icon: "success",
          //     title: response.data.succmsg,
          // });
          showDesiredProfiles();
        } else {
          // Swal.fire({
          //     icon: "error",
          //     title: response.data.errmsg,
          // });
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
          // Swal.fire({
          //     icon: "success",
          //     title: response.data.succmsg,
          // });
          showDesiredProfiles();
        } else {
          Swal.fire({
              icon: "error",
              title: response.data.errmsg,
          });
        }
      });
  };

  return (
    <>
      <main className="browse-section">
        <div className="container">
          <div className="row">
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
                  <NavLink to="/membershipDetail/3" className="plan-btn">
                    Upgrade Plan
                  </NavLink>
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
                          Your Desired Match
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
                            className={`lg-item col-lg-6 col-xs-6 grid-group-item1 ${
                              grid == true ? "list-group-item1" : ""
                            }`}
                            key={index}
                          >
                            <NavLink to={`/profileDetail/${item[2].reg_id}`} >
                              <div className="job-item mt-30">
                                <div
                                  className="job-top-dt text-right"
                                  style={{ paddingTop: "3px" }}
                                >
                                  <div className="desired_percent">
                                    <span
                                      stye={{
                                        padding: "3px 8px",
                                        marginTop: "-4px",
                                        marginRight: "-4px",
                                        fontSize: "12px",
                                      }}
                                      className={`${item[0] <= 40 && "yellow"} ${
                                        item[0] <= 90 && "green"
                                      } ${item[0] > 90 && "pink"}`}
                                    >
                                      {item[0]}% Matched
                                    </span>
                                  </div>
                                  <div className="img-profile text-center">
                                  <img src={item['6'] && `${window.Url}Documents/Image_Documents/${item['6'].identity_card_doc}`} alt="user profile image" style={{height:"180px", margin:"0px 10px"}}/>
                                  </div>
                                </div>
                                <div className="job-des-dt">
                                  <h4>{item[2].name}</h4>
                                  {/* <p>
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
                              {
                                              data.map((item)=>

                                  <div class={`lg-item col-lg-6 col-xs-6 grid-group-item1 ${grid==true?'list-group-item1':''}`} key="{item[0].reg_id}">
                                      <div className="job-item mt-30">
                                          <div className="job-top-dt text-right"  style={{paddingTop:"3px"}}>
                                              <div className="desired_percent">
                                                  <span  stye={{padding:"3px 8px", marginTop:"-4px",  marginRight:"-4px", fontSize:"12px" }} className={`${item[0]<=40 && 'yellow' } ${item[0]<=90 && 'green' } ${item[0]>90 && 'pink' }`}>{item[0] }% Matched</span>
                                              </div>  
                                              <div className="img-profile">  
                                                  <img
                                                      src={ process.env.PUBLIC_URL + "/profile1.jpg" }
                                                      alt="" style={{maxHeight:'220px', width: '100%'}}
                                                  />
                                                  </div>
                                          </div>
                                          <div className="job-des-dt">
                                              <h4 style={{ fontWeight: "200" }} >{ item[2].name }</h4>
                                              {/* <p>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                                  elit. Etiam cursus pulvinar dolor nec...
                                              </p> */}
                                  <div className="job-skills">
                                    <span>Age: {item[1]} years</span>
                                    <span>
                                      Height: {item[2].get_height.height}{" "}
                                    </span>
                                    <span>
                                      Religion: {item[2].get_religion.religion}{" "}
                                    </span>
                                    <span>Caste: {item[2].get_caste.caste} </span>
                                    <span>
                                      Mother Tongue:{" "}
                                      {item[2].get_mother_tongue.mother_tongue}{" "}
                                    </span>
                                    <span>
                                      Salary: {item[3].get_income.income}{" "}
                                    </span>
                                    <span>
                                      Qualification:{" "}
                                      {item[3].get_education.education}{" "}
                                    </span>
                                    {/* <span >Occupation: { item[1].get_occupation.occupation } </span> */}
                                    {/* <span className="more-skills">+4</span> */}
                                  </div>
                                </div>
                                <div className="job-buttons">
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
                                                      >o
                                                  </li> */}
                                    <li className="bkd-pm">
                                      {item[4].includes(item[2].reg_id) && (
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

                                      {!item[4].includes(item[2].reg_id) && (
                                        <button
                                          className="bookmark1"
                                          onClick={(e) =>
                                            sendIntrest(item[2].reg_id)
                                          }
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
                                      {item[5].includes(item[2].reg_id) && (
                                        <button
                                          className="bookmark1"
                                          onClick={(e) =>
                                            shortlistProfile(item[2].reg_id)
                                          }
                                          style={{
                                            color: "#fff",
                                            background: "#ee0a4b",
                                          }}
                                        >
                                          <i className="fas fa-star"></i>
                                        </button>
                                      )}

                                      {!item[5].includes(item[2].reg_id) && (
                                        <button className="bookmark1">
                                          <i
                                            className="fas fa-star"
                                            onClick={(e) =>
                                              shortlistProfile(item[2].reg_id)
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
                            </NavLink>
                          </div>
                        ))}

                      { ( data.length==0 && !fetchDone ) && (
                        <div className="desired_section">
                            <ProfileSkeleton />
                            <ProfileSkeleton />
                        </div>
                      )}

                      <div className="col-12">
                        <div className="main-p-pagination">
                          <nav aria-label="Page navigation example">
                            {/* <ul className="pagination">
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
                                                    <a className="page-link active" href="#">1</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">2</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">...</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">24</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#" aria-label="Next">
                                                        NEXT
                                                    </a>
                                                </li>
                                            </ul> */}
                          </nav>
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
