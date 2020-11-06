import React from 'react';

const Fade = (props) => {
  return (
    <div className="component">
      <h1>FADE</h1>
      <div className="fade-container">
        <img
          src="https://i.pinimg.com/564x/5e/8b/d2/5e8bd23c2dfbabd892b1524261f440db.jpg"
          className="fade-image"
          data-aos="fade-right"
          data-aos-id="fade-img"
        />
        <div className="fade-info">
          <h2 className="fade-text" data-aos="fade-left">
            Lorem Ipsum
          </h2>
          <p className="fade-text" data-aos="fade-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fade;
