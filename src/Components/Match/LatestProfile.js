import SearchFilters from "../SearchFilters";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import ProfileSkeleton from "../Dummy Skeleton/ProfileSkeleton";
import Usercard from "../common/Usercard";
import Upgradebanner from "../common/Upgradebanner";
import { Topcat } from "../common/Topcat";
export default function LatestProfile() {
  const [grid, setGrid] = useState(false);
  const [data, setData] = useState([]);
  const [forFilter, setForFilter] = useState([]);
  const [parfilterData, setParFilterData] = useState([]);
  const [fetchDone, setFetchDone] = useState(false);

  const token = window.sessionStorage.getItem("access_token");
  const headers_data = {
    headers: {
      authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    latestProfile();
    document.title = "Latest Profile";
  }, []);

   useEffect(() => {
    setData(
      forFilter.filter((prof_data) => {
        // console.log(prof_data);
        // console.log(prof_data.marital_status + "=>" + parfilterData[8]);
        // console.log(prof_data.height +">= "+parfilterData[3]);
        const check = (parfilterData[0] != "" ? (Math.floor((Date.now() - new Date(prof_data.dob)) / (31557600000))) >= parfilterData[0] : 1) &&
          (parfilterData[1] != "" ? (Math.floor((Date.now() - new Date(prof_data.dob)) / (31557600000))) <= parfilterData[1] : 1) &&
          (parfilterData[2] != ""
            ? prof_data.height >= parfilterData[2]
            : 1) &&
          (parfilterData[3] != ""
            ? prof_data.height <= parfilterData[3]
            : 1) &&
          (parfilterData[4] != ""
            ? prof_data.get_income.income >= parfilterData[4]
            : 1) &&
          (parfilterData[5] != ""
            ? prof_data.get_income.income <= parfilterData[5]
            : 1) &&
          (parfilterData[6] != ""
            ? parfilterData[6].includes(prof_data.religion)
            : 1) &&
          (parfilterData[7] != ""
            ? parfilterData[7].includes(prof_data.mother_tongue)
            : 1) &&
          (parfilterData[8] != ""
            ? parfilterData[8].includes(prof_data.marital_status)
            : 1);
        // console.log(check);
        if (check) {
          // console.log(prof_data.length);
          // return prof_data.length;
          return prof_data;
        }

      })
    );
  }, [parfilterData]);
  function latestProfile() {
    axios
      .get(`${window.Url}api/latestProfile`, headers_data)
      .then(({ data }) => {
        setData(data);
        setForFilter(data);
        setFetchDone(true);
      });
  }

  return (
    <>
      <main className="browse-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <SearchFilters setParFilterData={setParFilterData} />
            </div>
            <div className="col-lg-8 col-md-7 mainpage">
              <Upgradebanner />
              <div className="main-tabs">
                <Topcat title="Latest Profile" setGrid={setGrid} />
                <div className="tab-content">
                  <div className="tab-pane active" id="tab-1">
                    <div className="row view-group" id="products">
                      {data &&
                        data.map((item, index) => (
                          <Usercard
                            item={item}
                            className={`lg-item col-lg-6 col-xs-4 grid-group-item1 ${grid == true ? "list-group-item1" : ""
                              }`}
                            showAllProfiles={latestProfile}
                            index={index}
                            name={item.name}
                          />
                        ))}

                      {data.length == 0 && !fetchDone && (
                        <div className="desired_section">
                          <ProfileSkeleton />
                          <ProfileSkeleton />
                        </div>
                      )}

                      <div className="col-12">
                        <div className="main-p-pagination">
                          <nav aria-label="Page navigation example"></nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
