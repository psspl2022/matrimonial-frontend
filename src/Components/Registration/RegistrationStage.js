import { useState } from "react";
import ProfileStage from "./ProfileStage";
import CareerStage from "./CareerStage";
import FamilyStage from "./FamilyStage";
import PhoneStage from "./PhoneStage";
import ProfileImageStage from "./ProfileImageStage";


function RegistrationStage() {
  const [TabName, setTabName] = useState('profile');

  
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
                { TabName==='phone' && <PhoneStage /> }
                { TabName==='profile1' && <ProfileImageStage /> }
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </>
  );
}


export default RegistrationStage;
