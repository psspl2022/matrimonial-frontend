import SearchFilters from "./SearchFilters";
import React from "react";
import { useState, useEffect, Suspense } from "react";
import axios from "axios";
import ProfileSkeleton from "./Dummy Skeleton/ProfileSkeleton";
import { useSelector } from "react-redux";
import { resetSearch } from "../actions/index";

import { useDispatch } from "react-redux";
import Usercard from "./common/Usercard";
import Topcat from "./common/Topcat";
import Upgradebanner from "./common/Upgradebanner";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function SearchMatches(props) {
  const search = useSelector((state) => state.changeSearch);
  const [grid, setGrid] = useState(false);
  const [data, setData] = useState([]);
  const [key, setKey] = useState([]);
  const [check, setCheck] = useState(true);
  const [page, setPage] = useState("0");
  const [check, setCheck] = useState(true);
  const [searchData, setSearchData] = useState([]);
  const [browseData, setBrowseData] = useState([]);
  const [forFilter, setForFilter] = useState([]);
  const [parfilterData, setParFilterData] = useState([]);
  const [fetchDone, setFetchDone] = useState(false);
  const [CurrentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Find Matches List";
    showAllProfiles(page);
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
  // it run before loading data 
  const loding = () => {
    return (
      <div
        className="desired_section"
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "auto auto",
          columnGap: "20px",
        }}
      >
        <ProfileSkeleton />
        <ProfileSkeleton />
        <ProfileSkeleton />
        <ProfileSkeleton />
      </div>
    );
  };
  // side filter 
  useEffect(() => {
    setData(
      forFilter.filter((prof_data) => {
        const check = (parfilterData[0] != "" ? (Math.floor((Date.now() - new Date(prof_data.dob)) / (31557600000))) >= parfilterData[0] : 1) &&
          (parfilterData[1] != "" ? (Math.floor((Date.now() - new Date(prof_data.dob)) / (31557600000))) <= parfilterData[1] : 1) &&
          (parfilterData[2] != ""
            ? prof_data.height >= parfilterData[2]
            : 1) &&
          (parfilterData[3] != ""
            ? prof_data.height <= parfilterData[3]
            : 1) &&
          (parfilterData[4] != ""
            ? prof_data.get_income.income >= parfilterData[4]
            : 1) &&
          (parfilterData[5] != ""
            ? prof_data.get_income.income <= parfilterData[5]
            : 1) &&
          (parfilterData[6] != ""
            ? parfilterData[6].includes(prof_data.religion)
            : 1) &&
          (parfilterData[7] != ""
            ? parfilterData[7].includes(prof_data.mother_tongue)
            : 1) &&
          (parfilterData[8] != ""
            ? parfilterData[8].includes(prof_data.marital_status)
            : 1);
        setCheck(check);

        if (check) {
          return prof_data;
        }
        else {
          prof_data = ["none"];
          return prof_data;
        }

      })
    );
  }, [parfilterData]);
  function showAllProfiles(page) {
    axios
      .get(`${window.Url}api/getAllUserProfiles/` + page, headers_data)
      .then(({ data }) => {
        // console.log(data);
        setData(data.data);
        setKey(data.key);
        setCurrentPage(data.page);
        setForFilter(data.data);
        setFetchDone(true);
      });
  }
  // browese profile by 
  useEffect(() => {
    if (props.browse == 'religion') {
      setData(
        forFilter.filter((prof_data) => {
          if (
            (props.browseId != ""
              ? (props.browseId == prof_data.religion)
              : 0)
          ) {
            return prof_data;
          }
        })
      )
    }

    if (props.browse == 'caste') {
      setData(
        forFilter.filter((prof_data) => {
          if (
            (props.browseId != ""
              ? (props.browseId == prof_data.caste)
              : 0)
          ) {
            return prof_data;
          }
        })
      )
    }

    if (props.browse == 'mother') {
      setData(
        forFilter.filter((prof_data) => {
          if (
            (props.browseId != ""
              ? (props.browseId == prof_data.mother_tongue)
              : 0)
          ) {
            return prof_data;
          }
        })
      )
    }

    if (props.browse == 'state') {
      setData(
        forFilter.filter((prof_data) => {
          if (
            (props.browseId != ""
              ? (props.browseId == prof_data.state)
              : 0)
          ) {
            return prof_data;
          }
        })
      )
    }

    if (props.browse == 'city') {
      setData(
        forFilter.filter((prof_data) => {
          if (
            (props.browseId != ""
              ? (props.browseId == prof_data.city)
              : 0)
          ) {
            return prof_data;
          }
        })
      )
    }

    if (props.browse == 'occupation') {
      alert("ok");
      setData(
        forFilter.filter((prof_data) => {
          if (
            (props.browseId != ""
              ? (props.browseId == prof_data.get_occupation.id)
              : 0)
          ) {
            return prof_data;
          }
        })
      )
    }
  }, [props, forFilter]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // showAllProfiles();
    document.title = "Search Matches";
  }, []);
  useEffect(() => {
    showAllProfiles(page);
  }, [page]);

  useEffect(() => {
    const formData = new FormData()
    formData.append('gender', search[0])
    formData.append('min_age', search[1])
    formData.append('max_age', search[2])
    formData.append('religion', search[3])
    formData.append('mother', search[4])

    setData(
      forFilter.filter((prof_data) => {
        if (
          (search[1] != undefined ? (Math.floor((Date.now() - new Date(prof_data.dob)) / (31557600000))) >= search[1] : 1) &&
          (search[2] != undefined ? (Math.floor((Date.now() - new Date(prof_data.dob)) / (31557600000))) <= search[2] : 1) &&
          (search[0] != undefined
            ? (search[0] == prof_data.get_user_register.gender)
            : 1) &&
          (search[3] != undefined
            ? (search[3] == prof_data.religion)
            : 1) &&
          (search[4] != undefined
            ? (search[4] == prof_data.mother_tongue)
            : 1)
        ) {
          return prof_data;
        }
      })
    );

    axios
      .post(`${window.Url}api/searchProfile`, formData)
      .then(({ data }) => {
        setSearchData(data);
        setFetchDone(true);
        window.setTimeout(() => {
          dispatch(resetSearch())
        }, 5000);
      });
  }, [forFilter]);

  useEffect(() => {
    const formData = new FormData()
    formData.append('browse', props.browse)
    formData.append('browseId', props.browseId)

    axios
      .post(`${window.Url}api/postBrowseProfile`, formData)
      .then(({ data }) => {
        setBrowseData(data);
        setFetchDone(true);
      });
  }, [props]);

  return (
    <>
      {!token && (
        <>
          {browseData.length == 0 && (
            <>
              <main className="browse-section">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 mainpage mx-auto">
                      <div className="main-tabs">
                        <Topcat setGrid={setGrid} />
                        <div className="tab-content ">
                          <div className="tab-pane active" id="tab-1">
                            <div className="row view-group " id="products">
                              {browseData &&
                                searchData.map((item, index) => (

                                  <>
                                    <Suspense fallback={loding()}>
                                      {"search "}
                                      <Usercard
                                        item={item}
                                        showAllProfiles={showAllProfiles}
                                        index={index}
                                        name={item.name}
                                        page={page}
                                        className={`lg-item col-lg-4 col-xs-4 grid-group-item1 ${grid == true ? "list-group-item1" : ""
                                          }`}
                                      />
                                    </Suspense>
                                  </>
                                ))}

                              {data.length == 0 || (!fetchDone && loding())}

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
          )}

          {browseData.length != 0 && (
            <>
              <main className="browse-section">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 mainpage mx-auto">
                      <div className="main-tabs">
                        <Topcat setGrid={setGrid} />
                        <div className="tab-content ">
                          <div className="tab-pane active" id="tab-1">
                            <div className="row view-group " id="products">
                              {browseData &&
                                browseData.map((item, index) => (
                                  <>
                                    <Suspense fallback={loding()}>
                                      {"search "}
                                      <Usercard
                                        item={item}
                                        showAllProfiles={showAllProfiles}
                                        index={index}
                                        name={item.name}
                                        page={page}
                                        className={`lg-item col-lg-4 col-xs-4 grid-group-item1 ${grid == true ? "list-group-item1" : ""
                                          }`}
                                      />
                                    </Suspense>
                                  </>
                                ))}

                              {data.length == 0 || (!fetchDone && loding())}

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
          )}
        </>
      )}

      {token && (
        <>
          <main className="browse-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-5">
                  <SearchFilters setParFilterData={setParFilterData} />
                </div>
                <div className="col-lg-8 col-md-7 mainpage">
                  <Upgradebanner />
                  <div className="main-tabs">
                    <Topcat title="Find Match" setGrid={setGrid} />
                    <div className="tab-content">
                      <div className="tab-pane active" id="tab-1">
                        <div
                          className="row view-group"
                          id="products"
                          style={{
                            minHeight: "800px",
                            width: "100%",
                          }}
                        >
                          {" "}
                          {data && check &&
                            data.map((item, index) => (
                              <Usercard
                                item={item}
                                showAllProfiles={showAllProfiles}
                                index={index}
                                name={item.name}
                                page={page}
                                className={`lg-item col-lg-6 col-xs-6 grid-group-item1 ${props.grid == true ? "list-group-item1" : ""
                                  }`}
                              />
                            ))}
                          {check}
                          {(data.length == 0 && loding())}
                          {(!check) && (
                            <LazyLoadImage
                              src="./empty.jpg"
                              style={{
                                objectFit: "contain",
                                width: "100%",
                                height: "400px",
                              }}
                            />
                          )}
                        </div>

                        <div className="row view-group" id="products">
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
                    {/* card use  */}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
}
