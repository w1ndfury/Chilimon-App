import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

import { Button } from 'reactstrap';

function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();

  async function logOut() {
    await axios.get("http://localhost:5000/auth/logout"); 
    await getLoggedIn();
    history.push("/");
  }

  return <Button outline color="secondary" size="sm" onClick={logOut}>Log out</Button>;
}

export default LogOutBtn;