import React, { memo } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
export function Usercard(props) {
  const token = window.sessionStorage.getItem("access_token");
  const headers_data = {
    headers: {
      authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  const sendIntrest = (id, page, filter) => {
    const update = {
      id: id,
    };
    axios
      .post(`${window.Url}api/sendIntrest`, update, headers_data)
      .then((response) => {
        props.showAllProfiles(page, filter);
      });
  };
  const close = () => {
    setTimeout(() => {
      Swal.close();
    }, 2000);
  };
  const interestRevert = (id, revert, page, filter) => {
    const update = {
      id: id,
      revert: revert,
    };
    axios
      .post(`${window.Url}api/interestRevert`, update, headers_data)
      .then((response) => {
        if (response.data.hasOwnProperty("succmsg")) {
          Swal.fire({
            icon: "success",
            title: response.data.succmsg,
          });
          close();
          props.showAllProfiles(page, filter);
        } else {
          Swal.fire({
            icon: "error",
            title: response.data.errmsg,
          });
          props.showAllProfiles(page, filter);
        }
      });
  };
  const shortlistProfile = (id, page, filter) => {
    const update = {
      id: id,
    };
    axios
      .post(`${window.Url}api/shortlist`, update, headers_data)
      .then((response) => {
        props.showAllProfiles(page, filter);
      });
  };

  return (
    <>
      <div
        className={props.className}
        key={props.index}
      >
        <div className="job-item mt-30">
          <NavLink to={{
            pathname: `/profileDetail/${props.item["reg_id"]}`,
            myProps: {
              hello: "Hello World"
            }
          }}>
            <div
              className="job-top-dt text-right"
              style={{ paddingTop: "3px" }}
            >
              {props.item.percentage && <div className="desired_percent">
                <span
                  stye={{
                    padding: "3px 8px",
                    marginTop: "-4px",
                    marginRight: "-4px",
                    fontSize: "12px",
                  }}
                  className={`${props.item.percentage <= 40 && "yellow"} ${props.item.percentage <= 90 && "green"
                    } ${props.item.percentage > 90 && "pink"}`}
                >
                  {props.item.percentage}% Matched
                </span>
              </div>}
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

                <span>
                  Mother Tongue: {props.item.get_mother_tongue.mother_tongue}{" "}
                </span>
                <span>Salary: {props.item.get_income.income.replace(" Lakh", "") - 5} -{props.item.get_income.income} </span>
                <span>
                  Qualification: {props.item.get_education.education}{" "}
                </span>
              </div>
            </div>
          </NavLink>
          {props.link && <div className="job-buttons">
            <ul className="link-btn d-flex justify-content-around">
              <li className="bkd-pm">
                {props.item.get_interest_sent != null
                  && 
                 props.item.get_interest_sent.revert == "0"  &&
                    (<button
                      className="bookmark1"
                      style={{
                        color: "#fff",
                        background: "#ee0a4b",
                        cursor: "not-allowed",
                      }}
                    >
                      <i className="fas fa-check 2x"></i>
                    </button>)
                 }

                  {props.item.get_interest_sent != null
                  && props.item.get_interest_sent.revert == "1"  && (<button
                    className="bookmark1"
                    style={{
                      color: "#fff",
                      background: "#ee0a4b",
                      cursor: "not-allowed",
                    }}
                  >
                    <i class="fas fa-smile 2x"></i>
                  </button>)
                  }

                {props.item.get_interest_sent != null
                  && props.item.get_interest_sent.revert == "2"  && (<button
                    className="bookmark1"
                    style={{
                      color: "#fff",
                      background: "#ee0a4b",
                      cursor: "not-allowed",
                    }}
                  >
                    <i class="fas fa-frown 2x"></i>
                  </button>)
                  }


                {(props.item.get_interest_sent == null
                ) && (
                    <button
                      className="bookmark1"
                      onClick={(e) =>
                        sendIntrest(props.item["reg_id"], props.page, props.filter)
                      }
                      data-title="Send Interest"
                    >
                      <i className="fas fa-envelope 2x"></i>
                    </button>
                  )}
              </li>
              {/* <li className="bkd-pm">
                <button className="bookmark1">
                  <i className="fas fa-comment 2x"></i>
                </button>
              </li> */}
              <li className="bkd-pm">
                {props.item.get_shortlist &&
                  props.item.get_shortlist.saved_reg_id ==
                  props.item["reg_id"] && (
                    <button
                      className="bookmark1"
                      onClick={(e) =>
                        shortlistProfile(props.item["reg_id"], props.page, props.filter)
                      }
                      style={{
                        color: "#fff",
                        background: "#ee0a4b",
                      }}
                      data-title="Unshort Profile"
                    >
                      <i className="fas fa-star"></i>
                    </button>
                  )}

                {(props.item.get_shortlist == null ||
                  props.item.get_shortlist.saved_reg_id !=
                  props.item["reg_id"]) && (
                    <button className="bookmark1"
                                              onClick={(e) =>
                          shortlistProfile(props.item["reg_id"], props.page, props.filter)
                        }
                        data-title="Short Profile"
                        >
                      <i
                        className="fas fa-star"
                      ></i>
                    </button>
                  )}
              </li>
            </ul>
          </div>}
          {props.accept &&
            <div className="job-buttons">
              <ul className="link-btn d-flex">
                <li
                  style={{
                    width: "44%",
                    borderRight: "2px solid #fff",
                    margin: "0 10px",
                  }}
                >
                  <button
                    className="btn btn-md accept-link py-2"
                    style={{
                      borderRadius: "20px",
                      fontWeight: "700",
                    }}
                    onClick={(e) =>
                      interestRevert(props.item.reg_id, "1", props.page, props.filter)
                    }
                    data-title="Accept"
                  >
                    Accept
                  </button>
                </li>
                <li style={{ width: "44%", margin: "0 10px" }}>
                  <button
                    className=" btn btn-md reject-link py-2"
                    style={{
                      borderRadius: "20px",
                      fontWeight: "700",
                    }}
                    onClick={(e) =>
                      interestRevert(props.item.reg_id, "2", props.page, props.filter)
                    }
                    data-title="Reject"
                  >
                    Reject
                  </button>
                </li>


              </ul>
            </div>}

        </div>
      </div>
    </>
  );
}

export default memo(Usercard);
