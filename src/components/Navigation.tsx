import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-list-item">
          <Link to="/">stamp</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/user">user</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/log">log</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;