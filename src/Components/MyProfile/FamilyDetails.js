
import { useState } from "react";

export default function FamilyDetails() {

    const[Edit, setEdit] = useState(false);
    return (
        <>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="my_profile" role="tabpanel">
                    <div className="view_chart">
                        <div className="view_chart_header d-flex justify-content-between">
                            <span><h2>Family Details </h2></span><span className="float-right edit-icon" onClick={()=>{ setEdit(!Edit) }}><i className="fas fa-edit fa-2x"></i><div>Edit</div></span>
                        </div>
                        <div className="post_job_body">
                        
                            <form>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Profile Handler Name</label>
                                            <input type="text" className="job-input" disabled={ Edit==false ? 'disabled' : ''} placeholder="Enter Profile Handler Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Mother Occupation:</label>
                                            <input type="text" className="job-input" placeholder="Enter Mother Occupation" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Father Occupation:</label>
                                            <input type="text" className="job-input" placeholder="Enter Father Occupation" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Sisters</label>
                                            <input type="text" className="job-input" placeholder="Enter Alternate Email Id" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Brothers</label>
                                            <input type="text" className="job-input" placeholder="Enter Landline No." disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Gothra</label>
                                            <input type="text" className="job-input" placeholder="Your Gothra" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Gothra (maternal)</label>
                                            <input type="text" className="job-input" placeholder="Enter Contact Address" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Family Status</label>
                                            <input type="text" className="job-input" placeholder="Enter Family Status" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Family Income</label>
                                            <input type="text" className="job-input" placeholder="Enter Family Income" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Family Type</label>
                                            <input type="text" className="job-input" placeholder="Enter Family Type" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Family Values</label>
                                            <input type="text" className="job-input" placeholder="Enter Family Values" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Family based out of</label>
                                            <input type="text" className="job-input" placeholder="Enter Family based out of" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Select City</label>
                                            <input type="text" className="job-input" placeholder="Select City" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Living with parents?</label>
                                            <input type="text" className="job-input" placeholder="Enter Living with parents?" disabled={ Edit==false ? 'disabled' : ''} />
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