import { NavLink } from "react-router-dom";
import Select from "react-select";
import { useState } from "react";



function CareerStage() {

  const [verified, setverified] = useState(false);

  function onChange(value){
    setverified(true);
  }
  return (
    <>
      <main className="browse-section mt-3">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-6">
              <div className="lg_form">
                <div className="main-heading">
                  <h2>Fill The Fields Related to Career</h2>
                  <div className="line-shape1">
                    <img src="images/line.svg" alt="" />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="label15">Schooling</label>
                  <input type="text" className="job-input" placeholder="Enter Schooling" />
                </div>

                <div className="form-group">
                  <label className="label15">UG Degree*</label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue=''
                    isClearable
                    isSearchable
                    name="ug_deg"
                    placeholder="Select UG Degree"
                    options=''
                  />
                </div>
                <div className="form-group">
                  <label className="label15">PG Degree*</label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue=''
                    isClearable
                    isSearchable
                    name="pg_degree"
                    placeholder="Select PG Degree"
                    options=''
                  />
                </div>

                <div className="form-group">
                  <label className="label15">Highest Degree*</label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue=''
                    isClearable
                    isSearchable
                    name="highest_degree"
                    placeholder="Select Highest Degree"
                    options=''
                  />
                </div>

                <div className="form-group">
                  <label className="label15">Employed In*</label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue=''
                    isClearable
                    isSearchable
                    name="employed_in"
                    placeholder="Select Employed Sector"
                    options=''
                  />
                </div>

                <div className="form-group">
                  <label className="label15">Occupation*</label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue=''
                    isClearable
                    isSearchable
                    name="occupation"
                    placeholder="Select Occupation"
                    options=''
                  />
                </div>

                <div className="form-group">
                  <label className="label15">Annual Income*</label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue=''
                    isClearable
                    isSearchable
                    name="annual_income"
                    placeholder="Select Annual Income"
                    options=''
                  />
                </div>

                <div className="form-group">
                    <label className="label15">Describe Yourself</label>
                    <textarea className="w-100 p-2" rows={7} placeholder="Write About YourSelf" ></textarea>
                </div>
                
                <NavLink to="/findMatches" className="lr_btn" onClick={(e)=>{
                  if(!verified){
                    e.preventDefault()
                  }
                }}>
                  Continue
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </>
  );
}


export default CareerStage;
