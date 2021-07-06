import React from "react";
import "./EmergencyTreate.css";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import { Link } from "react-router-dom";

function EmergencyTreate() {
  return (
    <div className="emergencyTreate">
      <p className="emergency__line">
        <LocalHospitalIcon className="emergency__logo" />{" "}
        <span className="emergency__time">
          24<span className="emergency__x">X</span> 7
        </span>{" "}
        Available
      </p>
      <p className="emergency__des"> Call +91-8002024290</p>
      <div className="emergency__liner"></div>
      <Link to="/contact">
        <button className="emergency__button">Get Contact</button>
      </Link>
    </div>
  );
}

export default EmergencyTreate;
