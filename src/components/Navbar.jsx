import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./Navbar.css";
import logo from "../assets/hospital-logo.png";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme}`}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="GCube Hospital Logo" className="logo-img" />
          <span>GCube<br/>Hospital</span>
        </Link>
      </div>

      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/doctors">Doctors</NavLink></li>
        <li><NavLink to="/symptom">Symptom Checker</NavLink></li>
        <li><NavLink to="/appointments">Appointments</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      <button
        className="theme-btn"
        onClick={toggleTheme}>
        {theme === "light" ? " Dark Theme" : " Light Theme"}
      </button>
    </nav>
  );
}

export default Navbar;