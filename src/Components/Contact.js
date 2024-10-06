import React, { useState } from "react";
const Contact = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xkgnwnlr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Thank you for contacting us!");
        setEmail(""); // Clear the input field after successful submission
      } else {
        setMessage("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Error submitting form. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="contact-page-wrapper" id="contactId">
      <h2
        className="primary-heading-contact"
        style={{ textAlign: "center", justifyContent: "center" }}
      >
        Become a Part of Our Tribe
      </h2>
      <p
        className="primary-text"
        style={{ textAlign: "center", justifyContent: "center" }}
      >
        Join us in our mission to empower African developers and enhance your
        coding skills through collaboration and shared knowledge. Sign up today!
      </p>
      <form className="contact-form-container" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="yourmail@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="secondary-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Contact;
