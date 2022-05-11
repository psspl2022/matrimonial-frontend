import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";


function ProfileImageStage() {
    
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="main-heading">
        <h2>Setup Your Profile Image</h2>
        <div className="line-shape1">
          <img src="images/line.svg" alt="" />
        </div>
      </div>      
      <div className="form-group">
        <label className="label15">Select Profile Image</label>
        <input type="file" className="job-input" />
      </div>

      <NavLink to="/findMatches" className="lr_btn" >
        Ready to go
      </NavLink>

    </>
  );
}


export default ProfileImageStage;
