import GoogleLogin from "react-google-login";
import axios from "axios";
import Swal from 'sweetalert2';
// import { useprops.history } from "react-router-dom";
const clientId = "651733878355-b60ffpmjlm928g3tnlvcbu50gd2fifmu.apps.googleusercontent.com";

function login1(props) {
    const close = () => {
        setTimeout(() => {
            Swal.close();
        }, 2000);
    };

    const onSuccess = (res) => {
        axios
            .post(`${window.Url}api/auth/google`, res.profileObj)
            .then(({ data }) => {
                Swal.fire({
                    icon: "success",
                    text: data.msg
                });
                console.log(data);
                if (data['page'] == "login") {
                    close();
                    console.log(data);
                    data = data['data']
                    window.sessionStorage.setItem('access_token', data.token);
                    window.sessionStorage.setItem("gender", JSON.stringify(data.gender));
                    window.sessionStorage.setItem("login_type", JSON.stringify(data.login_type));
                    window.sessionStorage.setItem('user_data', JSON.stringify(data.user));
                    window.location.href = "/registrationStage";
                }
                else {
                    Swal.fire({
                        icon: "success",
                        text: data.msg
                    });
                    close();
                    data = data['data']
                    window.sessionStorage.setItem('access_token', data.token);
                    window.sessionStorage.setItem('login_type', data.login_type);
                    window.sessionStorage.setItem('user_data', JSON.stringify(data.user));
                    window.location.href = "/registrationStage";
                }
            })


    }

    const onFailure = (res) => {
        console.log("Login Failed!  ", res);
    }

    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                style={{ width: "200px" }}
                buttonText="Login / SingUp"
                scope='https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.gender.read https://www.googleapis.com/auth/userinfo.profile'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={false}
            />
        </div>
    )
}

export default login1;