import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function AboutMe() {
  const [Edit, setEdit] = useState(false);
  const [aboutYourself, setAboutYourself] = useState("");
  const [aboutFamily, setAboutFamily] = useState("");
  const [aboutEducation, setAboutEducation] = useState("");

  const token = window.sessionStorage.getItem("access_token");
  const headers_param = {
    headers: {
      authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  useEffect(async () => {
    const user = JSON.parse(window.sessionStorage.getItem("user_data")).user_reg_id;
    await axios
      .get(`${window.Url}api/showAbout`, headers_param)
      .then(({ data }) => {
        setAboutYourself(data.yourself.description);
        setAboutFamily(data.family.about_family);
        setAboutEducation(data.career.express_yourself);
      });
      document.title = "About Me";
  }, []);

  const submitAboutMeDetails = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("yourself", aboutYourself);
    formData.append("family", aboutFamily);
    formData.append("career", aboutEducation);

    await axios
      .post(`${window.Url}api/EditAbout`, formData, headers_param)
      .then(({ data }) => {
        if (data.hasOwnProperty("msg")) {
          Swal.fire({
            icon: "success",
            text: data.msg,
          });
        } else {
          Swal.fire({
            icon: "error",
            text: data.msg,
          });
        }
      });
  };

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
                <h2>About Me </h2>
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
              <form onSubmit={submitAboutMeDetails}>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <label className="label15">Describe Yourself</label>
                      <textarea
                        className="w-100 p-2"
                        rows={7}
                        disabled={Edit == false ? "disabled" : ""}
                        placeholder="Write something about yourself"
                        value={aboutYourself}
                        onChange={(e) => {
                          setAboutYourself(e.target.value);
                        }}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label className="label15">About My Family</label>
                      <textarea
                        className="w-100 p-2"
                        rows={7}
                        placeholder="Write About Your Family"
                        disabled={Edit == false ? "disabled" : ""}
                        value={aboutFamily}
                        onChange={(e) => {
                          setAboutFamily(e.target.value);
                        }}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label className="label15">
                        About My Education & Career
                      </label>
                      <textarea
                        className="w-100 p-2"
                        rows={7}
                        placeholder="Write About Your Education"
                        disabled={Edit == false ? "disabled" : ""}
                        value={aboutEducation}
                        onChange={(e) => {
                          setAboutEducation(e.target.value);
                        }}
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <input
                      type="submit"
                      className="post_jp_btn"
                      value="SAVE CHANGES"
                    />
                    {/* <button className="post_jp_btn" type="submit">SAVE CHANGES</button> */}
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
