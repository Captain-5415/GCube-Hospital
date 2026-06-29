import { useEffect, useReducer, useState } from "react";
import SymptomForm from "../components/SymptomForm";
import patientReducer from "../reducer/patientReducer";
import "./Symptom.css";

const initialState = JSON.parse(localStorage.getItem("patients")) || [];

export default function Patients() {
  const [patients, dispatch] = useReducer(patientReducer, initialState);

  const [editingPatient, setEditingPatient] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const addPatient = (patient) => {
    dispatch({
      type: "ADD",
      payload: patient,
    });
  };

  const updatePatient = (patient) => {
    dispatch({
      type: "UPDATE",
      payload: patient,
    });

    setEditingPatient(null);
  };

  const deletePatient = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="patients-page">

      <h1>Symptom Checker</h1>

      <p>
        Select symptoms to identify the possible disease and save the patient's
        health record.
      </p>

      <SymptomForm
        addPatient={addPatient}
        updatePatient={updatePatient}
        editingPatient={editingPatient}
      />

      <input
        className="search-box"
        type="text"
        placeholder="Search Patient..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>

        <thead>

          <tr>
            <th>Name</th>
            <th>Disease</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {filteredPatients.length > 0 ? (

            filteredPatients.map((patient) => (

              <tr key={patient.id}>

                <td>{patient.name}</td>

                <td>{patient.disease}</td>

                <td>{patient.department}</td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() => setEditingPatient(patient)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deletePatient(patient.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

          ) : (

            <tr>
              <td colSpan="4">No Records Found</td>
            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
}