
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

export default function BasicDetails() {

    const[Edit, setEdit] = useState(false);
    return (
        <>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="my_profile" role="tabpanel">
                    <div className="view_chart">
                        <div className="view_chart_header d-flex justify-content-between">
                            <span><h2>My Profile </h2></span><span className="float-right edit-icon" onClick={()=>{ setEdit(!Edit) }}><i className="fas fa-edit fa-2x"></i><div>Edit</div></span>
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
                                            <label className="label15">Full Name*</label>
                                            <input type="text" className="job-input" disabled={ Edit==false ? 'disabled' : ''} placeholder="Your Full Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Gender</label>
                                            <input type="text" className="job-input" placeholder="Your Gender" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Date Of Birth</label>
                                            <input type="date" className="job-input" placeholder="Your DOB" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Marital Status</label>
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                defaultValue={maritalOptions[0]}
                                                isClearable
                                                isSearchable
                                                name="height"
                                                placeholder="Select Your Marital Status"
                                                options={maritalOptions}
                                                isDisabled={ !Edit }
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Height</label>
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                defaultValue={heightOptions[0]}
                                                isClearable
                                                isSearchable
                                                name="height"
                                                placeholder="Select Your Height"
                                                options={heightOptions}
                                                isDisabled={ !Edit }
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Religion</label>
                                            <input type="text" className="job-input" placeholder="Your Religion" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Caste</label>
                                            <input type="text" className="job-input" placeholder="Your Caste" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Subcaste</label>
                                            <input type="text" className="job-input" placeholder="Your Subcaste" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Mother Tongue</label>
                                            <input type="text" className="job-input" placeholder="Your Gender" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Country Living In</label>
                                            <input type="text" className="job-input" placeholder="Country Living In" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">State Living In</label>
                                            <input type="text" className="job-input" placeholder="Your Gender" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">City Living In</label>
                                            <input type="text" className="job-input" placeholder="Your Gender" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Annual Income</label>
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                defaultValue={IncomeOptions[0]}
                                                isClearable
                                                isSearchable
                                                name="income"
                                                placeholder="Select Your Annual Income"
                                                options={IncomeOptions}
                                                isDisabled={ !Edit }
                                            />
                                        </div>
                                    </div> */}
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Sect</label>
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                defaultValue={IncomeOptions[0]}
                                                isClearable
                                                isSearchable
                                                name="income"
                                                placeholder="Select Sect"
                                                options={IncomeOptions}
                                                isDisabled={ !Edit }
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="label15">Profile Managed by</label>
                                            <input type="email" className="job-input" placeholder="Profile Managed by" disabled={ Edit==false ? 'disabled' : ''} />
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