import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

export default function IntrestReceived() {
    const [grid, setGrid] = useState(false);
    const [data, setData] = useState([]);

    const token = window.sessionStorage.getItem('access_token');
    const headers_data = {
        headers: {
            'authorization': 'Bearer ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    useEffect(() => {
        showIntrestRecieved();      
      }, []);


    function showIntrestRecieved(){
        axios
        .get(`${window.Url}api/interestReceived`,headers_data)
        .then(({ data }) => {
                setData(data)
        });
    }

   

    const interestRevert = (id,revert) => {
        const update = {
            id: id,
            revert:revert
        }
        axios
            .post(`${window.Url}api/interestRevert`, update, headers_data)
            .then(response => {
                if (response.data.hasOwnProperty("succmsg")) {
                    Swal.fire({
                        icon: "success",
                        title: response.data.succmsg,
                    });
                    showIntrestRecieved()   
                } else {
                    Swal.fire({
                        icon: "error",
                        title: response.data.errmsg,
                    });
                }
            }
            )
    }

    return (
        <>
          <main class="browse-section">
                <div class="container">
                    <div class="row">
                        
                        <div class="col-lg-12 col-md-12 mainpage mx-auto">
                        <div class="browse-banner">
                    <div class="bbnr-left">
                        <img src={ process.env.PUBLIC_URL + "/THEME/gambolthemes.net/html-items/jobby/jobby-freelancer/images/browse/trophy.png"} alt="" />
                        <div class="bbnr-text">
                            <h4>Upgrade to Pro</h4>
                            <p>Unlimited Matches and Apply.</p>
                        </div>
                    </div>
                    <div class="bbnr-right">
                        <button class="plan-btn">Upgrade Plan</button>
                    </div>
                </div>
                <div class="main-tabs">
                    <div class="res-tabs">
                        <div class="mtab-left">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a href="#tab-1" class="nav-link active" data-toggle="tab"
                                   >Interest Recieved</a
                                    >
                                </li>
                            </ul>
                        </div>
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
                    <div class="tab-content ">
                        <div class="tab-pane active" id="tab-1">
                            <div class="row view-group " id="products">
                            {
                                            data.map((item)=>

                                <div class={`lg-item col-lg-4 col-xs-4 grid-group-item1 ${grid==true?'list-group-item1':''}`}>
                                    <div className="job-item mt-30">
                                        <div className="job-top-dt text-right"  style={{paddingTop:"3px"}}>
                                            <div className="job-skills">
                                                </div>    
                                                <img
                                                    src={ process.env.PUBLIC_URL + "/profile1.jpg" }
                                                    alt="" style={{maxHeight:'220px'}}
                                                />
                                        </div>
                                        <div className="job-des-dt">
                                            <h2 style={{fontWeight:"200"}}>{ item.name }</h2>
                                            {/* <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Etiam cursus pulvinar dolor nec...
                                            </p> */}
                                            <div className="job-skills">
                                                <span>Age: { item.age } years</span>
                                                <span>Height: { item.get_height.height } </span>                                                
                                                <span>Religion: { item.get_religion.religion } </span>
                                                <span>Caste: { item.get_caste.caste } </span>
                                                <span>Mother Tongue: { item.get_mother_tongue.mother_tongue } </span>
                                                <span >Salary: { item.get_income.income } </span>
                                                <span >Qualification: { item.get_education.education } </span> 
                                                <span >Occupation: { item.get_occupation.occupation } </span>
                                                {/* <span className="more-skills">+4</span> */}
                                            </div>
                                        </div>
                                        <div className="job-buttons">
                                            <ul className="link-btn" >
                                                <li style={{width:'44%',borderRight:'2px solid #fff' ,margin: "0 10px"}}>
                                                    <button className="btn btn-md link-j1 py-2" style={{borderRadius:'20px', fontWeight:"700"}}  onClick={e => interestRevert(item.reg_id,"1")} title="Accept">Accept</button>
                                                </li>
                                                <li style={{width:'44%' , margin: "0 10px"}}>
                                                    <button className=" btn btn-md link-j1 py-2" style={{borderRadius:'20px',fontWeight:"700"}}  onClick={e => interestRevert(item.reg_id,"2")} title="Reject">Reject</button>
                                                </li>
                                              
                                                {/* <li className="bkd-pm">
                                                    {item[4].includes(item[2].reg_id) && 
                                                    ( <button className="bookmark1" style={{color:"#fff", background:"#ee0a4b", cursor: "none"}}>
                                                        <i className="fas fa-check 2x"></i>
                                                    </button> )
                                                    }

                                                    {!(item[4].includes(item[2].reg_id)) && 
                                                    <button className="bookmark1" onClick={e => sendIntrest(item[2].reg_id)} title="Send Interest">
                                                        <i className="fas fa-envelope 2x"></i>
                                                    </button>
                                                    }

                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                               )}
                                
                                <div class="col-12">
                                    <div class="main-p-pagination">
                                        <nav aria-label="Page navigation example">
                                     
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