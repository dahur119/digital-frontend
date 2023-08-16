import React from "react";
import { BsTelegram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { GrChatOption } from "react-icons/gr";
import { GrCircleQuestion } from "react-icons/gr";

function Hero() {
  return (
    <div className="container">
      <div className="logos">
        <div className="enquiry">
          <GrCircleQuestion className="icon" />
          <p>Enquiry</p>
        </div>
        <div className="whatsapp">
          <BsWhatsapp className="icon" />
          <p>Whatsapp</p>
        </div>
        <div className="telegram">
          <BsTelegram className="icon" />
          <p>Telegram</p>
        </div>
        <div className="call">
          <GrChatOption className="icon" />
          <p>Book a call </p>
        </div>
      </div>
      <div className="center">
        <p>Courses</p>
      </div>
    </div>
  );
}

export default Hero;
