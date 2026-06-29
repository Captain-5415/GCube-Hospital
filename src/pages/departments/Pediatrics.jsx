import { FaChild } from "react-icons/fa6";
import "./Department.css";

export default function Pediatrics() {
  return (
    <div className="department">

      <h2>
        <FaChild className="department-title-icon" />
        Pediatrics Department
      </h2>

      <p>
        We provide complete healthcare for newborns, infants, children,
        and adolescents.
      </p>

      <div className="department-content">

        <div className="box">
          <h3>Services</h3>
          <ul>
            <li>Vaccination</li>
            <li>Growth Monitoring</li>
            <li>Child Nutrition</li>
            <li>Newborn Care</li>
            <li>General Pediatrics</li>
          </ul>
        </div>

        <div className="box">
          <h3>Doctors</h3>
          <ul>
            <li>Dr. Kavya Reddy</li>
            <li>Dr. Rohit Singh</li>
            <li>Dr. Anitha Rao</li>
          </ul>
        </div>

      </div>

    </div>
  );
}