import { useState } from "react";
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
                <h2>Lifestyle Details </h2>
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
                      <label className="label15">Dietary Habits</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={maritalOptions[0]}
                        isClearable
                        isSearchable
                        name="height"
                        placeholder="Select Your Dietary Habits"
                        options={maritalOptions}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Drinking Habits</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={maritalOptions[0]}
                        isClearable
                        isSearchable
                        name="ug_deg"
                        placeholder="Select Your Drinking Habits"
                        options={maritalOptions}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Smoking Habits</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={maritalOptions[0]}
                        isClearable
                        isSearchable
                        name="pg_deg"
                        placeholder="Select Your Smoking Habits"
                        options={maritalOptions}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Open to Pets?</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={maritalOptions[0]}
                        isClearable
                        isSearchable
                        name="height"
                        placeholder="Select Option"
                        options={maritalOptions}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Own a House?</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={maritalOptions[0]}
                        isClearable
                        isSearchable
                        name="height"
                        placeholder="Select Option"
                        options={maritalOptions}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Own a Car?</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={heightOptions[0]}
                        isClearable
                        isSearchable
                        name="height"
                        placeholder="Select Option"
                        options={heightOptions}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                  <div className="form-group">
                      <label className="label15">Languages I Speak</label>
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
                      <label className="label15">Blood Group</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={maritalOptions[0]}
                        isClearable
                        isSearchable
                        name="ug_deg"
                        placeholder="Select Your Blood Group"
                        options={maritalOptions}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">HIV+?</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={maritalOptions[0]}
                        isClearable
                        isSearchable
                        name="pg_deg"
                        placeholder="Select Option"
                        options={maritalOptions}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Thalassemia</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={maritalOptions[0]}
                        isClearable
                        isSearchable
                        name="height"
                        placeholder="Select Option"
                        options={maritalOptions}
                        isDisabled={!Edit}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="label15">Challenged</label>
                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        defaultValue={maritalOptions[0]}
                        isClearable
                        isSearchable
                        name="height"
                        placeholder="Select Option"
                        options={maritalOptions}
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
