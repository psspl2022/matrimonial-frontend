import { useState, useEffect } from "react";
import ProfileStage from "./ProfileStage";
import CareerStage from "./CareerStage";
import FamilyStage from "./FamilyStage";
import PhoneStage from "./PhoneStage";
import ProfileImageStage from "./ProfileImageStage";
import axios from "axios";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { useSelector, useDispatch } from "react-redux";
import { regActiveLink } from '../../actions/index';


function RegistrationStage() {
  const [TabName, setTabName] = useState('');
  const dispatch = useDispatch();
  
  // dispatch(regActiveLink('career'));

  const token = window.sessionStorage.getItem('access_token');
  const headers_param = {
    headers: {
      'authorization': 'Bearer ' + token,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  useEffect(() => {
    axios.get(`${window.Url}api/getRegisterFormStatus`, headers_param)
   .then(async({ data }) => {
    setTabName(() => {
      switch(data[0].stage_no){
        case 1: return 'otp' ;
        case 2: return 'profile' ;
        case 3: return 'career' ;
        case 4: return 'family' ;
        case 5: return 'profileimg' ;
        default : return 'profile';
      }
     })
    //  if(TabName!='')
     await dispatch(regActiveLink(TabName));

   });
 }, []);

  
  return (
    <>
      <main className="browse-section pt-4">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-6">
              <div className="lg_form">
                
                { TabName==='profile' && <ProfileStage /> }
                { TabName==='career' && <CareerStage /> }
                { TabName==='family' && <FamilyStage /> }
                { TabName==='otp' && <PhoneStage /> }
                { TabName==='profileimg' && <ProfileImageStage /> }
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </>
  );
}


export default RegistrationStage;
