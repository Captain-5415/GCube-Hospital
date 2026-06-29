import { useEffect, useState } from "react";

export default function PatientForm({
  addPatient,
  updatePatient,
  editingPatient,
}) {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    disease: "",
  });

  useEffect(() => {
    if (editingPatient) {
      setPatient(editingPatient);
    }
  }, [editingPatient]);

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !patient.name ||
      !patient.age ||
      !patient.gender ||
      !patient.disease
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editingPatient) {
      updatePatient(patient);
    } else {
      addPatient({
        ...patient,
        id: Date.now(),
      });
    }

    setPatient({
      name: "",
      age: "",
      gender: "",
      disease: "",
    });
  };

  return (
    <form className="patient-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Patient Name"
        value={patient.name}
        onChange={handleChange}
      />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={patient.age}
        onChange={handleChange}
      />

      <select
        name="gender"
        value={patient.gender}
        onChange={handleChange}
      >
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      <input
        type="text"
        name="disease"
        placeholder="Disease"
        value={patient.disease}
        onChange={handleChange}
      />

      <button type="submit">
        {editingPatient ? "Update Patient" : "Add Patient"}
      </button>
    </form>
  );
}