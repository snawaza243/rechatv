import React from "react";
import { Link } from "react-router-dom"; // Make sure to import Link if you're using React Router
import './layout.css'
import { useState } from "react";
const Navbar = () => {


  const [refresh, setRefresh] = useState(false);

  const handleReload = () => {
    setRefresh(true);
  };
  return (
    <nav>
      <div className="logo" style={{ color: 'red' }} title="RCV: React Chat Video">RCV</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/" target="_blank">New Page</Link>
        </li>
        <li>
          <Link onClick={window.location.reload}>Reload</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
