/* eslint-disable import/no-extraneous-dependencies */
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="nav-container">
        <h1>Math Magicians</h1>
        <ul className="navbar">
          <li>
            <Link className="nav-item" to="/">Home</Link>
          </li>
          <li>
            <Link className="nav-item" to="/quotes">Quotes</Link>
          </li>
          <li>
            <Link className="nav-item" to="/calculator">Calculator</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
