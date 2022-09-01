import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import ProfileSkeleton from "../Dummy Skeleton/ProfileSkeleton";
import Usercard from "../common/Usercard";
import Topcat from "../common/Topcat";
import Upgradebanner from "../common/Upgradebanner";
export default function Shortlist() {
  const [key, setKey] = useState([]);
  const [grid, setGrid] = useState(false);
  const [data, setData] = useState([]);
  const [fetchDone, setFetchDone] = useState(false);
  const [page, setPage] = useState("0");
  const token = window.sessionStorage.getItem("access_token");
  const [CurrentPage, setCurrentPage] = useState(0);
  const headers_data = {
    headers: {
      authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    shortlist();;
    document.title = "Shortlist Profiles";
  }, []);

  function shortlist() {
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
              <Upgradebanner />
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
                    </ul> 
                  </div>   
                        <div className="mtab-right">
                            <ul>
                                <li className="sort-list-dt">
                                    <div
                                        className="ui selection dropdown skills-search sort-dropdown"
                                    >
                                        <input name="gender" type="hidden" value="default" />
                                        <i className="dropdown icon d-icon"></i>
                                        <div className="text">Sort By</div>
                                        <div className="menu">
                                            <div className="item" data-value="0">Relevance</div>
                                            <div className="item" data-value="1">New</div>
                                            <div className="item" data-value="2">Old</div>
                                            <div className="item" data-value="3">Last 15 Days</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="grid-list">
                                    <button className="gl-btn" onClick={()=>{ setGrid(false) }} id="grid">
                                        <i className="fas fa-th-large"></i>
                                    </button>
                                    <button className="gl-btn" onClick={()=>{ setGrid(true) }} id="list">
                                        <i className="fas fa-th-list"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content ">
                        <div className="tab-pane active" id="tab-1">
                            <div className="row view-group " id="products">
                            {
                                            data.map((item, index)=>

                                <div className={`lg-item col-lg-4 col-xs-4 grid-group-item1 ${grid==true?'list-group-item1':''}`} key={index}>
                                    <div className="job-item mt-30">
                                        <div className="job-top-dt text-right"  style={{paddingTop:"3px"}}>
                                            <div className="job-skills">
                                                </div>    
                                                <div className="img-profile text-center">
                              {item.get_profile_image &&(<img src={`${window.Url}Documents/Image_Documents/${item.get_profile_image.identity_card_doc}`} alt="user profile image" style={{height:"180px", margin:"0px 10px"}}/>)}

{!item.get_profile_image && (<img src={ (item.get_user_register.gender == 1 ? process.env.PUBLIC_URL + "/male_avatar.png" : process.env.PUBLIC_URL + "/female_avatar.png")} alt="user profile image" style={{height:"180px", margin:"0px 10px"}}/>)}
                            </div>
                                        </div>
                                        <div className="job-des-dt">
                                            <h2 style={{fontWeight:"200"}}>{ item.name }</h2>
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
                      )}

                      {data.length == 0 && !fetchDone && (
                        <div className="desired_section">
                          <ProfileSkeleton />
                          <ProfileSkeleton />
                          <ProfileSkeleton />
                        </div>
                      )}

                      {data.length == 0 && fetchDone && (
                        <div className="desired_section">
                          <h3 class="ml-5 mt-5">No Data Found!!</h3>
                        </div>
                      )}

                      <div className="col-12">
                        <div className="main-p-pagination">
                          {data.length > 0 && key.length > 1 && key && (
                            <nav aria-label="Page navigation example">
                              <ul className="pagination">
                                <li className="page-item">
                                  <a
                                    className={
                                      key[0] == key[CurrentPage]
                                        ? "page-link disable_link"
                                        : "page-link"
                                    }
                                    aria-label="Previous"
                                    onClick={(e) => {
                                      key[0] != key[CurrentPage] &&
                                        setPage(key[CurrentPage - 1]);
                                    }}
                                    style={{
                                      cursor:
                                        key[0] == key[CurrentPage]
                                          ? "not-allowed"
                                          : "pointer",
                                    }}
                                  >
                                    PREV
                                  </a>
                                </li>
                                {key.length > 0 &&
                                  key &&
                                  key.map((item, index) => (
                                    <li className="page-item">
                                      <a
                                        style={{
                                          cursor: "pointer",
                                        }}
                                        className={
                                          key[CurrentPage] == item
                                            ? "page-link active"
                                            : "page-link"
                                        }
                                        onClick={(e) => {
                                          setPage(item);
                                        }}
                                      >
                                        {index + 1}
                                      </a>
                                    </li>
                                  ))}
                                <li className="page-item">
                                  <a
                                    className={
                                      key[key.length - 1] ==
                                        key[CurrentPage]
                                        ? "page-link disable_link"
                                        : "page-link"
                                    }
                                    aria-label="Previous"
                                    onClick={(e) => {
                                      key[key.length - 1] !=
                                        key[CurrentPage] &&
                                        setPage(key[CurrentPage + 1]);
                                    }}
                                    style={{
                                      cursor:
                                        key[key.length - 1] ==
                                          key[CurrentPage]
                                          ? "not-allowed"
                                          : "pointer",
                                    }}
                                  >
                                    NEXT
                                  </a>
                                </li>
                              </ul>
                            </nav>
                          )}
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
