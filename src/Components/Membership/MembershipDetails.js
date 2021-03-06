import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "../../App.css";
import axios from "axios";

function MembershipDetails() {
  const history = useHistory();
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
        document.title = "Membership Plans";
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

  const submitMembership = async(e)=>{
    e.preventDefault();

    const formData = new FormData();
    formData.append("package_id", planData.id);
    formData.append("package_amt", planData.price);

    await axios
    .post(`${window.Url}api/checkoutMembership`, formData, headers_param)
    .then(({ data }) => {
      if (data.hasOwnProperty("msg")) {
        console.log(data);
        const headers_param1 = {
          headers: {
            'Access-Control-Allow-Origin':  '*',
            'Access-Control-Allow-Credentials': 'true',
          },
        };
        const formdat = new FormData();
        formdat.append("appId", data.msg.appId);
        formdat.append("customerEmail", data.msg.customerEmail);
        formdat.append("customerName", data.msg.customerName);
        formdat.append("customerPhone", data.msg.customerPhone);
        formdat.append("notifyUrl", data.msg.notifyUrl);
        formdat.append("orderAmount", data.msg.orderAmount);
        formdat.append("orderCurrency", data.msg.orderCurrency);
        formdat.append("orderId", data.msg.orderId);
        formdat.append("orderNote", data.msg.orderNote);
        formdat.append("returnUrl", data.msg.returnUrl);
        formdat.append("signature", data.msg.signature);

        axios.post(`https://test.cashfree.com/billpay/checkout/post/submit`, formdat)
    .then(({ data2 }) => {
      if (data2.hasOwnProperty("msg1")) {
        console.log(data);
      } else {
        console.log("no data");
      }
    });

      } else {
        console.log("no data");
      }
    });
  }

  return (
    <>
      <main className="browse-section pt-5">
        <div className="container membershipDetails">
          <div className="row">
            {/* <div className="col-lg-3 col-md-4">
                <MyProfileSidebar />
            </div> */}
            <div className="col-lg-12 col-md-8">
              <h1 className="text-center">Membership Plan Details</h1>
              <div className="row mt-5">
                <div className="col-md-6">
                  <h2 className="text-danger">
                    {planData.name} Membership Plan
                  </h2>
                </div>
              </div>
              <div className="row mt-4 d-flex justify-content-between">
                <div className="col-4 col-md-3 col-lg-2">
                  <img
                    src={process.env.PUBLIC_URL + "/gold_member.jpg"}
                    className="img-fluid"
                  />
                </div>
                <div className="col-7 col-md-8 col-lg-9">
                  <h3>Benefits of this Membership:-</h3>
                  <ul>
                    <li>
                      <i class="fas fa-solid fa-angle-right text-success"></i>{" "}
                      Browse Profiles
                    </li>
                    <li>
                      <i class="fas fa-solid fa-angle-right text-success"></i>{" "}
                      Shortlist & Send Interest
                    </li>
                    <li>
                      <i class="fas fa-solid fa-angle-right text-success"></i>{" "}
                      Send Mail
                    </li>
                    <li>
                      <i class="fas fa-solid fa-angle-right text-success"></i>{" "}
                      View contacts of members you like
                    </li>
                    <li>
                      <i class="fas fa-solid fa-angle-right text-success"></i>{" "}
                      {planData.view_count < 100 && planData.view_count}
                      {planData.view_count > 100 && "Unlimited"} Profiles can be
                      viewed
                    </li>
                    <li>
                      <i class="fas fa-solid fa-angle-right text-success"></i>{" "}
                      {planData.chat_options == 0 && <del> Peer Chatting</del>}{" "}
                      {planData.chat_options == 1 && "Peer Chatting"}
                    </li>
                    <li>
                      <i class="fas fa-solid fa-angle-right text-success"></i>{" "}
                      {planData.customer_support == 0 && (
                        <del> Priority customer support</del>
                      )}{" "}
                      {planData.customer_support == 1 &&
                        "Priority customer support"}
                    </li>
                    <li>
                      <i class="fas fa-solid fa-angle-right text-success"></i>{" "}
                      {planData.contacts_visibility_to_others == 0 && (
                        <del> Make your contacts visible to others</del>
                      )}{" "}
                      {planData.contacts_visibility_to_others == 1 &&
                        "Make your contacts visible to others"}
                    </li>
                  </ul>
                  <div
                    className="mt-5"
                    style={{ fontSize: "32px", fontWeight: "bold" }}
                  >
                    RS. {planData.price}
                  </div>
                </div>
                {/* <div  className="col-12">
                        Rs. 499
                    </div> */}
              </div>

              <div className="row">
                <div className="col-md-5 col-lg-3 mx-auto">
                  <form onSubmit={submitMembership}>
                    <input
                      type="submit"
                      className="lr_btn"
                      value="Proceed To Payment"
                      style={{ marginTop: "5rem", cursor: "pointer" }}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MembershipDetails;
