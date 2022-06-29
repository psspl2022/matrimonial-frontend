import {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios"

export default function About(reg_id) {
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
      about();
    } 
  }, []);

  const about = () => {
    axios
      .post(`${window.Url}api/about`,reg_id, headers_param)
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
              <div className=" my-4">
              <div className="my-2">
                <span className="view_profile_about_span">
                  {data['user'] && (data['user'].gender == 2 && "Her profile is managed by ")}
                  {data['user'] && (data['user'].gender == 1 && "His profile is managed by ")} 
                  {data['user'] && data['user'].profile_for} 
                </span><br />
                </div>
                <div className="mb-3 mt-2">
                <span className="view_profile_about_span ">
                  { ((data['about'] && data['about'].description!=null ) || (data['about'] && data['about'].description!=null )) ? data['about'].description : "Not filled in"} 
                </span><br />
              </div>
            
              <div className="my-3">
                <span className="view_profile_about_span">
                  About {data['user'] && ((data['user'].gender == 2) ? "Her" : "His" )} family
                </span><br />
                <span className="view_head_span">
                  { ( (data['family'] && data['family'].about_family!=null )) ? data['family'].about_family : "Not filled in"} 
                </span><br />
              </div>
          
              <div className="my-3">
              <span className="view_profile_about_span">Education & Occupation</span>
            <span className="view_head_span"><br />
              { ( (data['career'] && data['career'].express_yourself!=null )) ? data['career'].express_yourself : "Not filled in"} 
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
