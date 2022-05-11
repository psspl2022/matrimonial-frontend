import { NavLink } from "react-router-dom";
import Select from "react-select";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function ProfileStage() {
  const [name, setName] = useState("");
  const [pincode, setPincode] = useState("");

  const [verified, setverified] = useState(false);
  // const [countries, setCountries] = useState({});
  var countries = {};
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
     axios
    .get(`${window.Url}api/basicDropdown`)
    .then(({ data }) => {
      countries = data.country.map(function (country) {
        return { value: country.id, label: country.name };
      })
      

    });
  }, []);
  console.log(countries);
  function onChange(value) {
    setverified(true);
  }
  
  
  

  return (
    <>
      <div className="main-heading">
        <h2>Welcome to the {window.AppName}</h2>
        <div className="line-shape1">
          <img src="images/line.svg" alt="" />
        </div>
      </div>
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
          options=""
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
          options=""
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
          options=""
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
          options=""
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
          placeholder="Select Country"
          options={countries}
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
          options=""
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
          options=""
        />
      </div>
      <div className="form-group">
        <label className="label15">Pincode</label>
        <input type="text" className="job-input" placeholder="Enter Pincode" value={pincode}
          onChange={(event) => {
            setPincode(event.target.value);
          }}
          required />
      </div>

      <NavLink
        to="/findMatches"
        className="lr_btn"
        onClick={(e) => {
          if (!verified) {
            e.preventDefault();
          }
        }}
      >
        Continue
      </NavLink>
    </>
  );
}

export default ProfileStage;
