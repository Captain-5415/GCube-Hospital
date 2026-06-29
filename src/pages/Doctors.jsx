import { useState } from "react";
import useFetch from "../hooks/useFetch";
import DoctorCard from "../components/DoctorCard";
import Loader from "../components/Loader";
import "./Doctors.css";

export default function Doctors() {
  const {
    data: doctors,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  const [search, setSearch] = useState("");

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <Loader />;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="doctors-page">
      <h1>Our Doctors</h1>

      <input
        type="text"
        placeholder="Search Doctor..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <div className="doctor-grid">
        {filteredDoctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}