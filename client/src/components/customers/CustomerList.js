import React from "react";
import { Button } from 'reactstrap';
import axios from "axios";

function CustomerList({ customers,getCustomers  }) {

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
      return <li key={i}>{customer.name}<Button className="remove-btn" color="danger" size="sm" onClick={() => deleteCustomer(customer._id)}>
      &times;
    </Button></li>;
    });
  }

  return (
    <div>
      <ul>{renderCustomers()}</ul>
    </div>
  );
}

export default CustomerList;