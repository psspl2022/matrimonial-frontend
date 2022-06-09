import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import AboutProfile from "./AboutProfile";
import "../../App.css";
import axios from "axios";

function ProfileDetails() {
  const history = useHistory();
  const[TabName, setTabName] = useState('about');
  const { package_id } = useParams();
  const [planName, setPlanName] = useState("");
  const [planPrice, setPlanPrice] = useState("");
  const [planData, setPlanData] = useState("");

  const token = window.sessionStorage.getItem("access_token");
  const headers_param = {
    headers: {
      authorization: "Bearer " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  useEffect(async () => {
    // const package_id = 2;
    await axios
      .get(`${window.Url}api/getMembershipDetail/${package_id}`, headers_param)
      .then(({ data }) => {
        setPlanName(data.name);
        setPlanPrice(data.price);
        setPlanData(data);
        // setAboutEducation(data.career.express_yourself);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (!sessionStorage.hasOwnProperty("access_token")) {
      //   history.replace('/signUp');
    }
  }, []);

  // const submitMembership = async(e)=>{
  //   e.preventDefault();

  //   const formData = new FormData();
  //   formData.append("package_id", planData.id);
  //   formData.append("package_amt", planData.price);

  //   await axios
  //   .post(`${window.Url}api/checkoutMembership`, formData, headers_param)
  //   .then(({ data }) => {
  //     if (data.hasOwnProperty("msg")) {
  //       console.log(data);
  //       const headers_param1 = {
  //         headers: {
  //           'Access-Control-Allow-Origin':  '*',
  //           'Access-Control-Allow-Credentials': 'true',
  //         },
  //       };
  //       const formdat = new FormData();
  //       formdat.append("appId", data.msg.appId);
  //       formdat.append("customerEmail", data.msg.customerEmail);
  //       formdat.append("customerName", data.msg.customerName);
  //       formdat.append("customerPhone", data.msg.customerPhone);
  //       formdat.append("notifyUrl", data.msg.notifyUrl);
  //       formdat.append("orderAmount", data.msg.orderAmount);
  //       formdat.append("orderCurrency", data.msg.orderCurrency);
  //       formdat.append("orderId", data.msg.orderId);
  //       formdat.append("orderNote", data.msg.orderNote);
  //       formdat.append("returnUrl", data.msg.returnUrl);
  //       formdat.append("signature", data.msg.signature);

  //       axios.post(`https://test.cashfree.com/billpay/checkout/post/submit`, formdat)
  //   .then(({ data2 }) => {
  //     if (data2.hasOwnProperty("msg1")) {
  //       console.log(data);
  //     } else {
  //       console.log("no data");
  //     }
  //   });

  //     } else {
  //       console.log("no data");
  //     }
  //   });
  // }

  return (
    <>
      <main className="browse-section pt-5">
        <div className="container ProfileDetails">
          <div className="row">
            {/* <div className="col-lg-3 col-md-4">
                <MyProfileSidebar />
            </div> */}
            <div className="col-lg-12 col-md-8">
              <h1 className="text-center">Profile Details Section</h1>

              <section className="tabs">
                <ul className="nav nav-tabs">
                  <li className={`nav-link ${
                        TabName === "about" ? "active" : ""
                      }`} onClick={() => {
                        setTabName("about");
                      }}>
                    <span
                    >
                      <i class="fa fa-user" aria-hidden="true"></i> &nbsp; About Section
                    </span>
                  </li>
                  <li
                      className={` nav-link ${
                        TabName === "education" ? "active" : ""
                      }`} onClick={() => {
                        setTabName("education");
                      }}>
                    <span>
                    <i class="fa fa-book" aria-hidden="true"></i> &nbsp; Education & Career
                    </span>
                  </li>
                  <li
                      className={` nav-link ${
                        TabName === "family" ? "active" : ""
                      }`} onClick={() => {
                        setTabName("family");
                      }}>
                    <span>
                    <i class="fa fa-users" aria-hidden="true"></i> &nbsp; Family Details
                    </span>
                  </li>
                  <li
                      className={` nav-link ${
                        TabName === "desired" ? "active" : ""
                      }`} onClick={() => {
                        setTabName("desired");
                      }}>
                    <span>
                    <i class="fa fa-eye" aria-hidden="true"></i> &nbsp; Desired Partner
                    </span>
                  </li>
                </ul>
              </section>

              { TabName==='about' && <AboutProfile /> }

            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProfileDetails;
