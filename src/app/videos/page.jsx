// import { fetchVideos } from "@/api/fetch-videos";
import SearchInput from "@/components/search-input";
import VideosList from "@/components/videos/videos-list";
import { fetchVideos } from "@/api/fetch-videos";

const Videos = async ({ searchParams }) => {
  const videos = await fetchVideos(searchParams.title);

  return (
    <section className="px-10">
      <SearchInput />
      <VideosList videos={videos} />
    </section>
  );
};

export default Videos;
