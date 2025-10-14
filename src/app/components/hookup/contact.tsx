"use client";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";
import "./contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      console.log("Sending form data:", formData);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status);

      const data = await response.json();
      console.log("Response data:", data);

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Feel free to reach out to me through any of these platforms
        </p>

        <div className="contact-links">
          <a
            href="mailto:ecniv2001@gmail.com"
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <h3>Email</h3>
            <p>ecniv2001@gmail.com</p>
          </a>

          <a
            href="https://github.com/Beanszsz"
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-icon">
              <FaGithub />
            </div>
            <h3>GitHub</h3>
            <p>@Beanszsz</p>
          </a>

          <a
            href="https://www.linkedin.com/in/vince-favorito-3364322b6/"
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-icon">
              <FaLinkedin />
            </div>
            <h3>LinkedIn</h3>
            <p>Vince Lennard</p>
          </a>

          <a
            href="/Favorito_Resume.pdf"
            className="contact-card"
            download="Favorito_Resume.pdf"
          >
            <div className="contact-icon">
              <FaFileDownload />
            </div>
            <h3>My Resume</h3>
            <p>Download PDF</p>
          </a>
        </div>

        <div className="contact-form-container">
          <h2 className="form-title">Send Me a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                rows={5}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-button"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status.message && (
            <div className={`status-message ${status.type}`}>
              {status.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
