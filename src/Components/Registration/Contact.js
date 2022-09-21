import { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import Select from "react-select";
import { useHistory } from "react-router-dom";
import bgimage from "../../background2.jpeg";
const token = window.sessionStorage.getItem("access_token");
function Contact() {
    const headers_data = {
        headers: {
            authorization: "Bearer " + token,
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "SignUp";
    }, [])

    const close = () => {
        setTimeout(() => {
            Swal.close();
        }, 2000);
    };

    const history = useHistory();
    const [validgender, setValidGender] = useState(true);
    const [validemob, setValidemob] = useState(true);
    const [profileFor, setProfileFor] = useState("");
    const [gender, setGender] = useState();
    const [phno, setPhno] = useState("");
    const [validationError, setValidationError] = useState({});
    const [requiredError, setRequiredError] = useState(false);
    const gendervalid = ($text) => {
        return !validgender && <span style={{
            color: '#ff0000',
            fontWeight: '400', fontFamily: 'Roboto,helvetica,arial,sans-serif'
        }}> {$text}</span>

    }
    const mobValid = ($text) => {
        return !validemob && <span style={{
            color: '#ff0000',
            fontWeight: '400', fontFamily: 'Roboto,helvetica,arial,sans-serif'
        }}> {$text}</span>

    }
    function validat(e) {
        let rgxmob = /^[6-9]{1}[0-9]{9}$/;

        if (!rgxmob.test(phno)) {
            setValidemob(false);
        }
        else {
            setValidemob(true);
        }
        if (!gender) {
            setValidGender(false);
        }
        else {
            setValidGender(true);
        }

    }
    const profileForOptions = [
        { value: "Self", label: "Self" },
        { value: "Son", label: "Son" },
        { value: "Daughter", label: "Daughter" },
        { value: "Brother", label: "Brother" },
        { value: "Sister", label: "Sister" },
        { value: "Relative", label: "Relative" },
        { value: "Client - Marriage Bureau", label: "Client - Marriage Bureau" },
    ];

    const genderOptions = [
        { value: "0", label: "Select Gender" },
        { value: "1", label: "Male" },
        { value: "2", label: "Female" },
        { value: "3", label: "Other" },
    ];
    useEffect(() => {
        if ((gender != undefined || gender != null) && (profileFor != undefined || profileFor != null)) {
            setRequiredError(true);
        } else {
            setRequiredError(false);
        }
    }, [gender, profileFor]);

    const registerUser = async (e) => {
        e.preventDefault();
        if (validgender == validemob == true) {
            const formData = new FormData()

            formData.append('profile_for', profileFor.value)
            formData.append('gender', gender.value)
            formData.append('contact', phno)
            await axios.post(`${window.Url}api/auth/contact`, formData, headers_data)
                .then(({ data }) => {

                    Swal.fire({
                        icon: "success",
                        text: data.msg
                    });
                    close();
                    window.sessionStorage.setItem("gender", JSON.stringify(data.gender));
                    window.sessionStorage.setItem("stage", JSON.stringify(data.stage));
                    window.location.reload();

                })
        }

    }

    return (
        <>


            <div className="lg_form">
                <div className="main-heading">
                    <h2>Sign Up to </h2>
                </div>
                <form onSubmit={registerUser}>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group ">
                                <label className="label15">Profile For*</label>
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    defaultValue={profileForOptions[0]}
                                    isClearable
                                    isSearchable
                                    name="profile_for"
                                    placeholder="Select Profile For"
                                    options={profileForOptions}
                                    onChange={(event) => {
                                        setProfileFor(event)
                                    }}
                                />
                                <span style={{
                                    color: '#ff0000',
                                    fontWeight: '400', fontFamily: 'Roboto,helvetica,arial,sans-serif'
                                }}> {(profileFor == undefined || profileFor == null) ? 'Please select a value' : ''}</span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label className="label15">Gender*</label>
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    defaultValue={genderOptions[0]}
                                    isClearable
                                    isSearchable
                                    name="gender"
                                    placeholder="Select Gender"
                                    options={genderOptions}
                                    onChange={(event) => {
                                        setGender(event)
                                    }}
                                />

                                {gendervalid('Please select gender')}
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <label className="label15">Phone Number*</label>
                                <input type="tel" id="phone" name="phno" className="job-input" minlength="10" maxLength="10" placeholder="Enter Phone No." value={phno} onChange={(event) => {
                                    setPhno(event.target.value)
                                }} />
                                {mobValid("Please Enter Vaild Mobile Number")}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="ui checkbox apply_check check_out checked">
                                <input
                                    type="checkbox"
                                    tabindex="0"
                                    className=""
                                    id="tandc"
                                    required
                                />
                                <label
                                    style={{ color: "#242424 !important" }}
                                    htmlFor="tandc"
                                >
                                    I accept the Terms of Services
                                </label>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <input
                                type="submit"
                                className="lr_btn float-none"
                                onClick={(e) => {
                                    validat(e)
                                }}
                                value="Register"
                                style={{ cursor: (validationError === false) ? "not-allowed" : (requiredError === false) ? "not-allowed" : "pointer" }}

                            />
                        </div>
                    </div>
                </form>
            </div>


        </>
    );
}

export default Contact;
