import { useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaLocationDot, FaPaperPlane, FaPhone } from "react-icons/fa6";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.subject ||
      !form.message
    ) {
      alert("Please fill all fields");
      return;
    }

    alert("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="contact-page">

      <div className="contact-info">

        <h2>Get In Touch</h2>

        <p>
          We'd love to hear from you. Feel free to contact us anytime.
        </p>

        <div className="info">
          <FaLocationDot className="contact-icon" />
          <div>
            <h4>Address</h4>
            <p>My Area Street, Vijayawada, AP</p>
          </div>
        </div>

        <div className="info">
          <FaPhone className="contact-icon" />
          <div>
            <h4>Phone</h4>
            <p>+91 9052520552</p>
          </div>
        </div>

        <div className="info">
          <FaEnvelope className="contact-icon" />
          <div>
            <h4>Email</h4>
            <p>gcubehospitals@gch.com</p>
          </div>
        </div>

      </div>

      <form className="contact-form" onSubmit={handleSubmit}>

        <h2>Contact Form</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
        />

        <textarea
          rows="6"
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
        />

        <button>
          <FaPaperPlane />
          <span>Send Message</span>
        </button>

      </form>

    </div>
  );
}