import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/me.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h2>About Me</h2>
        <img src={theme_pattern} alt="theme" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="profile-img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Front-end Developer With over a 2 Years
              experience
            </p>
            <p>
              My passion for frontend development is not only but for full stack
              apps
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "95%" }} />{" "}
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />{" "}
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />{" "}
            </div>
            <div className="about-skill">
              <p>Bootstrap</p>
              <hr style={{ width: "80%" }} />{" "}
            </div>
            <div className="about-skill">
              <p>Tailwind</p>
              <hr style={{ width: "60%" }} />{" "}
            </div>
            <div className="about-skill">
              <p>Express JS</p>
              <hr style={{ width: "60%" }} />{" "}
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "50%" }} />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h3>2+</h3>
          <p>Years Of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h3>20+</h3>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h3>9+</h3>
          <p>Happy Clients</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
