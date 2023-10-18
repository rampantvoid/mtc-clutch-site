import Input from "./Input";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="heading-container">
        <h1 className="heading">contact us</h1>
        <p>
          Didn't get the information you're looking for? Get in touch with us.
          <br />
          We'll get back to you within 24 hours, or scroll down for more ways to
          get in touch.
        </p>
      </div>

      <div className="form-section">
        <h3>Get In Touch</h3>

        <form data-aos="fade-up">
          <div>
            <label htmlFor="name">Full Name</label>
            <Input
              placeholder="Your full name"
              type="text"
              name="name"
              autoComplete="off"
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Input
              placeholder="test@sample.com"
              type="email"
              name="email"
              autoComplete="off"
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            {/* <Input
              placeholder="Enter your message here"
              type="text"
              name="message"
              className="form-input"
            /> */}

            <textarea
              name="message"
              cols="30"
              rows="7"
              placeholder="Enter your message here"
              className="form-input"
              autoComplete="off"
            />
          </div>

          <button className="btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
