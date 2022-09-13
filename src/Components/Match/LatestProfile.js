import React from "react";
import { useState, useEffect, Suspense } from "react";
import axios from "axios";
import ProfileSkeleton from "../Dummy Skeleton/ProfileSkeleton";
import { useSelector } from "react-redux";
import { resetSearch } from "../../actions/index";
import { useDispatch } from "react-redux";
import Showdata from "../common/Showdata";
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
  const [forFilter, setForFilter] = useState([]);
  const [parfilterData, setParFilterData] = useState([20, 70, 1, 49, 1, 6, "null", "null", "null"]);
  const [fetchDone, setFetchDone] = useState(false);
  const dispatch = useDispatch();
  const [msg, setMsg] = useState(false);
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
  function showAllProfiles(page, filter) {
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
    formData.append('minage', formatDate(d, filter[0]))
    formData.append('maxage', formatDate(d, filter[1]))
    formData.append('minheight', filter[2])
    formData.append('maxheight', filter[3])
    formData.append('minincome', filter[4])
    formData.append('maxincome', filter[5])
    formData.append('religion', filter[6])
    formData.append('moth', filter[7])
    formData.append('martital', filter[8])
    formData.append('page', page)
    axios
      .post(`${window.Url}api/latestProfile`, formData, headers_data)
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
  /////////Browse Profile Section FUnction End////////////////
  ////////////////////////////////////////////////
  useEffect(() => {
    window.scrollTo(10, 0);
    // showAllProfiles(page, parfilterData);
    document.title = "Latest Match";
  }, []);
  // change rerun function on page value change 
  useEffect(() => {
    setFetchDone(false);
    window.scroll({ top: 200, left: 0, behavior: 'smooth' })
    showAllProfiles(page, parfilterData);
    setFetchDone(true);
  }, [page, parfilterData]);
  useEffect(() => {
    setPage(0);
  }, [parfilterData]);

  useEffect(() => {
    const formData = new FormData()
    formData.append('gender', search[0])
    formData.append('min_age', search[1])
    formData.append('max_age', search[2])
    formData.append('religion', search[3])
    formData.append('mother', search[4])

    setData(
      forFilter.filter((prof_data) => {
        if (
          (search[1] != undefined ? (Math.floor((Date.now() - new Date(prof_data.dob)) / (31557600000))) >= search[1] : 1) &&
          (search[2] != undefined ? (Math.floor((Date.now() - new Date(prof_data.dob)) / (31557600000))) <= search[2] : 1) &&
          (search[0] != undefined
            ? (search[0] == prof_data.get_user_register.gender)
            : 1) &&
          (search[3] != undefined
            ? (search[3] == prof_data.religion)
            : 1) &&
          (search[4] != undefined
            ? (search[4] == prof_data.mother_tongue)
            : 1)
        ) {
          return prof_data;
        }
      })
    );

    axios
      .post(`${window.Url}api/letestProfile`, formData)
      .then(({ data }) => {
        setSearchData(data);
        setFetchDone(true);
        window.setTimeout(() => {
          dispatch(resetSearch())
        }, 5000);
      });
  }, [forFilter]);

  return (
    <>
      {token && (
        <Showdata link={true} title="Latest Match" msg={msg} filter={parfilterData} className={`lg-item col-lg-6 col-xs-6 grid-group-item1 ${grid == true ? "list-group-item1" : ""
          }`} data={data} setParFilterData={setParFilterData} total={total} setPage={setPage} page={page} CurrentPage={CurrentPage} showAllProfiles={showAllProfiles} setGrid={setGrid} key1={key} check={check} />
      )}
    </>
  );
}
