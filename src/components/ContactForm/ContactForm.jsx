import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.scss";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // from EmailJS dashboard
        "YOUR_TEMPLATE_ID", // from EmailJS dashboard
        form.current,
        "YOUR_PUBLIC_KEY" // from EmailJS dashboard
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <h1 className="contact-form__title">Get a Free Quote Today!</h1>
      <div className="contact-form__row">
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          required
        />
        <input type="text" name="last_name" placeholder="Last Name" required />
      </div>
      <input type="email" name="email" placeholder="Email" required />
      <input type="phone" name="phone" placeholder="Phone" required />
      <input type="text" name="subject" placeholder="Subject" required />
      <textarea
        name="message"
        rows="6"
        placeholder="Your message..."
        required
      />
      <button type="submit" className="contact-form__submit">
        Send Message
      </button>
    </form>
  );
}
