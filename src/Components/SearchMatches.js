import SearchFilters from "./SearchFilters";
import SearchResult from "./SearchResult";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SearchMatches() {
    
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
      setData(
        forFilter.filter((prof_data) => {
          if (
            (parfilterData[0] != "" ? prof_data[1] >= parfilterData[0] : 1) &&
            (parfilterData[1] != "" ? prof_data[1] <= parfilterData[1] : 1) &&
            (parfilterData[2] != ""
              ? prof_data[2].height >= parfilterData[2]
              : 1) &&
            (parfilterData[3] != ""
              ? prof_data[2].height <= parfilterData[3]
              : 1) &&
            (parfilterData[4] != ""
              ? prof_data[3].income >= parfilterData[4]
              : 1) &&
            (parfilterData[5] != ""
              ? prof_data[3].income <= parfilterData[5]
              : 1) &&
            (parfilterData[6] != ""
              ? parfilterData[6].includes(prof_data[2].religion)
              : 1) &&
            (parfilterData[7] != ""
              ? parfilterData[7].includes(prof_data[2].mother_tongue)
              : 1) &&
            (parfilterData[8] != ""
              ? parfilterData[8].includes(prof_data[2].maritial_status)
              : 1)
          ) {
            return prof_data;
          }
        })
      );
    }, [parfilterData]);
  
    function showAllProfiles() {
      axios
        .get(`${window.Url}api/getAllUserProfiles`, headers_data)
        .then(({ data }) => {
          setData(data);
          setForFilter(data);
          setFetchDone(true);
        });
    }

  useEffect(() => {
    window.scrollTo(0, 0);
    showAllProfiles();
    document.title = "Search Matches";
  }, []);


    return (
        <>
            <main className="browse-section">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-lg-4 col-md-5">
                            <SearchFilters setParFilterData={setParFilterData}/>
                        </div>
                        <div className="col-lg-8 col-md-7 mainpage"> */}
                            <SearchResult />
                        {/* </div> */}
                    </div>
                </div>
            </main>
        </>
        );
}