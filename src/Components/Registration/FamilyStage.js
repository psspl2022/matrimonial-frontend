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
    { value: "0", label: "Select Option" },
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
  const [familyLivingIn, setFamilyLivingIn] = useState([]);
  const [nativeCities, setNativeCities] = useState([]);

  const [famType, setFamType] = useState('');
  const [fatherOccupation, setFatherOccupation] = useState('');
  const [motherOccupation, setMotherOccupation] = useState('');
  const [bro, setBro] = useState('');
  const [sis, setSis] = useState('');
  const [famLiving, setFamLiving] = useState('');
  const [nativeCity, setNativeCity] = useState('');
  const [aboutFam, setAboutFam] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const token = window.sessionStorage.getItem('access_token');
  const headers_param = {
    headers: {
      'authorization': 'Bearer ' + token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  useEffect(() => {
    axios.get(`${window.Url}api/familyDropdown`, headers_param)
      .then(({ data }) => {
        setOccupations(data.occupation.map(function (occupation) {
          return { value: occupation.id, label: occupation.occupation };
        }))

        setFamilyLivingIn(data.state.map(function (state) {
          return { value: state.id, label: state.name };
        }))

        // setNativeCities(data.city.map(function (city) {
        //   return { value: city.id, label: city.name };
        // }))

      });
  }, []);

  useEffect(() => {
    axios.get(`${window.Url}api/cityDropdown/${famLiving.value}`, headers_param)
   .then(({ data }) => {
  
    setNativeCities(data.city.map(function (city) {
          return { value: city.id, label: city.name };
        }) );
   });
  }, [famLiving]);

  const submitFamilyDetails = async (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('family_type', famType.value)
    formData.append('father_occupation', fatherOccupation.value)
    formData.append('mother_occupation', motherOccupation.value)
    formData.append('brother_count', bro.value)
    formData.append('sister_count', sis.value)
    formData.append('family_live_in', famLiving.value)
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
        })
        dispatch(regActiveLink('phone'));
        history.go(0);
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
                <div className="main-heading">
                  <h2>Fill The Fields Related to Family</h2>
                  <div className="line-shape1">
                    <img src="images/line.svg" alt="" />
                  </div>
                </div>
                <form onSubmit={submitFamilyDetails}>
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
                    required
                  />
                </div>
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
                    required
                  />
                </div>
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
                    required
                  />
                </div>
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
                    required
                  />
                </div>
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
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="label15">Family Living In*</label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue=''
                    isClearable
                    isSearchable
                    name="family_living_in"
                    placeholder="Select State"
                    options={familyLivingIn}
                    onChange={(event) => {
                      setFamLiving(event);
                    }}
                    required
                  />
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
                    required
                  />
                </div>

                <div className="form-group">
                    <label className="label15">About My Family</label>
                    <textarea className="w-100 p-2" rows={7} placeholder="Write About My Family" onChange={(event) => {
                      setAboutFam(event.target.value);
                    }}
                    required ></textarea>
                </div>
                
                <input
        type="submit"
        className="lr_btn"
        value="Add to my Profile" />
        </form>
      
    </>
  );
}


export default FamilyStage;
