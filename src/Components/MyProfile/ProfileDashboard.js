import { useEffect,useState } from "react";
import axios from "axios";

function ProfileDashboard() {
  const token = window.sessionStorage.getItem("access_token");
  const [userData, setUserData] = useState({});
  const [data, setData] = useState({});

  const headers_param = {
    headers: {
      authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    if (sessionStorage.hasOwnProperty("user_data")) {
      const user_data = window.sessionStorage.getItem("user_data");
      setUserData(JSON.parse(user_data));
      document.title = "Profile Dashboard";
      profileDashboard();
    }
  }, []);

  const profileDashboard = () => {
    axios
      .get(`${window.Url}api/profileDashboard`, headers_param)
      .then((response) => {
        setData(response.data);
      });
  };

  return (
    <>
      <div className="total_1254">
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="collection_item">
              <div className="coll_icon">
                <i className="fas fa-suitcase col_icon1"></i>
              </div>
              <h4>Profile View Left</h4>
              <span>10</span>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="collection_item">
              <div className="coll_icon">
                <i className="fas fa-bullseye col_icon2"></i>
              </div>
              <h4>Shortlist View Left</h4>
              <span>{data['creditDetail']  && data['creditDetail'].shortlist_count}</span>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="collection_item">
              <div className="coll_icon">
                <i className="fas fa-heart col_icon3"></i>
              </div>
              <h4>Your Favourites</h4>
              <span>20</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="view_chart">
        <div className="view_chart_header">
          <h4 className="mt-2">Your Profile View</h4>
          <div className="date_selector">
            <div className="ui selection dropdown skills-search vchrt-dropdown">
              <input name="gender" type="hidden" value="default" />
              <i className="dropdown icon d-icon"></i>
              <div className="text">Last 6 Months</div>
              <div className="menu">
                <div className="item" data-value="0">
                  Last 6 Months
                </div>
                <div className="item" data-value="1">
                  This Year
                </div>
                <div className="item" data-value="2">
                  This Month
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="view_chart_body">
          <canvas
            id="chart"
            width="890"
            height="300"
            className="chartjs-render-monitor"
          ></canvas>
        </div>
      </div> */}
      <div className="dsh150">
        <div className="row">
          <div className="col-lg-6">
            <div className="view_chart">
              <div className="view_chart_header">
                <h4>Static Analytics</h4>
              </div>
              <div className="view_chart_body">
                <div className="pie_chart_view">
                  {/* <canvas
                    id="pieChart"
                    width="607"
                    height="303"
                    className="chartjs-render-monitor"
                  ></canvas> */}
                </div>
                <ul className="static_list">
                  <li>
                    <div className="static_items">
                      <div className="static_left">
                        <div
                          className="color_box"
                          style={{ backgroundColor: "#ff4500" }}
                        ></div>
                        <h6>Interest Sent</h6>
                      </div>
                      <div className="static_right">
                        <span>{data.SendInterest}</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="static_items">
                      <div className="static_left">
                        <div
                          className="color_box"
                          style={{ backgroundColor: "#49d086" }}
                        ></div>
                        <h6>Interest Received</h6>
                      </div>
                      <div className="static_right">
                        <span>{data.ReceiveInterest}</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="static_items">
                      <div className="static_left">
                        <div
                          className="color_box"
                          style={{ backgroundColor: "#b81b7f" }}
                        ></div>
                        <h6>Shortlisted</h6>
                      </div>
                      <div className="static_right">
                        <span>{ data.shortlist}</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="static_items">
                      <div className="static_left">
                        <div
                          className="color_box"
                          style={{ backgroundColor: "#efa80f" }}
                        ></div>
                        <h6>Profile Visited</h6>
                      </div>
                      <div className="static_right">
                        <span>20</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-6">
            <div className="view_chart">
              <div className="view_chart_header">
                <h4>Notes</h4>
              </div>
              <div className="view_chart_body">
                <ul className="all_notes scrollstyle_4">
                  <li>
                    <div className="note_item">
                      <div className="note_left">
                        <div className="priorty">High Priorty</div>
                      </div>
                      <div className="note_right">
                        <button className="note_btn">
                          <i className="far fa-edit"></i>
                        </button>
                        <button className="note_btn">
                          <i className="far fa-trash-alt"></i>
                        </button>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc quis accumsan mi.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="note_item">
                      <div className="note_left">
                        <div className="priorty priorty_low">Low Priorty</div>
                      </div>
                      <div className="note_right">
                        <button className="note_btn">
                          <i className="far fa-edit"></i>
                        </button>
                        <button className="note_btn">
                          <i className="far fa-trash-alt"></i>
                        </button>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc quis accumsan mi.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="note_item">
                      <div className="note_left">
                        <div className="priorty">High Priorty</div>
                      </div>
                      <div className="note_right">
                        <button className="note_btn">
                          <i className="far fa-edit"></i>
                        </button>
                        <button className="note_btn">
                          <i className="far fa-trash-alt"></i>
                        </button>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc quis accumsan mi.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="note_item">
                      <div className="note_left">
                        <div className="priorty priorty_medium">
                          Medium Priorty
                        </div>
                      </div>
                      <div className="note_right">
                        <button className="note_btn">
                          <i className="far fa-edit"></i>
                        </button>
                        <button className="note_btn">
                          <i className="far fa-trash-alt"></i>
                        </button>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc quis accumsan mi.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="add_note">
                <button
                  className="add_note_btn"
                  type="button"
                  data-toggle="modal"
                  data-target="#addnoteModal"
                >
                  Add Note
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="dsh150">
        <div className="row">
          {/* <div className="col-lg-7">
            <div className="view_chart">
              <div className="view_chart_header">
                <h4>Applied Jobs</h4>
              </div>
              <div className="view_applied_jobs_body">
                <ul className="all_applied_jobs scrollstyle_4">
                  <li>
                    <div className="applied_item">
                      <a href="#">Wordpress Developer</a>
                      <ul className="view_dt_job">
                        <li>
                          <div className="vw1254">
                            <i className="fas fa-map-marker-alt"></i>
                            Australia
                          </div>
                        </li>
                        <li>
                          <div className="vw1254">
                            <i className="fas fa-briefcase"></i>Full Time
                          </div>
                        </li>
                        <li>
                          <div className="vw1254">
                            <i className="far fa-money-bill-alt"></i>$599 -
                            Manual
                          </div>
                        </li>
                        <li>
                          <div className="vw1254">
                            <i className="far fa-clock"></i>1 day ago
                          </div>
                        </li>
                      </ul>
                      <div className="btn_link23">
                        <button className="apled_btn50">Applied</button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="applied_item">
                      <a href="#">Front End Developer</a>
                      <ul className="view_dt_job">
                        <li>
                          <div className="vw1254">
                            <i className="fas fa-map-marker-alt"></i>
                            Australia
                          </div>
                        </li>
                        <li>
                          <div className="vw1254">
                            <i className="fas fa-briefcase"></i>Part Time
                          </div>
                        </li>
                        <li>
                          <div className="vw1254">
                            <i className="far fa-money-bill-alt"></i>$50 / hr
                          </div>
                        </li>
                        <li>
                          <div className="vw1254">
                            <i className="far fa-clock"></i>2 day ago
                          </div>
                        </li>
                      </ul>
                      <div className="btn_link23">
                        <button className="apled_btn50">Applied</button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="applied_item">
                      <a href="#">Back End Developer</a>
                      <ul className="view_dt_job">
                        <li>
                          <div className="vw1254">
                            <i className="fas fa-map-marker-alt"></i>India
                          </div>
                        </li>
                        <li>
                          <div className="vw1254">
                            <i className="fas fa-briefcase"></i>Full Time
                          </div>
                        </li>
                        <li>
                          <div className="vw1254">
                            <i className="far fa-money-bill-alt"></i>$1200 -
                            Fixed
                          </div>
                        </li>
                        <li>
                          <div className="vw1254">
                            <i className="far fa-clock"></i>4 day ago
                          </div>
                        </li>
                      </ul>
                      <div className="btn_link23">
                        <button className="apled_btn50">Applied</button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="applied_item">
                      <a href="#">Wordpress Developer</a>
                      <ul className="view_dt_job">
                        <li>
                          <div className="vw1254">
                            <i className="fas fa-map-marker-alt"></i>
                            Australia
                          </div>
                        </li>
                        <li>
                          <div className="vw1254">
                            <i className="fas fa-briefcase"></i>Full Time
                          </div>
                        </li>
                        <li>
                          <div className="vw1254">
                            <i className="far fa-money-bill-alt"></i>$700 -
                            Manual
                          </div>
                        </li>
                        <li>
                          <div className="vw1254">
                            <i className="far fa-clock"></i>5 day ago
                          </div>
                        </li>
                      </ul>
                      <div className="btn_link23">
                        <button className="apled_btn50">Applied</button>
                      </div>
                    </div>
                  </li>
                </ul>
                <a href="#" className="btn-veiw10">
                  View All
                </a>
              </div>
            </div>
          </div> */}
          {/* <div className="col-lg-5">
            <div className="view_chart">
              <div className="view_chart_header">
                <h4>Membership Order Plans Summery</h4>
              </div>
              <div className="view_applied_jobs_body">
                <ul className="all_paid_plans scrollstyle_4">
                  <li>
                    <div className="plan_dts">
                      <div className="plan_dt_left">
                        <h4>Gold Plans</h4>
                        <p>Order No : #12345</p>
                        <p>Date : 10 March 2022</p>
                      </div>
                      <div className="plan_dt_right">
                        <button className="paid_btn">Paid</button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="plan_dts">
                      <div className="plan_dt_left">
                        <h4>Silver Plans</h4>
                        <p>Order No : #12358</p>
                        <p>Date : 10 February 2022</p>
                      </div>
                      <div className="plan_dt_right">
                        <button className="paid_btn">Paid</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default ProfileDashboard;
