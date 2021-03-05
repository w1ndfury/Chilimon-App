import axios from "axios";
import React, { useState } from "react";
import { Form, Row, Col, Button } from 'reactstrap';

function CustomerForm({ getCustomers }) {
  const [customerName, setCustomerName] = useState("");
  const [customerAge, setCustomerAge] = useState("");

  async function saveCustomer(e) {
    e.preventDefault();         //stops the page from refreshing when u click on the form

    try {
      const customerData = {
        name: customerName,
        age: customerAge,
      };
      await axios.post("http://localhost:5000/customer/", customerData);
      getCustomers();
      
    } catch (err) {
      console.error(err);
    }
  }

  return (
    
      <Form onSubmit={saveCustomer}>
        <Row className="justify-content-md-center" >
          <Col xs={12} sm={9}>
            <input
              type="text"
              placeholder="Customer name"
              name="name"
              onChange={(e) => {
                setCustomerName(e.target.value);
              }}
              value={customerName}
            />
            <input
              type="text"
              placeholder="Customer age"
              name="age"
              onChange={(e) => {
                setCustomerAge(e.target.value);
              }}
              value={customerAge}
            />
          </Col>
          <Col xs={12} sm={3}>
            <Button type="submit">Save new customer</Button>
          </Col>     
        </Row>   
      </Form>
    
  );
}

export default CustomerForm;