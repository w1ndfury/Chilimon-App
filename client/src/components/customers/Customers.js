import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomerForm from "./CustomerForm";
import CustomerList from "./CustomerList";

import { Container, Row, Col } from 'reactstrap';
import './Customer.css';

function Customers() {
  const [customers, setCustomers] = useState([]);

  async function getCustomers() {
    const customersRes = await axios.get("http://localhost:5000/customer/");
    setCustomers(customersRes.data);
  }

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <Container className="themed-container" fluid="sm">
      <Row className="customer justify-content-md-center" >
        <Col className="customer-form" xs={12} md={12}>
          <CustomerForm getCustomers={getCustomers} />
        </Col>
        <Col className="customer-list" xs={12} md={12}>
          <CustomerList customers={customers} getCustomers={getCustomers} />
        </Col>     
      </Row>
    </Container>
  );
}

export default Customers;