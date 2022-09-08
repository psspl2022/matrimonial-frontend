import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import Swal from "sweetalert2";
import makeAnimated from "react-select/animated";
import CheckTokenExist from "../CheckTokenExist";

function DesiredProfileDetails() {

  const animatedComponents = makeAnimated();

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


  const [age, setAge] = useState({});
  const [height, setHeight] = useState({});
  const [countries, setCountries] = useState({});
  const [moths, setMoths] = useState([]);
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
  const [religion, setReligion] = useState([]);
  const [caste, setCaste] = useState([]);
  const [mothertongue, setMothertongue] = useState([]);
  const [manglik, setManglik] = useState([]);
  const [minincome, setMinincome] = useState([]);
  const [maxincome, setMaxincome] = useState([]);
  const [occupation, setOccupation] = useState([]);
  const [education, setEducation] = useState([]);
  const [diet, setDiet] = useState([]);
  const [drinking, setDrinking] = useState([]);
  const [smoking, setSmoking] = useState([]);
  const [challenge, setChallenge] = useState([]);
  const [about, setAbout] = useState("");

  const [selectMarital, setSelectMarital] = useState("");
  const [selectCountry, setSelectCountry] = useState("");
  const [selectResidence, setSelectResidence] = useState("");
  const [selectReligion, setSelectReligion] = useState("");
  const [selectCaste, setSelectCaste] = useState("");
  const [selectMother, setSelectMother] = useState("");
  const [selectManglik, setSelectManglik] = useState("");
  const [selectEducation, setSelectEducation] = useState("");
  const [selectOccupation, setSelectOccupation] = useState("");
  const [selectDiet, setSelectDiet] = useState("");
  const [selectDrink, setSelectDrink] = useState("");
  const [selectSmoke, setSelectSmoke] = useState("");
  const [selectChallenge, setSelectChallenge] = useState("");

  let history = useHistory();

  const { userExists } = CheckTokenExist();
  useEffect(() => {
    if (!userExists) {
      history.replace("/login");
    }
  }, []);

  const token = window.sessionStorage.getItem('access_token');
  const headers_data = {
    headers: {
      'authorization': 'Bearer ' + token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  const close = () => {
    setTimeout(() => {
      Swal.close();
    }, 2000);
  };

  useEffect(() => {
    document.title = "Desired Partner";
    // const user = JSON.parse(window.sessionStorage.getItem("user_data")).reg_id;
    axios
      .get(`${window.Url}api/desiredDropdown`)
      .then(({ data }) => {
        setCountries(
          data.country.map(function (country) {
            return { value: country.id, label: country.name };
          })
        );

        setAge(
          data.age.map(function (age) {
            return { value: age.id, label: age.age };
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
            return { value: occupation.id, label: occupation.occupation };
          })
        );


      })
  }, []);

  useEffect(async () => {
    await axios
      .get(`${window.Url}api/showDesiredDetails`, headers_data)
      .then(({ data }) => {
        setMiniage(
          age.filter((minage) => {
            if (minage.value == data.min_age) {
              return minage;
            }
          })[0]
        );

        setMaxiage(
          age.filter((maxage) => {
            if (maxage.value == data.max_age) {
              return maxage;
            }
          })[0]
        );

        setMiniheight(
          height.filter((minheight) => {
            if (minheight.value == data.min_height) {
              return minheight;
            }
          })[0]
        );

        setMaxiheight(
          height.filter((maxheight) => {
            if (maxheight.value == data.max_height) {
              return maxheight;
            }
          })[0]
        );

        setSelectMarital(
          maritalOptions.filter((marital_data) => {
            if (data.marital != null) {
              if (data.marital.split(",").map(Number).includes(marital_data.value)) {
                return marital_data;
              }
            }
          })
        );
        setMarital(data.marital);

        setSelectCountry(
          countries.filter((country_data) => {
            if (data.country != null) {
              if (data.country.split(",").map(Number).includes(country_data.value)) {
                return country_data;
              }
            }
          })
        );
        setCountry(data.country);

        setSelectResidence(
          residencies.filter((residence_data) => {
            if (data.residential != null) {
              if (data.residential.split(",").map(Number).includes(residence_data.value)) {
                return residence_data;
              }
            }
          })
        );
        setResidence(data.residential);

        setSelectReligion(
          religions.filter((religion_data) => {
            if (data.religion != null) {
              if (data.religion.split(",").map(Number).includes(religion_data.value)) {
                return religion_data;
              }
            }
          })
        );
        setReligion(data.religion);

        setSelectCaste(
          castes.filter((caste_data) => {
            if (data.caste != null) {
              if (data.caste.split(",").map(Number).includes(caste_data.value)) {
                return caste_data;
              }
            }
          })
        );
        setCaste(data.caste);

        setSelectMother(
          moths.filter((mother_data) => {
            if (data.mother_tongue != null) {
              if (data.mother_tongue.split(",").map(Number).includes(mother_data.value)) {
                return mother_data;
              }
            }
          })
        );
        setMothertongue(data.mother_tongue);

        setSelectManglik(
          manglikOptions.filter((manglik_data) => {
            if (data.manglik != null) {
              if (data.manglik.split(",").map(Number).includes(manglik_data.value)) {
                return manglik_data;
              }
            }
          })
        );
        setManglik(data.manglik);

        setSelectEducation(
          highests.filter((education_data) => {
            if (data.highest_education != null) {
              if (data.highest_education.split(",").map(Number).includes(education_data.value)) {
                return education_data;
              }
            }
          })
        );
        setEducation(data.highest_education)

        setSelectOccupation(
          occupations.filter((occupation_data) => {
            if (data.occupation.split(",").map(Number).includes(occupation_data.value)) {
              return occupation_data;
            }
          })
        );
        setOccupation(data.occupation);

        setMinincome(
          income.filter((mininc) => {
            if (mininc.value == data.min_income) {
              return mininc;
            }
          })[0]
        );

        setMaxincome(
          income.filter((maxinc) => {
            if (maxinc.value == data.max_income) {
              return maxinc;
            }
          })[0]
        );

        setSelectDiet(
          dietaryOptions.filter((diet_data) => {
            if (data.diet.split(",").includes(diet_data.value)) {
              return diet_data;
            }
          })
        );
        setDiet(data.diet);

        setSelectDrink(
          drinkingOptions.filter((drink_data) => {
            if (data.drinking.split(",").includes(drink_data.value)) {
              return drink_data;
            }
          })
        );
        setDrinking(data.drinking);

        setSelectSmoke(
          smokingOptions.filter((smoke_data) => {
            if (data.smoking.split(",").includes(smoke_data.value)) {
              return smoke_data;
            }
          })
        );
        setSmoking(data.smoking)

        setSelectChallenge(
          ChallengedOptions.filter((challenge_data) => {
            if (data.challenged.split(",").includes(challenge_data.value)) {
              return challenge_data;
            }
          })
        );
        setChallenge(data.challenged)

        // console.log("disha"+ data.about_desired)

        setAbout(data.about_desired);

      });

  }, [occupations]);

  const handleMarital = (e) => {
    const value = (Array.isArray(e) ? e.map(x => x.value) : []);
    setMarital(value);
    setSelectMarital(e);
  }

  const handleCountry = (e) => {
    const value = (Array.isArray(e) ? e.map(x => x.value) : []);
    setCountry(value);
    setSelectCountry(e);
  }

  const handleResidence = (e) => {
    const value = (Array.isArray(e) ? e.map(x => x.value) : []);
    setResidence(value);
    setSelectResidence(e);
  }

  const handleReligion = (e) => {
    const value = (Array.isArray(e) ? e.map(x => x.value) : []);
    setReligion(value);
    setSelectReligion(e);
  }

  const handleMothertongue = (e) => {
    const value = (Array.isArray(e) ? e.map(x => x.value) : []);
    setMothertongue(value);
    setSelectMother(e);
  }

  const handleCaste = (e) => {
    const value = (Array.isArray(e) ? e.map(x => x.value) : []);
    setCaste(value);
    setSelectCaste(e);
  }

  const handleManglik = (e) => {
    const value = (Array.isArray(e) ? e.map(x => x.value) : []);
    setManglik(value);
    setSelectManglik(e);
  }

  const handleEducation = (e) => {
    const value = (Array.isArray(e) ? e.map(x => x.value) : []);
    setEducation(value);
    setSelectEducation(e);
  }

  const handleOccupation = (e) => {
    const value = (Array.isArray(e) ? e.map(x => x.value) : []);
    setOccupation(value);
    setSelectOccupation(e);
  }

  const handleDiet = (e) => {
    const value = (Array.isArray(e) ? e.map(x => x.value) : []);
    setDiet(value);
    setSelectDiet(e)
  }

  const handleDrink = (e) => {
    const value = (Array.isArray(e) ? e.map(x => x.value) : []);
    setDrinking(value);
    setSelectDrink(e);
  }

  const handleSmoke = (e) => {
    const value = (Array.isArray(e) ? e.map(x => x.value) : []);
    setSmoking(value);
    setSelectSmoke(e);
  }

  const handleChallenge = (e) => {
    const value = (Array.isArray(e) ? e.map(x => x.value) : []);
    setChallenge(value);
    setSelectChallenge(e);
  }

  const valueCheck = (formvalue) => {
    const dataValue = (formvalue == undefined || formvalue == null || formvalue == '') ? '' : formvalue.value;
    return dataValue;
  };

  const addDesiredBasic = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("minage", valueCheck(miniage));
    formData.append("maxage", valueCheck(maxiage));
    formData.append("minheight", valueCheck(miniheight));
    formData.append("maxheight", valueCheck(maxiheight));
    formData.append("country", country);
    formData.append("residence", residence);
    formData.append("marital", marital);

    axios
      .post(`${window.Url}api/desiredBasic`, formData, headers_data)
      .then(response => {
        if (response.data.hasOwnProperty("msg")) {
          Swal.fire({
            icon: "success",
            title: response.data.msg,
          });
          close();
          history.replace("/desiredProfile");
        } else {
          Swal.fire({
            icon: "error",
            title: response.data.errors,
          });
          close();
        }
      }
      )
  }

  const addDesiredReligion = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("religion", religion);
    formData.append("caste", caste);
    formData.append("mothertongue", mothertongue);
    formData.append("manglik", manglik);

    axios
      .post(`${window.Url}api/desiredReligion`, formData, headers_data)
      .then(response => {
        if (response.data.hasOwnProperty("msg")) {
          Swal.fire({
            icon: "success",
            title: response.data.msg,
          });
          close();
          history.replace("/desiredProfile");
        } else {
          Swal.fire({
            icon: "error",
            title: response.data.errors,
          });
          close();
        }
      }
      )
  }

  const addDesiredCareer = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("minincome", valueCheck(minincome));
    formData.append("maxincome", valueCheck(maxincome));
    formData.append("occupation", occupation);
    formData.append("education", education);

    axios
      .post(`${window.Url}api/desiredCareer`, formData, headers_data)
      .then(response => {
        if (response.data.hasOwnProperty("msg")) {
          Swal.fire({
            icon: "success",
            title: response.data.msg,
          });
          close();
          history.replace("/desiredProfile");
        } else {
          Swal.fire({
            icon: "error",
            title: response.data.errors,
          });
          close();
        }
      }
      )
  }
    ;
  const addDesiredLifestyle = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("diet", diet);
    formData.append("drinking", drinking);
    formData.append("smoking", smoking);
    formData.append("challenged", challenge);

    axios
      .post(`${window.Url}api/desiredLifestyle`, formData, headers_data)
      .then(response => {
        if (response.data.hasOwnProperty("msg")) {
          Swal.fire({
            icon: "success",
            title: response.data.msg,
          });
          close();
          history.replace("/desiredProfile");
        } else {
          Swal.fire({
            icon: "error",
            title: response.data.errors,
          });
          close();
        }
      }
      )
  }

  const addDesiredAbout = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("about", about);

    axios
      .post(`${window.Url}api/desiredAbout`, formData, headers_data)
      .then(response => {
        if (response.data.hasOwnProperty("msg")) {
          Swal.fire({
            icon: "success",
            title: response.data.msg,
          });
          close();
          history.replace("/desiredProfile");
        } else {
          Swal.fire({
            icon: "error",
            title: response.data.errors,
          });
          close();
        }
      }
      )
  }

  return (
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
                  <span style={{ fontSize: "13px" }}>The criteria you mention here determines the ‘Desired Partner Matches’ you see. So please review this information carefully.</span>


                </div>
                <div className="post_job_body">
                  <form>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="d-flex justify-content-center mt-3">
                          <h4 className="mr-3">Basic details</h4>
                          {/* <span className="edit-icon" style={{marginTop:"-5px" }}>
                        <i className=" fas fa-edit fa-1x" ></i>
                        <div style={{marginTop:"-5px" }} ><span style={{fontSize:"11px" }}>Edit</span></div>
                      </span> */}
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
                                onChange={(e) =>
                                  setMiniage(e)
                                }
                                value={miniage}
                                options={age}
                                placeholder="Select Min"
                              />
                            </div>
                            <div className="col-lg-6 pl-0 ">
                              <Select
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                onChange={(e) =>
                                  setMaxiage(e)
                                }
                                options={age}
                                // isOptionDisabled={defaultValue <= miniage ? true : false}
                                value={maxiage}
                                placeholder="Select Max"

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
                                onChange={(e) =>
                                  setMiniheight(e)
                                }
                                value={miniheight}
                                options={height}
                                placeholder="Select Min"
                              />
                            </div>
                            <div className="col-lg-6 pl-0 ">
                              <Select
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                onChange={(e) =>
                                  setMaxiheight(e)
                                }
                                value={maxiheight}
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
                            onChange={handleMarital}
                            value={selectMarital}
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
                            onChange={handleCountry}
                            value={selectCountry}
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
                            onChange={handleResidence}
                            value={selectResidence}
                            isMulti
                            options={residencies}
                            placeholder="Select Reidence"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button onClick={addDesiredBasic} className="post_jp_btn float-right btn-sm px-3" style={{ height: "35px" }} type="submit">
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
                          {/* <span className="edit-icon" style={{marginTop:"-5px" }}>
                        <i className=" fas fa-edit fa-1x" ></i>
                        <div style={{marginTop:"-5px" }} ><span style={{fontSize:"11px" }}>Edit</span></div>
                      </span> */}
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="label15">Religion</label>
                          <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            onChange={handleReligion}
                            value={selectReligion}
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
                            value={selectCaste}
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
                            value={selectMother}
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
                            value={selectManglik}
                            isMulti
                            options={manglikOptions}
                            placeholder="Select Manglik"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <button onClick={addDesiredReligion} className="post_jp_btn float-right btn-sm px-3" style={{ height: "35px" }} type="submit">
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
                          {/* <span className="edit-icon" style={{marginTop:"-5px" }}>
                        <i className=" fas fa-edit fa-1x" ></i>
                        <div style={{marginTop:"-5px" }} ><span style={{fontSize:"11px" }}>Edit</span></div>
                      </span> */}
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="label15">Highest Education</label>
                          <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            onChange={handleEducation}
                            value={selectEducation}
                            isMulti
                            options={highests}
                            placeholder="Select Highest Education"
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
                            value={selectOccupation}
                            isMulti
                            options={occupations}
                            placeholder="Select Occupation"
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
                                value={minincome}
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
                                value={maxincome}
                                options={income}
                                placeholder="Select Max"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button onClick={addDesiredCareer} className="post_jp_btn float-right btn-sm px-3" style={{ height: "35px" }} type="submit">
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
                          {/* <span className="edit-icon" style={{marginTop:"-5px" }}>
                        <i className=" fas fa-edit fa-1x" ></i>
                        <div style={{marginTop:"-5px" }} ><span style={{fontSize:"11px" }}>Edit</span></div>
                      </span> */}
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="label15">Dietary Habits</label>
                          <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            onChange={handleDiet}
                            value={selectDiet}
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
                            value={selectDrink}
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
                            value={selectSmoke}
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
                            value={selectChallenge}
                            isMulti
                            options={ChallengedOptions}
                            placeholder="Select "
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button onClick={addDesiredLifestyle} className="post_jp_btn float-right btn-sm px-3" style={{ height: "35px" }} type="submit">
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
                          {/* <span className="edit-icon" style={{marginTop:"-5px" }}>
                        <i className=" fas fa-edit fa-1x" ></i>
                        <div style={{marginTop:"-5px" }} ><span style={{fontSize:"11px" }}>Edit</span></div>
                      </span> */}
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <label className="label15">About Desired Partner</label>
                          <textarea
                            onChange={(e) => {
                              setAbout(e.target.value);
                            }
                            }
                            value={about}
                            className="job-input pt-2"
                            placeholder="Enter About Desired Partner"
                          >

                          </textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button onClick={addDesiredAbout} className="post_jp_btn float-right btn-sm px-3" style={{ height: "35px" }} type="submit">
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