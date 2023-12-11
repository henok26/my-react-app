import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="invoices" element={<Invoices/>} />
        <Route path="dashboard" element={<Dashboard/>} />
        {/* Add routes for other pages here */}
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
