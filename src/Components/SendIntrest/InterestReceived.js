import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Topcat from "../common/Topcat";
import Datacontainer from "../common/Datacontainer";


export default function IntrestReceived() {
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

  const close = () => {
    setTimeout(() => {
      Swal.close();
    }, 2000);
  };

  useEffect(() => {
    showIntrestRecieved();
  }, []);

  function showIntrestRecieved() {
    const formData = new FormData();
    formData.append('page', page);
    axios
      .post(`${window.Url}api/interestReceived`, formData, headers_data)
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

  const interestRevert = (id, revert) => {
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
          showIntrestRecieved();
        } else {
          Swal.fire({
            icon: "error",
            title: response.data.errmsg,
          });
          close();
        }
      });
  };

  return (
    <>
      <main class="browse-section" style={{ padding: "0px" }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 mainpage mx-auto">
              <div className="main-tabs">
                <Topcat title="Intrest Receive" setGrid={setGrid} />
                <Datacontainer accept={true} msg={msg} className={`lg-item col-lg-4 col-xs-4 grid-group-item1 ${grid === true ? 'list-group-item1' : ''}`} data={data} key1={key} check={check} showAllProfiles={showIntrestRecieved} page={page} grid={grid} CurrentPage={CurrentPage} total={total} setPage={setPage} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
