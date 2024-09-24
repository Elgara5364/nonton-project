import VideoItem from "./videos-item";

const VideosList = ({ videos }) => {
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 mt-10">
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
