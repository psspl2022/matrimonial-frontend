import { NavLink } from "react-router-dom";
import Select from "react-select";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { regActiveLink } from '../../actions/index';
import { useHistory } from "react-router-dom";



function CareerStage() {
  const activeState = useSelector((state) => state.changeActiveLink);
  const dispatch = useDispatch();
  const history = useHistory();

  const [verified, setverified] = useState(false);
  const [highest, setHighest] = useState([]);
  const [ugDegrees, setUGDegrees] = useState({});
  const [pgDegrees, setPGDegrees] = useState([]);
  const [employedSectors, setEmployedSectors] = useState([]);
  const [occupations, setOccupations] = useState([]);
  const [incomes, setIncomes] = useState([]);

  const [schooling, setSchooling] = useState('');
  const [high, setHigh] = useState('');
  const [ug, setUG] = useState('');
  const [pg, setPG] = useState('');
  const [employed, setEmployed] = useState('');
  const [occupation, setOccupation] = useState('');
  const [income, setIncome] = useState('');
  const [desc, setDesc] = useState('');

  const [requiredError, setRequiredError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if((high == undefined || high == null || high == "") || (employed == undefined || employed == null ||  employed == '') || (occupation == undefined ||occupation == null || occupation == ''  ) || (income == undefined || income == null || income == '')){
      setRequiredError(true);      
    } else{
      setRequiredError(false);
    }
  }, [high, employed, occupation, income]);

  const token = window.sessionStorage.getItem('access_token');
  const headers_param = {
    headers: {
      'authorization': 'Bearer ' + token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  const close = () =>{
    setTimeout(() => {
      Swal.close();
    }, 2000);
  };

  useEffect(() => {
    axios.get(`${window.Url}api/careerDropdown`, headers_param)
      .then(({ data }) => {
        setHighest(data.highest.map(function (highest) {
          return { value: highest.id, label: highest.education };
        }))

        setUGDegrees(data.ug.map(function (ug) {
          return { value: ug.id, label: ug.education };
        }))

        setPGDegrees(data.pg.map(function (pg) {
          return { value: pg.id, label: pg.education };
        }))

        setEmployedSectors(data.emp_sector.map(function (emp_sector) {
          return { value: emp_sector.id, label: emp_sector.sector_name };
        }))

        setOccupations(data.occupation.map(function (occupation) {
          return { value: occupation.id, label: occupation.occupation };
        }))

        setIncomes(data.income.map(function (income) {
          return { value: income.id, label: income.income };
        }))

      });
  }, []);

  const valueCheck = (formvalue) => {
    const dataValue = (formvalue == undefined || formvalue == null || formvalue == '') ? '': formvalue.value;
    return dataValue;
  };
  

  const submitCareerDetails = async (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('schooling', schooling)
    formData.append('highest_qualification', high.value)
    formData.append('ug_qualification', valueCheck(ug))
    formData.append('pg_qualification', valueCheck(pg))
    formData.append('employement_sector', employed.value)
    formData.append('occupation', occupation.value)
    formData.append('income', income.value)
    formData.append('express_yourself', desc)

    const token = window.sessionStorage.getItem('access_token');
    const headers_param = {
      headers: {
          'authorization': 'Bearer '+token,
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
      }
  }

    await axios.post(`${window.Url}api/createCareer`, formData, headers_param).then(({data})=>{
      if (data.hasOwnProperty('msg')) {
        Swal.fire({
          icon:"success",
          text:data.msg
        });
        close();
        dispatch(regActiveLink('family'));
        history.go(0);
    }
    else{
      Swal.fire({
        icon:"error",
        text:data.msg
      });
      close();
    }
      
      // console.log(data);
      // navigate("/")
    })
  }

  function onChange(value) {
    setverified(true);
  }
  return (
    <>

<div className="lg_form">
      <div className="main-heading">
        <h2>Fill The Fields Related to Career</h2>
        <div className="line-shape1">
          <img src="images/line.svg" alt="" />
        </div>
      </div>
      <form onSubmit={submitCareerDetails}>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label className="label15">Schooling Board</label>
              <input type="text" className="job-input" placeholder="Enter Schooling" 
                onChange={(event) => {
                  setSchooling(event.target.value);
                }}
                required />
            </div>
          </div>
          <div className="col-md-4">
              <div className="form-group">
              <label className="label15">Highest Degree</label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue=''
                isClearable
                isSearchable
                name="highest_degree"
                placeholder="Select Highest Degree"
                options={highest}
                onChange={(event) => {
                  setHigh(event);
                }}
                required
              />
              <span style={{color: '#ff0000',
    fontWeight: '300', fontFamily: 'Roboto,helvetica,arial,sans-serif'}}> { (high == undefined || high == null || high == '') ? 'Please select highest qualification' : ''}</span>
            </div>
          </div>
          <div className="col-md-4">
                <div className="form-group">
              <label className="label15">UG Degree</label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue=''
                isClearable
                isSearchable
                name="ug_deg"
                placeholder="Select UG Degree"
                options={ugDegrees}
                onChange={(event) => {
                  setUG(event);
                }}
              />
            </div>
          </div>
          <div className="col-md-4">
              <div className="form-group">
            <label className="label15">PG Degree</label>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue=''
              isClearable
              isSearchable
              name="pg_degree"
              placeholder="Select PG Degree"
              options={pgDegrees}
              onChange={(event) => {
                setPG(event);
              }}
              required
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
                options={employedSectors}
                onChange={(event) => {
                  setEmployed(event);
                }}
              />
              </div> 
              <span style={{color: '#ff0000',
    fontWeight: '300', fontFamily: 'Roboto,helvetica,arial,sans-serif'}}> { (employed == undefined || employed == null || employed == '') ? 'Please select a employed sector' : ''}</span>
          </div>
          <div className="col-md-4">
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
                options={occupations}
                onChange={(event) => {
                  setOccupation(event);
                }}
              />
            </div>
            <span style={{color: '#ff0000',
    fontWeight: '300', fontFamily: 'Roboto,helvetica,arial,sans-serif'}}> { (occupation == undefined || occupation == null || occupation == '') ? 'Please select occupation' : ''}</span>
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
          options={incomes}
          onChange={(event) => {
            setIncome(event);
          }}
        />
        <span style={{color: '#ff0000',
    fontWeight: '300', fontFamily: 'Roboto,helvetica,arial,sans-serif'}}> { (income == undefined || income == null || income == '') ? 'Please select income' : ''}</span>
      </div>
          </div>
          <div className="col-md-4">
          <div className="form-group">
        <label className="label15">Describe Yourself</label>
        <textarea className="w-100 p-2" rows={7} placeholder="Write About YourSelf" 
          onChange={(event) => {
            setDesc(event.target.value);
          }}
          required></textarea>
      </div>
          </div>
          <div className="col-md-12 text-center">
          <input
        type="submit"
        className="lr_btn float-none"
        value="Continue" 
        style={{cursor: (requiredError == true) ? "not-allowed": "pointer" }}/>
          </div>
        </div>
    </form>
</div>
    </>
  );
}


export default CareerStage;
