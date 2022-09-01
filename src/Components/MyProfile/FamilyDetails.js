import { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import Swal from "sweetalert2";

export default function FamilyDetails() {
  const familyTypes = [
    { value: "1", label: "Nuclear" },
    { value: "2", label: "Joint" },
    { value: "3", label: "Others" },
  ];

  const familyStatus = [
    { value: "1", label: "Rich" },
    { value: "2", label: "Upper Class" },
    { value: "3", label: "Middle Class" },
    { value: "4", label: "Moderate" },
  ];

  const familyValues = [
    { value: "1", label: "Liberal" },
    { value: "2", label: "Orthodox" },
    { value: "3", label: "Conservative" },
  ];

  const broAndSister = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
  ];

  const yesNoOptions = [
    { value: "1", label: "No" },
    { value: "2", label: "Yes" },
  ];

  const [Edit, setEdit] = useState(false);
  const [occupations, setOccupations] = useState([]);
  const [familyLivingIn, setFamilyLivingIn] = useState({});
  const [cities, setCities] = useState([]);
  const [incomes, setIncomes] = useState([]);

  const [handler, setHandler] = useState("");
  const [motherOcc, setMotherOcc] = useState([]);
  const [fatherOcc, setFatherOcc] = useState([]);
  const [sis, setSis] = useState([]);
  const [marriedSis, setMarriedSis] = useState([]);
  const [bro, setBro] = useState([]);
  const [marriedBro, setMarriedBro] = useState([]);
  const [gothra, setGothra] = useState([]);
  const [maternalGothra, setMaternalGothra] = useState([]);
  const [familySta, setFamilySta] = useState("");
  const [familyVal, setFamilyVal] = useState("");
  const [familyTyp, setFamilyTyp] = useState("");
  const [familyInc, setFamilyInc] = useState("");
  const [familyLiv, setFamilyLiv] = useState("");
  const [familyCity, setFamilyCity] = useState("");
  const [livingWithFam, setLivingWithFam] = useState("");
  const [cityData, setCityData] = useState("");
  
  const token = window.sessionStorage.getItem("access_token");
  const headers_param = {
    headers: {
      authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const close = () =>{
    setTimeout(() => {
      Swal.close();
    }, 2000);
  };

  useEffect(() => {
    document.title = "Family Details";
    axios
      .get(`${window.Url}api/familyDropdown`, headers_param)
      .then(({ data }) => {
        setOccupations(
          data.occupation.map(function (occupation) {
            return { value: occupation.id, label: occupation.occupation };
          })
        );

        setFamilyLivingIn(
          data.state.map(function (state) {
            return { value: state.id, label: state.name };
          })
        );

        setIncomes(
          data.income.map(function (income) {
            return { value: income.id, label: income.income };
          })
        );
      });
  }, []);

  useEffect(() => {
    axios.get(`${window.Url}api/showFamily`, headers_param).then(({ data }) => {
      setMotherOcc(
        occupations.filter((occ) => {
          if (occ.value == data.mother_occupation) {
            return occ;
          }
        })[0]
      );
      setFatherOcc(
        occupations.filter((occ) => {
          if (occ.value == data.father_occupation) {
            return occ;
          }
        })[0]
      );
      setSis(
        broAndSister.filter((sis) => {
          if (sis.value === data.sister_count) {
            return sis;
          }
        })[0]
      );
      setMarriedSis(
        broAndSister.filter((married_sis) => {
          if (married_sis.value === data.married_sister_count) {
            return sis;
          }
        })[0]
      );
      setBro(
        broAndSister.filter((bro) => {
          if (bro.value === data.brother_count) {
            return bro;
          }
        })[0]
      );
      setMarriedBro(
        broAndSister.filter((married_bro) => {
          if (married_bro.value === data.married_brother_count) {
            return bro;
          }
        })[0]
      );
      setGothra(data.gotra);
      setMaternalGothra(data.gotra_maternal);
      setHandler(data.profile_handler_name);
      setLivingWithFam(
        yesNoOptions.filter((fam_liv_with) => {
          if (fam_liv_with.value === data.living_with_parent) {
            return fam_liv_with;
          }
        })[0]
      );
      setFamilySta(
        familyStatus.filter((fam_sta) => {
          if (fam_sta.value === data.family_status) {
            return fam_sta;
          }
        })[0]
      );
      setFamilyVal(
        familyValues.filter((fam_val) => {
          if (fam_val.value === data.family_values) {
            return fam_val;
          }
        })[0]
      );
      setFamilyTyp(
        familyTypes.filter((fam_typ) => {
          if (fam_typ.value === data.family_type) {
            return fam_typ;
          }
        })[0]
      );
      setFamilyInc(
        incomes.filter((fam_inc) => {
          if (fam_inc.value === data.family_income) {
            return fam_inc;
          }
        })[0]
      );
      setFamilyLiv(
        familyLivingIn.filter((fam_stat) => {
          if (fam_stat.value == data.native_state) {
            return fam_stat;
          }
        })[0]
      );
      setCityData(data.native_city);
    });
  }, [incomes]);

  useEffect(() => {
    getAllCities();
  }, [familyLiv]);

  const getAllCities = () => {
    if(familyLiv != undefined && familyLiv != null)
    {
      axios
      .get(`${window.Url}api/cityDropdown/${familyLiv.value}`, headers_param)
      .then(({ data }) => {
        setCities(
          data.city.map(function (city) {
            return { value: city.id, label: city.name };
          })
        );
      });
    }   
  };

  useEffect(() => {
    setFamilyCity(
      cities.filter((fam_city) => {
        if (fam_city.value == cityData) {
          return fam_city;
        }
      })[0]
    );
  }, [cities]);


  const valueCheck = (formvalue) => {
    const dataValue = (formvalue == undefined || formvalue == null) ? 0 : formvalue.value;
    return dataValue;
  };
  const submitFamilyDetails = async (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('profile_handler_name', (handler == undefined || handler == null) ? '' : handler.value)
    formData.append('father_occupation', (fatherOcc == undefined || fatherOcc == null) ? null : fatherOcc.value)
    formData.append('mother_occupation', (motherOcc == undefined || motherOcc == null) ? null : motherOcc.value)
    formData.append('brother_count', (bro == undefined || bro == null) ? '' : bro.value)
    formData.append('married_brother_count', (marriedBro == undefined || marriedBro == null) ? '' : marriedBro.value)
    formData.append('sister_count', (sis == undefined || sis == null) ? '' : sis.value)
    formData.append('married_sister_count',(marriedSis == undefined || marriedSis == null) ? '' : marriedSis.value)
    formData.append('gotra', (gothra == undefined || gothra == null) ? '' : gothra.value)
    formData.append('gotra_maternal', (maternalGothra == undefined || maternalGothra == null) ? '' : maternalGothra.value)
    formData.append('family_status', valueCheck(familySta))
    formData.append('family_values', valueCheck(familyVal))
    formData.append('family_type', valueCheck(familyTyp))
    formData.append('family_income', (familyInc == undefined || familyInc == null) ? '' : familyInc.value)
    formData.append('native_state', (familyLiv == undefined || familyLiv == null) ? null: familyLiv.value)
    formData.append('native_city', (familyCity == undefined || familyCity == null) ? null : familyCity.value)
    formData.append('living_with_parent', valueCheck(livingWithFam))


    await axios.post(`${window.Url}api/editFamily`, formData, headers_param).then(({data})=>{
      console.log(data);
      if (data.hasOwnProperty('msg')) {
        Swal.fire({
          icon:"success",
          text:data.msg
        });
        close();
    }
    else{
      Swal.fire({
        icon:"error",
        text:data.error_msg
      });
        close();
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
                <h2>Family Details </h2>
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
              <form onSubmit={submitFamilyDetails}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Profile Handler Name</label>
                      <input
                        type="text"
                        className="job-input"
                        placeholder="Enter Profile Handler Name"
                        value={handler}
                        onChange={(event) => {
                          setHandler(event.target.value);
                        }}
                        disabled={Edit == false ? "disabled" : ""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Mother Occupation:</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={occupations[0]}
                        isClearable
                        isSearchable
                        name="mother_occupation"
                        placeholder="Select Mother's Occupation"
                        options={occupations}
                        value={motherOcc}
                        onChange={(event) => {
                          setMotherOcc(event);
                        }}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Father Occupation:</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={occupations[0]}
                        isClearable
                        isSearchable
                        placeholder="Select Father's Occupation"
                        options={occupations}
                        value={fatherOcc}
                        onChange={(event) => {
                          setFatherOcc(event);
                        }}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Sisters</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={broAndSister['']}
                        isClearable
                        isSearchable
                        name="sister"
                        placeholder="Enter Sister Count"
                        options={broAndSister}
                        value={sis}
                        onChange={(event) => {
                          setSis(event);
                        }}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Married Sisters</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={broAndSister['']}
                        isClearable
                        isSearchable
                        name="sister"
                        placeholder="Enter Married Sister Count"
                        options={broAndSister}
                        value={marriedSis}
                        onChange={(event) => {
                          setMarriedSis(event);
                        }}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Brothers</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={broAndSister['']}
                        isClearable
                        isSearchable
                        name="brother"
                        placeholder="Enter Brother Count"
                        options={broAndSister}
                        value={bro}
                        onChange={(event) => {
                          setBro(event);
                        }}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Married Brothers</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={broAndSister['']}
                        isClearable
                        isSearchable
                        name="brother"
                        placeholder="Enter Married Brother Count"
                        options={broAndSister}
                        value={marriedBro}
                        onChange={(event) => {
                          setMarriedBro(event);
                        }}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Gothra</label>
                      <input
                        type="text"
                        className="job-input"
                        placeholder="Your Gothra"
                        value={gothra}
                        onChange={(event) => {
                          setGothra(event.target.value);
                        }}
                        disabled={Edit == false ? "disabled" : ""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Gothra (maternal)</label>
                      <input
                        type="text"
                        className="job-input"
                        placeholder="Enter Gothra"
                        value={maternalGothra}
                        onChange={(event) => {
                          setMaternalGothra(event.target.value);
                        }}
                        disabled={Edit == false ? "disabled" : ""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Family Status</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue=""
                        isClearable
                        isSearchable
                        placeholder="Select Family Status"
                        options={familyStatus}
                        value={familySta}
                        onChange={(event) => {
                          setFamilySta(event);
                        }}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Family Income</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={incomes[0]}
                        isClearable
                        isSearchable
                        placeholder="Select Family Income"
                        options={incomes}
                        value={familyInc}
                        onChange={(event) => {
                          setFamilyInc(event);
                        }}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Family Type</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue=""
                        isClearable
                        isSearchable
                        placeholder="Select Family Type"
                        options={familyTypes}
                        value={familyTyp}
                        onChange={(event) => {
                          setFamilyTyp(event);
                        }}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Family Values</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue=""
                        isClearable
                        isSearchable
                        placeholder="Select Family Values"
                        options={familyValues}
                        value={familyVal}
                        onChange={(event) => {
                          setFamilyVal(event);
                        }}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Family based out of</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue=""
                        isClearable
                        isSearchable
                        placeholder="Select State"
                        options={familyLivingIn}
                        value={familyLiv}
                        onChange={(event) => {
                          setFamilyLiv(event);
                        }}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Select City</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={cities[0]}
                        isClearable
                        isSearchable
                        placeholder="Select City"
                        options={cities}
                        value={familyCity}
                        onChange={(event) => {
                          setFamilyCity(event);
                        }}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Living with parents?</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={yesNoOptions[0]}
                        isClearable
                        isSearchable
                        placeholder="Select Living with parents"
                        options={yesNoOptions}
                        value={livingWithFam}
                        onChange={(event) => {
                          setLivingWithFam(event);
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
