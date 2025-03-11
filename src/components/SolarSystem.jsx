import React from "react";

const SolarSystem = () => {
  // You can replace these URLs with your own planet images
  const planetUrls = {
    sun: "/src/assets/sun.png",
    mercury: "/src/assets/mercury.png",
    venus: "/src/assets/venus.png",
    earth: "/src/assets/earth.png",
    moon: "/src/assets/moon.png",
    mars: "/src/assets/mars.png",
    jupiter: "/src/assets/jupiter.png",
    saturn: "/src/assets/saturn.png",
    uranus: "/src/assets/uranus.png",
    neptune: "/src/assets/neptune.png",
    pluto: "/src/assets/pluto.png",
  };

  return (
    <div className="container">
      <div className="sun">
        <img src={planetUrls.sun} alt="Sun" />
      </div>
      <div className="mercury"></div>
      <div className="venus"></div>
      <div className="earth">
        <div className="moon"></div>
      </div>
      <div className="mars"></div>
      <div className="jupiter"></div>
      <div className="saturn"></div>
      <div className="uranus"></div>
      <div className="neptune"></div>
      <div className="pluto"></div>
    </div>
  );
};

export default SolarSystem;
