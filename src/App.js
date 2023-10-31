import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './pages';
import NotAvailable from './pages/notAvailable';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='*' element={<NotAvailable />} />
      </Routes>
    </Router>
  );
}

export default App;
