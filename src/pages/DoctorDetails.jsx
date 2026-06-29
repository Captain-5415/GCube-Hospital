import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import "./DoctorDetails.css";

export default function DoctorDetails() {
  const { id } = useParams();

  const {
    data: doctor,
    loading,
    error,
  } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (loading) return <Loader />;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="doctor-details">

      <div className="profile-card">

        <img
          src={`https://i.pravatar.cc/250?img=${10+doctor.id}`}
          alt={doctor.name}
        />

        <h2>{doctor.name}</h2>

        <p><strong>Specialization:</strong> Cardiologist</p>

        <p><strong>Email:</strong> {doctor.email}</p>

        <p><strong>Phone:</strong> {doctor.phone}</p>

        <p><strong>Website:</strong> {doctor.website}</p>

        <p><strong>Hospital:</strong> {doctor.company?.name}</p>

        <p>
          <strong>Address:</strong><br />
          {doctor.address?.street}, {doctor.address?.city}
        </p>

        <Link to="/doctors" className="back-btn">
          Back to Doctors
        </Link>

      </div>

    </div>
  );
}