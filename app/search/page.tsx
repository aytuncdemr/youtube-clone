"use client";

import FeedBar from "@/components/FeedBar";
import { useSearchParams } from "next/navigation";
import SearchVideos from "@/components/SearchVideos";
import { useState, useEffect} from "react";
import fetchFromAPI from "@/utils/fetchFromAPI";


export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const [videos, setVideos] = useState<Video[] | null>(null);

  useEffect(() => {
    (async function () {
      const videosData: any[] = await fetchFromAPI(
        `search?part=snippet&q=${query}`
      );
      setVideos(
        // @ts-ignore
        videosData.items.map((video: any) => {
          return {
            id: video.id.videoId,
            publishedAt: video.snippet.publishedAt,
            channelId: video.snippet.channelId,
            channelName: video.channelTitle,
            title: video.snippet.title,
            thumbnail: video.snippet.thumbnails.medium.url,
          };
        })
      );
    })();
  }, [query]);

  return (
    <main className="grid grid-cols-[10fr,90fr] min-h-screen bg-black py-8">
      <FeedBar></FeedBar>
      {query && videos && <SearchVideos videos={videos} searchQuery={query}></SearchVideos>}
    </main>
  );
}
