import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Welcome to MedVantage Hospital, a premier medical facility dedicated to delivering outstanding healthcare services. At MedVantage, our priority is the well-being of our patients, supported by a team of skilled medical professionals and the latest medical technologies. We offer a comprehensive range of services, featuring specialized departments, advanced treatments, and personalized care plans to ensure every patient receives top-tier medical attention. Committed to excellence and compassion, MedVantage Hospital serves as a beacon of hope and healing for the community.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;