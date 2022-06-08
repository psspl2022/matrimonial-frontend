import InterestSent from "./InterestSent";
import InterestReceived from "./InterestReceived";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Interest() {
    const[TabName, setTabName] = useState('InterestReceived');
	const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
		if(!sessionStorage.hasOwnProperty("access_token")){
      history.replace('/signUp');
		}
	},[]);

  return (
    <>
      <main className="browse-section">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-3 col-md-4">
                <MyProfileSidebar /> */}
            </div>
            <div className="col-lg-12 col-md-12 mx-auto mainpage">
            <div className="account_tabs">
        <ul className="nav nav-tabs">
          <li className="nav-item">
          <button className={` nav-link ${ TabName==='InterestReceived'?'active':'' }`} onClick={()=>{
              setTabName('InterestReceived');
            }}>
              Interest Received
            </button>
          </li>
          <li className="nav-item">
            <button className={` nav-link ${ TabName==='InterestSent'?'active':'' }`} onClick={()=>{
              setTabName('InterestSent');
            }}>
              Interest Sent
            </button>         
          </li>
        </ul>
      </div>
      { TabName==='InterestReceived' && <InterestReceived /> }
      { TabName==='InterestSent' && <InterestSent /> }
        </div>
          
        </div>
      </main>
    </>
  );
}

export default Interest;
