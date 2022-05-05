import MyProfileSection from "./MyProfileSection";
import MyProfileSidebar from "./MyProfileSidebar";

function MyProfile() {
  return (
    <>
      <main className="browse-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
                <MyProfileSidebar />
            </div>
            <div className="col-lg-9 col-md-8 mainpage">
                <MyProfileSection />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MyProfile;
