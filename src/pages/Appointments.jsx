import { useEffect, useState } from "react";
import "./Appointments.css";

export default function Appointments() {

    const [appointments, setAppointments] = useState(
        JSON.parse(localStorage.getItem("appointments")) || []
    );

    const [formData, setFormData] = useState({
        patient: "",
        doctor: "",
        date: "",
        time: ""
    });

    useEffect(() => {
        localStorage.setItem(
            "appointments",
            JSON.stringify(appointments)
        );
    }, [appointments]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !formData.patient ||
            !formData.doctor ||
            !formData.date ||
            !formData.time
        ) {
            alert("Please fill all fields");
            return;
        }

        setAppointments([
            ...appointments,
            {
                id: Date.now(),
                ...formData
            }
        ]);

        setFormData({
            patient: "",
            doctor: "",
            date: "",
            time: ""
        });
    };

    const deleteAppointment = (id) => {
        setAppointments(
            appointments.filter((item) => item.id !== id)
        );
    };

    return (
        <div className="appointments-page">

            <h1>Appointment Booking</h1>

            <form onSubmit={handleSubmit} className="appointment-form">

                <input
                    type="text"
                    name="patient"
                    placeholder="Patient Name"
                    value={formData.patient}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="doctor"
                    placeholder="Doctor Name"
                    value={formData.doctor}
                    onChange={handleChange}
                />

                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                />

                <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                />

                <button>Book Appointment</button>

            </form>

            <table>

                <thead>

                    <tr>
                        <th>Patient</th>
                        <th>Doctor</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Action</th>
                    </tr>

                </thead>

                <tbody>

                    {appointments.map((appointment) => (

                        <tr key={appointment.id}>

                            <td>{appointment.patient}</td>
                            <td>{appointment.doctor}</td>
                            <td>{appointment.date}</td>
                            <td>{appointment.time}</td>

                            <td>

                                <button
                                    className="delete-btn"
                                    onClick={() =>
                                        deleteAppointment(appointment.id)
                                    }
                                >
                                    Cancel
                                </button>

                            </td>

                        </tr>

                    ))}

                    {appointments.length === 0 && (
                        <tr>
                            <td colSpan="5">
                                No Appointments Booked
                            </td>
                        </tr>
                    )}

                </tbody>

            </table>

        </div>
    );
}