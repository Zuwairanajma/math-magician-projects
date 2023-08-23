import { Route, Routes, NavLink } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './routes/Home';
import Quote from './routes/Quote';
import './styles/App.css';
import './index.css';

function App() {
  return (
    <>
      <div>
        <nav className="nav-bar">
          <span className="headingStyle">Math Magicians</span>
          <ul className="nav-link">
            <NavLink to="/">Home</NavLink>
            <NavLink className="border" to="/Calculator">Calculator</NavLink>
            <NavLink to="/Quote">Quote</NavLink>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
