import { FaBone } from "react-icons/fa6";
import "./Department.css";

export default function Orthopedic() {
    return (
        <div className="department">

            <h2>
                <FaBone className="department-title-icon" />
                Orthopedic Department
            </h2>

            <p>
                Comprehensive care for bones, joints, muscles, ligaments, tendons,
                and sports-related injuries using advanced orthopedic treatments.
            </p>

            <div className="department-content">

                <div className="box">
                    <h3>Services</h3>
                    <ul>
                        <li>Joint Replacement Surgery</li>
                        <li>Fracture & Trauma Care</li>
                        <li>Sports Injury Treatment</li>
                        <li>Arthroscopy</li>
                        <li>Spine & Back Pain Management</li>
                    </ul>
                </div>

                <div className="box">
                    <h3>Doctors</h3>
                    <ul>
                        <li>Dr. Rajesh Kumar</li>
                        <li>Dr. Priya Sharma</li>
                        <li>Dr. Arjun Reddy</li>
                    </ul>
                </div>

            </div>

        </div>
    );
}