import React from 'react';

const Slide = (props) => {
  return (
    <div className="component">
      <h1>SLIDE</h1>
      <div className="slide-pics">
        <div className="slide-box">
          <img
            className="slide-img"
            src="https://i.pinimg.com/564x/5e/8b/d2/5e8bd23c2dfbabd892b1524261f440db.jpg"
            data-aos="slide-left"
            data-aos-duration="6000"
            data-aos-easing="ease-in-out"
          />
          <img
            className="slide-img"
            src="https://designcrushblog.com/wp-content/uploads/2018/02/George-Greaves-2-Design-Crush.jpg"
            data-aos="slide-left"
            data-aos-duration="6000"
            data-aos-easing="ease-in-out"
          />
          <img
            className="slide-img"
            src="https://i.pinimg.com/564x/ce/2d/f9/ce2df9794b4f04ce299e1e8103fa48a3.jpg"
            data-aos="slide-left"
            data-aos-duration="6000"
            data-aos-easing="ease-in-out"
          />
          <img
            className="slide-img"
            src="https://designcrushblog.com/wp-content/uploads/2018/02/George-Greaves-6-Design-Crush.jpg"
            data-aos="slide-left"
            data-aos-duration="6000"
            data-aos-easing="ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide;
