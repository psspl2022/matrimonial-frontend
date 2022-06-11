import { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import Swal from "sweetalert2";

const animatedComponents = makeAnimated();

export default function LikesDetails() {
  const [Edit, setEdit] = useState(false);
  const [hobbies, setHobbies] = useState([]);
  const [interests, setInterests] = useState([]);
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

  const [selectHobby, setSelectHobby] = useState("");
  const [selectInterest, setSelectInterest] = useState("");
  const [selectMusicType, setSelectMusicType] = useState("");
  const [selectBook, setSelectBook] = useState("");
  const [selectdressStyle, setSelectdressStyle] = useState("");
  const [selectmoviesType, setSelectmoviesType] = useState("");
  const [selectsport, setSelectsport] = useState("");
  const [selectcuisine, setSelectcuisine] = useState("");

  const token = window.sessionStorage.getItem("access_token");
  const headers_param = {
    headers: {
      authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const arrayOfValues = (e) => {
    const value = Array.isArray(e) ? e.map((x) => x.value) : [];
    return value;
  };

  const handleHobby = (e) => {
    setSelectHobby(e);
    setHobby(arrayOfValues(e));
  };

  const handleInterest = (e) => {
    setSelectInterest(e);
    setInterest(arrayOfValues(e));
  };

  const handleMusicType = (e) => {
    setSelectMusicType(e);
    setMusicType(arrayOfValues(e));
  };

  const handleBook = (e) => {
    setSelectBook(e);
    setBook(arrayOfValues(e));
  };

  const handleDressStyle = (e) => {
    setSelectdressStyle(e);
    setDressStyle(arrayOfValues(e));
  };

  const handleMoviesType = (e) => {
    setSelectmoviesType(e);
    setMoviesType(arrayOfValues(e));
  };

  const handleSport = (e) => {
    setSelectsport(e);
    setSport(arrayOfValues(e));
  };

  const handleCuisine = (e) => {
    setSelectcuisine(e);
    setCuisine(arrayOfValues(e));
  };

  const handleRead = (e) => {
    setRead(e.target.value);
  };

  const handleTVShow = (e) => {
    setTVShow(e.target.value);
  };

  const handleMovie = (e) => {
    setMovie(e.target.value);
  };

  const handleFood = (e) => {
    setCook(e.target.value);
  };

  const handleVacation = (e) => {
    setVacationDestination(e.target.value);
  };

  useEffect(() => {
    document.title = "Likes Details";
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

  useEffect(() => {
    axios
      .get(`${window.Url}api/showLikesDetails`, headers_param)
      .then(({ data }) => {
        setSelectHobby(
          hobbies.filter((hobby_data) => {
            if (
              data.hobbies.split(",").map(Number).includes(hobby_data.value)
            ) {
              return hobby_data;
            }
          })
        );
        setHobby(data.hobbies);
        setSelectInterest(
          interests.filter((int_data) => {
            if (
              data.interest.split(",").map(Number).includes(int_data.value)
            ) {
              return int_data;
            }
          })
        );
        setInterest(data.interest);
        setSelectMusicType(
          musicTypes.filter((music_data) => {
            if (
              data.music.split(",").map(Number).includes(music_data.value)
            ) {
              return music_data;
            }
          })
        );
        setMusicType(data.music);
        setSelectBook(
          books.filter((book_data) => {
            if (
              data.book.split(",").map(Number).includes(book_data.value)
            ) {
              return book_data;
            }
          })
        );
        setBook(data.book);
        setDressStyle(data.dress)
        setSelectdressStyle(
          dressStyles.filter((dress_data) => {
            if (
              data.dress.split(",").map(Number).includes(dress_data.value)
            ) {
              return dress_data;
            }
          })
        );
        setMoviesType(data.movie_type)
        setSelectmoviesType(
          moviesTypes.filter((movie_data) => {
            if (
              data.movie_type.split(",").map(Number).includes(movie_data.value)
            ) {
              return movie_data;
            }
          })
        );
        setSport(data.sport)
        setSelectsport(
          sports.filter((sport_data) => {
            if (
              data.sport.split(",").map(Number).includes(sport_data.value)
            ) {
              return sport_data;
            }
          })
        );
        setCuisine(data.cuisine)
        setSelectcuisine(
          cuisines.filter((cuisine_data) => {
            if (
              data.cuisine.split(",").map(Number).includes(cuisine_data.value)
            ) {
              return cuisine_data;
            }
          })
        );

        setRead(data.fav_read);
        setTVShow(data.tv_show);
        setMovie(data.movie);
        setCook(data.dish);
        setVacationDestination(data.vacation_destination);

      });
  }, [cuisines]);

  const submitLikesDetails = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("hobbies", hobby);
    formData.append("interest", interest);
    formData.append("music", musicType);
    formData.append("book", book);
    formData.append("read", read);
    formData.append("dress", dressStyle);
    formData.append("tv_show", tvShow);
    formData.append("movie_type", moviesType);
    formData.append("movie", movie);
    formData.append("sport", sport);
    formData.append("cuisine", cuisine);
    formData.append("dish", cook);
    formData.append("vacation_destination", vacationDestination);

    axios
      .post(`${window.Url}api/editLikesDetails`, formData, headers_param)
      .then((response) => {
        if (response.data.hasOwnProperty("msg")) {
          Swal.fire({
            icon: "success",
            title: response.data.msg,
          });
          // history.replace("/desiredProfile");
        } else {
          Swal.fire({
            icon: "error",
            title: response.data.error_msg,
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
              <form onSubmit={submitLikesDetails}>
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
                        value={selectHobby}
                        onChange={handleHobby}
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
                        value={selectInterest}
                        onChange={handleInterest}
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
                        value={selectMusicType}
                        onChange={handleMusicType}
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
                        value={selectBook}
                        onChange={handleBook}
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
                        value={read}
                        onChange={handleRead}
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
                        onChange={handleDressStyle}
                        value={selectdressStyle}
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
                        onChange={handleTVShow}
                        value={tvShow}
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
                        onChange={handleMoviesType}
                        value={selectmoviesType}
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
                        onChange={handleMovie}
                        value={movie}
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
                        onChange={handleSport}
                        value={selectsport}
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
                        onChange={handleCuisine}
                        value={selectcuisine}
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
                        onChange={handleFood}
                        value={cook}
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
                        onChange={handleVacation}
                        value={vacationDestination}
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
