import { GoogleLogout } from "react-google-login";

const clientId = "651733878355-b60ffpmjlm928g3tnlvcbu50gd2fifmu.apps.googleusercontent.com";

function logout1(){
    const onLogoutSuccess =() =>{
        console.log("Logout Successful!");
    }

    return(
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onLogoutSuccess}
            />
        </div>
    )
}

export default logout1;