/* eslint-disable react/prop-types */
const VideoItem = ({ title, duration, date, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <span>{duration}</span> <span>{date}</span>
      <p>{description}</p>
    </div>
  );
};

export default VideoItem;
