import {
  FaBullseye,
  FaEye,
  FaHospital
} from "react-icons/fa6";
import "./About.css";

function About() {
  return (
    <section className="about">

      <div className="about-content">

        <h1>About GCube Hospital</h1>

        <p>
          GCube Hospital has been delivering trusted healthcare services for
          over 20 years. Our experienced doctors, skilled nurses, and modern
          facilities ensure every patient receives the highest standard of
          medical care.
        </p>

        <div className="about-grid">

          <div className="about-card">

            <FaBullseye className="about-icon" />

            <h3>Our Mission</h3>

            <p>
              To provide affordable, compassionate, and high-quality healthcare
              for every patient.
            </p>

          </div>

          <div className="about-card">

            <FaEye className="about-icon" />

            <h3>Our Vision</h3>

            <p>
              To become one of the most trusted healthcare providers through
              innovation and excellence.
            </p>

          </div>

          <div className="about-card">

            <FaHospital className="about-icon" />

            <h3>Our Values</h3>

            <p>
              Compassion, Integrity, Innovation, Excellence, and Patient Safety.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;