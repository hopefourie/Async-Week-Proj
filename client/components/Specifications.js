import React from 'react';

const Specifications = (props) => {
  return (
    <div className="component">
      <h1>SPECIFICATIONS</h1>
      <div className="spec-pics">
        <div className="spec-box">
          <img
            className="flip-img"
            src="https://i.pinimg.com/564x/5e/8b/d2/5e8bd23c2dfbabd892b1524261f440db.jpg"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
          />
          <p>EASE</p>
        </div>
        <div className="spec-box">
          <img
            className="flip-img"
            src="https://i.pinimg.com/564x/5e/8b/d2/5e8bd23c2dfbabd892b1524261f440db.jpg"
            data-aos="fade-right"
            data-aos-duration="3000"
          />
          <p>DURATION</p>
        </div>
        <div className="spec-box">
          <img
            className="flip-img"
            src="https://i.pinimg.com/564x/5e/8b/d2/5e8bd23c2dfbabd892b1524261f440db.jpg"
            data-aos="fade-right"
            data-aos-delay="3000"
          />
          <p>DELAY</p>
        </div>
        <div className="spec-box">
          <img
            className="flip-img"
            src="https://i.pinimg.com/564x/5e/8b/d2/5e8bd23c2dfbabd892b1524261f440db.jpg"
            data-aos="fade-right"
            data-aos-once="true"
          />
          <p>ONCE</p>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
