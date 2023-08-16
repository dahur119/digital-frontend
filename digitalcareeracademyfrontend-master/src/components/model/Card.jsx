import React from "react";

function Card({ imageUrl, title, description, enroll, enrollLink }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{description}</p>
        <a href={enrollLink} className="card-enroll">
          <button className="enroll-button">{enroll}</button>
        </a>
      </div>
    </div>
  );
}

export default Card;
