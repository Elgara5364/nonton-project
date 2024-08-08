import { apiKey } from "@/lib/constant";

export const fetchVideos = async (title) => {
  let url = new URL(
    `https://www.googleapis.com/youtube/v3/search?q=${
      title === undefined ? "beginagainkorea" : title
    }&key=${apiKey}`
  );

  url.searchParams.set("maxResults", "20");
  url.searchParams.set("part", "snippet");
  url.searchParams.set("type", "video");

  try {
    const videos = await fetch(url);
    return videos.json();
  } catch (error) {
    throw new error();
  }
};

export const fetchVideo = async (id) => {
  let url = new URL(
    `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${apiKey}`
  );

  url.searchParams.set("part", "snippet");
  url.searchParams.set("type", "video");

  try {
    const video = await fetch(url);
    return video.json();
  } catch (error) {
    throw new error();
  }
};
