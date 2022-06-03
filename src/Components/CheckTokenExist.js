import { useState, useEffect } from "react";

export default function CheckTokenExist(){
    const checkExist = () => {
        if (sessionStorage.hasOwnProperty("access_token")) {
          return true;
        }
        else{
            return false;
        }
    }
    
    const [userExists, setUserExists] = useState(checkExist);
    return {
        checkExist,
        userExists
    }
}