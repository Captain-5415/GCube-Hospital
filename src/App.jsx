import { Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import Symptom from "./pages/Symptom";
import Contact from "./pages/Contact";
import Appointments from "./pages/Appointments";

import Services from "./pages/Services";
import Cardiology from "./pages/departments/Cardiology";
import Neurology from "./pages/departments/Neurology";
import Pediatrics from "./pages/departments/Pediatrics";

import DoctorDetails from "./pages/DoctorDetails";
import NotFound from "./pages/NotFound";
import Orthopedic from "./pages/departments/Orthopedic";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />

        <div className="content">
          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/doctors" element={<Doctors />} />

            <Route path="/doctors/:id" element={<DoctorDetails />} />

            <Route path="/symptom" element={<Symptom />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/appointments" element={<Appointments />} />

            <Route path="/services" element={<Services />}>
              <Route path="cardiology" element={<Cardiology />} />
              <Route path="neurology" element={<Neurology />} />
              <Route path="pediatrics" element={<Pediatrics />} />
              <Route path="orthopedic" element={<Orthopedic />} />
            </Route>

            <Route path="*" element={<NotFound />} />

          </Routes>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;