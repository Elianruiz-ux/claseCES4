import VideoItem from "./VideoItem";
import videoListCss from "./VideoList.module.css";

/* eslint-disable react/prop-types */
const VideoList = ({ title, playList }) => {
  return (
    <div className={`${videoListCss.container}`}>
      <h1>{title}</h1>
      {playList.map((play, index) => (
        <VideoItem key={index} {...play} />
      ))}
    </div>
  );
};

export default VideoList;
