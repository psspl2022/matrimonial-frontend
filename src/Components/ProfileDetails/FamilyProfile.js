import {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios"

export default function Family(reg_id) {
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
        family();
    }
  }, []);

  const family = () => {
    axios
      .post(`${window.Url}api/family`, reg_id, headers_param)
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
                    Mother's Occupation
                </span>
                <span className="view_head_span"><br />
                    { ( data['family'] && (data['family'].get_mother_occupation != null)) ? data['family'].get_mother_occupation.occupation : "Not filled in"} 
                </span><br />
                </div>
                <div className="col-md-6 my-3">
                <span className="view_profile_about_span">
                    Father's Occupation
                </span>
                <span className="view_head_span"><br />
                    { ( data['family'] && (data['family'].get_father_occupation != null)) ? data['family'].get_father_occupation.occupation : "Not filled in"} 
                </span><br />
                </div>
            
                <div className="col-md-6 my-3">
                <span className="view_profile_about_span">
                    Sister(s)
                </span>
                <span className="view_head_span"><br />
                    { ( data['family'] && (data['family'].sister_count != null)) ? (`${ data['family'].sister_count } sister of which `)  : "Not filled in"} 
                    { ( data['family'] && (data['family'].married_sister_count != null)) ? (`${ data['family'].married_sister_count } married `)  : `"not mentioned"`} 
                
                </span><br />
                </div>

                <div className="col-md-6 my-3">
                <span className="view_profile_about_span">
                    Brother(s)
                </span>
                <span className="view_head_span"><br />
                { ( data['family'] && (data['family'].brother_count != null)) ? (`${ data['family'].brother_count } brother of which `)  : "Not filled in"} 
                    { ( data['family'] && (data['family'].married_brother_count != null)) ? (`${ data['family'].married_brother_count } married `)  : `"not mentioned"`} 
                </span>
                </div>

                <div className="col-md-6 my-3">
                <span className="view_profile_about_span">
                    Gothra
                </span>
                <span className="view_head_span"><br />
                    { ( data['family'] && (data['family'].gotra != null)) ? data['family'].gotra : "Not filled in"} 
                </span><br />
                </div>

                <div className="col-md-6 my-3">
                <span className="view_profile_about_span">
                    Gothra (maternal) 
                </span>
                <span className="view_head_span"><br />
                    { ( data['family'] && (data['family'].gotra_maternal != null)) ? data['family'].gotra_maternal : "Not filled in"} 
                </span><br />
                </div>

                <div className="col-md-6 my-3">
                <span className="view_profile_about_span">
                    Family Status
                </span>
                <span className="view_head_span"><br />
                    {  data['family'] && (data['family'].family_status == 0 && "Not filled in")} 
                    {  data['family'] && (data['family'].family_status == 1 && "Rich")} 
                    {  data['family'] && (data['family'].family_status == 2 && "Upper Class")} 
                    {  data['family'] && (data['family'].family_status == 3 && "Middle Class")} 
                </span><br />
                </div>

                <div className="col-md-6 my-3">
                <span className="view_profile_about_span">
                    Family Income
                </span>
                <span className="view_head_span"><br />
                    { ( data['family'] && (data['family'].get_income != null)) ? data['family'].get_income.income : "Not filled in"} 
                </span><br />
                </div>

                <div className="col-md-6 my-3">
                <span className="view_profile_about_span">
                    Family Type
                </span>
                <span className="view_head_span"><br />
                    {  data['family'] && (data['family'].family_type == 0 && "Not filled in")} 
                    {  data['family'] && (data['family'].family_type == 1 && "Nuclear")} 
                    {  data['family'] && (data['family'].family_type == 2 && "Joint")} 
                    {  data['family'] && (data['family'].family_type == 3 && "Others")} 
                </span><br />
                </div>

                <div className="col-md-6 my-3">
                <span className="view_profile_about_span">
                    Family Values
                </span>
                <span className="view_head_span"><br />
                    {  data['family'] && (data['family'].family_values == 0 && "Not filled in")} 
                    {  data['family'] && (data['family'].family_values == 1 && "Liberal")} 
                    {  data['family'] && (data['family'].family_values == 2 && "Orthodox")} 
                    {  data['family'] && (data['family'].family_values == 3 && "Conservative")} 
                    {  data['family'] && (data['family'].family_values == 4 && "Moderate")} 
                </span><br />
                </div>
                  
                <div className="col-md-6 my-3">
                <span className="view_profile_about_span">
                    Family based out of
                </span>
                <span className="view_head_span"><br />
                    { ( data['family'] && (data['family'].get_city != null)) ? data['family'].get_city.name : "Not filled in"} 
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
