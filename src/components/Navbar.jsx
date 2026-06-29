import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../assets/hospital-logo.png";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${theme}`}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="GCube Hospital Logo" className="logo-img" />
          <span>GCube<br />Hospital</span>
        </Link>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
        <li><NavLink to="/doctors" onClick={() => setMenuOpen(false)}>Doctors</NavLink></li>
        <li><NavLink to="/symptom" onClick={() => setMenuOpen(false)}>Symptom Checker</NavLink></li>
        <li><NavLink to="/appointments" onClick={() => setMenuOpen(false)}>Appointments</NavLink></li>
        <li><NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
      </ul>

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      
    </nav>
  );
}

export default Navbar;