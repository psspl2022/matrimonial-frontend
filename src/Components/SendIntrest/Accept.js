import AcceptByMe from "./AcceptByMe";
import AcceptMe from "./AcceptMe";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Accept() {
    const[TabName, setTabName] = useState('AcceptByMe');
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
          <button className={` nav-link ${ TabName==='AcceptByMe'?'active':'' }`} onClick={()=>{
              setTabName('AcceptByMe');
            }}>
              I Accept
            </button>
          </li>
          <li className="nav-item">
            <button className={` nav-link ${ TabName==='AcceptMe'?'active':'' }`} onClick={()=>{
              setTabName('AcceptMe');
            }}>
              Accept Me
            </button>         
          </li>
        </ul>
      </div>
      { TabName==='AcceptByMe' && <AcceptByMe /> }
      { TabName==='AcceptMe' && <AcceptMe /> }
        </div>
          
        </div>
      </main>
    </>
  );
}

export default Accept;
