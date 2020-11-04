import React from 'react';

const Fade = (props) => {
  return (
    <div className="component">
      <h1>FADE</h1>
      <div className="fade-container">
        <img
          src="https://i.pinimg.com/564x/25/17/19/251719ab42c77e6948bc75ec3b031880.jpg"
          className="fade-image"
          data-aos="fade-right"
          data-aos-duration="6000"
        />
        <div className="fade-info">
          <h2
            className="fade-text"
            data-aos="fade-left"
            data-aos-duration="6000"
          >
            Flowers
          </h2>
          <p
            className="fade-text"
            data-aos="fade-left"
            data-aos-duration="6000"
          >
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
