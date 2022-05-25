
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function ContactDetails() {
    const [Edit, setEdit] = useState(false);
    const [cont, setCont] = useState('');
    const [altCont, setAltCont] = useState('');
    const [email, setEmail] = useState('');
    const [altEmail, setAltEmail] = useState('');
    const [landline, setLandline] = useState('');
    const [suitableTime, setSuitableTime] = useState('');
    const [contAdd, setContAdd] = useState('');
    const [contPincode, setContPincode] = useState('');
    const [parentAdd, setParentAdd] = useState("");
    const [parentPincode, setParentPincode] = useState("");
  
    const token = window.sessionStorage.getItem("access_token");
    const headers_param = {
      headers: {
        authorization: "Bearer " + token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
  
    useEffect(() => {
      axios
        .get(`${window.Url}api/showContact`, headers_param)
        .then(({ data }) => {
            setCont(data.contact);
            setAltCont(data.alter_contact);
            setEmail(data.email);
            setAltEmail(data.alter_email);
            setLandline(data.landline);
            setSuitableTime(data.time_for_call);
            setContAdd(data.contact_address);
            setContPincode(data.contact_pincode);
            setParentAdd(data.parent_address);
            setParentPincode(data.parent_pincode);
        });
    }, []);

    const submitContactDetails = async (e) => {
        e.preventDefault();
    
        const formData = new FormData()
        formData.append('contact', cont)
        formData.append('alter_contact', altCont)
        formData.append('email', email)
        formData.append('alter_email', altEmail)
        formData.append('landline', landline)
        formData.append('time_for_call', suitableTime)
        formData.append('contact_address', contAdd)
        formData.append('contact_pincode', contPincode)
        formData.append('parent_address', parentAdd)
        formData.append('parent_pincode', parentPincode)
    
        await axios.post(`${window.Url}api/editContact`, formData, headers_param).then(({data})=>{
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
                <div className="tab-pane fade show active" id="my_profile" role="tabpanel">
                    <div className="view_chart">
                        <div className="view_chart_header d-flex justify-content-between">
                            <span><h2>Contact Details </h2></span><span className="float-right edit-icon" onClick={()=>{ setEdit(!Edit) }}><i className="fas fa-edit fa-2x"></i><div>Edit</div></span>
                        </div>
                        <div className="post_job_body">
                        
                            <form onSubmit={submitContactDetails}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Contact No.</label>
                                            <input type="tel" className="job-input" disabled={ Edit==false ? 'disabled' : ''} placeholder="Your Contact No." onChange={(e) => { setCont(e.target.value); }} value={ cont } />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Alternate Contact No.</label>
                                            <input type="tel" className="job-input" placeholder="Your Alternate Contact No." disabled={ Edit==false ? 'disabled' : ''} onChange={(e) => { setAltCont(e.target.value); }} value={ altCont } />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Email Id</label>
                                            <input type="email" className="job-input" placeholder="Enter Email Id" disabled={ Edit==false ? 'disabled' : ''} onChange={(e) => { setEmail(e.target.value); }} value={ email } />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Alternate Email Id</label>
                                            <input type="email" className="job-input" placeholder="Enter Alternate Email Id" disabled={ Edit==false ? 'disabled' : ''} onChange={(e) => { setAltEmail(e.target.value); }} value={ altEmail } />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Landline No.</label>
                                            <input type="text" className="job-input" placeholder="Enter Landline No." disabled={ Edit==false ? 'disabled' : ''} onChange={(e) => { setLandline(e.target.value); }} value={ landline } />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Suitable Time to Contact</label>
                                            <input type="text" className="job-input" placeholder="Your Suitable Time to contact" disabled={ Edit==false ? 'disabled' : ''} onChange={(e) => { setSuitableTime(e.target.value); }} value={ suitableTime } />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Contact Address</label>
                                            <input type="text" className="job-input" placeholder="Enter Contact Address" disabled={ Edit==false ? 'disabled' : ''} onChange={(e) => { setContAdd(e.target.value); }} value={ contAdd } />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Contact Pincode</label>
                                            <input type="number" className="job-input" placeholder="Enter Pincode" disabled={ Edit==false ? 'disabled' : ''} onChange={(e) => { setContPincode(e.target.value); }} value={ contPincode } />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Parent's Address</label>
                                            <input type="text" className="job-input" placeholder="Enter Parent's Address" disabled={ Edit==false ? 'disabled' : ''} onChange={(e) => { setParentAdd(e.target.value); }} value={ parentAdd } />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label15">Parent's Pincode</label>
                                            <input type="number" className="job-input" placeholder="Enter Pincode" disabled={ Edit==false ? 'disabled' : ''} onChange={(e) => { setParentPincode(e.target.value); }} value={ parentPincode } />
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