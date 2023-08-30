/* eslint-disable react/prop-types */
const VideoList = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default VideoList;
