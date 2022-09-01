import { useState, useEffect } from "react";
import Select from "react-select";
import Swal from "sweetalert2";
import axios from "axios";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

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

const bloodGroupOptions = [
  { value: `A+`, label: `A+` },
  { value: `A-`, label: `A-` },
  { value: `B+`, label: `B+` },
  { value: `B-`, label: `B-` },
  { value: `AB+`, label: `AB+` },
  { value: `AB-`, label: `AB-` },
  { value: `O+`, label: `O+` },
  { value: `O-`, label: `O-` },
];

const yesNoOptions = [
  { value: "2", label: "Yes" },
  { value: "1", label: "No" },
];

const thalaOptions = [
  { value: "1", label: "No" },
  { value: "2", label: "Minor" },
  { value: "3", label: "Major" }
];

const ChallengedOptions = [
  { value: "1", label: "None" },
  { value: "2", label: "Physically" },
  { value: "3", label: "Mentally" },
];

export default function LifeStyleDetails() {
  const [Edit, setEdit] = useState(false);

  const [languages, setLanguages] = useState([]);

  const [language, setLanguage] = useState("");
  const [diet, setDiet] = useState('');
  const [drink, setDrink] = useState('');
  const [smoke, setSmoke] = useState('');
  const [pet, setPet] = useState('');
  const [house, setHouse] = useState('');
  const [car, setCar] = useState('');
  const [bg, setBG] = useState('');
  const [hiv, setHiv] = useState('');
  const [thala, setThala] = useState("");
  const [challenged, setChallenged] = useState("");

  const [selectLanguage, setSelectLanguage] = useState("");

    const token = window.sessionStorage.getItem("access_token");
    const headers_param = {
      headers: {
        authorization: "Bearer " + token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const close = () =>{
      setTimeout(() => {
        Swal.close();
      }, 2000);
    };

    useEffect(() => {
      document.title = "LifeStyle Details";
      axios
        .get(`${window.Url}api/lifestyleDropdown`, headers_param)
        .then(({ data }) => {
          setLanguages(
            data.language.map(function (language) {
              return { value: language.id, label: language.language };
            })
          );
          
        });
    }, []);
  
    useEffect(() => {
      document.title = "LifeStyle Details";
      axios
        .get(`${window.Url}api/showLifeStyle`, headers_param)
        .then(({ data }) => {

          setSelectLanguage(
            languages.filter((language_data) => {
              if (
                data.language_i_speak.split(",").map(Number).includes(language_data.value)
              ) {
                return language_data;
              }
            })
          );
          setLanguage(data.language_i_speak);

          setDiet(
            dietaryOptions.filter((diet_data)=>{
              if(diet_data.value===data.diet_habit){
                return diet_data;
            } 
            })[0]
            );
            setDrink(
              drinkingOptions.filter((drink_data)=>{
                if(drink_data.value===data.drink_habit){
                  return drink_data;
              } 
              })[0]
              );
              setSmoke(
                yesNoOptions.filter((smoke_data)=>{
                if(smoke_data.value===data.smoking_habit){
                  return smoke_data;
              } 
              })[0]
              );
              setPet(
                yesNoOptions.filter((pet_data)=>{
                if(pet_data.value===data.open_to_pets){
                  return pet_data;
              } 
              })[0]
              );
              setHouse(
                yesNoOptions.filter((house_data)=>{
                if(house_data.value===data.own_a_house){
                  return house_data;
              } 
              })[0]
              );
              setCar(
                yesNoOptions.filter((car_data)=>{
                if(car_data.value===data.own_a_car){
                  return car_data;
              } 
              })[0]
              );
              setBG(
                bloodGroupOptions.filter((blood_group)=>{
                if(blood_group.value===data.blood_group){
                  return blood_group;
              } 
              })[0]
              );
              setHiv(
                yesNoOptions.filter((hiv_data)=>{
                if(hiv_data.value===data.hiv_pos){
                  return hiv_data;
              } 
              })[0]
              );
              setThala(
                thalaOptions.filter((thala_data)=>{
                if(thala_data.value===data.thalessemia){
                  return thala_data;
              } 
              })[0]
              );
              setChallenged(
                ChallengedOptions.filter((challenged_data)=>{
                if(challenged_data.value===data.challenged){
                  return challenged_data;
              } 
              })[0]
              );
        });
    }, [languages]);

    const arrayOfValues = (e) => {
      const value = Array.isArray(e) ? e.map((x) => x.value) : [];
      return value;
    };

   

    const handleLanguage = (e) => {
      setSelectLanguage(e);
      setLanguage(arrayOfValues(e));
    };

    const valueCheck = (formvalue) => {
      const dataValue = (formvalue == undefined || formvalue == null) ? 0 : formvalue.value;
      return dataValue;
    };

    const submitLifeStyleDetails = async (e) => {
        e.preventDefault();
    
        const formData = new FormData()
        formData.append('language', language)
      
        formData.append('diet_habit', valueCheck(diet))
        formData.append('drink_habit', valueCheck(drink))
        formData.append('smoking_habit', valueCheck(diet))
        formData.append('open_to_pets', valueCheck(pet))
        formData.append('own_a_house', valueCheck(house))
        formData.append('own_a_car', valueCheck(car))
        formData.append('blood_group', (bg == undefined || bg == null) ? 'NULL' : bg.value)
        formData.append('hiv_pos', valueCheck(hiv))
        formData.append('thalessemia', valueCheck(thala))
        formData.append('challenged', valueCheck(challenged))
    
        await axios.post(`${window.Url}api/editLifeStyle`, formData, headers_param).then(({data})=>{
          if (data.hasOwnProperty('msg')) {
            Swal.fire({
              icon:"success",
              text:data.msg
            });
            close();
        }
        else{
          Swal.fire({
            icon:"error",
            text:data.msg
          });
          close();
        }
        })
      }

  return (
    <>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="my_profile"
          role="tabpanel"
        >
          <div className="view_chart">
            <div className="view_chart_header d-flex justify-content-between">
              <span>
                <h2>Lifestyle Details </h2>
              </span>
              <span
                className="float-right edit-icon"
                onClick={() => {
                  setEdit(!Edit);
                }}
              >
                <i className="fas fa-edit fa-2x"></i>
                <div>Edit</div>
              </span>
            </div>
            <div className="post_job_body">
              <form onSubmit={submitLifeStyleDetails}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Dietary Habits</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isClearable
                        isSearchable
                        placeholder="Select Your Dietary Habits"
                        options={dietaryOptions}
                        value={diet}
                        defaultValue={dietaryOptions[1]}        
                        onChange={(e) => {
                          setDiet(e);
                        }}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Drinking Habits</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isClearable
                        isSearchable
                        name="ug_deg"
                        placeholder="Select Your Drinking Habits"
                        options={drinkingOptions}
                        value={drink}
                        onChange={(e) => {
                          setDrink(e);
                        }}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Smoking Habits</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isClearable
                        isSearchable
                        name="pg_deg"
                        placeholder="Select Your Smoking Habits"
                        options={drinkingOptions}
                        value={smoke}
                        onChange={(e) => {
                          setSmoke(e);
                        }}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Open to Pets?</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isClearable
                        isSearchable
                        name="height"
                        placeholder="Select Option"
                        options={yesNoOptions}
                        value={pet}
                        onChange={(e) => {
                          setPet(e);
                        }}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Own a House?</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isClearable
                        isSearchable
                        name="height"
                        placeholder="Select Option"
                        options={yesNoOptions}
                        defaultValue={yesNoOptions[1]}
                        value={house}
                        onChange={(e) => {
                          setHouse(e);
                        }}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Own a Car?</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isClearable
                        isSearchable
                        name="height"
                        placeholder="Select Option"
                        defaultValue={yesNoOptions[1]}
                        options={yesNoOptions}
                        value={car}
                        onChange={(e) => {
                          setCar(e);
                        }}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                  <div className="form-group">
                      <label className="label15">Languages I Speak</label>
                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        defaultValue=""
                        isMulti
                        options={languages}
                        value={selectLanguage}
                        placeholder="Select Languages"
                        onChange={handleLanguage}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Blood Group</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isClearable
                        isSearchable
                        placeholder="Select Your Blood Group"
                        options={bloodGroupOptions}
                        value={bg}
                        onChange={(e) => {
                          setBG(e);
                        }}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">HIV+?</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"                        
                        isClearable
                        isSearchable
                        placeholder="Select Option"
                        value={hiv}
                        options={yesNoOptions}
                        defaultValue={{label: "Choose one", value: ""}}                     
                        onChange={(e) => {
                          setHiv(e);
                        }}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Thalassemia</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isClearable
                        isSearchable
                        name="height"
                        placeholder="Select Option"
                        options={thalaOptions}
                        value={thala}
                        onChange={(e) => {
                          setThala(e);
                        }}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Challenged</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isClearable
                        isSearchable
                        name="height"
                        placeholder="Select Option"
                        options={ChallengedOptions}
                        value={challenged}
                        onChange={(e) => {
                          setChallenged(e);
                        }}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button className="post_jp_btn" type="submit">
                      SAVE CHANGES
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="social_accounts">
          <div className="view_chart">
            <div className="view_chart_header">
              <h4>Social Accounts</h4>
            </div>
            <div className="social200">
              <form>
                <button className="post_jp_btn" type="submit">
                  SAVE CHANGES
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
