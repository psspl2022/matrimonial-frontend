import {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios"

export default function Lifestyle(reg_id) {
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
        lifestyle();
    }
  }, []);

  const lifestyle = () => {
    axios
      .post(`${window.Url}api/lifestyle`, reg_id, headers_param)
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
                    Blood Group
                </span>
                <span className="view_head_span"><br />
                    { ( data['lifestyle'] && (data['lifestyle'].blood_group != null)) ? data['lifestyle'].blood_group : "Not filled in"} 
                </span><br />
                </div>
                <div className="col-md-6 my-3">
                <span className="view_profile_about_span">
                    Language Known
                </span>
                <span className="view_head_span"><br />
                    { ( data['lifestyle'] && (data['lifestyle'].language_i_speak != null)) ? data['lifestyle'].language_i_speak : "Not filled in"} 
                </span><br />
                </div>
            
                <div className="col-md-6 my-3">
                <span className="view_profile_about_span">
                    Habits
                </span>
                <span className="view_head_span"><br />
                    {  data['lifestyle'] && <>
                        { data['lifestyle'].diet_habit == 1 && "Vegetarain" }
                        { data['lifestyle'].diet_habit == 2 && "Non Vegetarain" } 
                        { data['lifestyle'].diet_habit == 3 && "Jain" }
                        { data['lifestyle'].diet_habit == 4 && "Eggetarain" } 

                        , { data['lifestyle'].drink_habit == 1 && "Doesn't Drink" }
                        { data['lifestyle'].drink_habit == 2 && "Does Drink" } 
                        { data['lifestyle'].drink_habit == 3 && "Drink Occasionally" }

                        , { data['lifestyle'].smoking_habit == 1 && "Doesn't Smoke" }
                        { data['lifestyle'].smoking_habit == 2 && "Does Smoke" } 
                        { data['lifestyle'].smoking_habit == 3 && "Smoke Occasionally" }


                        </>
                    } 
                </span><br />
                </div>

                <div className="col-md-6 my-3">
                <span className="view_profile_about_span">
                    Assets
                </span>
                <span className="view_head_span"><br />
                {  data['lifestyle'] && <>
                        { data['lifestyle'].own_a_house == 1 && "Having own house" } 

                        , { data['lifestyle'].own_a_car == 1 && "Having own car" } 
                        </>
                    }    
                </span>
                </div>


                <div className="col-md-12 my-3 ">
                <span className="view_head_span float-right" style={{fontSize:"20px"}}>
                <i className="fa fa-thumbtack view_profile_font2" style={{marginRight: "4px"}}/>
                {  data['lifestyle'] && <>
                        { data['lifestyle'].open_to_pets == 0 && "Not open to pets" }
                        { data['lifestyle'].open_to_pets == 1 && "Open to pets" } 

                       
                       </>
                }
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
