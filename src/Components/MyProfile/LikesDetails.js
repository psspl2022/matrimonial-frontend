import { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

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

export default function LifeStyleDetails() {
  const [Edit, setEdit] = useState(false);
  

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
                <h2>Your Likes </h2>
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
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Hobbies</label>
                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        defaultValue=""
                        isMulti
                        placeholder="Select Your Hobbies"
                        options={heightOptions}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Interests</label>
                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        defaultValue=""
                        isMulti
                        placeholder="Select Your Interests"
                        options={heightOptions}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Favourite Music Type</label>
                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        defaultValue=""
                        isMulti
                        placeholder="Select Your Favourite Music Type"
                        options={heightOptions}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Favourite Book</label>
                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        defaultValue=""
                        isMulti
                        placeholder="Select Favourite Book"
                        options={heightOptions}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Favourite Read</label>
                      <input
                        type="text"
                        className="job-input"
                        placeholder="Enter Favourite Read"
                        disabled={Edit == false ? "disabled" : ""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Dress Style</label>
                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        defaultValue=""
                        isMulti
                        placeholder="Select Dress Style"
                        options={heightOptions}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">TV Shows</label>
                      <input
                        type="text"
                        className="job-input"
                        placeholder="Enter TV Shows"
                        disabled={Edit == false ? "disabled" : ""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Favourite Movies</label>
                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        defaultValue=""
                        isMulti
                        placeholder="Select Favourite Movies"
                        options={heightOptions}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Movies</label>
                      <input
                        type="text"
                        className="job-input"
                        placeholder="Enter Movies"
                        disabled={Edit == false ? "disabled" : ""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Sports</label>
                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        defaultValue=""
                        isMulti
                        placeholder="Select Languages"
                        options={heightOptions}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Cuisine</label>
                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        defaultValue=""
                        isMulti
                        placeholder="Select Your Hobbies"
                        options={heightOptions}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Food I Cook</label>
                      <input
                        type="text"
                        className="job-input"
                        placeholder="Enter Food I Cook"
                        disabled={Edit == false ? "disabled" : ""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Vacation Destination</label>
                      <input
                        type="text"
                        className="job-input"
                        placeholder="Enter Vacation Destination"
                        disabled={Edit == false ? "disabled" : ""}
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
