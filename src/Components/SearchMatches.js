
import React from "react";
import { useState, useEffect, Suspense } from "react";
import axios from "axios";
import ProfileSkeleton from "./Dummy Skeleton/ProfileSkeleton";
import { useSelector } from "react-redux";
import { resetSearch } from "../actions/index";
import { useDispatch } from "react-redux";
import Usercard from "./common/Usercard";
import Topcat from "./common/Topcat";
import Showdata from "./common/Showdata";
export default function SearchMatches(props) {
  const search = useSelector((state) => state.changeSearch);
  const [grid, setGrid] = useState(false);
  const [data, setData] = useState([]);
  const [key, setKey] = useState([]);
  const [check, setCheck] = useState(1);
  const [page, setPage] = useState("0");
  const [total, setTotal] = useState();
  const [CurrentPage, setCurrentPage] = useState(0);
  const [searchData, setSearchData] = useState([]);
  const [browseData, setBrowseData] = useState([]);
  const [forFilter, setForFilter] = useState([]);
  const [apiUrl, setapiUrl] = useState();
  const [parfilterData, setParFilterData] = useState([20, 70, 1, 49, 1, 6, "null", "null", "null", "null", "null", "null", "null"]);
  const [fetchDone, setFetchDone] = useState(false);
  const [msg, setMsg] = useState(false);
  const dispatch = useDispatch();
  /////////////////////Secure tokens 
  const token = window.sessionStorage.getItem("access_token");
  const headers_data = {
    headers: {
      authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  // skeleten loading Function
  const loding = () => {
    return (
      <div
        className="desired_section"
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "auto auto",
          columnGap: "20px",
        }}
      >
        <ProfileSkeleton />
        <ProfileSkeleton />
        <ProfileSkeleton />
        <ProfileSkeleton />
      </div>
    );
  };
  ////////////////////////////////////////////////
  /////////Function to fatch Data////////////////
  ////////////////////////////////////////////////
  function showAllProfiles2(page, filter = [20, 70, 1, 49, 1, 6, "null", "null", "null", "null", "null", "null", "null"]) {
    function formatDate(date, year = 0) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear() - year;

      if (month.length < 2)
        month = '0' + month;
      if (day.length < 2)
        day = '0' + day;

      return [year, month, day].join('-');
    }
    const formData = new FormData()
    var d = new Date();
    formData.append('minage', formatDate(d, (filter[0] == "o" ? 20 : filter[0])))
    formData.append('maxage', formatDate(d, (filter[1] == "m" ? 70 : filter[1])))
    formData.append('minheight', filter[2])
    formData.append('maxheight', filter[3])
    formData.append('minincome', filter[4])
    formData.append('maxincome', filter[5])
    formData.append('religion', (filter[6] == "e" ? "null" : filter[6]))
    formData.append('moth', (filter[7] == "p" ? "null" : filter[7]))
    formData.append('martital', filter[8])
    formData.append('caste', filter[9])
    formData.append('occupation', filter[10])
    formData.append('state', filter[11])
    formData.append('city', filter[12])
    if (filter[13]) {
      formData.append('gender', (filter[13] == 'h' ? null : filter[13]))
    }
    else {
      formData.append('gender', null)
    }
    // console.log(filter);
    formData.append('page', page)
    axios
      .post(`${window.Url}api/postBrowseProfile`, formData, headers_data)
      .then(({ data }) => {
        if (data['msg']) {
          setMsg(data['msg']);
        } else {
          setData(data.data);
          setKey(data.key);
          setCurrentPage(data.page);
          setTotal(data.total);
          setForFilter(data.data);
          if (data.data.length > 0) {
            setCheck(1);
          }
          else {
            setCheck(0);
          }
        }
        setFetchDone(true);
      });
  };
  function showAllProfiles(page, filter = [20, 70, 1, 49, 1, 6, "null", "null", "null", "null", "null", "null", "null"]) {
    function formatDate(date, year = 0) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear() - year;

      if (month.length < 2)
        month = '0' + month;
      if (day.length < 2)
        day = '0' + day;

      return [year, month, day].join('-');
    }
    const formData = new FormData()
    var d = new Date();
    formData.append('minage', formatDate(d, (filter[0] == "o" ? 20 : filter[0])))
    formData.append('maxage', formatDate(d, (filter[1] == "m" ? 70 : filter[1])))
    formData.append('minheight', filter[2])
    formData.append('maxheight', filter[3])
    formData.append('minincome', filter[4])
    formData.append('maxincome', filter[5])
    formData.append('religion', (filter[6] == "e" ? "null" : filter[6]))
    formData.append('moth', (filter[7] == "p" ? "null" : filter[7]))
    formData.append('martital', filter[8])
    formData.append('caste', filter[9])
    formData.append('occupation', filter[10])
    formData.append('state', filter[11])
    formData.append('city', filter[12])
    // console.log(filter);
    formData.append('page', page)
    axios
      .post(`${window.Url}api/getAllUserProfiles`, formData, headers_data)
      .then(({ data }) => {
        if (data['msg']) {
          setMsg(data['msg']);
        } else {
          setData(data.data);
          setKey(data.key);
          setCurrentPage(data.page);
          setTotal(data.total);
          setForFilter(data.data);
          if (data.data.length > 0) {
            setCheck(1);
          }
          else {
            setCheck(0);
          }
        }
        setFetchDone(true);
      });
  };

  ////////////////////////////////////////////////
  /////////Browse Profile Section FUnction////////////////
  ////////////////////////////////////////////////
  useEffect(() => {
    // let data = [20, 70, 1, 49, 1, 6, "null", "null", "null"]
    if (props.browse == 'religion') {
      if ((props.browseId != "")) {
        let data = [20, 70, 1, 49, 1, 6, props.browseId, "null", "null", "null", "null", "null"]
        setParFilterData(data);
      }
    }
    if (props.browse == 'mother') {

      if (
        (props.browseId != "")
      ) {
        let data = [20, 70, 1, 49, 1, 6, "null", props.browseId, "null", "null", "null", "null", "null"]
        setParFilterData(data);
      }

    }
    if (props.browse == 'caste') {

      if (
        (props.browseId != "")
      ) {
        let data = [20, 70, 1, 49, 1, 6, "null", "null", "null", props.browseId, "null", "null", "null"]
        setParFilterData(data);
      }

    }
    if (props.browse == 'occupation') {

      if (
        (props.browseId != "")
      ) {
        let data = [20, 70, 1, 49, 1, 6, "null", "null", "null", "null", props.browseId, "null", "null"]
        setParFilterData(data);
      }

    }
    if (props.browse == 'state') {

      if (
        (props.browseId != "")
      ) {
        let data = [20, 70, 1, 49, 1, 6, "null", "null", "null", "null", "null", props.browseId, "null"]
        setParFilterData(data);
      }

    }
    if (props.browse == 'city') {

      if (
        (props.browseId != "")
      ) {
        let data = [20, 70, 1, 49, 1, 6, "null", "null", "null", "null", "null", "null", props.browseId]
        setParFilterData(data);
      }

    }
  }, [props.browseId]);
  ////////////////////////////////////////////////
  /////////Browse Profile Section FUnction End////////////////
  ////////////////////////////////////////////////
  useEffect(() => {
    window.scroll({ top: 200, left: 0, behavior: 'smooth' })
    // setParFilterData([20, 70, 1, 49, 1, 6, "null", "null", "null", "null", "null", "null", "null"]);
    // showAllProfiles(page, parfilterData);
    document.title = "Search Matches";
  }, []);
  // change rerun function on page value change 
  useEffect(() => {

    setFetchDone(false);
    window.scroll({ top: 200, left: 0, behavior: 'smooth' })
    if (token) {
      showAllProfiles(page, parfilterData);
      console.log(parfilterData);
    }
    else {
      showAllProfiles2(page, parfilterData);
      console.log(parfilterData);
    }
    setFetchDone(true);
  }, [page, parfilterData]);
  useEffect(() => {
    setPage(0);
  }, [parfilterData]);

  useEffect(() => {
    parfilterData[0] = search[1] ? search[1] : parfilterData[0];
    parfilterData[1] = search[2] ? search[2] : parfilterData[1];
    parfilterData[6] = search[3] ? search[3] : parfilterData[6];
    parfilterData[7] = search[4] ? search[4] : parfilterData[7];
    parfilterData[13] = search[0] ? search[0] : "null";
    setParFilterData(parfilterData);
    // console.log(parfilterData)
  }, [search]);


  return (
    <>
      {!token && (
        <>
          <Showdata browse={true} link={false} msg={msg} title="Find Match" filter={parfilterData} className={`lg-item col-lg-4 col-xs-4 grid-group-item1 ${grid == true ? 'list-group-item1' : ''}`} data={data} setParFilterData={showAllProfiles2} total={total} setPage={setPage} page={page} CurrentPage={CurrentPage} showAllProfiles={showAllProfiles} setGrid={setGrid} key1={key} check={check} />
        </>
      )}

      {token && (

        <Showdata link={true} msg={msg} title="Find Match" filter={parfilterData} className={`lg-item col-lg-6 col-xs-6 grid-group-item1 ${grid == true ? "list-group-item1" : ""
          }`} data={data} setParFilterData={setParFilterData} total={total} setPage={setPage} page={page} CurrentPage={CurrentPage} showAllProfiles={showAllProfiles} setGrid={setGrid} key1={key} check={check} />
      )}
    </>
  );
}
