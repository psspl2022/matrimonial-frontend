import MainFooter from './Components/MainFooter';
import Banner from './Components/Banner';
import LatestMatch from './Components/LatestMatch';    
import MainHeader from './Components/MainHeader';
import SuccessMatches from './Components/SuccessMatches';
import MembershipPlan from './Components/MembershipPlan';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Switch } from 'react-router-dom';
import SearchMatches from './Components/SearchMatches';
import RegistrationView from './Components/RegistrationView';
import Login from './Components/Login';
import ForgetPassword from './Components/ForgetPassword';
import MyProfile from './Components/MyProfile/MyProfile';
import DesiredProfileDetails from './Components/DesiredProfile/DesiredProfileDetails';
import PageNotFound from './Components/404-page';
import RegisterHeader from './Components/Registration/RegisterHeader';
import RegistrationStage from './Components/Registration/RegistrationStage';
import CareerStage from './Components/Registration/CareerStage';
import FamilyStage from './Components/Registration/FamilyStage';
import SignUp from './Components/SignUp';
import MembershipDetails from './Components/Membership/MembershipDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <MainHeader />
            <Banner />
            <LatestMatch />
            <MembershipPlan />
            <SuccessMatches />
            <MainFooter />
          </Route>
          <Route path="/findMatches" exact>
            <MainHeader />
            <SearchMatches />
            <MainFooter />
          </Route>
          <Route path="/signUp" exact>
            <MainHeader />
            <SignUp />
            <MainFooter />
          </Route>
          <Route path="/login" exact>
            <MainHeader />
            <Login />
            <MainFooter />
          </Route>
          <Route path="/forgetPassword" exact>
            <MainHeader />
            <ForgetPassword />
            <MainFooter />
          </Route>
          <Route path="/registrationStage" exact>
            <RegisterHeader />
            <RegistrationStage />
            <MainFooter />
          </Route>
          <Route path="/careerStage" exact>
            <MainHeader />
            <CareerStage />
            <MainFooter />
          </Route>
          <Route path="/familyStage" exact>
            <MainHeader />
            <FamilyStage />
            <MainFooter />
          </Route>
          <Route path="/myprofile" exact>
            <MainHeader />
            <MyProfile />
            <MainFooter />
          </Route>
          <Route path="/desiredprofile" exact>
            <MainHeader />
            <DesiredProfileDetails />
            <MainFooter />
          </Route>
          <Route path="/membershipDetail/:package_id" exact>
            <MainHeader />
            <MembershipDetails />
            <MainFooter />
          </Route>
          <Route component={PageNotFound}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
