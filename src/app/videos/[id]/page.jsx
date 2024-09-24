import { fetchVideo } from "@/api/fetch-videos";
import { parseISO8601Duration } from "@/lib/utils";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.id;

  // fetch data
  const video = await fetchVideo(id);

  return {
    title: video.items[0].snippet.title,
  };
}

const VideoDetail = async ({ params }) => {
  const video = await fetchVideo(params.id);
  console.log(video.items[0].contentDetails.duration);

  const videoSrc = `https://www.youtube.com/embed/${params.id}`;
  const duration = parseISO8601Duration(video.items[0].contentDetails.duration);
  console.log(duration);

  return (
    <div className="px-10 pb-10 flex flex-col gap-2">
      <iframe className="w-full h-[35rem]" src={videoSrc}></iframe>
      <h1 className="text-xl font-bold mt-3">{video.items[0].snippet.title}</h1>
      <p>
        {duration.hours} : {duration.minutes} : {duration.seconds}
      </p>
      <p className="text-sm dark:text-gray-200">
        {video.items[0].snippet.description}
      </p>
      <div className="flex justify-start  flex-wrap mt-4">
        {video.items[0].snippet.tags.map((tag, idx) => (
          <p className="text-[12px] dark:text-gray-400 me-4" key={idx}>
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default VideoDetail;
