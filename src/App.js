import MainFooter from './Components/MainFooter';
import Banner from './Components/Banner';
import LatestMatch from './Components/LatestMatch';    
import MainHeader from './Components/MainHeader';
import SuccessMatches from './Components/SuccessMatches';
import MembershipPlan from './Components/MembershipPlan';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Switch } from 'react-router-dom';
import SearchMatches from './Components/SearchMatches';

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
