import React from 'react';
import './App.css';
import Router from './Router';
import axios from "axios";
import { AuthContextProvider } from './context/AuthContext';
import { CustomersNumContextProvider } from './context/CustomersNumContext';
import "bootstrap/dist/css/bootstrap.min.css"

axios.defaults.withCredentials = true;
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <CustomersNumContextProvider>
          <Router />
        </CustomersNumContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;