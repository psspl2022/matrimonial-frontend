import MainFooter from "./Components/MainFooter";
import Banner from "./Components/Banner";
import LatestMatch from "./Components/LatestMatch";
import MainHeader from "./Components/MainHeader";
import SuccessMatches from "./Components/SuccessMatches";
import MembershipPlan from "./Components/MembershipPlan";
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Redirect, useNavigate } from "react-router-dom";
import { Switch } from "react-router-dom";
import SearchMatches from "./Components/SearchMatches";
import RegistrationView from "./Components/RegistrationView";
import Login from "./Components/Login";
import ForgetPassword from "./Components/ForgetPassword";
import MyProfile from "./Components/MyProfile/MyProfile";
import DesiredProfileDetails from "./Components/DesiredProfile/DesiredProfileDetails";
import DesiredList from "./Components/DesiredProfile/DesiredList";
import PageNotFound from "./Components/404-page";
import RegisterHeader from "./Components/Registration/RegisterHeader";
import RegistrationStage from "./Components/Registration/RegistrationStage";
import CareerStage from "./Components/Registration/CareerStage";
import FamilyStage from "./Components/Registration/FamilyStage";
import SignUp from "./Components/SignUp";
import MembershipDetails from "./Components/Membership/MembershipDetails";
import Interest from "./Components/SendIntrest/Interest";
import Accept from "./Components/SendIntrest/Accept";
import Shortlist from "./Components/Shortlist/Shortlist";
import ProfileDetails from "./Components/ProfileDetails/ProfileDetails";
import LatestProfile from "./Components/Match/LatestProfile";
import DailyRecommendation from "./Components/Match/DailyRecommendation";
import axios from "axios";
import LoginButton from "./Components/login1";
import LogoutButton from "./Components/logout1";

import { gapi } from 'gapi-script';
const clientId = "687289036097-685fdvidipeb7ahtkcbf44mhlidr833n.apps.googleusercontent.com";


function App() {
  const [browse, setBrowse] = useState(null);
  const [browseid, setBrowseId] = useState(null);
  const [url, setUrl] = useState('/');
  const [stage, setStage] = useState('6');


  const history = useHistory();

  useEffect(() => {
    setUrl(window.location.pathname)

    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "email",
        cookiepolicy: 'single_host_origin',
        plugin_name: 'hello'
      })
    };

    gapi.load('client:auth2', start)
  });

  function getUrl(url) {
    setUrl(url);
    axios
      .get(`${window.Url}api/getRegisterFormStatus`, headers_param)
      .then(({ data }) => {
        setStage(data['0'].stage_no);

        if (data['0'].stage_no < 6) {
          if (url != '/registrationStage') {
            window.location.replace('/registrationStage');
          }
        }
      });
  }


  function getBrowseProfileBy(browse, id) {
    setBrowse(browse)
    setBrowseId(id)

  }

  const token = window.sessionStorage.getItem("access_token");
  const headers_param = {
    headers: {
      authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    axios
      .get(`${window.Url}api/getRegisterFormStatus`, headers_param)
      .then(({ data }) => {
        setStage(data['0'].stage_no);

        if (data['0'].stage_no < 6) {
          if (window.location.pathname != '/registrationStage') {
            window.location.replace('/registrationStage');
          }
        }
      });
  }, []);

  return (
    <div className="App">

      <BrowserRouter>
        {(stage == 6) ? (url != "/registrationStage") && <>
          <MainHeader getBrowsedata={getBrowseProfileBy} getUrl={getUrl} />
          <Switch>
            <Route path="/" exact>
              {browse == null &&
                <>
                  <Banner />
                  <LatestMatch />
                  <MembershipPlan />
                  <SuccessMatches />
                </>
              }
              {browse != null &&
                <SearchMatches browse={browse} browseId={browseid} />
              }
            </Route>
            <Route path="/findMatches" exact>
              <SearchMatches browse={browse} browseId={browseid} />
            </Route>
            <Route path="/signUp" exact>
              <SignUp />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/forgetPassword" exact>
              <ForgetPassword />
            </Route>
            <Route path="/careerStage" exact>
              <CareerStage />
            </Route>
            <Route path="/familyStage" exact>
              <FamilyStage />
            </Route>
            <Route path="/myprofile" exact>
              <MyProfile />
            </Route>
            <Route path="/desiredprofile" exact>
              <DesiredProfileDetails />
            </Route>
            <Route path="/membershipDetail/:package_id" exact>
              <MembershipDetails />
            </Route>
            <Route path="/desiredList" exact>
              <DesiredList />
            </Route>
            <Route path="/interest" exact>
              <Interest />
            </Route>
            <Route path="/accept" exact>
              <Accept />
            </Route>
            <Route path="/shortlist" exact>
              <Shortlist />
            </Route>
            <Route path="/profileDetail/:reg_id" exact>
              <ProfileDetails />
            </Route>
            <Route path="/latest" exact>
              <LatestProfile />
            </Route>
            <Route path="/dailyRecommendation" exact>
              <DailyRecommendation />
            </Route>
            <Route path="/login1" exact> <LoginButton /><LogoutButton /></Route>
            <Route component={PageNotFound}></Route>
          </Switch>
          <MainFooter />
        </>
          : <><Redirect
            to={{
              pathname: "/registrationStage",
            }}
          /></>}
        <Switch>

          {/* <Route path="/" exact>
            {browse==null &&
            <>
            <MainHeader getBrowsedata={getBrowseProfileBy} getUrl={getUrl}                                      B                                                                                                                                                                                                              V />
            <Banner />
            <LatestMatch />
            <MembershipPlan />
            <SuccessMatches />  
            <MainFooter />
            </>
            } 
        </Route> */}


          <Route path="/registrationStage" exact>
            <RegisterHeader getUrl={getUrl} />
            <RegistrationStage getUrlData={getUrl} />
          </Route>


        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
