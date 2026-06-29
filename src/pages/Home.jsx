import { Link } from "react-router-dom";
import "./Home.css";
import {
  FaHeartPulse,
  FaBrain,
  FaChild,
  FaBone,
  FaHospital,
  FaUserDoctor,
  FaTruckMedical,
  FaCapsules,
  FaCalendarCheck,
  FaStethoscope
} from "react-icons/fa6";

function Home() {
  return (
    <>
      <section className="hero">

        <div className="hero-content">

          <h1>
            Your Health,
            <br />
            Our Priority
          </h1>

          <p>
            Welcome to <strong>GCube Hospital</strong>, where compassionate care
            meets advanced medical technology. Our experienced doctors provide
            world-class healthcare for you and your family.
          </p>

          <div className="hero-buttons">

            <Link to="/appointments" className="primary-btn">
              <FaCalendarCheck />
              <span>Book Appointment</span>
            </Link>

            <Link to="/symptom" className="secondary-btn">
              <FaStethoscope />
              <span>Symptom Checker</span>
            </Link>

          </div>

        </div>

      </section>

      <section className="stats">

        <div className="stat-card">
          <h2>50+</h2>
          <p>Expert Doctors</p>
        </div>

        <div className="stat-card">
          <h2>10K+</h2>
          <p>Happy Patients</p>
        </div>

        <div className="stat-card">
          <h2>15+</h2>
          <p>Departments</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>Emergency Service</p>
        </div>

      </section>

      <section className="features">

        <h2>Why Choose City Hospital?</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <FaHospital className="feature-icon" />
            <h3>Modern Infrastructure</h3>
            <p>
              Equipped with the latest medical technology for accurate diagnosis
              and treatment.
            </p>
          </div>

          <div className="feature-card">
            <FaUserDoctor className="feature-icon" />
            <h3>Experienced Doctors</h3>
            <p>
              Highly qualified specialists dedicated to providing exceptional
              patient care.
            </p>
          </div>

          <div className="feature-card">
            <FaTruckMedical className="feature-icon" />
            <h3>24/7 Emergency</h3>
            <p>
              Emergency medical assistance available around the clock.
            </p>
          </div>

          <div className="feature-card">
            <FaCapsules className="feature-icon" />
            <h3>Advanced Pharmacy</h3>
            <p>
              Fully stocked pharmacy providing genuine medicines at all times.
            </p>
          </div>

        </div>

      </section>


      <section className="departments">

        <h2>Our Departments</h2>

        <div className="department-grid">

          <Link to="/services/cardiology" className="department-card">
            <FaHeartPulse className="department-icon" />
            <h3>Cardiology</h3>
          </Link>

          <Link to="/services/neurology" className="department-card">
            <FaBrain className="department-icon" />
            <h3>Neurology</h3>
          </Link>

          <Link to="/services/pediatrics" className="department-card">
            <FaChild className="department-icon" />
            <h3>Pediatrics</h3>
          </Link>

          <Link to="/services/orthopedic" className="department-card">
            <FaBone className="department-icon" />
            <h3>Orthopedics</h3>
          </Link>

        </div>

      </section>

      <section className="testimonial">

        <h2>What Our Patients Say</h2>

        <div className="testimonial-card">

          <p>
            "The doctors and staff were incredibly supportive throughout my
            treatment. The hospital is clean, modern, and provides excellent
            healthcare services."
          </p>

          <h4>- Gowtham Goriparthi</h4>

        </div>

      </section>

      <section className="cta">

        <h2>Need Medical Assistance?</h2>

        <p>
          Book an appointment with our experienced doctors today and receive
          quality healthcare services.
        </p>

        <Link to="/appointments" className="primary-btn">
          Schedule Appointment
        </Link>

      </section>
    </>
  );
}

export default Home;