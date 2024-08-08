import VideoItem from "./videos-item";

const VideosList = ({ videos }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-2 mt-10">
        {videos.items.map((video, idx) => (
          <div key={idx}>
            <VideoItem video={video}></VideoItem>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideosList;
