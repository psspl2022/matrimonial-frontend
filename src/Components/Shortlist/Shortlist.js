import { useState, useEffect } from "react";
import axios from "axios";
import Topcat from "../common/Topcat";
import Upgradebanner from "../common/Upgradebanner";
import Datacontainer from "../common/Datacontainer";
export default function Shortlist() {
  const [grid, setGrid] = useState(false);
  const [data, setData] = useState([]);
  const [key, setKey] = useState([]);
  const [check, setCheck] = useState(1);
  const [page, setPage] = useState("0");
  const [total, setTotal] = useState();
  const [CurrentPage, setCurrentPage] = useState(0);
  const [fetchDone, setFetchDone] = useState(false);
  const [msg, setMsg] = useState(false);
  const token = window.sessionStorage.getItem("access_token");
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
  useEffect(() => {
    window.scroll({ top: 200, left: 0, behavior: 'smooth' });
    shortlist();
    document.title = "Shortlist Profiles";
  }, [page]);

  function shortlist() {
    const formData = new FormData();
    formData.append('page', page);
    axios
      .post(`${window.Url}api/getShortlist`, formData, headers_data)
      .then(({ data }) => {
        if (data['msg']) {
          setMsg(data['msg']);
        } else {
          setData(data.data);
          setKey(data.key);
          setCurrentPage(data.page);
          setTotal(data.total);
          if (data.data.length > 0) {
            setCheck(1);
          }
          else {
            setCheck(0);
          }
        }
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
                <Topcat title="Shortlisted Profile" setGrid={setGrid} />
                <Datacontainer link={true} msg={msg} className={`lg-item col-lg-4 col-xs-4 grid-group-item1 ${grid === true ? 'list-group-item1' : ''}`} data={data} key1={key} check={check} showAllProfiles={shortlist} page={page} grid={grid} CurrentPage={CurrentPage} total={total} setPage={setPage} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
