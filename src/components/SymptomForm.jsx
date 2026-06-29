import { useEffect, useState } from "react";
import diseases from "../data/diseases";

const symptomList = [
    "Fever",
    "Cough",
    "Headache",
    "Vomiting",
];

export default function SymptomForm({
    addPatient,
    updatePatient,
    editingPatient,
}) {
    const [form, setForm] = useState({
        id: null,
        name: "",
        age: "",
        gender: "Male",
        symptoms: [],
        disease: "",
        department: "",
        action: "",
    });

    useEffect(() => {
        if (editingPatient) {
            setForm(editingPatient);
        }
    }, [editingPatient]);

    const handleCheckbox = (symptom) => {
        if (form.symptoms.includes(symptom)) {
            setForm({
                ...form,
                symptoms: form.symptoms.filter((item) => item !== symptom),
            });
        } else {
            setForm({
                ...form,
                symptoms: [...form.symptoms, symptom],
            });
        }
    };

    const findDisease = () => {
        const result = diseases.find(
            (item) =>
                item.symptoms.length === form.symptoms.length &&
                item.symptoms.every((symptom) =>
                    form.symptoms.includes(symptom)
                )
        );

        if (result) {
            setForm({
                ...form,
                disease: result.disease,
                department: result.department,
                action: result.action,
            });
        } else {
            setForm({
                ...form,
                disease: "Unknown Disease",
                department: "General Medicine",
                action:
                    "Please consult a doctor for proper diagnosis.",
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.age) {
            alert("Please enter patient details.");
            return;
        }

        if (form.symptoms.length === 0) {
            alert("Please select at least one symptom.");
            return;
        }

        if (!form.disease) {
            alert("Click 'Check Disease' first.");
            return;
        }

        const patient = {
            ...form,
            id: editingPatient ? form.id : Date.now(),
        };

        if (editingPatient) {
            updatePatient(patient);
        } else {
            addPatient(patient);
        }

        setForm({
            id: null,
            name: "",
            age: "",
            gender: "Male",
            symptoms: [],
            disease: "",
            department: "",
            action: "",
        });
    };

    return (
        <form className="patient-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Patient Name"
                value={form.name}
                onChange={(e) =>
                    setForm({
                        ...form,
                        name: e.target.value,
                    })
                }
            />

            <input
                type="number"
                placeholder="Age"
                value={form.age}
                onChange={(e) =>
                    setForm({
                        ...form,
                        age: e.target.value,
                    })
                }
            />

            <select
                value={form.gender}
                onChange={(e) =>
                    setForm({
                        ...form,
                        gender: e.target.value,
                    })
                }
            >
                <option>Male</option>
                <option>Female</option>
            </select>

            <h3>Select Symptoms</h3>

            <div className="symptoms">
                {symptomList.map((symptom) => (
                    <label key={symptom}>
                        <input
                            type="checkbox"
                            checked={form.symptoms.includes(symptom)}
                            onChange={() => handleCheckbox(symptom)}
                        />
                        {symptom}
                    </label>
                ))}
            </div>

            <button
                type="button"
                onClick={findDisease}
            >
                Check Disease
            </button>

            {form.disease && (
                <div className="result">
                    <h3>Possible Disease</h3>

                    <p>
                        <strong>Disease:</strong> {form.disease}
                    </p>

                    <p>
                        <strong>Department:</strong> {form.department}
                    </p>

                    <p>
                        <strong>Recommended Action:</strong> {form.action}
                    </p>
                </div>
            )}

            <button type="submit">
                {editingPatient ? "Update Record" : "Save Record"}
            </button>
        </form>
    );
}