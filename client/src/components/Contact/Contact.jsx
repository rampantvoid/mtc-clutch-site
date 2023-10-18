import "./Contact.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <div className="container">
      <div className="con-wrapper">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}

export default Contact;
