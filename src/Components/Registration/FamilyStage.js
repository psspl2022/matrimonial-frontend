import { NavLink } from "react-router-dom";
import Select from "react-select";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { regActiveLink } from '../../actions/index';
import { useHistory } from "react-router-dom";



function FamilyStage() {
  const activeState = useSelector((state) => state.changeActiveLink);
  const dispatch = useDispatch();
  const history = useHistory();

  const familyTypes = [
    { value: "1", label: "Nuclear" },
    { value: "2", label: "Joint" },
    { value: "3", label: "Others" },
  ];

  const broAndSister = [
    { value: "0", label: "None" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" }
  ];

  const [occupations, setOccupations] = useState([]);
  const [state, setState] = useState([]);
  const [nativeCities, setNativeCities] = useState([]);

  const [famType, setFamType] = useState('');
  const [fatherOccupation, setFatherOccupation] = useState('');
  const [motherOccupation, setMotherOccupation] = useState('');
  const [bro, setBro] = useState('');
  const [sis, setSis] = useState('');
  const [nativeState, setNativeState] = useState('');
  const [nativeCity, setNativeCity] = useState('');
  const [aboutFam, setAboutFam] = useState('');

  const [requiredError, setRequiredError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if((fatherOccupation == undefined || fatherOccupation == null || fatherOccupation == "") || (motherOccupation == undefined || motherOccupation == null ||  motherOccupation == '') || (bro == undefined ||bro == null || bro == ''  ) || (sis == undefined || sis == null || sis == '')|| (famType == undefined || famType == null || famType == '')|| (nativeCity == undefined || nativeCity == null || nativeCity == '')|| (nativeState == undefined || nativeState == null || nativeState == '')){
      setRequiredError(true);      
    } else{
      setRequiredError(false);
    }
  }, [fatherOccupation, motherOccupation, bro, sis, famType, nativeCity,nativeState]);

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
    axios.get(`${window.Url}api/familyDropdown`, headers_param)
      .then(({ data }) => {
        setOccupations(data.occupation.map(function (occupation) {
          return { value: occupation.id, label: occupation.occupation };
        }))

        setState(data.state.map(function (state) {
          return { value: state.id, label: state.name };
        }))

      });
  }, []);

  useEffect(() => {
    axios.get(`${window.Url}api/cityDropdown/${nativeState.value}`, headers_param)
   .then(({ data }) => {
  
    setNativeCities(data.city.map(function (city) {
          return { value: city.id, label: city.name };
        }) );
   });
  }, [nativeState]);

  const submitFamilyDetails = async (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('family_type', famType.value)
    formData.append('father_occupation', fatherOccupation.value)
    formData.append('mother_occupation', motherOccupation.value)
    formData.append('brother_count', bro.value)
    formData.append('sister_count', sis.value)
    formData.append('native_state', nativeState.value)
    formData.append('native_city', nativeCity.value)
    formData.append('about_family', aboutFam)

    const token = window.sessionStorage.getItem('access_token');
    const headers_param = {
      headers: {
          'authorization': 'Bearer '+token,
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
      }
  }

    await axios.post(`${window.Url}api/createFamily`, formData, headers_param).then(({data})=>{
      if (data.hasOwnProperty('msg')) {
        Swal.fire({
          icon:"success",
          text:data.msg
        });
        close();
        dispatch(regActiveLink('phone'));
        history.go(0);
    }
    else{
      Swal.fire({
        icon:"error",
        text:data.msg
      });
      close();
    }
    })
  }

  return (
    <>
    <div className="lg_form">
                <div className="main-heading">
                  <h2>Fill The Fields Related to Family</h2>
                  <div className="line-shape1">
                    <img src="images/line.svg" alt="" />
                  </div>
                </div>
                <form onSubmit={submitFamilyDetails}>
                  <div className="row">
                    <div className="col-md-4">
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
                    options={familyTypes}
                    onChange={(event) => {
                      setFamType(event);
                    }}
                  />
                  <span style={{color: '#ff0000',
    fontWeight: '300', fontFamily: 'Roboto,helvetica,arial,sans-serif'}}> { (famType == undefined || famType == null || famType == '') ? 'Please select family type' : ''}</span>
                </div>
                    </div>
                    <div className="col-md-4">
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
                    options={occupations}
                    onChange={(event) => {
                      setFatherOccupation(event);
                    }}
                  /><span style={{color: '#ff0000',
                  fontWeight: '300', fontFamily: 'Roboto,helvetica,arial,sans-serif'}}> { (fatherOccupation == undefined || fatherOccupation == null || fatherOccupation == '') ? 'Please select father occupation' : ''}</span>
                </div>
                    </div>
                    <div className="col-md-4">
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
                    options={occupations}
                    onChange={(event) => {
                      setMotherOccupation(event);
                    }}
                  />
                  <span style={{color: '#ff0000',
    fontWeight: '300', fontFamily: 'Roboto,helvetica,arial,sans-serif'}}> { (motherOccupation == undefined || motherOccupation == null || motherOccupation == '') ? 'Please select mother occupation' : ''}</span>
                </div>
                    </div>
                    <div className="col-md-4">
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
                    options={broAndSister}
                    onChange={(event) => {
                      setBro(event);
                    }}
                  />
                  <span style={{color: '#ff0000',
    fontWeight: '300', fontFamily: 'Roboto,helvetica,arial,sans-serif'}}> { (bro == undefined || bro == null || bro == '') ? 'Please select highest brother count' : ''}</span>
                </div>
                    <div className="form-group">
                  <label className="label15">Native State*</label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue=''
                    isClearable
                    isSearchable
                    name="native_state"
                    placeholder="Select State"
                    options={state}
                    onChange={(event) => {
                      setNativeState(event);
                    }}
                    required
                  />
                  <span style={{color: '#ff0000',
    fontWeight: '300', fontFamily: 'Roboto,helvetica,arial,sans-serif'}}> { (nativeState == undefined || nativeState == null || nativeState == '') ? 'Please select native state' : ''}</span>
                </div>
                    </div>
                    <div className="col-md-4">
                   
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
                    options={broAndSister}
                    onChange={(event) => {
                      setSis(event);
                    }}
                  />
                  <span style={{color: '#ff0000',
    fontWeight: '300', fontFamily: 'Roboto,helvetica,arial,sans-serif'}}> { (sis == undefined || sis == null || sis == '') ? 'Please select sister count' : ''}</span>
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
                    options={nativeCities}
                    onChange={(event) => {
                      setNativeCity(event);
                    }}
                  />
                  <span style={{color: '#ff0000',
    fontWeight: '300', fontFamily: 'Roboto,helvetica,arial,sans-serif'}}> { (nativeCity == undefined || nativeCity == null || nativeCity == '') ? 'Please select native city' : ''}</span>
                </div>
                    </div>
                    <div className="col-md-4">
                    <div className="form-group">
                    <label className="label15">About My Family</label>
                    <textarea className="w-100 p-2" rows={7} placeholder="Write About My Family" onChange={(event) => {
                      setAboutFam(event.target.value);
                    }}
                    required ></textarea>
                </div>
                    </div>
                    <div className="col-md-12 text-center">
                    <input
        type="submit"
        className="lr_btn float-none"
        value="Add to my Profile" 
        style={{cursor: (requiredError == true) ? "not-allowed": "pointer" }}/>
                    </div>
                  </div>   
        </form>
      </div>
    </>
  );
}


export default FamilyStage;
