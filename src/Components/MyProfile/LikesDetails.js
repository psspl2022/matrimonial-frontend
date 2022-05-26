import { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import Swal from "sweetalert2";

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

  const [Edit, setEdit] = useState(true);
  const [hobbies, setHobbies] = useState([]);
  const [interests, setInterests] = useState({});
  const [musicTypes, setMusicTypes] = useState([]);
  const [books, setBooks] = useState([]);
  const [dressStyles, setDressStyles] = useState({});
  const [moviesTypes, setMoviesTypes] = useState([]);
  const [sports, setSports] = useState([]);
  const [cuisines, setCuisines] = useState([]);

  const [hobby, setHobby] = useState("");
  const [interest, setInterest] = useState("");
  const [musicType, setMusicType] = useState("");
  const [book, setBook] = useState("");
  const [read, setRead] = useState("");
  const [dressStyle, setDressStyle] = useState("");
  const [tvShow, setTVShow] = useState("");
  const [moviesType, setMoviesType] = useState("");
  const [movie, setMovie] = useState("");
  const [sport, setSport] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [cook, setCook] = useState("");
  const [vacationDestination, setVacationDestination] = useState("");

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
      .get(`${window.Url}api/likesDropdown`, headers_param)
      .then(({ data }) => {
        setHobbies(
          data.hobbies.map(function (hobby_data) {
            return { value: hobby_data.id, label: hobby_data.hobby };
          })
        );

        setInterests(
          data.interests.map(function (int_data) {
            return { value: int_data.id, label: int_data.interest };
          })
        );

        setMusicTypes(
          data.musicTypes.map(function (music_data) {
            return { value: music_data.id, label: music_data.music_type };
          })
        );
        setBooks(
          data.books.map(function (book_data) {
            return { value: book_data.id, label: book_data.book_type };
          })
        );

        setDressStyles(
          data.dressStyles.map(function (dress_data) {
            return { value: dress_data.id, label: dress_data.dress_style };
          })
        );

        setMoviesTypes(
          data.moviesTypes.map(function (movie_data) {
            return { value: movie_data.id, label: movie_data.movietype };
          })
        );

        setSports(
          data.sports.map(function (sport_data) {
            return { value: sport_data.id, label: sport_data.sport_name };
          })
        );

        setCuisines(
          data.cuisines.map(function (cuisine_data) {
            return { value: cuisine_data.id, label: cuisine_data.name };
          })
        );
      });
  }, []);

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
                        options={hobbies}
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
                        options={interests}
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
                        options={musicTypes}
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
                        options={books}
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
                        options={dressStyles}
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
                        options={moviesTypes}
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
                        options={sports}
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
                        options={cuisines}
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
