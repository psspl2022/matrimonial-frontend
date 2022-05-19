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

  useEffect(() => {
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
  }, []);

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

    const formData = new FormData();
    formData.append("name", name);
    formData.append("dob", date);
    formData.append("maritial_status", matrimonial.value);
    formData.append("religion", religion.value);
    formData.append("caste", caste.value);
    formData.append("mother_tongue", moth.value);
    formData.append("horrorscope_match_required", horoscope.value);
    formData.append("height", height.value);
    formData.append("manglik", manglik.value);
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
          dispatch(regActiveLink('career'));
          history.go(0);
        } else {
          Swal.fire({
            icon: "error",
            text: data.msg,
          });
        }

        // console.log(data);
        // navigate("/")
      });
  };


  return (
    <>
      <div className="main-heading">
        <h2>Welcome to the {window.AppName}</h2>
        <div className="line-shape1">
          <img src="images/line.svg" alt="" />
        </div>
      </div>
      <form onSubmit={submitBasicDetails}>
        <div className="form-group">
          <label className="label15">Full Name*</label>
          <input
            type="text"
            className="job-input"
            placeholder="Enter Full Name"
            name="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            required
          />
        </div>
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

        <div className="form-group">
          <label className="label15">Mother Tongue*</label>
          <Select
            className="basic-single"
            classNamePrefix="select"
            defaultValue=""
            isClearable
            isSearchable
            name="mother_tongue"
            placeholder="Select Mother Tongue"
            options={moths}
            onChange={(e) => {
              setMoth(e);
            }}
            required
          />
        </div>
        <div className="form-group">
          <label className="label15">Religion*</label>
          <Select
            className="basic-single"
            classNamePrefix="select"
            defaultValue=""
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
        </div>

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

        <div className="form-group">
          <label className="label15">Are you manglik?*</label>
          <Select
            className="basic-single"
            classNamePrefix="select"
            defaultValue=""
            isClearable
            isSearchable
            name="religion"
            placeholder="Select Option"
            options={generalOptions}
            onChange={(e) => {
              setManglik(e);
            }}
            required
          />
        </div>

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
        </div>

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
            required
          />
        </div>

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
        </div>
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
        </div>
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
        </div>
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
        </div>
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

        <input type="submit" className="lr_btn" value="Continue" />
      </form>
    </>
  );
}

export default ProfileStage;
