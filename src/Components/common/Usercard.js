import React, { memo, Suspense } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { img } from "react-lazy-load-image-component";
export function Usercard(props) {
  const token = window.sessionStorage.getItem("access_token");
  const headers_data = {
    headers: {
      authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  const sendIntrest = (id, page) => {
    const update = {
      id: id,
    };
    axios
      .post(`${window.Url}api/sendIntrest`, update, headers_data)
      .then((response) => {
        if (response.data.hasOwnProperty("succmsg")) {
          props.showAllProfiles(page);
        } else {
        }
      });
  };

  const shortlistProfile = (id, page) => {
    const update = {
      id: id,
    };
    axios
      .post(`${window.Url}api/shortlist`, update, headers_data)
      .then((response) => {
        if (response.data.hasOwnProperty("succmsg")) {
          props.showAllProfiles(page);
        } else {
          //   Swal.fire({
          //       icon: "error",
          //       title: response.data.errmsg,
          //   });
        }
      });
  };

  return (
    <>
      <div
        className={props.className}
        key={props.index}
      >
        <div className="job-item mt-30">
          <NavLink to={`/profileDetail/${props.item["reg_id"]}`}>
            <div
              className="job-top-dt text-right"
              style={{ paddingTop: "3px" }}
            >
              <div className="desired_percent"></div>
              <div className="img-profile text-center">
                {props.item.get_profile_image && (
                  <img
                    src={`${window.Url}Documents/Image_Documents/${props.item.get_profile_image.identity_card_doc}`}
                    alt="user profile image"
                    style={{
                      height: "180px",
                      margin: "0px 10px",
                    }}
                  />
                )}

                {!props.item.get_profile_image && (
                  <img
                    src={
                      props.item.get_user_register.gender == 1
                        ? process.env.PUBLIC_URL + "/male_avatar.png"
                        : process.env.PUBLIC_URL + "/female_avatar.png"
                    }
                    alt="user profile image"
                    style={{
                      height: "180px",
                      margin: "0px 10px",
                    }}
                  />
                )}
              </div>
            </div>
            <div className="job-des-dt">
              <h4>{props.item.name}</h4>
              <div className="job-skills">
                <span>
                  Age:{" "}
                  {Math.floor(
                    (Date.now() - new Date(props.item.dob)) / 31557600000
                  )}{" "}
                  years
                </span>
                <span>Height: {props.item.get_height.height} </span>
                <span>Religion: {props.item.get_religion.religion} </span>
                <span>Caste: {props.item.get_caste.caste} </span>
                <span>
                  Mother Tongue: {props.item.get_mother_tongue.mother_tongue}{" "}
                </span>
                <span>Salary: {props.item.get_income.income} </span>
                <span>
                  Qualification: {props.item.get_education.education}{" "}
                </span>
              </div>
            </div>
          </NavLink>
          <div className="job-buttons">
            <ul className="link-btn">
              <li className="bkd-pm">
                {props.item.get_interest_received &&
                  props.item.get_interest_received.reg_id.includes(
                    props.item["reg_id"]
                  ) && (
                    <button
                      className="bookmark1"
                      style={{
                        color: "#fff",
                        background: "#ee0a4b",
                        cursor: "none",
                      }}
                    >
                      <i className="fas fa-check 2x"></i>
                    </button>
                  )}

                {(props.item.get_interest_received == null ||
                  !props.item.get_interest_received.reg_id.includes(
                    props.item["reg_id"]
                  )) && (
                    <button
                      className="bookmark1"
                      onClick={(e) =>
                        sendIntrest(props.item["reg_id"], props.page)
                      }
                      title="Send Interest"
                    >
                      <i className="fas fa-envelope 2x"></i>
                    </button>
                  )}
              </li>
              <li className="bkd-pm">
                <button className="bookmark1">
                  <i className="fas fa-comment 2x"></i>
                </button>
              </li>
              <li className="bkd-pm">
                {props.item.get_shortlist &&
                  props.item.get_shortlist.saved_reg_id ==
                  props.item["reg_id"] && (
                    <button
                      className="bookmark1"
                      onClick={(e) =>
                        shortlistProfile(props.item["reg_id"], props.page)
                      }
                      style={{
                        color: "#fff",
                        background: "#ee0a4b",
                      }}
                    >
                      <i className="fas fa-star"></i>
                    </button>
                  )}

                {(props.item.get_shortlist == null ||
                  props.item.get_shortlist.saved_reg_id !=
                  props.item["reg_id"]) && (
                    <button className="bookmark1">
                      <i
                        className="fas fa-star"
                        onClick={(e) =>
                          shortlistProfile(props.item["reg_id"], props.page)
                        }
                        title="Searched Profile"
                      ></i>
                    </button>
                  )}
              </li>

              <li className="bkd-pm">
                <button className="bookmark1">
                  <i className="fas fa-heart"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Usercard);