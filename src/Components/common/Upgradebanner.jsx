import React, { memo, Suspense } from "react";
import { NavLink } from "react-router-dom";
export function Upgradebanner(props) {
  return (
    <div className="browse-banner">
      <div className="bbnr-left">
        <img
          src={
            process.env.PUBLIC_URL +
            "/THEME/gambolthemes.net/html-items/jobby/jobby-freelancer/images/browse/trophy.png"
          }
          alt=""
        />
        <div className="bbnr-text">
          <h4>Upgrade to Pro</h4>
          <p>Unlimited Matches and Apply.</p>
        </div>
      </div>
      <div className="bbnr-right">
        <NavLink to="/membershipDetail/3" className="plan-btn">
          Upgrade Plan
        </NavLink>
      </div>
    </div>
  );
}
export default memo(Upgradebanner);
