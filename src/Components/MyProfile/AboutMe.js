
import { useState } from "react";

export default function AboutMe() {

    const[Edit, setEdit] = useState(false);
    return (
        <>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="my_profile" role="tabpanel">
                    <div className="view_chart">
                        <div className="view_chart_header d-flex justify-content-between">
                            <span><h2>About Me </h2></span><span className="float-right edit-icon" onClick={()=>{ setEdit(!Edit) }}><i className="fas fa-edit fa-2x"></i><div>Edit</div></span>
                        </div>
                        <div className="post_job_body">
                        
                            <form>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label className="label15">Describe Yourself</label>
                                            <textarea className="w-100 p-2" rows={7} disabled={ Edit==false ? 'disabled' : ''} placeholder="Write something about yourself"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label className="label15">About My Family</label>
                                            <textarea className="w-100 p-2" rows={7} placeholder="Write About Your Family" disabled={ Edit==false ? 'disabled' : ''} ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label className="label15">About My Education</label>
                                            <textarea className="w-100 p-2" rows={7} placeholder="Write About Your Education" disabled={ Edit==false ? 'disabled' : ''} ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label className="label15">About My Career</label>
                                            <textarea className="w-100 p-2" rows={7} placeholder="Write About Your Career" disabled={ Edit==false ? 'disabled' : ''} ></textarea>
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