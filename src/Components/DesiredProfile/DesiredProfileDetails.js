import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();
  
  const minAge = [
    { value: "21", label: "21" },
    { value: "22", label: "22 " },
    { value: "23", label: "23 " },
    { value: "24", label: "24" },
    { value: "25", label: "25 " },
    { value: "26", label: "26 " },
    { value: "27", label: "27 " },
    { value: "28", label: "28 " },
    { value: "29", label: "29 " },
    { value: "30", label: "30 " },
    { value: "31", label: "31 " },
    { value: "32", label: "32 " },
    { value: "33", label: "33 " },
    { value: "34", label: "34 " },
    { value: "35", label: "35 " },
    { value: "36", label: "36 " },
    { value: "37", label: "36 " },
    { value: "33", label: "38 " },
  ];
  
  const maritalOptions = [
    { value: 1, label: "Never Married" },
    { value: 2, label: "Awaiting Divorce" },
    { value: 3, label: "Divorced" },
    { value: 4, label: "Widowed" },
    { value: 5, label: "Annulled" },
  ];

  const manglikOptions = [
    { value: 1, label: "Non-Manglik" },
    { value: 2, label: "Anshik Manglik" },
    { value: 3, label: "Manglik" },
  ];

  const dietaryOptions = [
    { value: "1", label: "Vegetarian" },
    { value: "2", label: "Non Vegetarian" },
    { value: "3", label: "Jain" },
    { value: "4", label: "Eggetarian" }
  ];
  
  const drinkingOptions = [
    { value: "1", label: "Yes" },
    { value: "2", label: "No" },
    { value: "3", label: "Occasionally" }
  ];

  const smokingOptions = [
    { value: "1", label: "Yes" },
    { value: "2", label: "No" },
    { value: "3", label: "Occasionally" }
  ];

  const ChallengedOptions = [
    { value: "0", label: "None" },
    { value: "1", label: "Physically" },
    { value: "2", label: "Mentally" },
  ];

  function DesiredProfileDetails(){

  const [Edit, setEdit] = useState(false);
  const [height, setHeight] = useState({});
  const [country, setCountry] = useState({});  
  const [moths, setMoths] = useState([]);
  const [religion, setReligions] = useState([]);
  const [caste, setCastes] = useState([]);
  const [highest, setHighest] = useState([]); 
  const [residence, setResidences] = useState([]);
  const [occupation, setOccupations] = useState([]);
  const [income, setIncomes] = useState([]);
   

  const token = window.sessionStorage.getItem("access_token");
  const headers_param = {
    headers: {
      authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    const user = JSON.parse(window.sessionStorage.getItem("user_data")).reg_id;
    axios
      .get(`${window.Url}api/desiredDropdown`, headers_param)
      .then(({ data }) => {
        setCountry(
          data.country.map(function (country) {
            return { value: country.id, label: country.name };
          })
        );

        setHeight(
          data.height.map(function (height) {
            return { value: height.id, label: height.height };
          })
        );

        setResidences(
          data.residence.map(function (residence) {
            return {
              value: residence.id,
              label: residence.residence,
            };
          })
        );        

        setReligions(
          data.religion.map(function (religion) {
            return { value: religion.id, label: religion.religion };
          })
        );

        setMoths(
          data.mother_tongue.map(function (mother_tongue) {
            return {
              value: mother_tongue.id,
              label: mother_tongue.mother_tongue,
            };
          })
        );

        setCastes(
          data.caste.map(function (caste) {
            return { value: caste.id, label: caste.caste };
          })
        );

       
  })
}, []);

    return(
        <>
        <div className="container-fluid row">
          <div className="col-8  mx-auto">
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="my_profile"
            role="tabpanel"
          >
            <div className="view_chart">
              <div className="view_chart_header">
                
                  <h2 className="text-center">Desired Profile </h2>
                  <span style={{fontSize:"13px" }}>The criteria you mention here determines the ‘Desired Partner Matches’ you see. So please review this information carefully.</span>
              
                 
              </div>
              <div className="post_job_body">
                <form>                 
                  <div className="row">
                  <div className="col-lg-12">
                    <div className="d-flex justify-content-center mt-3">                  
                        <h4 className="mr-3">Basic details</h4>
                      <span className="edit-icon" style={{marginTop:"-5px" }}>
                        <i className=" fas fa-edit fa-1x" ></i>
                        <div style={{marginTop:"-5px" }} ><span style={{fontSize:"11px" }}>Edit</span></div>
                      </span>
                    </div>
                  </div>
                   
                    <div className="col-lg-6">
                      <div className="form-group">
                      <label className="label15">Age</label>
                        <div className="row">
                          <div className="col-lg-6 pr-1">
                            <Select
                              closeMenuOnSelect={false}
                              components={animatedComponents}
                              defaultValue=""
                              options={minAge}  
                              placeholder="Select Min"    
                            />
                          </div>
                          <div className="col-lg-6 pl-0 ">
                            <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            defaultValue=""
                            placeholder="Select Max" 
                            options={minAge}  
                          />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Height</label>
                        <div className="row">
                          <div className="col-lg-6 pr-1">
                            <Select
                              closeMenuOnSelect={false}
                              components={animatedComponents}
                              defaultValue=""
                              options={height}
                              placeholder="Select Min"    
                            />
                          </div>
                          <div className="col-lg-6 pl-0 ">
                            <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            defaultValue=""
                            options={height}
                            placeholder="Select Max"   
                          />
                          </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Marital Status</label>
                        <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          defaultValue=""
                          isMulti
                          options={maritalOptions}
                          placeholder="Select Favourite Movies"   
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Country</label>
                        <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          defaultValue=""
                          isMulti
                          options={country}
                          placeholder="Select Favourite Movies"   
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Residential Status</label>
                        <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          defaultValue=""
                          isMulti
                          options={residence}
                          placeholder="Select Favourite Movies"   
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                    <button className="post_jp_btn float-right btn-sm px-3" style={{ height:"35px" }} type="submit">
                        SAVE
                      </button>
                    </div>
                  </div>
                </form>
<hr />
<form>                 
                  <div className="row">
                  <div className="col-lg-12">
                    <div className="d-flex justify-content-center mt-3">                  
                        <h4 className="mr-3">Religion & Ethnicity </h4>
                      <span className="edit-icon" style={{marginTop:"-5px" }}>
                        <i className=" fas fa-edit fa-1x" ></i>
                        <div style={{marginTop:"-5px" }} ><span style={{fontSize:"11px" }}>Edit</span></div>
                      </span>
                    </div>
                  </div>
                   
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Religion</label>
                        <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          defaultValue=""
                          isMulti
                          options={religion}
                          placeholder="Select Favourite Movies"   
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Caste</label>
                        <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          defaultValue=""
                          isMulti
                          options={caste}
                          placeholder="Select Favourite Movies"   
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Mother Tongue</label>
                        <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          defaultValue=""
                          isMulti
                          options={moths}
                          placeholder="Select Favourite Movies"   
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Manglik</label>
                        <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          defaultValue=""
                          isMulti
                          options={manglikOptions}
                          placeholder="Select Favourite Movies"   
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <button className="post_jp_btn float-right btn-sm px-3" style={{ height:"35px" }} type="submit">
                        SAVE
                      </button>
                    </div>
                  </div>
                </form>
                <hr />
<form>                 
                  <div className="row">
                  <div className="col-lg-12">
                    <div className="d-flex justify-content-center mt-3">                  
                        <h4 className="mr-3">Education & Work </h4>
                      <span className="edit-icon" style={{marginTop:"-5px" }}>
                        <i className=" fas fa-edit fa-1x" ></i>
                        <div style={{marginTop:"-5px" }} ><span style={{fontSize:"11px" }}>Edit</span></div>
                      </span>
                    </div>
                  </div>
                   
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Highest Education</label>
                        <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          defaultValue=""
                          isMulti
                          options={highest}
                          placeholder="Select Favourite Movies"   
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Occupation</label>
                        <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          defaultValue=""
                          isMulti
                          options={occupation}
                          placeholder="Select Favourite Movies"   
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Income</label>
                        <div className="row">
                          <div className="col-lg-6 pr-1">
                            <Select
                              closeMenuOnSelect={false}
                              components={animatedComponents}
                              defaultValue=""
                              options={income}
                              placeholder="Select Min"    
                            />
                          </div>
                          <div className="col-lg-6 pl-0 ">
                            <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            defaultValue=""
                            
                            placeholder="Select Max"   
                          />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button className="post_jp_btn float-right btn-sm px-3" style={{ height:"35px" }} type="submit">
                        SAVE
                      </button>
                    </div>
                  </div>
                </form>
                <hr />
<form>                 
                  <div className="row">
                  <div className="col-lg-12">
                    <div className="d-flex justify-content-center mt-3">                  
                        <h4 className="mr-3">Lifestyle</h4>
                      <span className="edit-icon" style={{marginTop:"-5px" }}>
                        <i className=" fas fa-edit fa-1x" ></i>
                        <div style={{marginTop:"-5px" }} ><span style={{fontSize:"11px" }}>Edit</span></div>
                      </span>
                    </div>
                  </div>
                   
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Dietary Habits</label>
                        <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          defaultValue=""
                          isMulti
                          options={dietaryOptions}
                          placeholder="Select"   
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Drinking Habits</label>
                        <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          defaultValue=""
                          isMulti
                          options={drinkingOptions}
                          placeholder="Select "   
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Smoking Habits</label>
                        <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          defaultValue=""
                          isMulti
                          options={smokingOptions}
                          placeholder="Select "   
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Challenged</label>
                        <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          defaultValue=""
                          isMulti
                          options={ChallengedOptions}
                          placeholder="Select "   
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button className="post_jp_btn float-right btn-sm px-3" style={{ height:"35px" }} type="submit">
                        SAVE
                      </button>
                    </div>
                  </div>
                </form>
                <hr />
<form>                 
                  <div className="row">
                  <div className="col-lg-12">
                    <div className="d-flex justify-content-center mt-3">                  
                        <h4 className="mr-3">Desired partner </h4>
                      <span className="edit-icon" style={{marginTop:"-5px" }}>
                        <i className=" fas fa-edit fa-1x" ></i>
                        <div style={{marginTop:"-5px" }} ><span style={{fontSize:"11px" }}>Edit</span></div>
                      </span>
                    </div>
                  </div>
                   
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="label15">About Desired Partner</label>
                        <textarea
                          className="job-input pt-2"
                          placeholder="Enter About Desired Partner"
                          >

                        </textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button className="post_jp_btn float-right btn-sm px-3" style={{ height:"35px" }} type="submit">
                        SAVE
                      </button>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </>
    );
                                                                                                                                                                                                                                          
}
export default DesiredProfileDetails;