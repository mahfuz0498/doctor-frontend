import React from "react";
import "./Doctors.css";
import Doctor from "./Doctor";

function Doctors() {
  return (
    <div className="doctors">
      <div className="doctors__title">Doctors</div>
      <div className="doctors__cards">
        <Doctor
          image="https://s3-eu-west-1.amazonaws.com/intercare-web-public/wysiwyg-uploads%2F1569586526901-doctor.jpg"
          name="Dr. Suhail Azizi"
          age="+91-9304458309"
          degree="M.B.B.S, M.D, Medicine"
          tag="GOLD MEDALIST"
          experience="Ex. Consultant-P.G.I. Lucknow"
        />
        <Doctor
          image="https://s3-eu-west-1.amazonaws.com/intercare-web-public/wysiwyg-uploads%2F1569586526901-doctor.jpg"
          name="Dr. Suhail Azizi"
          age="+91-9304458309"
          degree="M.B.B.S, M.D, Medicine"
          tag="GOLD MEDALIST"
          experience="Ex. Consultant-P.G.I. Lucknow"
        />
      </div>
    </div>
  );
}

export default Doctors;
