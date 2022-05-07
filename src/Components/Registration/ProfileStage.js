import { NavLink } from "react-router-dom";
import Select from "react-select";
import { useState } from "react";



function ProfileStage() {

  const [verified, setverified] = useState(false);

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
          defaultValue=''
          isClearable
          isSearchable
          name="mother_tongue"
          placeholder="Select Mother Tongue"
          options=''
        />
      </div>
      <div className="form-group">
        <label className="label15">Religion*</label>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue=''
          isClearable
          isSearchable
          name="religion"
          placeholder="Select Religion"
          options=''
        />
      </div>

      <div className="form-group">
        <label className="label15">Caste*</label>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue=''
          isClearable
          isSearchable
          name="caste"
          placeholder="Select Caste"
          options=''
        />
      </div>

      <div className="form-group">
        <label className="label15">Are you manglik?*</label>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue=''
          isClearable
          isSearchable
          name="religion"
          placeholder="Select Religion"
          options=''
        />
      </div>

      <div className="form-group">
        <label className="label15">Horoscope Match is necessary?*</label>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue=''
          isClearable
          isSearchable
          name="horoscope"
          placeholder="Select Horoscope"
          options=''
        />
      </div>

      <div className="form-group">
        <label className="label15">Marital Status*</label>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue=''
          isClearable
          isSearchable
          name="marital_status"
          placeholder="Select Marital Status"
          options=''
        />
      </div>

      <div className="form-group">
        <label className="label15">Height*</label>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue=''
          isClearable
          isSearchable
          name="height"
          placeholder="Select Height"
          options=''
        />
      </div>
      <div className="form-group">
        <label className="label15">Country*</label>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue=''
          isClearable
          isSearchable
          name="country"
          placeholder="Select Country"
          options=''
        />
      </div>
      <div className="form-group">
        <label className="label15">State*</label>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue=''
          isClearable
          isSearchable
          name="state"
          placeholder="Select State"
          options=''
        />
      </div>
      <div className="form-group">
        <label className="label15">City*</label>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue=''
          isClearable
          isSearchable
          name="city"
          placeholder="Select City"
          options=''
        />
      </div>
      <div className="form-group">
        <label className="label15">Pincode</label>
        <input type="text" className="job-input" placeholder="Enter Pincode" />
      </div>

      <NavLink to="/findMatches" className="lr_btn" onClick={(e) => {
        if (!verified) {
          e.preventDefault()
        }
      }}>
        Continue
      </NavLink>

    </>
  );
}


export default ProfileStage;
