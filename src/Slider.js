import React from "react";
import { Fade } from "react-slideshow-image";
import "./Slider.css";
import HeartTreat from "./HeartTreat";
import AllTreate from "./AllTreate";
import EmergencyTreate from "./EmergencyTreate";
const fadeImages = [
  "https://cdn.pixabay.com/photo/2016/09/16/19/19/icon-1674909_960_720.png",
  "https://cdn.pixabay.com/photo/2018/02/28/18/02/woman-pointing-3188559_640.jpg",
  "https://cdn.pixabay.com/photo/2016/12/05/19/43/pill-1884775_960_720.jpg"
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade className="main-container">
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} />
            <div>
              <HeartTreat />
            </div>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
            <div>
              <AllTreate />
            </div>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
            <div>
              <EmergencyTreate />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};
export default Slideshow;
