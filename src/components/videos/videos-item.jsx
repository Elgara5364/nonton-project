import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const VideoItem = async ({ video }) => {
  return (
    <Card className="h-fit">
      <CardContent className="p-0">
        <Link href={`/videos/${video.id.videoId}`}>
          <Image
            src={video.snippet.thumbnails.medium.url}
            width={500}
            height={500}
            alt=""
          />
        </Link>
        <CardHeader className="pb-2 space-y-0 px-5">
          <Link
            href={`/videos/${video.id.videoId}`}
            className="h-fit text-lg line-clamp-1 font-bold">
            {video.snippet.title}
          </Link>
          <h3 className="dark:text-gray-200 font-medium line-clamp-1">
            {video.snippet.channelTitle}
          </h3>
        </CardHeader>
      </CardContent>
      <CardFooter className="px-5">
        <p className="h-[40px] line-clamp-2 dark:text-gray-400 text-sm ">
          {video.snippet.description}
        </p>
      </CardFooter>
    </Card>
  );
};

export default VideoItem;
