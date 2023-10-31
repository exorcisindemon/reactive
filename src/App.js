import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Index from "./pages";
import LogIn from "./components/auth/logIn";
import Regis from "./components/auth/regis";
import NotAvailable from "./pages/notAvailable";
import RecoverAccount from "./components/auth/recoverAccount";
import Layout from "./pages/app/layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auth/login" element={<LogIn />} />
        <Route path="/auth/regis" element={<Regis />} />
        <Route path="/auth/recover" element={<RecoverAccount />} />
        <Route path="*" element={<NotAvailable />} />
        <Route path="/app" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
