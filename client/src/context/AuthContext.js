import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthContextProvider(props) {

    const [loggedIn, setLoggedIn] = useState(undefined);

    async function getLoggedIn() {

      const loggedInRes = await axios.get("http://localhost:5000/auth/loggedIn");  // will take TRUE or FALSE
      setLoggedIn(loggedInRes.data);  // will set TRUE or FALSE

    }

    useEffect(() => {
        getLoggedIn();
    }, []);
  
    //props.children = Router
    return (
        <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
            {props.children}      
        </AuthContext.Provider>
    )
}

export default AuthContext;
export { AuthContextProvider };