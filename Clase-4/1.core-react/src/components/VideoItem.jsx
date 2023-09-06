import videoItemCss from "./VideoItem.module.css";
import Views from "./Views";

/* eslint-disable react/prop-types */

const VideoItem = ({ title, duration, date, description }) => {
  return (
    <div className={`${videoItemCss.container}`}>
      <h2>{title}</h2>
      <span>{duration}</span> <span>{date}</span>
      <p>{description}</p>
      <Views />
    </div>
  );
};

export default VideoItem;
