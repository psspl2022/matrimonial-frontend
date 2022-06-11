import { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import Swal from "sweetalert2";

export default function EducationDetails() {
  const [Edit, setEdit] = useState(false);
  const [highest, setHighest] = useState([]);
  const [ugDegrees, setUGDegrees] = useState({});
  const [pgDegrees, setPGDegrees] = useState([]);
  const [employedSectors, setEmployedSectors] = useState([]);
  const [occupations, setOccupations] = useState([]);
  const [incomes, setIncomes] = useState([]);

  const [schooling, setSchooling] = useState("");
  const [high, setHigh] = useState([]);
  const [ug, setUG] = useState([]);
  const [pg, setPG] = useState([]);
  const [employed, setEmployed] = useState([]);
  const [occupation, setOccupation] = useState([]);
  const [income, setIncome] = useState([]);
  const [ugColg, setUGColg] = useState("");
  const [pgColg, setPGColg] = useState("");
  const [org, setOrg] = useState("");

  const token = window.sessionStorage.getItem("access_token");
  const headers_param = {
    headers: {
      authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => { 
    document.title = "Education Details";
    axios
      .get(`${window.Url}api/careerDropdown`, headers_param)
      .then(({ data }) => {
        setHighest(
          data.highest.map(function (highest) {
            return { value: highest.id, label: highest.education };
          })
        );

        setUGDegrees(
          data.ug.map(function (ug) {
            return { value: ug.id, label: ug.education };
          })
        );

        setPGDegrees(
          data.pg.map(function (pg) {
            return { value: pg.id, label: pg.education };
          })
        );

        setEmployedSectors(
          data.emp_sector.map(function (emp_sector) {
            return { value: emp_sector.id, label: emp_sector.sector_name };
          })
        );

        setOccupations(
          data.occupation.map(function (occupation) {
            return { value: occupation.id, label: occupation.occupation };
          })
        );

        setIncomes(
          data.income.map(function (income) {
            return { value: income.id, label: income.income };
          })
        );
      });
  }, []);

  useEffect(async () => {
    const user = JSON.parse(window.sessionStorage.getItem("user_data")).user_reg_id;
    await axios
      .get(`${window.Url}api/showCareer`, headers_param)
      .then(({ data }) => {
        setHigh(
          highest.filter((highest_deg)=>{
            if(highest_deg.value===data.highest_qualification){
              return highest_deg;
          } 
          })[0]
          );
          setUG(
            ugDegrees.filter((ugDeg)=>{
              if(ugDeg.value===data.ug_qualification){
                return ugDeg;
            } 
            })[0]
          );
          setPG(
            pgDegrees.filter((pgDeg)=>{
              if(pgDeg.value===data.pg_qualification){
                return pgDeg;
            } 
            })[0]
          );
          setEmployed(
            employedSectors.filter((emp_sec)=>{
              if(emp_sec.value==data.employement_sector){
                return emp_sec;
            } 
            })[0]
          );
          setOccupation(
            occupations.filter((occ)=>{
              if(occ.value==data.occupation){
                return occ;
            } 
            })[0]
          );
          setIncome(
            incomes.filter((inc)=>{
              if(inc.value==data.income){
                return inc;
            } 
            })[0]
          );
          setSchooling(data.schooling);
          setUGColg(data.ug_clg);
          setPGColg(data.pg_clg);
          setOrg(data.organization_name);
      });
  }, [incomes]);

  const submitCareerDetails = async (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('schooling', schooling)
    formData.append('highest_qualification', high.value)
    formData.append('ug_qualification', ug.value)
    formData.append('ug_clg', ugColg)
    formData.append('pg_qualification', pg.value)
    formData.append('pg_clg', pgColg)
    formData.append('employement_sector', employed.value)
    formData.append('occupation', occupation.value)
    formData.append('organization_name', org)
    formData.append('income', income.value)

    const token = window.sessionStorage.getItem('access_token');
    const headers_param = {
      headers: {
          'authorization': 'Bearer '+token,
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
      }
  }

    await axios.post(`${window.Url}api/EditCareer`, formData, headers_param).then(({data})=>{
      if (data.hasOwnProperty('msg')) {
        Swal.fire({
          icon:"success",
          text:data.msg
        })
    }
    else{
      Swal.fire({
        icon:"error",
        text:data.msg
      })
    }
    })
  }

  return (
    <>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="my_profile"
          role="tabpanel"
        >
          <div className="view_chart">
            <div className="view_chart_header d-flex justify-content-between">
              <span>
                <h2>Education & Career </h2>
              </span>
              <span
                className="float-right edit-icon"
                onClick={() => {
                  setEdit(!Edit);
                }}
              >
                <i className="fas fa-edit fa-2x"></i>
                <div>Edit</div>
              </span>
            </div>
            <div className="post_job_body">
              <form onSubmit={submitCareerDetails}>
                <div className="row">
                  {/* <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="label15">Profile Avtar*</label>
                                            <div className="avtar_dp">
                                                <img src="images/profile_dp.jpg" alt="" />
                                            </div>
                                            <div className="image-upload-wrap1 ml5">
                                                <input className="file-upload-input1" id="file3" type="file" onchange="readURL(this);" accept="image/*" />
                                                <div className="drag-text1">
                                                    Upload Files
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Highest Education</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isClearable
                        isSearchable
                        name="height"
                        placeholder="Select Your Highest Education"
                        options={highest}
                        value={high}
                        isDisabled={!Edit}
                        onChange={(event) => {
                          setHigh(event);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">School Name*</label>
                      <input
                        type="text"
                        className="job-input"
                        disabled={Edit == false ? "disabled" : ""}
                        placeholder="Your School Name"
                        value={schooling}
                        onChange={(event) => {
                          setSchooling(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">UG Degree</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isClearable
                        isSearchable
                        name="ug_deg"
                        placeholder="Select Your UG Degree"
                        options={ugDegrees}
                        value={ug}
                        onChange={(event) => {
                          setUG(event);
                        }}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">UG College</label>
                      <input
                        type="text"
                        className="job-input"
                        placeholder="Your UG College"
                        disabled={Edit == false ? "disabled" : ""}
                        value={ugColg}
                        onChange={(event) => {
                          setUGColg(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">PG Degree</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isClearable
                        isSearchable
                        name="pg_deg"
                        placeholder="Select Your PG Degree"
                        options={pgDegrees}
                        value={pg}
                        onChange={(event) => {
                          setPG(event);
                        }}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">PG College</label>
                      <input
                        type="text"
                        className="job-input"
                        placeholder="Your UG College"
                        disabled={Edit == false ? "disabled" : ""}
                        value={pgColg}
                        onChange={(event) => {
                          setPGColg(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Employed In</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isClearable
                        isSearchable
                        name="height"
                        placeholder="Select Your Employed In"
                        options={employedSectors}
                        value={employed}
                        onChange={(event) => {
                          setEmployed(event);
                        }}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Occupation</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isClearable
                        isSearchable
                        name="height"
                        placeholder="Select Your Occupation"
                        options={occupations}
                        value={occupation}
                        onChange={(event) => {
                          setOccupation(event);
                        }}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Organization Name</label>
                      <input
                        type="text"
                        className="job-input"
                        placeholder="Your Organization Name"
                        disabled={Edit == false ? "disabled" : ""}
                        value={org}
                        onChange={(event) => {
                          setOrg(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Annual Income</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isClearable
                        isSearchable
                        name="height"
                        placeholder="Select Your Annual Income"
                        options={incomes}
                        value={income}
                        onChange={(event) => {
                          setIncome(event);
                        }}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <button className="post_jp_btn" type="submit">
                      SAVE CHANGES
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="social_accounts">
          <div className="view_chart">
            <div className="view_chart_header">
              <h4>Social Accounts</h4>
            </div>
            <div className="social200">
              <form>
                <button className="post_jp_btn" type="submit">
                  SAVE CHANGES
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
