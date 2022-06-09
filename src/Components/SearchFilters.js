import { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import DesiredList from "./DesiredProfile/DesiredList";

const animatedComponents = makeAnimated();

const maritalOptions = [
    { value: "1", label: "Never Married" },
    { value: "2", label: "Awaiting Divorce" },
    { value: "3", label: "Divorced" },
    { value: "4", label: "Widowed" },
    { value: "5", label: "Annulled" },
];

export default function SearchFilters(props) {
  const [clearAll, setClearAll] = useState(true);
  const [ages, setAges] = useState({});
  const [heights, setHeights] = useState({}); 
  const [moths, setMoths] = useState([]);
  const [religions, setReligions] = useState([]);
  const [castes, setCastes] = useState([]);
  const [incomes, setIncomes] = useState([]);
  
  const [miniAge, setMiniAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [miniHeight, setMinHeight] = useState("");
  const [maxHeight, setMaxHeight] = useState("");
  const [maxIncome, setMaxIncome] = useState("");
  const [minIncome, setMinIncome] = useState("");
  const [religion, setReligion] = useState([]);
  const [moth, setMoth] = useState([]);
  const [marital, setMarital] = useState([]);

  const token = window.sessionStorage.getItem('access_token');
// const headers_data = {
//     headers: {
//         'authorization': 'Bearer ' + token,
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     }
// }

  useEffect(() => {
    // const user = JSON.parse(window.sessionStorage.getItem("user_data")).reg_id;
    axios
      .get(`${window.Url}api/desiredDropdown`)
      .then(({ data }) => {

        setAges(
          data.age.map(function (age) {
            return { value: age.id, label: age.age };
          })
        );

        setHeights(
          data.height.map(function (height) {
            return { value: height.id, label: height.height };
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

        setIncomes(
          data.income.map(function (income_data) {
            return { value: income_data.id, label: income_data.income };
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
  })
}, []);

const SubmitFilter = () => {
  const filterData = [(miniAge)?miniAge.label:"", (maxAge)?maxAge.label:"", (miniHeight)?miniHeight.value:"", (maxHeight)?maxHeight.value:"", (minIncome)?minIncome.value:"", (maxIncome)?maxIncome.value:"", religion, moth, marital];
  props.setParFilterData(filterData);
}

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
                isClearable
                isSearchable
                onChange={(e) =>
                  setMinHeight(e)
                }
                placeholder="From Height"
                options={heights}
              />
            </div>
            <div className="col-md-6">
              <label>To</label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                isClearable
                isSearchable
                onChange={(e) =>
                  setMaxHeight(e)
                }
                placeholder="To Height"
                options={heights}
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
                isClearable
                isSearchable                                                  
                onChange={(e) =>
                  setMiniAge(e)
                }
                value={miniAge}
                placeholder="From Age"
                options={ages}
              />
            </div>
            <div className="col-md-6">
              <label>To</label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                isClearable
                isSearchable
                onChange={(e) =>
                  setMaxAge(e)
                }
                value={maxAge}
                placeholder="To Age"
                options={ages}
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
            onChange={(e) => 
              setReligion(Array.isArray(e) ? e.map(x => x.value) : [])
            }
            isMulti
            placeholder="Select Religions"
            options={religions}
          />
        </div>

        <div className="fltr-group">
          <div className="fltr-items-heading">
            <div className="fltr-item-left">
              <h6>Mother Tongue</h6>
            </div>
          </div>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            onChange={(e) => 
              setMoth(Array.isArray(e) ? e.map(x => x.value) : [])
            }
            isMulti
            placeholder="Select Mother Tongue"
            options={moths}
          />
        </div>

        <div className="fltr-group">
          <div className="fltr-items-heading">
            <div className="fltr-item-left">
              <h6>
                Income Range <span>(Monthly Basis)</span>
              </h6>
            </div>
            {/* <div className="fltr-item-right">
              <a href="#">Clear</a>
            </div> */}
          </div>
          <div className="row">
                          <div className="col-lg-6 pr-1">
                            <Select
                              closeMenuOnSelect={false}
                              components={animatedComponents}
                              onChange={(e) =>
                                setMinIncome(e)
                              }
                              // value={minincome}
                              options={incomes}
                              placeholder="Select Min"    
                            />
                          </div>
                          <div className="col-lg-6 pl-0 ">
                            <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            onChange={(e) =>
                              setMaxIncome(e)
                            }
                            // value={maxincome}
                            options={incomes}
                            placeholder="Select Max"   
                          />
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
            onChange={(e) => 
              setMarital(Array.isArray(e) ? e.map(x => x.value) : [])
            }
            isMulti
            placeholder="Select Marital Status"
            options={maritalOptions}
          />
        </div>

        <div className="filter-button">
          <button className="flr-btn" onClick={SubmitFilter}>Search Now</button>
        </div>
      </div>
    </>
  );
}
