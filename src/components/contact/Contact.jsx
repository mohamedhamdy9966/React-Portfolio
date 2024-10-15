import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "45b578fb-f6e7-4f40-b793-4bfb62b335f2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h2>Get in touch</h2>
        <img src={theme_pattern} alt="theme-pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h3>let&apos;s talk</h3>
          <p>
            iam currently available to take on new projects , so feel free to
            contact me
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail-icon" />{" "}
              <p>mohamedhamdymansour2@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call-icon" /> <p>+201207226094</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location-icon" />{" "}
              <p>Cairo, Egypt</p>
            </div>
          </div>
        </div>
        <form className="contact-right" onSubmit={onSubmit}>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter Your Email" name="email" />
          <label htmlFor="">Write Your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
