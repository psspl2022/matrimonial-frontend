
import { useState } from "react";

export default function ContactDetails() {

    const[Edit, setEdit] = useState(false);
    return (
        <>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="my_profile" role="tabpanel">
                    <div className="view_chart">
                        <div className="view_chart_header d-flex justify-content-between">
                            <span><h2>Contact Details </h2></span><span className="float-right edit-icon" onClick={()=>{ setEdit(!Edit) }}><i className="fas fa-edit fa-2x"></i><div>Edit</div></span>
                        </div>
                        <div className="post_job_body">
                        
                            <form>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Contact No.</label>
                                            <input type="text" className="job-input" disabled={ Edit==false ? 'disabled' : ''} placeholder="Your Contact No." />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Alternate Contact No.</label>
                                            <input type="text" className="job-input" placeholder="Your Alternate Contact No." disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Email Id</label>
                                            <input type="email" className="job-input" placeholder="Enter Email Id" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Alternate Email Id</label>
                                            <input type="email" className="job-input" placeholder="Enter Alternate Email Id" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Landline No.</label>
                                            <input type="text" className="job-input" placeholder="Enter Landline No." disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Suitable Time to Contact</label>
                                            <input type="text" className="job-input" placeholder="Your Subcaste" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Contact Address</label>
                                            <input type="text" className="job-input" placeholder="Enter Contact Address" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Pincode</label>
                                            <input type="text" className="job-input" placeholder="Enter Pincode" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Parent's Address</label>
                                            <input type="text" className="job-input" placeholder="Enter Parent's Address" disabled={ Edit==false ? 'disabled' : ''} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Pincode</label>
                                            <input type="text" className="job-input" placeholder="Enter Pincode" disabled={ Edit==false ? 'disabled' : ''} />
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