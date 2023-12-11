import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/shared/Layout";

import Products from './components/Products'
import Dashboard from './components/Dashboard'
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path index element={<Dashboard />} />
        <Route path="product" element={<Products />} />
        {/* Add routes for other pages here */}
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
