import { Link } from "react-router-dom";
import "./DoctorCard.css";

export default function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card">
      <img
        src={`https://i.pravatar.cc/250?img=${10+doctor.id}`}
        alt={doctor.name}
      />

      <h3>{doctor.name}</h3>

      <p>
        <strong>Specialization:</strong> Cardiologist
      </p>

      <p>
        <strong>Email:</strong> {doctor.email}
      </p>

      <p>
        <strong>Phone:</strong> {doctor.phone}
      </p>

      <Link to={`/doctors/${doctor.id}`} className="btn">
        View Profile
      </Link>
    </div>
  );
}