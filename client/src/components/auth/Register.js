
import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

import { Button, Form, FormGroup, Input, Col, Container} from 'reactstrap';

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");

    const { getLoggedIn } = useContext(AuthContext);
    const history = useHistory();
    async function register(e) {
        e.preventDefault();
    
        try {
          const registerData = {
            email,
            password,
            passwordVerify
          };

          await axios.post("http://localhost:5000/auth/", registerData);
          await getLoggedIn();
          history.push("/");

        } catch (err) {
          console.error(err);
        }
      }

    return (
        <div>
          <Container className="themed-container" fluid="sm" style={{ "height": "100vh" }}>
            <FormGroup className="justify-content-md-center" row>
              <Col sm={8}>
                <h1>Register a new account</h1>
              </Col>
            </FormGroup>
            <Form onSubmit={register}>
              <FormGroup className="justify-content-md-center" row>
                <Col sm={8}>
                  <Input
                      type="email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                  />
                </Col>
              </FormGroup>
              <FormGroup className="justify-content-md-center" row>
                <Col sm={8}>
                  <Input
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                  />
                </Col>
              </FormGroup>
              <FormGroup className="justify-content-md-center" row>
                <Col sm={8}>
                  <Input
                      type="password"
                      placeholder="Verify your password"
                      onChange={(e) => setPasswordVerify(e.target.value)}
                      value={passwordVerify}
                  />
                </Col> 
              </FormGroup>
              <FormGroup className="justify-content-md-center" row>
                <Col sm={8}>    
                  <Button type="submit">Register</Button>
                </Col>
              </FormGroup>  
            </Form>
          </Container>
        </div>
    )
}

export default Register
