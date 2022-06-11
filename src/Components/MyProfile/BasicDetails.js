import { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { regActiveLink } from "../../actions/index";
import { useHistory } from "react-router-dom";

const IncomeOptions = [
  { value: `No Income`, label: `No Income` },
  { value: `Rs. 0 - 1 Lakh`, label: `Rs. 0 - 1 Lakh` },
  { value: `Rs. 1 - 2 Lakh`, label: `Rs. 1 - 2 Lakh` },
  { value: `Rs. 2 - 3 Lakh`, label: `Rs. 2 - 3 Lakh` },
  { value: `Rs. 3 - 4 Lakh`, label: `Rs. 3 - 4 Lakh` },
];

const maritalOptions = [
    { value: 1, label: "Never Married" },
    { value: 2, label: "Awaiting Divorce" },
    { value: 3, label: "Divorced" },
    { value: 4, label: "Widowed" },
    { value: 5, label: "Annulled" },
  ];

  const genderOptions = [
    { value: 1, label: "Male" },
    { value: 2, label: "Female" },
    { value: 3, label: "Others" },
  ];

export default function BasicDetails() {
  const [Edit, setEdit] = useState(false);
  const [name, setName] = useState("");

  const [maritalStatus, setMaritalStatus] = useState('');
  const [countries, setCountries] = useState({});
  const [cities, setCities] = useState({});
  const [states, setStates] = useState([]);
  const [heights, setHeights] = useState([]);
  const [moths, setMoths] = useState([]);
  const [religions, setReligions] = useState([]);
  const [castes, setCastes] = useState([]);
  const [sects, setSects] = useState([]);
  const [genders, setGenders] = useState([]);

  const [country, setCountry] = useState("");
  const [selectCountry, setSelectCountry] = useState("");
  const [state, setState] = useState("");
  const [selectState, setSelectState] = useState("");
  const [stateData, setStateData] = useState("");
  const [city, setCity] = useState("");
  const [cityData, setCityData] = useState("");
  const [height, setHeight] = useState("");
  const [selectHeight, setSelectHeight] = useState("");
  const [moth, setMoth] = useState("");
  const [selectMoth, setSelectMoth] = useState("");
  const [religion, setReligion] = useState("");
  const [selectReligion, setSelectReligion] = useState("");
  const [caste, setCaste] = useState("");
  const [selectCaste, setSelectCaste] = useState("");
  const [sect, setSect] = useState("");
  const [selectSect, setSelectSect] = useState("");
  const [matrimonial, setMatrimonial] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [selectGender, setSelectGender] = useState("");

  const token = window.sessionStorage.getItem("access_token");
  const headers_param = {
    headers: {
      authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    const user = JSON.parse(window.sessionStorage.getItem("user_data")).user_reg_id;
    document.title = "Basic Details";
    axios
      .get(`${window.Url}api/basicDropdown`, headers_param)
      .then(({ data }) => {
        setCountries(
          data.country.map(function (country) {
            return { value: country.id, label: country.name };
          })
        );

        setHeights(
          data.height.map(function (height) {
            return { value: height.id, label: height.height };
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
      });

      axios
      .get(`${window.Url}api/sectDropdown`, headers_param)
      .then(({ data }) => {
        setSects(
          data.sect.map(function (sect) {
            return { value: sect.id, label: sect.name };
          })
        );
      });

  }, []);

  useEffect(async() => {
    const user = JSON.parse(window.sessionStorage.getItem("user_data")).user_reg_id;
    await axios
      .get(`${window.Url}api/showBasic/${user}`, headers_param)
      .then(({ data }) => {
        setName(data.basic.name);
        setDate(data.basic.dob);
        setMaritalStatus(
          maritalOptions.filter((marital_data) => {
            if (marital_data.value == data.basic.maritial_status) {
              return marital_data;
            }
          })[0]
        );
        setHeight(
          heights.filter((height_data) => {
            if (height_data.value == data.basic.height) {
              return height_data;
            }
          })[0]
        );
        setReligion(
          religions.filter((rel_data) => {
            if (rel_data.value == data.basic.religion) {
              return rel_data;
            }
          })[0]
        );
        setCaste(
          castes.filter((caste_data) => {
            if (caste_data.value == data.basic.caste) {
              return caste_data;
            }
          })[0]
        );
        setMoth(
          moths.filter((moth_data) => {
            if (moth_data.value == data.basic.mother_tongue) {
              return moth_data;
            }
          })[0]
        );
        setCountry(
          countries.filter((country_data) => {
            if (country_data.value == data.basic.country) {
              return country_data;
            }
          })[0]
        );
        setSect(
          sects.filter((sec_data) => {
            if (sec_data.value == data.basic.sect) {
              return sec_data;
            }
          })[0]
        );
        setGender(
          genderOptions.filter((gender_data) => {
            if (gender_data.value == data.gender.gender) {
              return gender_data;
            }
          })[0]
        );
        setStateData(data.basic.state);
        setCityData(data.basic.city);
      });
  },[castes]);

  useEffect(() => {
    getAllStates();
  }, [country]);

  const getAllStates = () => {
     axios
      .get(`${window.Url}api/stateDropdown/${country.value}`, headers_param)
      .then(({ data }) => {
        setStates(
          data.state.map(function (state_data) {
            return { value: state_data.id, label: state_data.name };
          })
        );
      });
  };

  useEffect(() => {
    setState(
      states.filter((state_data) => {
        if (state_data.value == stateData) {
          return state_data;
        }
      })[0]
    );
  }, [states]);

  useEffect(() => {
    // getAllCities();
  }, [state]);

  const getAllCities = () => {
     axios
      .get(`${window.Url}api/cityDropdown/${state.value}`, headers_param)
      .then(({ data }) => {
        setCities(
          data.city.map(function (city_data) {
            return { value: city_data.id, label: city_data.name };
          })
        );
      });
  };

  useEffect(() => {
    // setCity(
    //   cities.filter((city_data) => {
    //     if (city_data.value == cityData) {
    //       return city_data;
    //     }
    //   })[0]
    // );
  }, [cities]);





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
                <h2>My Profile </h2>
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
              <form>
                <div className="row">
                  {/* <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="label15">Profile Avtar*</label>
                                            <div className="avtar_dp">
                                                <img src="images/profile_dp.jpg" alt="" />
                                            </div>
                                            <div className="image-upload-wrap1 ml5">
                                                <input className="file-upload-input1" id="file3" type="file" onchange="readURL(this);" accept="image/*" />
                                                <div className="drag-text1">
                                                    Upload Files
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Full Name*</label>
                      <input
                        type="text"
                        className="job-input"
                        disabled={Edit == false ? "disabled" : ""}
                        placeholder="Your Full Name"
                        value={name}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Gender</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isClearable
                        isSearchable
                        placeholder="Select Your Gender"
                        value={gender}
                        options={genderOptions}
                        isDisabled={!Edit}
                        onChange={(e) => {
                          setGender(e);
                        }}
                        
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Date Of Birth</label>
                      <input
                        type="date"
                        className="job-input"
                        placeholder="Your DOB"
                        disabled={Edit == false ? "disabled" : ""}
                        value={date}
                        onChange={(e) => {
                          setDate(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Marital Status</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        // defaultValue={maritalOptions[parseInt(maritalStatus)-1]}
                        isClearable
                        isSearchable
                        placeholder="Select Your Marital Status"
                        value={maritalStatus}
                        options={maritalOptions}
                        isDisabled={!Edit}
                        onChange={(e) => {
                          setMaritalStatus(e);
                        }}
                        
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Height</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isClearable
                        isSearchable
                        placeholder="Select Your Height"
                        options={heights}
                        value={height}
                        isDisabled={!Edit}
                        onChange={(e) => {
                          setHeight(e);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Religion</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={religions[0]}
                        isClearable
                        isSearchable
                        placeholder="Select Your Religion"
                        options={religions}
                        value={religion}
                        isDisabled={!Edit}
                        onChange={(e) => {
                          setReligion(e);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Caste</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={castes[0]}
                        isClearable
                        isSearchable
                        placeholder="Select Your Caste"
                        options={castes}
                        value={caste}
                        isDisabled={!Edit}
                        onChange={(e) => {
                          setCaste(e);
                        }}
                      />
                    </div>
                  </div>
                  {/* <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Subcaste</label>
                      <input
                        type="text"
                        className="job-input"
                        placeholder="Your Subcaste"
                        disabled={Edit == false ? "disabled" : ""}
                      />
                    </div>
                  </div> */}
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Mother Tongue</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={moths[0]}
                        isClearable
                        isSearchable
                        placeholder="Select Mother Tongue"
                        options={moths}
                        value={moth}
                        isDisabled={!Edit}
                        onChange={(e) => {
                          setMoth(e);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Country Living In</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isClearable
                        isSearchable
                        placeholder="Select Country Living In"
                        options={countries}
                        value={country}
                        isDisabled={!Edit}
                        onChange={(e) => {
                          setCountry(e);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">State Living In</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isClearable
                        isSearchable
                        placeholder="Select State Living In"
                        options={states}
                        value={state}
                        isDisabled={!Edit}
                        onChange={(e) => {
                          setState(e);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">City Living In</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isClearable
                        isSearchable
                        placeholder="Select City Living In"
                        options={cities}
                        value={city}
                        isDisabled={!Edit}
                        onChange={(e) => {
                          setCity(e);
                        }}
                      />
                    </div>
                  </div>
                  {/* <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Annual Income</label>
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                defaultValue={IncomeOptions[0]}
                                                isClearable
                                                isSearchable
                                                name="income"
                                                placeholder="Select Your Annual Income"
                                                options={IncomeOptions}
                                                isDisabled={ !Edit }
                                            />
                                        </div>
                                    </div> */}
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Sect</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isClearable
                        isSearchable
                        name="income"
                        placeholder="Select Sect"
                        options={sects}
                        value={sect}
                        isDisabled={!Edit}
                        onChange={(e) => {
                          setSect(e);
                        }}
                      />
                    </div>
                  </div>
                  {/* <div className="col-lg-12">
                    <div className="form-group">
                      <label className="label15">Profile Managed by</label>
                      <input
                        type="email"
                        className="job-input"
                        placeholder="Profile Managed by"
                        disabled={Edit == false ? "disabled" : ""}
                      />
                    </div>
                  </div> */}

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
