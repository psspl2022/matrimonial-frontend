import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();
const religionOptions = [
  { value: "Hindu", label: "Hindu" },
  { value: "Muslim", label: "Muslim" },
  { value: "Sikh", label: "Sikh" },
  { value: "Christian", label: "Christian" },
  { value: "Jain", label: "Jain" },
];

const heightOptions = [
  { value: `4' 1" (1.34 mts)`, label: `4' 1" (1.34 mts)` },
  { value: `4' 2" (1.34 mts)`, label: `4' 2" (1.34 mts)` },
  { value: `4' 3" (1.34 mts)`, label: `4' 3" (1.34 mts)` },
  { value: `4' 4" (1.34 mts)`, label: `4' 4" (1.34 mts)` },
  { value: `4' 5" (1.34 mts)`, label: `4' 5" (1.34 mts)` },
];

const ageOptions = [
  { value: "21", label: "21" },
  { value: "22", label: "22" },
  { value: "23", label: "23" },
  { value: "24", label: "24" },
  { value: "25", label: "25" },
];

const residentialOptions = [
  { value: "Citizen", label: "Citizen" },
  { value: "Permanent Resident", label: "Permanent Resident" },
  { value: "Work Permit", label: "Work Permit" },
  { value: "Student Visa", label: "Student Visa" },
  { value: "Temporary Visa", label: "Temporary Visa" },
];

const maritalOptions = [
  { value: "Never Married", label: "Never Married" },
  { value: "Awaiting Divorce", label: "Awaiting Divorce" },
  { value: "Divorced", label: "Divorced" },
  { value: "Widowed", label: "Widowed" },
  { value: "Annulled", label: "Annulled" },
];

export default function SearchFilters() {
  const [clearAll, setClearAll] = useState(true);

  return (
    <>
      <div className="browser-job-filters">
        <div className="filter-heading">
          <div className="fh-left">Filters</div>
          {/* <div className="fh-right">
            <a onClick={()=>{ setClearAll(!clearAll) }}>Clear All Filters</a>
          </div> */}
        </div>
        <div className="fltr-group">
          <div className="fltr-items-heading">
            <div className="fltr-item-left">
              <h6>Height</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label>From</label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={heightOptions[0]}
                isClearable
                isSearchable
                name="fromheight"
                placeholder="From Height"
                options={heightOptions}
              />
            </div>
            <div className="col-md-6">
              <label>To</label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={heightOptions[4]}
                isClearable
                isSearchable
                name="toheight"
                placeholder="To Height"
                options={heightOptions}
              />
            </div>
          </div>
        </div>

        <div className="fltr-group">
          <div className="fltr-items-heading">
            <div className="fltr-item-left">
              <h6>Age</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label>From</label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={ageOptions[0]}
                isClearable
                isSearchable
                name="fromheight"
                placeholder="From Age"
                options={ageOptions}
              />
            </div>
            <div className="col-md-6">
              <label>To</label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={ageOptions[4]}
                isClearable
                isSearchable
                name="toheight"
                placeholder="To Age"
                options={ageOptions}
              />
            </div>
          </div>
        </div>

        <div className="fltr-group">
          <div className="fltr-items-heading">
            <div className="fltr-item-left">
              <h6>Religion</h6>
            </div>
          </div>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={religionOptions[0]}
            isMulti
            placeholder="Select Religions"
            options={religionOptions}
          />
        </div>

        <div className="fltr-group">
          <div className="fltr-items-heading">
            <div className="fltr-item-left">
              <h6>Residential Status</h6>
            </div>
          </div>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            placeholder="Select Residential Status"
            options={residentialOptions}
          />
        </div>

        <div className="fltr-group">
          <div className="fltr-items-heading">
            <div className="fltr-item-left">
              <h6>
                Income Range <span>(Monthly Basis)</span>
              </h6>
            </div>
            <div className="fltr-item-right">
              <a href="#">Clear</a>
            </div>
          </div>
          <div className="filter-dd">
            <div className="rg-slider">
              <input
                className="rn-slider slider-input"
                type="hidden"
                value="30000"
              />
            </div>
            <div className="rg-limit">
              <h4>0</h4>
              <h4>250000</h4>
            </div>
          </div>
        </div>

        <div className="fltr-group">
          <div className="fltr-items-heading">
            <div className="fltr-item-left">
              <h6>Marital Status</h6>
            </div>
          </div>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={maritalOptions[0]}
            isMulti
            placeholder="Select Marital Status"
            options={maritalOptions}
          />
        </div>

        <div className="filter-button">
          <button className="flr-btn">Search Now</button>
        </div>
      </div>
    </>
  );
}
