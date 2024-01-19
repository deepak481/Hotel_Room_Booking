import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/png/Logo.png";
import { FaAlignRight } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          {/* app logo */}
          <Link to="/">
            <img src={Logo} height={60} width={80} alt="Reach Resort" />
          </Link>

          {/* navbar toggle button */}
          <button type="button" className="nav-btn" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        {/* navbar link */}
        <div style={{ marginTop: "10px" }}>
          <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
