import { FaBrain } from "react-icons/fa6";
import "./Department.css";

export default function Neurology() {
  return (
    <div className="department">

      <h2>
        <FaBrain className="department-title-icon" />
        Neurology Department
      </h2>

      <p>
        Expert treatment for disorders affecting the brain, spinal cord,
        nerves, and muscles.
      </p>

      <div className="department-content">

        <div className="box">
          <h3>Services</h3>
          <ul>
            <li>Stroke Care</li>
            <li>Brain MRI Review</li>
            <li>Epilepsy Treatment</li>
            <li>Parkinson's Care</li>
            <li>Neurosurgery Consultation</li>
          </ul>
        </div>

        <div className="box">
          <h3>Doctors</h3>
          <ul>
            <li>Dr. Sneha Rao</li>
            <li>Dr. Ajay Kumar</li>
            <li>Dr. Meera Patel</li>
          </ul>
        </div>

      </div>

    </div>
  );
}