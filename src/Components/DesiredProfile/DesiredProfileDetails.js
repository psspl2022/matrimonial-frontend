import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import Swal from "sweetalert2";
import makeAnimated from "react-select/animated";

function DesiredProfileDetails(){

  const animatedComponents = makeAnimated();
  
  const age = [
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

  const income = [
    { value: "0", label: "0 Lakh" },
    { value: "1", label: "1 Lakh" },
    { value: "2", label: "2 Lakh" },
    { value: "3", label: "3 Lakh" },
    { value: "4", label: "4 Lakh " },
    { value: "5", label: "5 Lakh" },
    { value: "7.5", label: "7.5 Lakh" },
    { value: "10", label: "10 Lakh" },
    { value: "15", label: "15 Lakh" },
    { value: "20", label: "20 Lakh" },
    { value: "25", label: "25 Lakh" },
    { value: "35", label: "35 Lakh" },
    { value: "50", label: "50 Lakh" },
    { value: "70", label: "70 Lakh " },
    { value: "100", label: "1 Crore " },
   
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

  const [Edit, setEdit] = useState(false);
  const [height, setHeight] = useState({});
  const [countries, setCountries] = useState({});  
  const [moths, setMoths] = useState([]);
<<<<<<< Updated upstream
  const [religions, setReligions] = useState([]);
  const [castes, setCastes] = useState([]);
  const [highests, setHighest] = useState([]); 
  const [residencies, setResidencies] = useState([]);
  const [occupations, setOccupations] = useState([]);


  const [miniage, setMiniage] = useState([]);
  const [maxiage, setMaxiage] = useState([]);
  const [miniheight, setMiniheight] = useState([]);
  const [maxiheight, setMaxiheight] = useState([]);
  const [marital, setMarital] = useState([]);
  const [country, setCountry] = useState([]);
  const [residence, setResidence] = useState([]);  
  const[religion, setReligion] = useState([]);
  const[caste, setCaste] = useState([]);
  const[mothertongue, setMothertongue] = useState([]);
  const[manglik, setManglik] = useState([]);
  const[minincome, setMinincome] = useState([]);
  const[maxincome, setMaxincome] = useState([]);
  const[occupation, setOccupation] = useState([]);
  const[education, setEducation] = useState([]);
  const[diet, setDiet] = useState([]);
  const[drinking, setDrinking] = useState([]);
  const[smoking, setSmoking] = useState([]);
  const[challenge, setChallenge] = useState([]);
  const[about, setAbout] = useState("");
=======
  const [religion, setReligions] = useState([]);
  const [caste, setCastes] = useState([]);
  const [highest, setHighest] = useState([]); 
  const [residencies, setResidencies] = useState([]);
  const [occupation, setOccupations] = useState([]);


  const[data1, setData1] =  useState({
    minage:"",
    maxage: "",
    minheight: "",
    maxheight: "",
    marital: "",
    country: "",
    residence: ""
});
>>>>>>> Stashed changes
   
let history = useHistory();
const token = window.sessionStorage.getItem('access_token');
const headers_data = {
    headers: {
        'authorization': 'Bearer ' + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}
<<<<<<< Updated upstream
=======

const {minage,maxage,minheight,maxheight,marital,country,residence} = data1;
const onInputChange = (e) => {
setData1({ ...data1, [e.target.name]:e.target.value});
}

>>>>>>> Stashed changes

  useEffect(() => {
    const user = JSON.parse(window.sessionStorage.getItem("user_data")).reg_id;
    axios
      .get(`${window.Url}api/desiredDropdown`, headers_data)
      .then(({ data }) => {
        setCountries(
          data.country.map(function (country) {
            return { value: country.id, label: country.name };
          })
        );

        setHeight(
          data.height.map(function (height) {
            return { value: height.id, label: height.height };
          })
        );

        setResidencies(
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

        setCastes(
          data.caste.map(function (caste) {
            return { value: caste.id, label: caste.caste };
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

        setHighest(
          data.highest.map(function (highest) {
            return { value: highest.id, label: highest.education };
          })
        );

        setOccupations(
          data.occupation.map(function (occupation) {
            return { value: occupation.id, label: occupation.occupation_category };
          })
        );

       
  })
}, []);

<<<<<<< Updated upstream
useEffect(async () => {
  // const user = JSON.parse(window.sessionStorage.getItem("user_data")).user_reg_id;
  await axios
    .get(`${window.Url}api/showDesiredDetails`, headers_data)
    .then(({ data }) => {
      setDiet(
        dietaryOptions.filter((diet_data)=>{
          if(diet_data.value===data.diett){
            return diet_data;
        } 
        })[0]
        );
       
        // setSchooling(data.schooling);
        // setUGColg(data.ug_clg);
        // setPGColg(data.pg_clg);
        // setOrg(data.organization_name);
    });
}, [challenge]);

const handleMarital = (e) =>{
  const value = (Array.isArray(e) ? e.map(x => x.value) : []);
  setMarital(value);
}

const handleCountry = (e) =>{
  const value = (Array.isArray(e) ? e.map(x => x.value) : []);
  setCountry(value);
}

const handleResidence = (e) =>{
  const value = (Array.isArray(e) ? e.map(x => x.value) : []);
  setResidence(value);
}

const handleReligion = (e) =>{
  const value = (Array.isArray(e) ? e.map(x => x.value) : []);
  setReligion(value);
}

const handleMothertongue = (e) =>{
  const value = (Array.isArray(e) ? e.map(x => x.value) : []);
  setMothertongue(value);
}

const handleCaste = (e) =>{
  const value = (Array.isArray(e) ? e.map(x => x.value) : []);
  setCaste(value);
}

const handleManglik = (e) =>{
  const value = (Array.isArray(e) ? e.map(x => x.value) : []);
  setManglik(value);
}

const handleEducation = (e) =>{
  const value = (Array.isArray(e) ? e.map(x => x.value) : []);
  setEducation(value);
}

const handleOccupation = (e) =>{
  const value = (Array.isArray(e) ? e.map(x => x.value) : []);
  setOccupation(value);
}

const handleDiet = (e) =>{
  const value = (Array.isArray(e) ? e.map(x => x.value) : []);
  setDiet(value);
}

const handleDrink = (e) =>{
  const value = (Array.isArray(e) ? e.map(x => x.value) : []);
  setDrinking(value);
}

const handleSmoke = (e) =>{
  const value = (Array.isArray(e) ? e.map(x => x.value) : []);
  setSmoking(value);
}

const handleChallenge = (e) =>{
  const value = (Array.isArray(e) ? e.map(x => x.value) : []);
  setChallenge(value);
}

const addDesiredBasic = (e) => {
e.preventDefault();
  const formData = new FormData();
  formData.append("minage", miniage.value);
  formData.append("maxage", maxiage.value);  
  formData.append("minheight", miniheight.value);
  formData.append("maxheight", maxiheight.value);
  formData.append("country", country);
  formData.append("residence", residence);
  formData.append("marital", marital);

  axios
  .post(`${window.Url}api/desiredBasic`,formData, headers_data)
=======

const addDesiredBasic = () => {
  axios
  .post(`${window.Url}api/desiredBasic`,data1, headers_data)
>>>>>>> Stashed changes
  .then(response => {
      if (response.data.hasOwnProperty("msg")) {
          Swal.fire({
            icon: "success",
            title: response.data.msg,
          });
<<<<<<< Updated upstream
          history.replace("/desiredProfile");
=======
          // history.replace("/desiredProfile");
>>>>>>> Stashed changes
        } else {
          Swal.fire({
            icon: "error",
            title: response.data.errors,
        });
      }
    }
  )
}

<<<<<<< Updated upstream
const addDesiredReligion = (e) => {
  e.preventDefault();
    const formData = new FormData();
    formData.append("religion", religion);
    formData.append("caste", caste);  
    formData.append("mothertongue", mothertongue);
    formData.append("manglik", manglik);
  
    axios
    .post(`${window.Url}api/desiredReligion`,formData, headers_data)
    .then(response => {
        if (response.data.hasOwnProperty("msg")) {
            Swal.fire({
              icon: "success",
              title: response.data.msg,
            });
            history.replace("/desiredProfile");
          } else {
            Swal.fire({
              icon: "error",
              title: response.data.errors,
          });
        }
      }
    )
}

const addDesiredCareer = (e) => {
  e.preventDefault();
    const formData = new FormData();
    formData.append("minincome", minincome.value);
    formData.append("maxincome", maxincome.value);  
    formData.append("occupation", occupation);
    formData.append("education", education);
  
    axios
    .post(`${window.Url}api/desiredCareer`,formData, headers_data)
    .then(response => {
        if (response.data.hasOwnProperty("msg")) {
            Swal.fire({
              icon: "success",
              title: response.data.msg,
            });
            history.replace("/desiredProfile");
          } else {
            Swal.fire({
              icon: "error",
              title: response.data.errors,
          });
        }
      }
    )
}

const addDesiredLifestyle = (e) => {
  e.preventDefault();
    const formData = new FormData();
    formData.append("diet", diet);
    formData.append("drinking", drinking);  
    formData.append("smoking", smoking);
    formData.append("challenged", challenge);
  
    axios
    .post(`${window.Url}api/desiredLifestyle`,formData, headers_data)
    .then(response => {
        if (response.data.hasOwnProperty("msg")) {
            Swal.fire({
              icon: "success",
              title: response.data.msg,
            });
            history.replace("/desiredProfile");
          } else {
            Swal.fire({
              icon: "error",
              title: response.data.errors,
          });
        }
      }
    )
}

const addDesiredAbout = (e) => {
  e.preventDefault();
    const formData = new FormData();
    formData.append("about", about);
  
    axios
    .post(`${window.Url}api/desiredAbout`,formData, headers_data)
    .then(response => {
        if (response.data.hasOwnProperty("msg")) {
            Swal.fire({
              icon: "success",
              title: response.data.msg,
            });
            history.replace("/desiredProfile");
          } else {
            Swal.fire({
              icon: "error",
              title: response.data.errors,
          });
        }
      }
    )
}

=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                              components={animatedComponents}                                                  
                              onChange={(e) =>
                                setMiniage(e)
                              }
=======
                              components={animatedComponents}
                              name="minage"
                              onChange={e => onInputChange(e)}
>>>>>>> Stashed changes
                              defaultValue=""
                              options={age}  
                              placeholder="Select Min"    
                            />
                          </div>
                          <div className="col-lg-6 pl-0 ">
                            <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
<<<<<<< Updated upstream
                            onChange={(e) =>
                              setMaxiage(e)
                            }
=======
                            name="maxage"
                            onChange={e => onInputChange(e)}
>>>>>>> Stashed changes
                            defaultValue=""
                            placeholder="Select Max" 
                            options={age}  
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
<<<<<<< Updated upstream
                              onChange={(e) =>
                                setMiniheight(e)
                              }
=======
                              name="minheight"
                              onChange={e => onInputChange(e)}
>>>>>>> Stashed changes
                              defaultValue=""
                              options={height}
                              placeholder="Select Min"    
                            />
                          </div>
                          <div className="col-lg-6 pl-0 ">
                            <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
<<<<<<< Updated upstream
                            onChange={(e) =>
                              setMaxiheight(e)
                            }
=======
                            name="maxheight"
                            onChange={e => onInputChange(e)}
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                          onChange={handleMarital}                        
=======
                          name="marital"
                          onChange={e => onInputChange(e)}
>>>>>>> Stashed changes
                          defaultValue=""
                          isMulti
                          options={maritalOptions}
                          placeholder="Select Marital Status"   
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Country</label>
                        <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
<<<<<<< Updated upstream
                          onChange={handleCountry} 
=======
                          name="country"
                          onChange={e => onInputChange(e)}
>>>>>>> Stashed changes
                          defaultValue=""
                          isMulti
                          options={countries}
                          placeholder="Select Country"   
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Residential Status</label>
                        <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
<<<<<<< Updated upstream
                          onChange={handleResidence}
=======
                          name="residence"
                          onChange={e => onInputChange(e)}
>>>>>>> Stashed changes
                          defaultValue=""
                          isMulti
                          options={residencies}
                          placeholder="Select Reidence"   
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                    <button onClick={addDesiredBasic} className="post_jp_btn float-right btn-sm px-3" style={{ height:"35px" }} type="submit">
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
                          onChange={handleReligion}
                          defaultValue=""
                          isMulti
                          options={religions}
                          placeholder="Select Religion"   
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Caste</label>
                        <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          onChange={handleCaste}
                          defaultValue=""
                          isMulti
                          options={castes}
                          placeholder="Select Caste"   
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Mother Tongue</label>
                        <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          onChange={handleMothertongue}
                          defaultValue=""
                          isMulti
                          options={moths}
                          placeholder="Select Mother Tongue"   
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="label15">Manglik</label>
                        <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          onChange={handleManglik}
                          defaultValue=""
                          isMulti
                          options={manglikOptions}
                          placeholder="Select Manglik"   
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <button onClick={addDesiredReligion} className="post_jp_btn float-right btn-sm px-3" style={{ height:"35px" }} type="submit">
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
                          onChange={handleEducation}
                          defaultValue=""
                          isMulti
                          options={highests}
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
                          onChange={handleOccupation}
                          defaultValue=""
                          isMulti
                          options={occupations}
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
                              onChange={(e) =>
                                setMinincome(e)
                              }
                              defaultValue=""
                              options={income}
                              placeholder="Select Min"    
                            />
                          </div>
                          <div className="col-lg-6 pl-0 ">
                            <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            onChange={(e) =>
                              setMaxincome(e)
                            }
                            defaultValue=""
                            options={income}
                            placeholder="Select Max"   
                          />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button onClick={addDesiredCareer} className="post_jp_btn float-right btn-sm px-3" style={{ height:"35px" }} type="submit">
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
                          onChange={handleDiet}
                          value={diet}
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
                          onChange={handleDrink}
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
                          onChange={handleSmoke}
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
                          onChange={handleChallenge}
                          defaultValue=""
                          isMulti
                          options={ChallengedOptions}
                          placeholder="Select "   
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button onClick={addDesiredLifestyle} className="post_jp_btn float-right btn-sm px-3" style={{ height:"35px" }} type="submit">
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
                        onChange={(e) =>
                          setAbout(e.target.value)
                        }
                          className="job-input pt-2"
                          placeholder="Enter About Desired Partner"
                          >

                        </textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button onClick={addDesiredAbout} className="post_jp_btn float-right btn-sm px-3" style={{ height:"35px" }} type="submit">
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