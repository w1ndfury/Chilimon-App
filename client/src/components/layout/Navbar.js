import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import CustomersNumContext from '../../context/CustomersNumContext';
import LogOutBtn from "../auth/LogOutBtn";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  Container,
  Label
} from 'reactstrap';

import logo from '../../assets/chi.ico'

function AppNavbar() {
  const { loggedIn } = useContext(AuthContext);
  const [customersNumber, setCustomersNumber] = useContext(CustomersNumContext);

  const [isOpen, setisOpen] = useState(false);

  const toggle = ()=>{
    setisOpen(!isOpen);
  }

 
  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand>
            <NavLink href="/"><img src={logo} alt=""></img></NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={isOpen} navbar>
              {loggedIn === true && (
                <>
                  <Label style={{"margin-right":"50%", "color":"white"}}>Current Customers: {customersNumber.length}</Label>
                </>
              )}
            <Nav className="ml-auto" navbar>
              
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              {loggedIn === false && (
                <>
                  <NavLink href="/register">Register</NavLink>
                  <NavLink href="/login">Log in</NavLink>
                </>
              )}
              {loggedIn === true && (
                <>
                  <NavLink href="/customer">Customers</NavLink>
                  <LogOutBtn />
                </>
              )}
              
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default AppNavbar;