import "./Main.css";
import profile_img from "../../assets/me.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Main = () => {
  return (
    <div className="main" id="home">
      <img src={profile_img} alt="profile-img" className="main-img"/>
      <h1>
        I am <span>Mohamed Hamdy</span>, Front-End Developer based in Egypt
      </h1>
      <p>Iam Front-end Developer based in Egypt with 2 years experience</p>
      <div className="main-action">
        <div className="main-connect"><AnchorLink className="anchor" offset={50} href="#contact">Connect with Me</AnchorLink></div>
        <div className="main-resume"><a href="/Mohamed-Hamdy-Front-End-Developer-Resume.pdf" className="resume-link">My Resume</a></div>
      </div>
    </div>
  );
};

export default Main;
