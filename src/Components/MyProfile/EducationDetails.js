
import { useState } from "react";
import Select from "react-select";

const heightOptions = [
    { value: `4' 1" (1.34 mts)`, label: `4' 1" (1.34 mts)` },
    { value: `4' 2" (1.34 mts)`, label: `4' 2" (1.34 mts)` },
    { value: `4' 3" (1.34 mts)`, label: `4' 3" (1.34 mts)` },
    { value: `4' 4" (1.34 mts)`, label: `4' 4" (1.34 mts)` },
    { value: `4' 5" (1.34 mts)`, label: `4' 5" (1.34 mts)` },
  ];

  const IncomeOptions = [
    { value: `No Income`, label: `No Income` },
    { value: `Rs. 0 - 1 Lakh`, label: `Rs. 0 - 1 Lakh` },
    { value: `Rs. 1 - 2 Lakh`, label: `Rs. 1 - 2 Lakh` },
    { value: `Rs. 2 - 3 Lakh`, label: `Rs. 2 - 3 Lakh` },
    { value: `Rs. 3 - 4 Lakh`, label: `Rs. 3 - 4 Lakh` },
  ];

  const maritalOptions = [
    { value: "Never Married", label: "Never Married" },
    { value: "Awaiting Divorce", label: "Awaiting Divorce" },
    { value: "Divorced", label: "Divorced" },
    { value: "Widowed", label: "Widowed" },
    { value: "Annulled", label: "Annulled" },
  ];

export default function EducationDetails() {

    const[Edit, setEdit] = useState(false);
    return (
        <>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="my_profile" role="tabpanel">
                    <div className="view_chart">
                        <div className="view_chart_header d-flex justify-content-between">
                            <span><h2>Education & Career </h2></span><span className="float-right edit-icon" onClick={()=>{ setEdit(!Edit) }}><i className="fas fa-edit fa-2x"></i><div>Edit</div></span>
                        </div>
                        <div className="post_job_body">
                        
                            <form>
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
                                                defaultValue={maritalOptions[0]}
                                                isClearable
                                                isSearchable
                                                name="height"
                                                placeholder="Select Your Highest Education"
                                                options={maritalOptions}
                                                isDisabled={ !Edit }
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">School Name*</label>
                                            <input type="text" className="job-input" disabled={ Edit==false ? 'disabled' : ''} placeholder="Your School Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">UG Degree</label>
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                defaultValue={maritalOptions[0]}
                                                isClearable
                                                isSearchable
                                                name="ug_deg"
                                                placeholder="Select Your UG Degree"
                                                options={maritalOptions}
                                                isDisabled={ !Edit }
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">UG College</label>
                                            <input type="text" className="job-input" placeholder="Your UG College" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">PG Degree</label>
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                defaultValue={maritalOptions[0]}
                                                isClearable
                                                isSearchable
                                                name="pg_deg"
                                                placeholder="Select Your PG Degree"
                                                options={maritalOptions}
                                                isDisabled={ !Edit }
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">PG College</label>
                                            <input type="text" className="job-input" placeholder="Your UG College" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Employed In</label>
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                defaultValue={maritalOptions[0]}
                                                isClearable
                                                isSearchable
                                                name="height"
                                                placeholder="Select Your Employed In"
                                                options={maritalOptions}
                                                isDisabled={ !Edit }
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Occupation</label>
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                defaultValue={maritalOptions[0]}
                                                isClearable
                                                isSearchable
                                                name="height"
                                                placeholder="Select Your Occupation"
                                                options={maritalOptions}
                                                isDisabled={ !Edit }
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Organization Name</label>
                                            <input type="text" className="job-input" placeholder="Your Organization Name" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Annual Income</label>
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                defaultValue={heightOptions[0]}
                                                isClearable
                                                isSearchable
                                                name="height"
                                                placeholder="Select Your Annual Income"
                                                options={heightOptions}
                                                isDisabled={ !Edit }
                                            />
                                        </div>
                                    </div>
                                    
                                        <div className="col-lg-12">
                                            <button className="post_jp_btn" type="submit">SAVE CHANGES</button>
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
                                <button className="post_jp_btn" type="submit">SAVE CHANGES</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}