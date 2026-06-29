import { FaHeartPulse } from "react-icons/fa6";
import "./Department.css";

export default function Cardiology() {
  return (
    <div className="department">

      <h2>
        <FaHeartPulse className="department-title-icon" />
        Cardiology Department
      </h2>

      <p>
        Our Cardiology Department provides complete diagnosis and treatment
        for heart-related diseases using modern medical equipment.
      </p>

      <div className="department-content">

        <div className="box">
          <h3>Services</h3>
          <ul>
            <li>ECG</li>
            <li>2D Echo</li>
            <li>Angiography</li>
            <li>Heart Surgery Consultation</li>
            <li>Cardiac Rehabilitation</li>
          </ul>
        </div>

        <div className="box">
          <h3>Doctors</h3>
          <ul>
            <li>Dr. Rajesh Kumar</li>
            <li>Dr. Priya Sharma</li>
            <li>Dr. Arun Reddy</li>
          </ul>
        </div>

      </div>

    </div>
  );
}