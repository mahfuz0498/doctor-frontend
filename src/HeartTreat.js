import React from "react";
import "./HeartTreat.css";
import { Link } from "react-router-dom";

function HeartTreat() {
  return (
    <div className="heart">
      <p className="heart__title">
        TREAT <span className="heart__middle">HEART</span> DISEASE
      </p>
      <p className="heart__description">
        Lower your risk of heart disease by eating a low-fat and low-sodium
        diet, getting at least 30 minutes of moderate exercise on most days of
        the week, quitting smoking, and limiting alcohol intake
      </p>
      <Link to="/contact">
        <button className="heart__button">Consult Doctors</button>
      </Link>
    </div>
  );
}

export default HeartTreat;
