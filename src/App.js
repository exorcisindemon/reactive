import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Index from "./pages";
import Login from "./components/auth/logIn";
import Regis from "./components/auth/regis";
import NotAvailable from "./pages/notAvailable";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/regis" element={<Regis />} />
        <Route path="*" element={<NotAvailable />} />
      </Routes>
    </Router>
  );
}

export default App;
