import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Navbar from "./components/layout/Navbar"
import AuthContext from "./context/AuthContext";
import Customers from "./components/customers/Customers";
import Home from "./components/home/home";



function Router() {

    const { loggedIn } = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />                 
                </Route>
                {loggedIn === false && (
                    <>
                        <Route path="/register">
                        <Register />
                        </Route>
                        <Route path="/login">
                        <Login />
                        </Route>
                    </>
                )}
                {loggedIn === true && (
                    <>
                        <Route path="/customer">
                            <Customers />
                        </Route>
                    </>
                )}
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
