import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";


function PhoneStage() {
    
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="main-heading">
        <h2>Verify Your Phone Number</h2>
        <div className="line-shape1">
          <img src="images/line.svg" alt="" />
        </div>
      </div>      
      <div className="form-group">
        <label className="label15">Mobile Number</label>
        <input type="text" className="job-input" placeholder="Enter Mobile Number" />
      </div>

      <NavLink to="/findMatches" className="lr_btn" >
        Verify This Number
      </NavLink>

    </>
  );
}


export default PhoneStage;
