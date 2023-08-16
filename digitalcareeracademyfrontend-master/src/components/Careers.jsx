import React from "react";
import period from "../assets/images/period.jpg";

function Careers() {
  return (
    <div>
      <div className="container-career">
        <div className="career-text">
          <p className="para-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur, maxime culpa! Veritatis placeat maxime ab! Velit
            inventore dolorem vero molestiae aspernatur quidem, enim harum ex.
            Nobis unde aliquid doloremque ex! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Facere, illo sed ipsa laudantium
            sapiente eum maxime accusantium numquam enim illum aspernatur
            reprehenderit tenetur molestiae. Minus eos repudiandae ipsa rem
            omnis?
          </p>
        </div>
        <div className="career-image">
          <img src={period} alt="Career Image" className="period-image" />
        </div>
      </div>
    </div>
  );
}

export default Careers;
