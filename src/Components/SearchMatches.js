import SearchFilters from "./SearchFilters";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import ProfileSkeleton from "./Dummy Skeleton/ProfileSkeleton";
import { useSelector } from 'react-redux';
import { resetSearch } from '../actions/index';
import { useDispatch } from "react-redux";

export default function SearchMatches(props) {
    
    const search = useSelector((state) => state.changeSearch);
    const [grid, setGrid] = useState(false);
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [browseData, setBrowseData] = useState([]);    
    const [forFilter, setForFilter] = useState([]);
    const [parfilterData, setParFilterData] = useState([]);
    const [fetchDone, setFetchDone] = useState(false);
    

    const dispatch = useDispatch();
  
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
  
    useEffect(() => {
    if(props.browse == 'religion' ){
      setData(
        forFilter.filter((prof_data) => { 
          if (
            (props.browseId != ""
              ? (props.browseId == prof_data.religion)
              : 0 )
          ) {
            return prof_data;
          }
        })
      )
    }

    if(props.browse == 'caste'){
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

    if(props.browse == 'mother'){
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

    if(props.browse == 'state'){
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

    if(props.browse == 'city'){
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

    if(props.browse == 'occupation'){ alert("ok");
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
    },[props,forFilter]);

  
   

  useEffect(() => {
    window.scrollTo(0, 0);
    // showAllProfiles();
    document.title = "Search Matches";
  }, []);

  useEffect(()=> {
     const formData = new FormData()
     formData.append('gender',search[0])
     formData.append('min_age' , search[1])
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
      },5000);
     });
    }, [forFilter] );

  useEffect(() => {
    const formData = new FormData() 
    formData.append('browse', props.browse)
    formData.append('browseId', props.browseId)

    axios
      .post(`${window.Url}api/postBrowseProfile`,formData )
      .then(({ data }) => {
        setBrowseData(data);        
        setFetchDone(true);
      });
    }, [props]);

    return (
        <>
        {!token &&(
          <>
        {(browseData.length == 0) &&(
        
           <>
            <main className="browse-section">
         <div className="container">
           <div className="row">
             <div className="col-lg-12 col-md-12 mainpage mx-auto">
               
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
                           Searched Profile
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
                             { browseData && (
                                             searchData.map((item, index)=>
 
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
        )}

       {(browseData.length != 0) && (
              <>
              <main className="browse-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 mainpage mx-auto">
                  
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
                              Browse Profile
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
                                { browseData && (
                                                browseData.map((item, index)=>

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
                    Your Find Search
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
                                    title="Searched Profile"
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
                    </div>
                </div>
            </main>
          </>
         )}

      
           
        </>
        );
}