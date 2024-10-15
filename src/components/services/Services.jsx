import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="services-title">
        <h2>My Services</h2>
        <img src={theme_pattern} alt="My-services" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h5>{service.s_no}</h5>
              <h4>{service.s_name}</h4>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow_icon} alt="arrow-icon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
