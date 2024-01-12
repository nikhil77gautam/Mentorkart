import React, { useState } from "react";
import axios from "axios";

import "./ContactForm.css";


const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await axios.post("http://localhost:5000/mail/send-mail", {
        receiver: email,
        subject: "Contact Form Submission",
        message,
      });

      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An error occurred while submitting the form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container">
       <header className="container">
        <h1>Contact Form</h1>
        
      </header>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email">Email address </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
       

        <div className="mb-2">
          <label htmlFor="subject"> Subject </label>
          <textarea
            id="Subject"
            className="form-control"
            placeholder="Your Subject"
            rows="2"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-2">
          <label htmlFor="message"> Message </label>
          <textarea
            id="message"
            className="form-control"
            placeholder="Type your message here"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit"}
        </button>
        {error && <p className="text-danger">{error}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
