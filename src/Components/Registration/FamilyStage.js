import { NavLink } from "react-router-dom";
import Select from "react-select";
import { useState } from "react";



function FamilyStage() {

  const [verified, setverified] = useState(false);

  function onChange(value){
    setverified(true);
  }
  return (
    <>
      <main className="browse-section">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-6">
              <div className="lg_form">
                <div className="main-heading">
                  <h2>Fill The Fields Related to Family</h2>
                  <div className="line-shape1">
                    <img src="images/line.svg" alt="" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="label15">Family Type*</label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue=''
                    isClearable
                    isSearchable
                    name="family_type"
                    placeholder="Select Family Type"
                    options=''
                  />
                </div>
                <div className="form-group">
                  <label className="label15">Father's Occupation*</label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue=''
                    isClearable
                    isSearchable
                    name="father_occupation"
                    placeholder="Select Father's Occupation"
                    options=''
                  />
                </div>
                <div className="form-group">
                  <label className="label15">mother's Occupation*</label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue=''
                    isClearable
                    isSearchable
                    name="mother_occupation"
                    placeholder="Select mother's Occupation"
                    options=''
                  />
                </div>
                <div className="form-group">
                  <label className="label15">Brother*</label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue=''
                    isClearable
                    isSearchable
                    name="brother"
                    placeholder="Select Brother"
                    options=''
                  />
                </div>
                <div className="form-group">
                  <label className="label15">Sister*</label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue=''
                    isClearable
                    isSearchable
                    name="sister"
                    placeholder="Select Sister"
                    options=''
                  />
                </div>
                <div className="form-group">
                  <label className="label15">Pincode</label>
                  <input type="text" className="job-input" placeholder="Enter Pincode" />
                </div>

                <div className="form-group">
                  <label className="label15">Family Living In*</label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue=''
                    isClearable
                    isSearchable
                    name="family_living_in"
                    placeholder="Select State"
                    options=''
                  />
                </div>

                <div className="form-group">
                  <label className="label15">Native City*</label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue=''
                    isClearable
                    isSearchable
                    name="native_city"
                    placeholder="Select Native City"
                    options=''
                  />
                </div>

                <div className="form-group">
                    <label className="label15">Contact Address</label>
                    <textarea className="w-100 p-2" rows={5} placeholder="Write Contact Address" ></textarea>
                </div>

                <div className="form-group">
                    <label className="label15">About My Family</label>
                    <textarea className="w-100 p-2" rows={7} placeholder="Write About My Family" ></textarea>
                </div>
                
                <NavLink to="/findMatches" className="lr_btn" onClick={(e)=>{
                  if(!verified){
                    e.preventDefault()
                  }
                }}>
                  Add to my Profile
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </>
  );
}


export default FamilyStage;
