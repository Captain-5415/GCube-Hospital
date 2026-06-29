import { Link, Outlet } from "react-router-dom";
import "./Services.css";
import { FaBone, FaBrain, FaChild, FaHeartPulse } from "react-icons/fa6";

export default function Services() {
  return (
    <div className="services">

      <div className="service-header">
        <h1>Our Medical Departments</h1>
        <p>
          Select a department to learn more about our specialized healthcare
          services.
        </p>
      </div>

      <div className="service-grid">

        <Link to="cardiology" className="service-card">
          <div className="icon">
            <FaHeartPulse />
          </div>
          <h3>Cardiology</h3>
          <p>Heart care and cardiovascular treatments.</p>
        </Link>

        <Link to="neurology" className="service-card">
          <div className="icon">
            <FaBrain />
          </div>
          <h3>Neurology</h3>
          <p>Brain, spine and nervous system specialists.</p>
        </Link>

        <Link to="pediatrics" className="service-card">
          <div className="icon">
            <FaChild />
          </div>
          <h3>Pediatrics</h3>
          <p>Healthcare services for infants and children.</p>
        </Link>

        <Link to="orthopedic" className="service-card">
          <div className="icon">
            <FaBone />
          </div>
          <h3>Orthopedic</h3>
          <p>Advanced care for bones, joints, muscles and sports injuries.</p>
        </Link>

      </div>

      <Outlet />

    </div>
  );
}