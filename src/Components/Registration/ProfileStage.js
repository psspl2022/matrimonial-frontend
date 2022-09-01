import { NavLink } from "react-router-dom";
import Select from "react-select";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import $ from "jquery";
import { useSelector, useDispatch } from "react-redux";
import { regActiveLink } from '../../actions/index';
import { useHistory } from "react-router-dom";



function ProfileStage() {

 


  const activeState = useSelector((state) => state.changeActiveLink);
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [pincode, setPincode] = useState("");

  const [verified, setverified] = useState(false);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState({});
  const [states, setStates] = useState([]);
  const [heights, setHeights] = useState([]);
  const [moths, setMoths] = useState([]);
  const [religions, setReligions] = useState([]);
  const [castes, setCastes] = useState([]);
  const [residences, setResidences] = useState([]);

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [height, setHeight] = useState("");
  const [moth, setMoth] = useState("");
  const [religion, setReligion] = useState("");
  const [caste, setCaste] = useState("");
  const [manglik, setManglik] = useState("");
  const [horoscope, setHoroscope] = useState("");
  const [matrimonial, setMatrimonial] = useState("");
  const [date, setDate] = useState("");
  const [residence, setResidence] = useState("");

  const [requiredError, setRequiredError] = useState(false);
  // var countries = {};
  const maritalOptions = [
    { value: "1", label: "Never Married" },
    { value: "2", label: "Awaiting Divorce" },
    { value: "3", label: "Divorced" },
    { value: "4", label: "Widowed" },
    { value: "5", label: "Annulled" },
  ];

  const generalOptions = [
    { value: "0", label: "Select Option" },
    { value: "1", label: "Yes" },
    { value: "0", label: "No" },
  ];

  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    if((country == undefined || country == null || country == "") || (state == undefined || state == null ||  state == '') || (city == undefined ||city == null || city == ''  ) || (height == undefined || height == null || height == '') || (moth == undefined ||moth == null || moth == '') || (religion == undefined ||religion == null ||religion == '') || (manglik == undefined ||manglik == null ||manglik == '') || (horoscope == undefined ||horoscope == null ||horoscope == '') || (matrimonial == undefined ||matrimonial == null ||matrimonial == '') || (residence == undefined ||residence == null ||residence == '')){
      setRequiredError(true);
    } else{
      setRequiredError(false);
    }
    }, [country, state, city, height, moth, religion, manglik, horoscope, matrimonial, residence]);
  
  useEffect(() => {
    axios
      .get(`${window.Url}api/basicDropdown`, headers_param)
      .then(({ data }) => {
       
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

      });
  }, []);

  useEffect(() => {
    axios
      .get(`${window.Url}api/casteDropdown/${religion.value}`, headers_param)
      .then(({ data }) => {
        setCastes(
          data.caste.map(function (caste) {
            return { value: caste.id, label: caste.caste };
          })
        );
      });
      const userName = JSON.parse(window.sessionStorage.getItem("user_data")).name;
      setName(userName);
  }, [religion]);

  useEffect(() => {
    axios
      .get(`${window.Url}api/countryDropdown/${residence.value}`, headers_param)
      .then(({ data }) => {
        setCountries(
          data.country.map(function (country) {
            return { value: country.id, label: country.name };
          })
        );
      });
      const userName = JSON.parse(window.sessionStorage.getItem("user_data")).name;
      setName(userName);
  }, [residence]);

  useEffect(() => {
    axios
      .get(`${window.Url}api/stateDropdown/${country.value}`, headers_param)
      .then(({ data }) => {
        setStates(
          data.state.map(function (state) {
            return { value: state.id, label: state.name };
          })
        );
      });
      const userName = JSON.parse(window.sessionStorage.getItem("user_data")).name;
      setName(userName);
  }, [country]);

  useEffect(() => {
    axios
      .get(`${window.Url}api/cityDropdown/${state.value}`, headers_param)
      .then(({ data }) => {
        setCities(
          data.city.map(function (city) {
            return { value: city.id, label: city.name };
          })
        );
      });
  }, [state]);

  function onChange(value) {
    setverified(true);
  }

  const submitBasicDetails = async (e) => {
    e.preventDefault();
    const userName = JSON.parse(window.sessionStorage.getItem("user_data")).name;

    const valueCheck = (formvalue) => {
      const dataValue = (formvalue == undefined || formvalue == null || formvalue == '') ? '': formvalue.value;
      return dataValue;
    };
    
    const formData = new FormData();
    formData.append("name", userName);
    formData.append("dob", date);
    formData.append("marital_status", matrimonial.value);
    formData.append("religion", religion.value);
    formData.append("caste", valueCheck(caste));
    formData.append("mother_tongue", moth.value);
    formData.append("horrorscope_match_required", horoscope.value);
    formData.append("height", height.value);
    formData.append("manglik", manglik.value);
    formData.append("residence", residence.value);
    formData.append("country", country.value);
    formData.append("state", state.value);
    formData.append("city", city.value);
    formData.append("pincode", pincode);

    const token = window.sessionStorage.getItem("access_token");
    const headers_param = {
      headers: {
        authorization: "Bearer " + token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    await axios
      .post(`${window.Url}api/createBasic`, formData, headers_param)
      .then(({ data }) => {
        if (data.hasOwnProperty("msg")) {
          Swal.fire({
            icon: "success",
            text: data.msg,
          });
          close();
          dispatch(regActiveLink('career'));
          history.go(0);
        } else {
          Swal.fire({
            icon: "error",
            text: data.msg,
          });
          close();
        }

        // console.log(data);
        // navigate("/")
      });
  };


  return (
    <>
    
    <div className="lg_form">
      <div className="main-heading">
        <h2>Welcome to the {window.AppName}</h2>
        <div className="line-shape1">
          <img src="images/line.svg" alt="" />
        </div>
      </div>
      <form onSubmit={submitBasicDetails}>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
            <label className="label15">Full Name*</label>
            <input
              type="text"
              className="job-input"
              placeholder="Enter Full Name"
              name="name"
              value={name}
              disabled
              required
            />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
            <label className="label15">Date Of Birth*</label>
            <input
              type="date"
              className="job-input"
              placeholder="Enter Email Address"
              onChange={(e) => {
                setDate(e.target.value);
              }}
              required
            />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
            <label className="label15">Mother Tongue*</label>
            <Select
              className="basic-single"
              classNamePrefix="select"
              isClearable
              isSearchable
              name="mother_tongue"
              placeholder="Select Mother Tongue"
              options={moths}
              onChange={(e) => {
                setMoth(e);
              }}
              hasValue
            />
            <span style={{color: '#ff0000',
    fontWeight: '300', fontFamily: 'Roboto,helvetica,arial,sans-serif'}}> { (moth == undefined || moth == null || moth == '') ? 'Please select a mother tongue' : ''}</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
            <label className="label15">Religion*</label>
            <Select
              className="basic-single"
              classNamePrefix="select"
              isClearable
              isSearchable
              name="religion"
              placeholder="Select Religion"
              options={religions}
              onChange={(e) => {
                setReligion(e);
              }}
              required
            />
            <span style={{color: '#ff0000',
    fontWeight: '300', fontFamily: 'Roboto,helvetica,arial,sans-serif'}}> { (religion == undefined || religion == null || religion == '') ? 'Please select a religion' : ''}</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
            <label className="label15">Caste*</label>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue=""
              isClearable
              isSearchable
              name="caste"
              placeholder="Select Caste"
              options={castes}
              onChange={(e) => {
                setCaste(e);
              }}
              required
            />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
            <label className="label15">Are you manglik?*</label>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue=""
              isClearable
              isSearchable
              name="manglik"
              placeholder="Select Option"
              options={generalOptions}
              onChange={(e) => {
                setManglik(e);
              }}
              required
            />
            <span style={{color: '#ff0000',
    fontWeight: '300', fontFamily: 'Roboto,helvetica,arial,sans-serif'}}> { (manglik == undefined || manglik == null || manglik == '') ? 'Please select manglik' : ''}</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
            <label className="label15">Horoscope Match is necessary?*</label>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue=""
              isClearable
              isSearchable
              name="horoscope"
              placeholder="Select Horoscope"
              options={generalOptions}
              onChange={(e) => {
                setHoroscope(e);
              }}
              required
            />
            <span style={{color: '#ff0000',
    fontWeight: '300', fontFamily: 'Roboto,helvetica,arial,sans-serif'}}> { (horoscope == undefined || horoscope == null || horoscope == '') ? 'Please select horoscope' : ''}</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
            <label className="label15">Marital Status*</label>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue=""
              isClearable
              isSearchable
              name="marital_status"
              placeholder="Select Marital Status"
              options={maritalOptions}
              onChange={(e) => {
                setMatrimonial(e);
              }}
              isRequired
            />
            <span style={{color: '#ff0000',
    fontWeight: '300', fontFamily: 'Roboto,helvetica,arial,sans-serif'}}> { (matrimonial == undefined || matrimonial == null || matrimonial == '') ? 'Please select maritial status' : ''}</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
            <label className="label15">Height*</label>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue=""
              isClearable
              isSearchable
              name="height"
              placeholder="Select Height"
              options={heights}
              onChange={(e) => {
                setHeight(e);
              }}
              required
            />
              <span style={{color: '#ff0000',
    fontWeight: '300', fontFamily: 'Roboto,helvetica,arial,sans-serif'}}> { (height == undefined || height == null || height == '') ? 'Please select height' : ''}</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
            <label className="label15">Residence*</label>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue=""
              isClearable
              isSearchable
              name="height"
              placeholder="Select Residence"
              options={residences}
              onChange={(e) => {
                setResidence(e);
              }}
              required
            />
            <span style={{color: '#ff0000',
    fontWeight: '300', fontFamily: 'Roboto,helvetica,arial,sans-serif'}}> { (residence == undefined || residence == null || residence == '') ? 'Please select residence' : ''}</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
            <label className="label15">Country*</label>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue=""
              isClearable
              isSearchable
              name="country"
              id="country"
              placeholder="Select Country"
              options={countries}
              onChange={(e) => {
                setCountry(e);
              }}
              required
            />
            <span style={{color: '#ff0000',
    fontWeight: '300', fontFamily: 'Roboto,helvetica,arial,sans-serif'}}> { (country == undefined || country == null || country == '') ? 'Please select country' : ''}</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
            <label className="label15">State*</label>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue=""
              isClearable
              isSearchable
              name="state"
              placeholder="Select State"
              options={states}
              onChange={(e) => {
                setState(e);
              }}
              required
            />
            <span style={{color: '#ff0000',
    fontWeight: '300', fontFamily: 'Roboto,helvetica,arial,sans-serif'}}> { (state == undefined || state == null || state == '') ? 'Please select state' : ''}</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
            <label className="label15">City*</label>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue=""
              isClearable
              isSearchable
              name="city"
              placeholder="Select City"
              options={cities}
              onChange={(e) => {
                setCity(e);
              }}
              required
            />
            <span style={{color: '#ff0000',
    fontWeight: '300', fontFamily: 'Roboto,helvetica,arial,sans-serif'}}> { (city == undefined || city == null || city == '') ? 'Please select city' : ''}</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
            <label className="label15">Pincode</label>
            <input
              type="text"
              className="job-input"
              placeholder="Enter Pincode"
              value={pincode}
              onChange={(event) => {
                setPincode(event.target.value);
              }}
              required
            />
            </div>
          </div>
        </div>
        <div className="col-md-12 text-center mt-3">
          <input type="submit" className="lr_btn float-none" value="Continue"           
          style={{cursor: (requiredError == true) ? "not-allowed": "pointer" }} />
        </div>
      </form>
      </div>
    </>
  );
}

export default ProfileStage;
