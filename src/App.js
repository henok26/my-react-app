import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import 'Routes'
import Layout from './components/shared/Layout';
import Invoices from './components/Invoices'; // Import 'Invoices'
import Products from './components/Products';
import Dashboard from './components/Dashboard';
// import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index  element={<Dashboard />}/>
        <Route path="products" element={<Products />} />
  {/* Use path for 'Dashboard' */}
        {/* Add routes for other pages here */}
      </Route>
      </Routes>
    </Router>
  );
}

export default App;
