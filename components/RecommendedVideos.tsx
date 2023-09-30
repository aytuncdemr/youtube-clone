// @ts-nocheck

import fetchFromAPI from "@/utils/fetchFromAPI";
import Video from "./Video";

export default async function RecommendedVideos({ id }: { id: string }) {
  const recommendedVideos = await fetchFromAPI(
    `search?part=snippet&relatedToVideoId=${id}`
  );

  const videos: Video[] = [];

  console.log(recommendedVideos);

  for (const recommendedVideo of recommendedVideos.items) {
    videos.push({
      id: recommendedVideo.id.videoId,
      publishedAt: recommendedVideo.snippet.publishedAt,
      channelId: recommendedVideo.snippet.channelId,
      channelName: recommendedVideo.channelTitle,
      title: recommendedVideo.snippet.title,
      thumbnail: recommendedVideo?.snippet?.thumbnails?.medium?.url,
    });
  }

  return (
    <aside className="recomended-videos-aside px-4">
      <header className="recommended-videos-top-text mb-12">
        <h2 className="text-center text-fontsemibold text-white text-3xl">
          Similar Videos
        </h2>
      </header>

      <article className="recommended-videos">
        <ul>
          {videos.map((video: Video) => {
            return (
              <li key={video.id}>
                <Video video={video}></Video>
              </li>
            );
          })}
        </ul>
      </article>
    </aside>
  );
}
