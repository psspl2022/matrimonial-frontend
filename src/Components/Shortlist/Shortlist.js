import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import ProfileSkeleton from "../Dummy Skeleton/ProfileSkeleton";
import Usercard from "../common/Usercard";
import Topcat from "../common/Topcat";
import Upgradebanner from "../common/Upgradebanner";
export default function Shortlist() {
  const [key, setKey] = useState([]);
  const [grid, setGrid] = useState(false);
  const [data, setData] = useState([]);
  const [fetchDone, setFetchDone] = useState(false);
  const [page, setPage] = useState("0");
  const token = window.sessionStorage.getItem("access_token");
  const [CurrentPage, setCurrentPage] = useState(0);
  const headers_data = {
    headers: {
      authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    shortlist();;
    document.title = "Shortlist Profiles";
  }, []);

  function shortlist() {
    axios
      .get(`${window.Url}api/getShortlist`, headers_data)
      .then(({ data }) => {
        setData(data);
        setFetchDone(true);
      });
  }

  return (
    <>
      <main className="browse-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 mainpage mx-auto">
              <Upgradebanner />
              <div className="main-tabs">
                <Topcat setGrid={setGrid} title="Shortlist Profile" />
                <div className="tab-content ">
                  <div className="tab-pane active" id="tab-1">
                    <div className="row view-group " id="products">
                      {
                        data.map((item, index) =>
                          <Usercard
                            item={item}
                            showAllProfiles={shortlist}
                            index={index}
                            name={item.name}
                            page={page}
                            className={`lg-item col-lg-4 col-xs-4 grid-group-item1 ${grid == true ? 'list-group-item1' : ''}`}
                          />

                        )}

                      {data.length == 0 && !fetchDone && (
                        <div className="desired_section">
                          <ProfileSkeleton />
                          <ProfileSkeleton />
                          <ProfileSkeleton />
                        </div>
                      )}

                      <div className="col-12">
                        <div className="main-p-pagination">
                          {data.length > 0 && key.length > 1 && key && (
                            <nav aria-label="Page navigation example">
                              <ul className="pagination">
                                <li className="page-item">
                                  <a
                                    className={
                                      key[0] == key[CurrentPage]
                                        ? "page-link disable_link"
                                        : "page-link"
                                    }
                                    aria-label="Previous"
                                    onClick={(e) => {
                                      key[0] != key[CurrentPage] &&
                                        setPage(key[CurrentPage - 1]);
                                    }}
                                    style={{
                                      cursor:
                                        key[0] == key[CurrentPage]
                                          ? "not-allowed"
                                          : "pointer",
                                    }}
                                  >
                                    PREV
                                  </a>
                                </li>
                                {key.length > 0 &&
                                  key &&
                                  key.map((item, index) => (
                                    <li className="page-item">
                                      <a
                                        style={{
                                          cursor: "pointer",
                                        }}
                                        className={
                                          key[CurrentPage] == item
                                            ? "page-link active"
                                            : "page-link"
                                        }
                                        onClick={(e) => {
                                          setPage(item);
                                        }}
                                      >
                                        {index + 1}
                                      </a>
                                    </li>
                                  ))}
                                <li className="page-item">
                                  <a
                                    className={
                                      key[key.length - 1] ==
                                        key[CurrentPage]
                                        ? "page-link disable_link"
                                        : "page-link"
                                    }
                                    aria-label="Previous"
                                    onClick={(e) => {
                                      key[key.length - 1] !=
                                        key[CurrentPage] &&
                                        setPage(key[CurrentPage + 1]);
                                    }}
                                    style={{
                                      cursor:
                                        key[key.length - 1] ==
                                          key[CurrentPage]
                                          ? "not-allowed"
                                          : "pointer",
                                    }}
                                  >
                                    NEXT
                                  </a>
                                </li>
                              </ul>
                            </nav>
                          )}
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
