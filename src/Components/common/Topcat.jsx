import React, { useState, memo, Suspense } from "react";
export function Topcat(props) {
  // const [grid, props.setGrid] = useState(false);
  return (
    <div className="res-tabs">
      <div className="mtab-left">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a href="#tab-1" className="nav-link active" data-toggle="tab">
              {props.title ? props.title : "Browse Profile"}
            </a>
          </li>
        </ul>
      </div>
      <div className="mtab-right">
        <ul>
          <li className="grid-list">
            <button
              className="gl-btn"
              onClick={() => {
                props.setGrid(false);
              }}
              id="grid"
            >
              <i className="fas fa-th-large"></i>
            </button>
            <button
              className="gl-btn"
              onClick={() => {
                props.setGrid(true);
              }}
              id="list"
            >
              <i className="fas fa-th-list"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default memo(Topcat);
