import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/vector3.webp";

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
              <hr id="html"/>
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr id="react"/>
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr id="javascript"/>
            </div>
            <div className="about-skill">
              <p>Bootstrap</p>
              <hr id="bootstrap"/>
            </div>
            <div className="about-skill">
              <p>Tailwind</p>
              <hr id="tailwind"/>
            </div>
            <div className="about-skill">
              <p>Typescript</p>
              <hr id="typescript"/>
            </div>
            <div className="about-skill">
              <p>Next JS</p>
              <hr id="next"/>
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
