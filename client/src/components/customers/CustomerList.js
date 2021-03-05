import React from "react";
import { Button, Container, Col, ListGroup, ListGroupItem } from 'reactstrap';
import axios from "axios";

function CustomerList({ customers, getCustomers }) {

  function renderCustomers() {

    async function deleteCustomer(id) {

      try {
        await axios.delete("http://localhost:5000/customer/" + id);
        getCustomers();
        
      } catch (err) {
        console.error(err);
      }
    }
    return customers.map((customer, i) => {
      return (
        <Container>     
            <ListGroup horizontal="sm">
              <Col sm={5}>
              <ListGroupItem key={i}>{customer.name}</ListGroupItem>         
              </Col>
              <Col sm={4}>
              <ListGroupItem key={i}>{customer.age}</ListGroupItem>         
              </Col>
              <Col sm={3}>
              <Button className="remove-btn" color="danger" size="sm" onClick={() => deleteCustomer(customer._id)}>&times;</Button>
              </Col>
            </ListGroup>
          
        </Container>
      );
    });
  }

  return (
    <div>
      <ul>{renderCustomers()}</ul>
    </div>
  );
}

export default CustomerList;
