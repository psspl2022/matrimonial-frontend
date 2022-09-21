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
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Contact from "./Contact";
import bgimage from "../../background2.jpeg";
function RegistrationStage(props) {
  const [TabName, setTabName] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const activeState = useSelector((state) => state.changeActiveLink);

  useEffect(() => {
    if (activeState === 'homepage')
      props.getUrlData('/')
  });
  // dispatch(regActiveLink('career'));
  useEffect(() => {
    props.getUrlData('/registrationStage')
  }, [])


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
      .then(({ data }) => {
        setTabName(() => {
          switch (data[0].stage_no) {
            case 0: return 'contact';
            case 1: return 'otp';
            case 2: return 'profile';
            case 3: return 'career';
            case 4: return 'family';
            case 5: return 'profileimg';
            case 6: return 'homepage';
            default: return 'profile';
          }
        })
        //  if(TabName!='')


      });
  }, []);
  const close = () => {
    setTimeout(() => {
      Swal.close();
    }, 2000);
  };

  useEffect(() => {
    if (TabName === 'homepage') {
      close();
      if (history.location.state) {
        const data = history.location.state.data;
        window.location.replace(data);
      }
      else {

        history.go(-1);
      }
    }

    dispatch(regActiveLink(TabName));
  }, [TabName])


  return (
    <>
      <main className="browse-section pt-4">
        <div className="container my-3">
          <div className="row justify-content-md-center">
            <div className="col-md-12">

              {TabName === 'contact' && <Contact />}
              {TabName === 'profile' && <ProfileStage />}
              {TabName === 'career' && <CareerStage />}
              {TabName === 'family' && <FamilyStage />}
              {TabName === 'otp' && <PhoneStage />}
              {TabName === 'profileimg' && <ProfileImageStage />}

            </div>
          </div>
        </div>
      </main>

    </>
  );
}


export default RegistrationStage;
