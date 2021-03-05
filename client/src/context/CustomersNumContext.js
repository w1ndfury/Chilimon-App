import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const CustomersNumContext = createContext();


function CustomersNumContextProvider(props) {

    const [customers, setCustomers] = useState(0);

    async function getCustomersNumber() {
        
      const customersData = await axios.get("http://localhost:5000/customer");  
      setCustomers(customersData.data);  
    }

    useEffect(() => {
        getCustomersNumber();
    }, [customers]);                        // each time "customers" changes we cakk getCustomersNumber
    
    // props.children = Router so far
    return (
        <CustomersNumContext.Provider value={[customers, setCustomers]}>
            {props.children}      
        </CustomersNumContext.Provider>
    )
}

export default CustomersNumContext;
export { CustomersNumContextProvider };