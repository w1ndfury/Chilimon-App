import React from 'react';
import './App.css';
import Router from './Router';
import axios from "axios";
import { AuthContextProvider } from './context/AuthContext';
import "bootstrap/dist/css/bootstrap.min.css"

axios.defaults.withCredentials = true;
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </div>
  );
}

export default App;