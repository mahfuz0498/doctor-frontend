import React from "react";
import "./AllTreate.css";
import { Link } from "react-router-dom";

function AllTreate() {
  return (
    <div className="all">
      <p className="all__title1">We Care</p>
      <p className="all__title2"> For Your Health</p>
      <p className="all__description">
        We examine patients, review their medical history, diagnose illnesses or
        injuries, administer treatment and counsel patients on their health and
        well being.
      </p>
      <Link to="/contact">
        <button className="all__button">Cosnsult Doctor</button>
      </Link>
    </div>
  );
}

export default AllTreate;
