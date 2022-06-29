import {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios"

export default function Education(reg_id) {
  const token = window.sessionStorage.getItem("access_token");
  const history = useHistory();
  const [data, setData] = useState([]);

  const headers_param = {
    headers: {
      authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    if (sessionStorage.hasOwnProperty("access_token")) {
        education();
    }
  }, []);

  const education = () => {
    axios
      .post(`${window.Url}api/education`, reg_id, headers_param)
      .then(( response ) => {
          setData(response.data);
       
      });
  };


  
  return (
    <>
      <div className="tab-content pb-4" id="myTabContent" style={{background:"#fff"}}>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row my-4">
              <div className="col-md-6 my-3">
                <span className="view_profile_about_span">
                    Highest Education
                </span>
                <span className="view_head_span"><br />
                    { ( data['career'] && (data['career'].get_education != null)) ? data['career'].get_education.education : "Not filled in"} 
                </span><br />
                </div>
                <div className="col-md-6 my-3">
                <span className="view_profile_about_span">
                    School Name
                </span>
                <span className="view_head_span"><br />
                    { ( data['career'] && (data['career'].schooling != null)) ? data['career'].schooling : "Not filled in"} 
                </span><br />
                </div>
            
                <div className="col-md-6 my-3">
                <span className="view_profile_about_span">
                    UG Degree
                </span>
                <span className="view_head_span"><br />
                    { ( data['career'] && (data['career'].get_ug != null)) ? data['career'].get_ug.education : "Not filled in"} 
                </span><br />
                </div>

                <div className="col-md-6 my-3">
                <span className="view_profile_about_span">
                    UG College
                </span>
                <span className="view_head_span"><br />
                    { ( data['career'] && (data['career'].ug_clg != null)) ? data['career'].ug_clg : "Not filled in"} 
                </span>
                </div>

                <div className="col-md-6 my-3">
                <span className="view_profile_about_span">
                    PG Degree
                </span>
                <span className="view_head_span"><br />
                    { ( data['career'] && (data['career'].get_pg != null)) ? data['career'].get_pg.education : "Not filled in"} 
                </span><br />
                </div>

                <div className="col-md-6 my-3">
                <span className="view_profile_about_span">
                    PG College
                </span>
                <span className="view_head_span"><br />
                    { ( data['career'] && (data['career'].pg_clg != null)) ? data['career'].pg_clg : "Not filled in"} 
                </span><br />
                </div>

                <div className="col-md-6 my-3">
                <span className="view_profile_about_span">
                    Occupation
                </span>
                <span className="view_head_span"><br />
                    { ( data['career'] && (data['career'].get_occupation != null)) ? data['career'].get_occupation.occupation : "Not filled in"} 
                </span><br />
                </div>

                <div className="col-md-6 my-3">
                <span className="view_profile_about_span">
                    Employed In
                </span>
                <span className="view_head_span"><br />
                    { ( data['career'] && (data['career'].get_occupation != null)) ? data['career'].get_occupation.occupation_category : "Not filled in"} 
                </span><br />
                </div>

                <div className="col-md-6 my-3">
                <span className="view_profile_about_span">
                    Organization name
                </span>
                <span className="view_head_span"><br />
                    { ( data['career'] && (data['career'].organization_name != null)) ? data['career'].organization_name : "Not filled in"} 
                </span><br />
                </div>

                <div className="col-md-6 my-3">
                <span className="view_profile_about_span">
                    Income
                </span>
                <span className="view_head_span"><br />
                    { ( data['career'] && (data['career'].get_income != null)) ? data['career'].get_income.income : "Not filled in"} 
                </span><br />
                </div>
                  
              </div>
            </div>
          </div>
      <hr />   
        </div>  
      </div>   
    </>
  );
}
