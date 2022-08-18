import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios"

export default function Desired(reg_id) {
  const token = window.sessionStorage.getItem("access_token");
  const history = useHistory();
  const [data, setData] = useState({});
  const [counter, setCounter] = useState(0);
  let count = 0;

  const incrementCount =  () => {
    // Update state with incremented value
  // alert(counter);
  //  count +=1;
   setCounter(2);
  }

  // useEffect( () => {
  //   if (sessionStorage.hasOwnProperty("access_token")) {
  //     desired();
  //   }
  // }, []);
  const headers_param = {
    headers: {
      authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    if (sessionStorage.hasOwnProperty("access_token")) {
      desired();
    }
  }, []);

  const desired = () => {
    axios
      .post(`${window.Url}api/desired`, reg_id, headers_param)
      .then((response) => {
        setData(response.data);

      });
  };



  return (
    <>
      <div className="tab-content pb-4" id="myTabContent" style={{ background: "#fff" }}>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row my-4">
                <div className="col-md-3 my-3"></div>
                <div className="col-md-3 my-3">

                  <span className="view_head_span1 ">
                    {data['gender'] && <>
                      {data['gender'].gender == 1 && "His Preference"}
                      {data['gender'].gender == 2 && "Her Preference"}
                    </>
                    }
                  </span>
              </div>

              <div className="col-md-3 my-3">

              <span className="view_head_span1 ">
                {data['desired'] && <>
                {data.matchCount} of {data.count} matching
                </>
                }
              </span>
              </div>
              <div className="col-md-3 -0 my-3">
                <span>
                {data['desired'] && 
                  "Matches You"
                }
                </span>
              </div>
                
                </div>

                <div className="row ">
                 
                  {(data.age>=0) && (
                  <>
                  <div className="col-md-3 my-3">
                  <div className="row "><span>Age</span></div>
                  </div>
                  <div className="col-md-6 my-3">
                  <span className="view_head_span1  ">
                      {data['desired'] && <>
                        {data['desired']['data'].get_min_age.age}  to  {data['desired']['data'].get_max_age.age} Years
                      </>
                      }
                    </span>
                  </div>
                  <div className="col-md-3 my-3">
                  {(data.age==1) ?
                  <span>
                      <i class="fa fa-check" aria-hidden="true"></i>
                  </span>                
                   :
                  <span>
                    
                  </span>
                  }
                  </div>
                  </>  
                  ) }

                  {(data.height>=0) && (
                  <>
                  <div className="col-md-3 my-3">
                  <div className="row "><span>Height</span></div>
                  </div>
                  <div className="col-md-6 my-3">
                  <span className="view_head_span1  ">
                  {data['desired'] && <>
                  {data['desired']['data'].get_min_height.height}  to  {data['desired']['data'].get_max_height.height} 
                  </>
                      }
                    </span>
                  </div>
                  <div className="col-md-3 my-3">
                  {(data.height==1) ?
                  <span>
                      <i class="fa fa-check" aria-hidden="true"></i>
                  </span>                
                   :
                  <span>
                    
                  </span>
                  }                 
                  </div>
                  </>                  
                  ) }

                  {(data.maritial>=0) && (
                  <>
                  <div className="col-md-3 my-3">
                  <div className="row "><span>Maritial</span></div>
                  </div>
                  <div className="col-md-6 my-3">
                  <span className="view_head_span1  ">
                  {data['desired'] && <>
                  {data['desired']['data'].maritial.includes('0') && "Not filled"} {data['desired']['data'].maritial.includes('1') && "Never Marrired,"} {data['desired']['data'].maritial.includes('2') && "Awaiting Divorce,"} {data['desired']['data'].maritial.includes('3') && "Divorced,"} {data['desired']['data'].maritial.includes('4') && "Widowed,"} {data['desired']['data'].maritial.includes('5') && "Anulled,"} 
                  </>
                      }
                    </span>
                  </div>
                  <div className="col-md-3 my-3">
                  {(data.maritial==1) ?
                  <span>
                      <i class="fa fa-check" aria-hidden="true"></i>
                  </span>                
                   :
                  <span>
                    
                  </span>
                  }               
                  </div>
                  </>                  
                  ) }

                  {(data.country>=0) && (
                  <>
                  <div className="col-md-3 my-3">
                  <div className="row "><span>Country</span></div>
                  </div>
                  <div className="col-md-6 my-3">
                  <span className="view_head_span1  ">
                  {data['desired'] && <>
                  {data['desired'].country.map((item)=>{
                            return (
                                item['name'] + ', '
                            );
                          })}
                  </>
                      }
                    </span>
                  </div>
                  <div className="col-md-3 my-3">
                  {(data.country==1) ? <span>
                      <i class="fa fa-check" aria-hidden="true"></i>
                  </span>                
                   :
                  <span>
                    
                  </span>
                  }               
                  </div>
                  </>                  
                  ) }

                  {(data.religion>=0) && (
                  <>
                  <div className="col-md-3 my-3">
                  <div className="row "><span>Religion</span></div>
                  </div>
                  <div className="col-md-6 my-3">
                  <span className="view_head_span1  ">
                  {data['desired'] && <>
                  
                  {data['desired'].religion.map((item)=>{
                            return (
                                item['religion'] + ', '
                            );
                          })}
                  </>
                      }
                    </span>
                  </div>
                  <div className="col-md-3 my-3">
                  {(data.religion==1) ? <span>
                      <i class="fa fa-check" aria-hidden="true"></i>
                  </span>                
                   :
                  <span>
                    
                  </span> 
                  }               
                  </div>
                  </>                  
                  ) }

                  {(data.caste>=0) && (
                  <>
                  <div className="col-md-3 my-3">
                  <div className="row "><span>Caste</span></div>
                  </div>
                  <div className="col-md-6 my-3">
                  <span className="view_head_span1  ">
                  {data['desired'] && <>
                  
                  {data['desired'].caste.map((item)=>{
                            return (
                                item['caste'] + ', '
                            );
                          })}
                  </>
                      }
                    </span>
                  </div>
                  <div className="col-md-3 my-3">
                  {(data.caste==1) ? <span>
                      <i class="fa fa-check" aria-hidden="true"></i>
                  </span>                
                   :
                  <span>
                    
                  </span>
                  }               
                  </div>
                  </>                  
                  ) }

                  {(data.mother_tongue>=0) && (
                  <>
                  <div className="col-md-3 my-3">
                  <div className="row "><span>Mother tongue</span></div>
                  </div>
                  <div className="col-md-6 my-3">
                  <span className="view_head_span1  ">
                  {data['desired'] && <>
                  
                  
                  {data['desired'].mother_tongue.map((item)=>{
                            return (
                                item['mother_tongue'] + ', '
                            );
                          })}
                  </>
                      }
                    </span>
                  </div>
                  <div className="col-md-3 my-3">
                  {(data.mother_tongue==1) ? <span>
                      <i class="fa fa-check" aria-hidden="true"></i>
                  </span>                
                   :
                  <span>
                    
                  </span>}                  
                  </div>
                  </>                  
                  ) }

                  {(data.residential>=0) && (
                  <>
                  <div className="col-md-3 my-3">
                  <div className="row "><span>residence</span></div>
                  </div>
                  <div className="col-md-6 my-3">
                  <span className="view_head_span1  ">
                  {data['desired'] && <>
                  
                  {data['desired'].residence.map((item)=>{
                            return (
                                item['residence'] + ', '
                            );
                          })}
                  </>
                      }
                    </span>
                  </div>
                  <div className="col-md-3 my-3">
                  {(data.residential==1) ? <span>
                      <i class="fa fa-check" aria-hidden="true"></i>
                  </span>                
                   :
                  <span>
                    
                  </span>}                  
                  </div>
                  </>                  
                  ) }


                  {(data.manglik>=0) && (
                  <>
                  <div className="col-md-3 my-3">
                  <div className="row "><span>Manglik</span></div>
                  </div>
                  <div className="col-md-6 my-3">
                  <span className="view_head_span1  ">
                  {data['desired'] && <>
                  {data['desired']['data'].manglik.includes('0') && "Not filled"} {data['desired']['data'].manglik.includes('1') && "Non-Manglik,"} {data['desired']['data'].manglik.includes('2') && "Anshik-Manglik,"} {data['desired']['data'].manglik.includes('3') && "Manglik,"}
                  </>
                      }
                    </span>
                  </div>
                  <div className="col-md-3 my-3">
                  {(data.manglik==1) ? <span>
                      <i class="fa fa-check" aria-hidden="true"></i>
                  </span>                
                   :
                  <span>
                    
                  </span>}                  
                  </div>
                  </>                  
                  ) }

                  {(data.qualification>=0) && (
                  <>
                  <div className="col-md-3 my-3">
                  <div className="row "><span>Qualification</span></div>
                  </div>
                  <div className="col-md-6 my-3">
                  <span className="view_head_span1  ">
                  {data['desired'] && <>
                  
                  {data['desired'].education.map((item)=>{
                            return (
                                item['education'] + ', '
                            );
                          })}
                  </>
                      }
                    </span>
                  </div>
                  <div className="col-md-3 my-3">
                  {(data.qualification==1) ? <span>
                      <i class="fa fa-check" aria-hidden="true"></i>
                  </span>                
                   :
                  <span>
                    
                  </span>}                  
                  </div>
                  </>                  
                  ) }


                  {(data.occupation>=0) && (
                  <>
                  <div className="col-md-3 my-3">
                  <div className="row "><span>Occupation</span></div>
                  </div>
                  <div className="col-md-6 my-3">
                  <span className="view_head_span1  ">
                  {data['desired'] && <>
                  
                  {data['desired'].occupation.map((item)=>{
                            return (
                                item['occupation'] + ', '
                            );
                          })}
                  </>
                      }
                    </span>
                  </div>
                  <div className="col-md-3 my-3">
                  {(data.occupation==1) ? <span>
                      <i class="fa fa-check" aria-hidden="true"></i>
                  </span>                
                   :
                  <span>
                    
                  </span>}                  
                  </div>
                  </>                  
                  ) }


                  {(data.income>=0) && (
                  <>
                  <div className="col-md-3 my-3">
                  <div className="row "><span>Income</span></div>
                  </div>
                  <div className="col-md-6 my-3">
                  <span className="view_head_span1  ">
                  {data['desired'] && <>
                  
                  {data['desired']['data'].get_min_income.income}  to  {data['desired']['data'].get_max_income.income} 
                  </>
                      }
                    </span>
                  </div>
                  <div className="col-md-3 my-3">
                  {(data.income==1) ? <span>
                      <i class="fa fa-check" aria-hidden="true"></i>
                  </span>                
                   :
                  <span>
                    
                  </span>}                  
                  </div>
                  </>                  
                  ) }


                  {(data.diet>=0) && (
                  <>
                  <div className="col-md-3 my-3">
                  <div className="row "><span>Diet</span></div>
                  </div>
                  <div className="col-md-6 my-3">
                  <span className="view_head_span1  ">
                  {data['desired'] && <>
                  
                  {data['desired']['data'].diet.includes('0') && "Not filled"} {data['desired']['data'].diet.includes('1') && "Vegetarain,"} {data['desired']['data'].diet.includes('2') && "Non-Vegetarain,"} {data['desired']['data'].diet.includes('3') && "Jain,"} {data['desired']['data'].diet.includes('4') && "Eggetarain,"}
                  </>
                      }
                    </span>
                  </div>
                  <div className="col-md-3 my-3">
                  {(data.diet==1) ? <span>
                      <i class="fa fa-check" aria-hidden="true"></i>
                  </span>                
                   :
                  <span>
                    
                  </span>}                  
                  </div>
                  </>                  
                  ) }

                  {(data.drinking>=0) && (
                  <>
                  <div className="col-md-3 my-3">
                  <div className="row "><span>Drinking</span></div>
                  </div>
                  <div className="col-md-6 my-3">
                  <span className="view_head_span1  ">
                  {data['desired'] && <>                  
                  {data['desired']['data'].drinking.includes('0') && "Not filled"} {data['desired']['data'].drinking.includes('1') && "No,"} {data['desired']['data'].drinking.includes('2') && "Yes,"} {data['desired']['data'].drinking.includes('3') && "Occasionally,"}
                        
                  </>
                      }
                    </span>
                  </div>
                  <div className="col-md-3 my-3">
                  {(data.drinking==1) ? <span>
                      <i class="fa fa-check" aria-hidden="true"></i>
                  </span>                
                   :
                  <span>
                    
                  </span>}                  
                  </div>
                  </>                  
                  ) }


                  {(data.smoking>=0) && (
                  <>
                  <div className="col-md-3 my-3">
                  <div className="row "><span>Smoking</span></div>
                  </div>
                  <div className="col-md-6 my-3">
                  <span className="view_head_span1  ">
                  {data['desired'] && <>
                  
                  {data['desired']['data'].smoking.includes('0') && "Not filled"}{data['desired']['data'].smoking.includes('1') && "No,"} {data['desired']['data'].smoking.includes('2') && "Yes,"} {data['desired']['data'].smoking.includes('3') && "Occasionally,"}
                  </>
                      }
                    </span>
                  </div>
                  <div className="col-md-3 my-3">
                  {(data.smoking==1) ? <span>
                      <i class="fa fa-check" aria-hidden="true"></i>
                  </span>                
                   :
                  <span>
                    
                  </span>}                  
                  </div>
                  </>                  
                  ) }

                  {(data.challenged>=0) && (
                  <>
                  <div className="col-md-3 my-3">
                  <div className="row "><span>Challenged</span></div>
                  </div>
                  <div className="col-md-6 my-3">
                  <span className="view_head_span1  ">
                  {data['desired'] && <>
                  {data['desired']['data'].challenged.includes('0') && "Not filled"} {data['desired']['data'].challenged.includes('1') && "Physically,"} {data['desired']['data'].challenged.includes('2') && "Mentally,"}
                  </>
                      }
                    </span>
                  </div>
                  <div className="col-md-3 my-3">
                  {(data.challenged==1) ? <span>
                      <i class="fa fa-check" aria-hidden="true"></i>
                  </span>                
                   :
                  <span>
                    
                  </span>}                  
                  </div>
                  </>                  
                  ) }

                 </div>
              <hr />
            </div>
          </div>
        </div>
     </div>
  
    </>
  );
}
