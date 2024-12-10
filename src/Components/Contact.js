import React, { useState } from "react";
import emailjs from '@emailjs/browser';

// Replace the fetch call with EmailJS
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY); 

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     await fetch("https://formspree.io/f/xgveldpk", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, name }),
  //     });

  //     const response = await fetch("/api/send-welcome-email", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, name, subject: "Welcome to DotTribe Africa!" }),
  //     });

  //     if (response.ok) {
  //       setMessage("Thanks for joining the Tribe, check your email and await our launch 🚀");
  //       setEmail("");
  //       setName("");
  //     } else {
  //       setMessage("Oops! Something went wrong. Please try again.");
  //     }
  //   } catch (error) {
  //     setMessage("Error submitting form. Please try again later.");
  //   }

  //   setIsSubmitting(false);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null)

    try {
      // First formspree submission remains unchanged
      await fetch("https://formspree.io/f/xgveldpk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name }),
      });


      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          to_email: email,
          to_name: name,
          reply_to: "egwunwokekc@gmail.com",
          subject: "Welcome to DotTribe!"
        }
      );

      setMessage("Thanks for joining the Tribe, check your inbox or spam folder and await our launch 🚀");
      setEmail("");
      setName("");
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
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          name="name"
        />
        <input
          type="email"
          name="email"
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
