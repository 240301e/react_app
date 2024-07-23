import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="button">
      <Link to="/card" className="btn_05">食券の交換はこちら</Link>
    </div>
  );
}

export default Footer;