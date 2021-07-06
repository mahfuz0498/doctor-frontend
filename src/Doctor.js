import React from "react";
import "./Doctor.css";

function Doctor({ name, age, tag, experience, degree, image }) {
  return (
    <div className="doctor">
      <div className="doctor__top">
        <img src={image} alt="" className="doctor__logo" />
      </div>
      <div className="doctor__bottom">
        <p className="doctor__name">{name}</p>
        <div className="doctor__content">
          <p className="doctor__degree">{degree}</p>
          <p className="doctor__experience">{experience}</p>
          <p className="doctor__tag">{tag}</p>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
// Dr. Suhail Azizi
